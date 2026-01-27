import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fallback to mock if env vars are missing or invalid (for build/demo purposes)
const isMock = !supabaseUrl || !supabaseAnonKey || !supabaseUrl.startsWith("http");

export const supabase = isMock
    ? null
    : createClient(supabaseUrl!, supabaseAnonKey!);

// Mock Data Store (In-memory for demo, resets on reload)
let mockNotifications = [
    { id: "1", title: "Admission Notification 2025-26", link: "#", date: "2025-01-15" },
    { id: "2", title: "Exam Schedule for 5th Semester", link: "#", date: "2025-01-10" },
    { id: "3", title: "Guest Lecture by Justice Rao", link: "#", date: "2024-12-28" },
];

let mockResults = [
    { id: "1", title: "B.A. LL.B (Hons) 1st Semester Results", link: "#", date: "2025-02-01" },
    { id: "2", title: "LL.M Entrance Exam Results", link: "#", date: "2025-01-20" },
];

let mockGallery = [
    { id: "1", url: "https://dsnlu.ac.in/storage/2023/09/DSC_0028.jpg", caption: "Convocation 2024" },
    { id: "2", url: "https://dsnlu.ac.in/storage/2023/09/DSC_0035.jpg", caption: "Sports Meet" },
    { id: "3", url: "https://dsnlu.ac.in/storage/2023/09/DSC_0042.jpg", caption: "Cultural Fest" },
];

// Helper to persist data
const saveToStorage = (key: string, data: any[]) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(data));
    }
};

const getFromStorage = (key: string, defaultData: any[]) => {
    if (typeof window !== "undefined") {
        const stored = localStorage.getItem(key);
        if (stored) return JSON.parse(stored);
    }
    return defaultData;
};

const useApi = process.env.NEXT_PUBLIC_USE_MYSQL === 'true';

export const db = {
    articles: {
        async getAll() {
            // Keep mock for articles for now as we didn't create a table for it yet
            return [
                {
                    id: "1",
                    title: "DSNLU Wins National Moot Court Competition",
                    content: "Full content here...",
                    author: "Moot Court Society",
                    created_at: "2025-10-15T10:00:00Z",
                    excerpt: "The team comprising of... brought laurels to the university by winning the prestigious...",
                },
                {
                    id: "2",
                    title: "Legal Aid Camp at Sabbavaram Village",
                    content: "Full content here...",
                    author: "Legal Aid Clinic",
                    created_at: "2025-09-28T09:00:00Z",
                    excerpt: "Students organized a legal awareness camp focusing on property rights and women's safety...",
                },
                {
                    id: "3",
                    title: "Guest Lecture on Constitutional Law",
                    content: "Full content here...",
                    author: "Academic Committee",
                    created_at: "2025-09-10T10:00:00Z",
                    excerpt: "Hon'ble Justice... delivered an insightful lecture on the evolving nature of the Constitution...",
                }
            ];
        },
    },
    notifications: {
        async getAll() {
            if (useApi) {
                try {
                    const res = await fetch('/api/notifications');
                    if (res.ok) return res.json();
                } catch (e) { console.error(e); }
            }
            return getFromStorage("notifications", mockNotifications);
        },
        async add(item: { title: string; link: string; date: string }) {
            if (useApi) {
                try {
                    const res = await fetch('/api/notifications', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(item),
                    });
                    if (res.ok) return res.json();
                } catch (e) { console.error(e); }
            }
            // Fallback
            const current = getFromStorage("notifications", mockNotifications);
            const newItem = { id: Date.now().toString(), ...item };
            const updated = [newItem, ...current];
            saveToStorage("notifications", updated);
            return newItem;
        },
        async delete(id: string) {
            if (useApi) {
                try {
                    const res = await fetch(`/api/notifications?id=${id}`, { method: 'DELETE' });
                    if (res.ok) return true;
                } catch (e) { console.error(e); }
            }
            // Fallback
            const current = getFromStorage("notifications", mockNotifications);
            const updated = current.filter((n: any) => n.id !== id);
            saveToStorage("notifications", updated);
            return true;
        }
    },
    results: {
        async getAll() {
            if (useApi) {
                try {
                    const res = await fetch('/api/results');
                    if (res.ok) return res.json();
                } catch (e) { console.error(e); }
            }
            return getFromStorage("results", mockResults);
        },
        async add(item: { title: string; link: string; date: string }) {
            if (useApi) {
                try {
                    const res = await fetch('/api/results', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(item),
                    });
                    if (res.ok) return res.json();
                } catch (e) { console.error(e); }
            }
            // Fallback
            const current = getFromStorage("results", mockResults);
            const newItem = { id: Date.now().toString(), ...item };
            const updated = [newItem, ...current];
            saveToStorage("results", updated);
            return newItem;
        },
        async delete(id: string) {
            if (useApi) {
                try {
                    const res = await fetch(`/api/results?id=${id}`, { method: 'DELETE' });
                    if (res.ok) return true;
                } catch (e) { console.error(e); }
            }
            // Fallback
            const current = getFromStorage("results", mockResults);
            const updated = current.filter((r: any) => r.id !== id);
            saveToStorage("results", updated);
            return true;
        }
    },
    gallery: {
        async getAll() {
            if (useApi) {
                try {
                    const res = await fetch('/api/gallery');
                    if (res.ok) return res.json();
                } catch (e) { console.error(e); }
            }
            return getFromStorage("gallery", mockGallery);
        },
        async add(item: { url: string; caption: string }) {
            if (useApi) {
                try {
                    const res = await fetch('/api/gallery', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(item),
                    });
                    if (res.ok) return res.json();
                } catch (e) { console.error(e); }
            }
            // Fallback
            const current = getFromStorage("gallery", mockGallery);
            const newItem = { id: Date.now().toString(), ...item };
            const updated = [newItem, ...current];
            saveToStorage("gallery", updated);
            return newItem;
        },
        async delete(id: string) {
            if (useApi) {
                try {
                    const res = await fetch(`/api/gallery?id=${id}`, { method: 'DELETE' });
                    if (res.ok) return true;
                } catch (e) { console.error(e); }
            }
            // Fallback
            const current = getFromStorage("gallery", mockGallery);
            const updated = current.filter((g: any) => g.id !== id);
            saveToStorage("gallery", updated);
            return true;
        }
    }
};
