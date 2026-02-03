"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/db";
import { useAdmin } from "@/contexts/AdminContext";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { Marquee } from "@/components/ui/Marquee";
import { ScrollableList } from "@/components/ui/ScrollableList";
import { VideoSection } from "@/components/ui/VideoSection";
import { FeatureCards } from "@/components/ui/FeatureCards";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Gavel, FileText, Calendar, MapPin, Download } from "lucide-react";

export default function Home() {
  const { isAdminMode } = useAdmin();

  // ✅ State Management
  const [notifications, setNotifications] = useState<any[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [carouselDbImages, setCarouselDbImages] = useState<any[]>([]); 
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const carouselImages = [
    "https://dsnlu.ac.in/storage/2025/09/1.png",
    "https://dsnlu.ac.in/storage/2025/09/2.png",
    "https://dsnlu.ac.in/storage/2025/09/3.png",
    "https://dsnlu.ac.in/storage/2025/09/4-1.png",
    "https://dsnlu.ac.in/storage/2025/09/6.png"
  ];

  const marqueeNotifications = [
    "India Today: INDIA'S BEST LAW UNIVERSITIES - 2025",
    "Refund Policy",
    "Vis Pre Moot Competition 2026: Registration Open (Oct 15 - Dec 15, 2025)",
  ];

  const staticNotifications = [
    { title: "Refund Policy", link: "https://dsnlu.ac.in/storage/2025/07/REFUND-POLICY.pdf", isNew: true },
    { title: "DSNLJ CALL FOR PAPERS – BROCHURE", link: "https://dsnlu.ac.in/storage/2025/07/DSNLJ-CALL-FOR-PAPERS-FINAL-EDIT-BROCHURE.pdf", isNew: true },
  ];

  const staticResults = [
    { title: "03 Year LL.B. Odd Semester Repeat Results", link: "#", isNew: true },
    { title: "LL.M. Even Semester Results, July-August 2025.", link: "#", isNew: true },
  ];

  useEffect(() => {
    const fetchData = async () => {
      // 1. Notifications
      const dbNotifs = await db.notifications.getAll();
      setNotifications(dbNotifs?.length ? dbNotifs : staticNotifications);

      // 2. Results
      const dbResults = await db.results.getAll();
      setResults(dbResults?.length ? dbResults : staticResults);

      // 3. Carousel Images
      try {
        const galleryRes = await fetch("/api/gallery");
        const galleryData = await galleryRes.json();
        if (galleryData && galleryData.length > 0) {
          setCarouselDbImages(galleryData);
        }
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-[72px] md:pt-[88px]">
      <Marquee notifications={marqueeNotifications} speed={30} />

      {/* Hero Section with Carousel - Enhanced with CRUD props */}
      <HeroCarousel 
        images={
          carouselDbImages.length > 0 
            ? carouselDbImages.map((img: any) => img.image_url) // ✅ FIXED: Changed from img.url to img.image_url
            : carouselImages
        }
        admin={isAdminMode}
        onAdd={async () => {
          const url = prompt("Enter image URL");
          if (!url) return;

          const res = await fetch("/api/gallery", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url, caption: "Homepage Carousel" }),
          });

          const newItem = await res.json();
          setCarouselDbImages(prev => [newItem, ...prev]);
        }}
        onEdit={async (index) => {
          const current = carouselDbImages[index];
          if (!current) return;

          const newUrl = prompt("Edit image URL", current.image_url); // ✅ FIXED: Changed from current.url to current.image_url
          if (!newUrl) return;

          await fetch(`/api/gallery/${current.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: newUrl }),
          });

          setCarouselDbImages(prev =>
            prev.map((img, i) => (i === index ? { ...img, image_url: newUrl } : img)) // ✅ FIXED: Changed from url to image_url
          );
        }}
        onDelete={async (index) => {
          const item = carouselDbImages[index];
          if (!item) return;

          if (!confirm("Delete this slide?")) return;

          await fetch(`/api/gallery/${item.id}`, {
            method: "DELETE",
          });

          setCarouselDbImages(prev => prev.filter((_, i) => i !== index));
        }}
      />

      {/* ✅ ADMIN: Carousel Drag & Drop Management */}
      {isAdminMode && carouselDbImages.length > 0 && (
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <MapPin className="text-dsnlu-azure" size={20} />
              REORDER SLIDES (Drag & Drop)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {carouselDbImages.map((item, index) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={() => setDragIndex(index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={async () => {
                    if (dragIndex === null) return;

                    const updated = [...carouselDbImages];
                    const [moved] = updated.splice(dragIndex, 1);
                    updated.splice(index, 0, moved);
                    setCarouselDbImages(updated);
                    setDragIndex(null);

                    // Persist order in DB
                    await fetch("/api/gallery/reorder", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        items: updated.map((img, i) => ({
                          id: img.id,
                          display_order: i + 1,
                        })),
                      }),
                    });
                  }}
                  className="flex flex-col p-2 bg-white rounded-lg shadow-sm border border-gray-100 cursor-move hover:border-dsnlu-azure transition-all group"
                >
                  <div className="relative aspect-video mb-2 overflow-hidden rounded">
                    <img src={item.image_url} className="w-full h-full object-cover" alt="" /> {/* ✅ FIXED: Changed from item.url to item.image_url */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-bold">DRAG TO MOVE</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <span className="text-xs font-bold text-gray-500">POS: {index + 1}</span>
                    <span className="text-[10px] text-gray-400 truncate max-w-[120px]">{item.image_url}</span> {/* ✅ FIXED: Changed from item.url to item.image_url */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* VC Message Column */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-white/20 overflow-hidden flex flex-col items-center p-6 text-center">
                <h2 className="text-xl font-bold text-dsnlu-dark-slate mb-4 border-b-2 border-dsnlu-azure pb-2 inline-block">
                  VC MESSAGE
                </h2>
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-dsnlu-azure/20">
                  <Image src="https://dsnlu.ac.in/storage/2024/04/vcdsnlu.jpeg" alt="VC" fill className="object-cover" />
                </div>
                <h4 className="text-lg font-bold">Prof. D. Surya Prakasa Rao</h4>
                <p className="text-sm text-gray-500 mb-4">Hon&apos;ble Vice Chancellor DSNLU</p>
                <div className="w-full space-y-2">
                  <Link href="#" className="block w-full py-2 bg-gray-50 rounded-lg text-sm hover:bg-dsnlu-azure hover:text-white transition-colors">VC Message</Link>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <ScrollableList
              title="NOTIFICATIONS"
              viewAllLink="/notifications"
              items={notifications}
              editable={isAdminMode}
              onAdd={async (data) => {
                const newItem = await db.notifications.add(data);
                setNotifications(prev => [newItem, ...prev]);
              }}
              onEdit={async (id, data) => {
                await db.notifications.update(id, data);
                setNotifications(prev => prev.map(item => (item.id === id ? { ...item, ...data } : item)));
              }}
              onDelete={async (id) => {
                await db.notifications.delete(id);
                setNotifications(prev => prev.filter(n => n.id !== id));
              }}
            />

            {/* Results */}
            <ScrollableList
              title="EXAMINATION RESULTS"
              viewAllLink="/examination"
              items={results}
              editable={isAdminMode}
              onAdd={async (data) => {
                const newItem = await db.results.add(data);
                setResults(prev => [newItem, ...prev]);
              }}
              onEdit={async (id, data) => {
                await db.results.update(id, data);
                setResults(prev => prev.map(item => (item.id === id ? { ...item, ...data } : item)));
              }}
              onDelete={async (id) => {
                await db.results.delete(id);
                setResults(prev => prev.filter(r => r.id !== id));
              }}
            />
          </div>
        </div>
      </section>

      <VideoSection />
      <FeatureCards />
    </div>
  );
}