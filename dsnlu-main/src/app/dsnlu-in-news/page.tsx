"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

// --- Data Types ---
type NewsItem = {
    title: string;
    images: string[];
};

type VideoItem = {
    title: string;
    videos: { thumbnail: string; url: string }[];
};

// --- Data ---
const newsData: Record<string, NewsItem[]> = {
    "2025": [
        {
            title:
                "MOU Between JNTU Gurajada and DSNLU. on AI Technology in Law - Certificate Course.",
            images: [
                "https://dsnlu.ac.in/storage/2025/11/02-3.jpeg",
                "https://dsnlu.ac.in/storage/2025/11/03-3.jpeg",
                "https://dsnlu.ac.in/storage/2025/11/01-2.jpeg",
            ],
        },
        {
            title: "DSNLU - Inauguration of New Buildings and Statues on 05-09-2025",
            images: [
                "https://dsnlu.ac.in/storage/2025/09/S1.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/s2.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/s3.jpeg",
            ],
        },
        {
            title:
                "DSNLU - Combined Convocation (8th, 9th, 10th, 11th & 12th Convocations) on 05-09-2025",
            images: [
                "https://dsnlu.ac.in/storage/2025/09/c1.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c2.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c3.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c4.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c5.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c6.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c7.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c8.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c9.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c10.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c11.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c12.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c13.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/c14.jpg",
                "https://dsnlu.ac.in/storage/2025/09/c15.jpg",
            ],
        },
        {
            title:
                "DSNLU to Host Combined Convocation (8th, 9th, 10th, 11th & 12th Convocations) & Inauguration of New Buildings and Statues on 05-09-2025.",
            images: [
                "https://dsnlu.ac.in/storage/2025/09/1.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/2.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/3.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/4.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/5.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/6.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/7.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/8.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/9.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/10.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/11.jpeg",
                "https://dsnlu.ac.in/storage/2025/09/12.jpeg",
            ],
        },
        {
            title:
                "Orientation Lecture by Prof. Ranbir Singh, Pro Chancellor, IILM University on 22-08-2025 at DSNLU.",
            images: [
                "https://dsnlu.ac.in/storage/2025/08/1-5.jpeg",
                "https://dsnlu.ac.in/storage/2025/08/2-5.jpeg",
                "https://dsnlu.ac.in/storage/2025/08/3-5.jpeg",
                "https://dsnlu.ac.in/storage/2025/08/4-4.jpeg",
                "https://dsnlu.ac.in/storage/2025/08/5-4.jpeg",
            ],
        },
        {
            title: "79th Independence Day Celebrations - 2025 at DSNLU",
            images: [
                "https://dsnlu.ac.in/storage/2025/08/2-3.jpeg",
                "https://dsnlu.ac.in/storage/2025/08/3-3.jpeg",
                "https://dsnlu.ac.in/storage/2025/08/1-3.jpeg",
            ],
        },
        {
            title:
                "Orientation Lecture By Hon'ble Sri Justice Ravi Cheemalapati, Judge, High Court of A.P on 02-08-2025",
            images: [
                "https://dsnlu.ac.in/storage/2025/08/1-1.jpeg",
                "https://dsnlu.ac.in/storage/2025/08/2-1.jpeg",
                "https://dsnlu.ac.in/storage/2025/08/3-1.jpeg",
                "https://dsnlu.ac.in/storage/2025/08/4-1.jpeg",
                "https://dsnlu.ac.in/storage/2025/08/5-1.jpeg",
            ],
        },
        {
            title: "Special Lecture for 01st Year Students on 15-07-2025",
            images: [
                "https://dsnlu.ac.in/storage/2025/07/1-1.jpeg",
                "https://dsnlu.ac.in/storage/2025/07/2-2.jpeg",
                "https://dsnlu.ac.in/storage/2025/07/3-2.jpeg",
                "https://dsnlu.ac.in/storage/2025/07/4-2.jpeg",
            ],
        },
        {
            title:
                "Orientation Program for 1st Year B.A. LL.B. (Hons.) and 03 Year LL.B. students on 14-07-25",
            images: [
                "https://dsnlu.ac.in/storage/2025/07/Orientation-Program-1st-Year-Students-2025-1.jpeg",
                "https://dsnlu.ac.in/storage/2025/07/Orientation-Program-1st-Year-Students-2025-2.jpeg",
                "https://dsnlu.ac.in/storage/2025/07/Orientation-Program-1st-Year-Students-2025-3.jpeg",
                "https://dsnlu.ac.in/storage/2025/07/Orientation-Program-1st-Year-Students-2025-4.jpeg",
                "https://dsnlu.ac.in/storage/2025/07/Orientation-Program-1st-Year-Students-2025-5.jpeg",
                "https://dsnlu.ac.in/storage/2025/07/Orientation-Program-1st-Year-Students-2025-6.jpeg",
                "https://dsnlu.ac.in/storage/2025/07/Orientation-Program-1st-Year-Students-2025-7.jpeg",
            ],
        },
        {
            title:
                "Three Day Residential Legal Refreshing Programme by The Bar Council of A.P in Collaboration with DSNLU on 12th to 14th June, 2025.",
            images: [
                "https://dsnlu.ac.in/storage/2025/06/p-1.webp",
                "https://dsnlu.ac.in/storage/2025/06/p-2.webp",
                "https://dsnlu.ac.in/storage/2025/06/p-3.webp",
                "https://dsnlu.ac.in/storage/2025/06/3-4.webp",
                "https://dsnlu.ac.in/storage/2025/06/3-5.webp",
                "https://dsnlu.ac.in/storage/2025/06/3-3.webp",
                "https://dsnlu.ac.in/storage/2025/06/3-1.webp",
                "https://dsnlu.ac.in/storage/2025/06/3-2.webp",
                "https://dsnlu.ac.in/storage/2025/06/003.webp",
                "https://dsnlu.ac.in/storage/2025/06/02-6.webp",
                "https://dsnlu.ac.in/storage/2025/06/02-5.webp",
                "https://dsnlu.ac.in/storage/2025/06/02-3.webp",
                "https://dsnlu.ac.in/storage/2025/06/02-4.webp",
                "https://dsnlu.ac.in/storage/2025/06/02-2.webp",
                "https://dsnlu.ac.in/storage/2025/06/002.webp",
                "https://dsnlu.ac.in/storage/2025/06/02-1.webp",
                "https://dsnlu.ac.in/storage/2025/06/001.webp",
            ],
        },
        {
            title: "NCC Annual Training Camp at DSNLU Campus",
            images: [
                "https://dsnlu.ac.in/storage/2025/06/4.webp",
                "https://dsnlu.ac.in/storage/2025/06/5.webp",
                "https://dsnlu.ac.in/storage/2025/06/2.webp",
                "https://dsnlu.ac.in/storage/2025/06/3.webp",
                "https://dsnlu.ac.in/storage/2025/06/1.webp",
            ],
        },
        {
            title: "NCC Annual Training Camp at DSNLU",
            images: [
                "https://dsnlu.ac.in/storage/2025/06/9-1.jpg",
                "https://dsnlu.ac.in/storage/2025/06/9-2.jpg",
                "https://dsnlu.ac.in/storage/2025/06/9-3.jpg",
                "https://dsnlu.ac.in/storage/2025/06/9-4.jpg",
                "https://dsnlu.ac.in/storage/2025/06/9-5.jpg",
                "https://dsnlu.ac.in/storage/2025/06/9-6.jpg",
                "https://dsnlu.ac.in/storage/2025/06/9-8.jpg",
            ],
        },
        {
            title:
                "DSNLU - Solidarity to Indian Armed Forces on Operation Sindoor",
            images: [
                "https://dsnlu.ac.in/storage/2025/05/2-2.jpeg",
                "https://dsnlu.ac.in/storage/2025/05/3.jpeg",
                "https://dsnlu.ac.in/storage/2025/05/1.jpeg",
            ],
        },
        {
            title:
                "134th Birthday (Jayanthi) Celebrations of Bharat Ratna “Dr. B. R. Ambedkar” @ DSNLU",
            images: [
                "https://dsnlu.ac.in/storage/2025/04/1-5.jpeg",
                "https://dsnlu.ac.in/storage/2025/04/2-5.jpeg",
                "https://dsnlu.ac.in/storage/2025/04/3-5.jpeg",
                "https://dsnlu.ac.in/storage/2025/04/4-5.jpeg",
                "https://dsnlu.ac.in/storage/2025/04/5-3.jpeg",
            ],
        },
        {
            title:
                "Justice Dr. V.R.K. Kurpa Sagar, Judge, High Court of A.P. Visited DSNLU and Delivered Special Lecture to Students of DSNLU",
            images: [
                "https://dsnlu.ac.in/storage/2025/04/1.jpg",
                "https://dsnlu.ac.in/storage/2025/04/2.jpg",
                "https://dsnlu.ac.in/storage/2025/04/3.jpg",
                "https://dsnlu.ac.in/storage/2025/04/4.jpg",
                "https://dsnlu.ac.in/storage/2025/04/5-1.jpg",
            ],
        },
        {
            title:
                "DSNLU (CILAD) - ONE DAY INTERNATIONAL WORKSHOP on CAREERS and TRENDS in INTERNATIONAL LAW",
            images: [
                "https://dsnlu.ac.in/storage/2025/03/CILAD-1.jpg",
                "https://dsnlu.ac.in/storage/2025/03/CILAD-2.jpg",
                "https://dsnlu.ac.in/storage/2025/03/CILAD-3.jpg",
                "https://dsnlu.ac.in/storage/2025/03/CILAD-4.jpg",
                "https://dsnlu.ac.in/storage/2025/03/CILAD-5.jpg",
            ],
        },
        {
            title:
                "DSNLU - National Level Competition on Crime Scene Investigation (CSI 6.0) 2025",
            images: [
                "https://dsnlu.ac.in/storage/2025/03/CSI-6.0-1.jpg",
                "https://dsnlu.ac.in/storage/2025/03/CSI-6.0-2.jpg",
                "https://dsnlu.ac.in/storage/2025/03/CSI-6.0-3.jpg",
                "https://dsnlu.ac.in/storage/2025/03/CSI-6.0-4-1.jpeg",
                "https://dsnlu.ac.in/storage/2025/03/CSI-6.0-5.jpg",
            ],
        },
        {
            title:
                "DSNLU Students Excel at NUJS Kolkata Annual Sports Fest *INVICTA’25*",
            images: [
                "https://dsnlu.ac.in/storage/2025/03/NUJS-Kolkata-Annual-Sports-Fest-INVICTA25-2-scaled.webp",
                "https://dsnlu.ac.in/storage/2025/03/NUJS-Kolkata-Annual-Sports-Fest-INVICTA25-3-scaled.webp",
                "https://dsnlu.ac.in/storage/2025/03/NUJS-Kolkata-Annual-Sports-Fest-INVICTA25-1-scaled.webp",
            ],
        },
        {
            title: "Damodaram Sanjivayya 104th Birthday Celebrations @ DSNLU",
            images: [
                "https://dsnlu.ac.in/storage/2025/02/DS-1-1.jpg",
                "https://dsnlu.ac.in/storage/2025/02/DS-2-1.jpg",
                "https://dsnlu.ac.in/storage/2025/02/DS-3.jpg",
                "https://dsnlu.ac.in/storage/2025/02/DS-4.jpg",
                "https://dsnlu.ac.in/storage/2025/02/DS-5.jpg",
            ],
        },
        {
            title: "76th Republic Day Celebrations @ DSNLU",
            images: [
                "https://dsnlu.ac.in/storage/2025/01/republic-day-2025-1.jpg",
                "https://dsnlu.ac.in/storage/2025/01/republic-day-2025-2-scaled.jpg",
                "https://dsnlu.ac.in/storage/2025/01/republic-day-2025-3.jpg",
            ],
        },
        {
            title:
                "DSNLU Campus Visit, Inauguration of Girls Hostel's by The Hon'ble Chief Justice of A.P. & Chancellor, DSNLU on 17th January 2025",
            images: [
                "https://dsnlu.ac.in/storage/2025/01/1-5-scaled.jpg",
                "https://dsnlu.ac.in/storage/2025/01/2-5.jpg",
                "https://dsnlu.ac.in/storage/2025/01/3-5.jpg",
                "https://dsnlu.ac.in/storage/2025/01/4-5.jpg",
                "https://dsnlu.ac.in/storage/2025/01/5-4.jpg",
                "https://dsnlu.ac.in/storage/2025/01/6-1.jpg",
            ],
        },
        {
            title:
                "DSNLU CAMPUS VISIT by Hon’ble Justice Pamidighantam Sri Narasimha, Judge, Supreme Court of India & VISITOR – DSNLU on 12th January 2025",
            images: [
                "https://dsnlu.ac.in/storage/2025/01/1-8.jpg",
                "https://dsnlu.ac.in/storage/2025/01/2-8.jpg",
                "https://dsnlu.ac.in/storage/2025/01/3-8.jpg",
                "https://dsnlu.ac.in/storage/2025/01/4-8.jpg",
            ],
        },
        {
            title:
                "Inauguration of National Youth Day Celebrations 2025 @ DSNLU on 04th January 2025",
            images: [
                "https://dsnlu.ac.in/storage/2025/01/1-3.jpg",
                "https://dsnlu.ac.in/storage/2025/01/2-3.jpg",
                "https://dsnlu.ac.in/storage/2025/01/3-3.jpg",
                "https://dsnlu.ac.in/storage/2025/01/4-3.jpg",
                "https://dsnlu.ac.in/storage/2025/01/5-2.jpg",
            ],
        },
    ],
    "2024": [
        {
            title: "World Human Rights Day @ DSNLU on 10th December, 2024",
            images: [
                "https://dsnlu.ac.in/storage/2025/01/1-4.jpg",
                "https://dsnlu.ac.in/storage/2025/01/2-4.jpg",
                "https://dsnlu.ac.in/storage/2025/01/3-4.jpg",
                "https://dsnlu.ac.in/storage/2025/01/4-4.jpg",
            ],
        },
        {
            title:
                "Observing Mahaparinirvan Diwas, the 69th Death Anniversary of DR. B.R. AMBEDKAR @ DSNLU",
            images: [
                "https://dsnlu.ac.in/storage/2024/12/1-3.jpg",
                "https://dsnlu.ac.in/storage/2024/12/2-2.jpg",
                "https://dsnlu.ac.in/storage/2024/12/3-2.jpg",
                "https://dsnlu.ac.in/storage/2024/12/4-1.jpg",
                "https://dsnlu.ac.in/storage/2024/12/5-1.jpg",
            ],
        },
        {
            title: "CLAT 2025 Entrance Test @ DSNLU",
            images: [
                "https://dsnlu.ac.in/storage/2024/12/1.jpeg",
                "https://dsnlu.ac.in/storage/2024/12/2.jpeg",
                "https://dsnlu.ac.in/storage/2024/12/3.jpeg",
                "https://dsnlu.ac.in/storage/2024/12/4.jpeg",
                "https://dsnlu.ac.in/storage/2024/12/5.jpeg",
                "https://dsnlu.ac.in/storage/2024/12/6.jpeg",
            ],
        },
        {
            title: "ORIENTATION LECTURE @ DSNLU on 13th July, 2024.",
            images: [
                "https://dsnlu.ac.in/storage/2024/07/Ori-Lect1-scaled.jpg",
                "https://dsnlu.ac.in/storage/2024/07/Ori-Lect2.jpg",
            ],
        },
        {
            title:
                "Orientation Program In DSNLU for 5 Year Integrated B.A., LL.B. (Hons) Batch of 2024-2029.",
            images: [
                "https://dsnlu.ac.in/storage/2024/07/Ori1.jpg",
                "https://dsnlu.ac.in/storage/2024/07/Ori2.jpg",
                "https://dsnlu.ac.in/storage/2024/07/Ori3.jpg",
                "https://dsnlu.ac.in/storage/2024/07/Ori4-scaled.jpg",
            ],
        },
        {
            title: "INTERNATIONAL YOGA DAY in DSNLU - 2024",
            images: ["https://dsnlu.ac.in/storage/2024/06/sakshi-dsnlu-yoga.jpg"],
        },
        {
            title: "DSNLU LL.B. Notification - 2024.",
            images: ["https://dsnlu.ac.in/storage/2024/06/LLB-Notification-2024.jpg"],
        },
        {
            title:
                "DSNLU Organised One Day Awareness Program in Collaboration with NATIONAL COMMISSION FOR WOMEN, New Delhi on 27th April, 2024",
            images: [
                "https://dsnlu.ac.in/storage/2024/04/NCW-News1.jpg",
                "https://dsnlu.ac.in/storage/2024/04/NCW-News2.jpg",
            ],
        },
        {
            title:
                "133rd Birthday (Jayanthi) Celebrations of Bharat Ratna \"Dr. B.R. Ambedkar @ DSNLU.",
            images: [
                "https://dsnlu.ac.in/storage/2024/04/1-Ambedkar.jpg",
                "https://dsnlu.ac.in/storage/2024/04/2-Ambedkar1.jpg",
                "https://dsnlu.ac.in/storage/2024/04/3-Ambedkar1.jpg",
                "https://dsnlu.ac.in/storage/2024/04/4-Ambedkar.jpg",
            ],
        },
        {
            title: "Crime Scene Investigation (CSI-5.0) @ DSNLU on 23rd March, 2024",
            images: [
                "https://dsnlu.ac.in/storage/2024/03/5-1.jpg",
                "https://dsnlu.ac.in/storage/2024/03/4-1-scaled.jpg",
            ],
        },
        {
            title: "Trial Advocacy Workshop @ DSNLU on 15th March, 2024.",
            images: [
                "https://dsnlu.ac.in/storage/2024/03/1-1-scaled.jpg",
                "https://dsnlu.ac.in/storage/2024/03/2-1-scaled.jpg",
                "https://dsnlu.ac.in/storage/2024/03/3-1-scaled.jpg",
            ],
        },
        {
            title: "REPUBLIC DAY CELEBRATIONS - 2024",
            images: [
                "https://dsnlu.ac.in/storage/2024/01/RDAY.jpg",
                "https://dsnlu.ac.in/storage/2024/01/R-Day.jpg",
            ],
        },
        {
            title:
                "SEMINAR ON “Contribution of Indian Judiciary to Constitutional Jurisprudence – Recent Developments” ON THE EVE OF REPUBLIC DAY CELEBRATIONS",
            images: [
                "https://dsnlu.ac.in/storage/2024/01/RD-1-rotated.jpg",
                "https://dsnlu.ac.in/storage/2024/01/RD-2-scaled.jpg",
                "https://dsnlu.ac.in/storage/2024/01/RD-3.jpg",
            ],
        },
    ],
    "2023": [
        {
            title: "CONSTITUTIONAL DAY CELEBRATIONS @ DSNLU ON 26th November, 2023",
            images: [
                "https://dsnlu.ac.in/storage/2023/12/1-2.jpg",
                "https://dsnlu.ac.in/storage/2023/12/3-2.jpg",
                "https://dsnlu.ac.in/storage/2023/12/2-2.jpg",
            ],
        },
        {
            title: "National Colliquium on Bharatiya Nyaya Sanhita Bill",
            images: [
                "https://dsnlu.ac.in/storage/2023/12/DSNLU-In-News3.webp",
                "https://dsnlu.ac.in/storage/2023/12/DSNLU-In-News-2.webp",
            ],
        },
        {
            title:
                "Vice Chancellor of DSNLU Met Hon'ble Chief Justice of A.P & Chancellor of DSNLU",
            images: ["https://dsnlu.ac.in/storage/2023/12/DSNLU-In-News-1.webp"],
        },
    ],
};

const videoData: VideoItem[] = [
    {
        title:
            "DSNLU|దామోదరం సంజీవయ్య జాతీయ న్యాయ విశ్వవిద్యాలయం||వైస్ ఛాన్సలర్|| డి.సూర్యప్రకాష్ ప్రెస్ మీట్ on Combined Convocation on 5th September 2025 in Visakhapatnam",
        videos: [
            {
                thumbnail: "http://i3.ytimg.com/vi/7k155PRsdMg/hqdefault.jpg",
                url: "https://www.youtube.com/watch?v=7k155PRsdMg",
            },
            {
                thumbnail: "http://i3.ytimg.com/vi/-s9gLUYiDZg/hqdefault.jpg",
                url: "https://www.youtube.com/watch?v=-s9gLUYiDZg",
            },
        ],
    },
    {
        title:
            "దామోదర్ సంజీవయ్య జాతీయ న్యాయ విశ్వవిద్యాలయం నూతన ఉపకులపతిగా శ్రీ డి సూర్యప్రకాషరావు.",
        videos: [
            {
                thumbnail: "http://i3.ytimg.com/vi/x9zRIk567tI/hqdefault.jpg",
                url: "https://www.youtube.com/watch?v=x9zRIk567tI",
            },
        ],
    },
];

export default function DSNLUInNewsPage() {
    const [activeTab, setActiveTab] = useState<"images" | "video">("images");
    const [activeYear, setActiveYear] = useState<string>("2025");

    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            {/* Banner Section */}
            <div className="relative h-[300px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://dsnlu.ac.in/storage/2022/12/about-us-bannar.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative container mx-auto flex h-full flex-col justify-center px-4 text-white">
                    <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                        DSNLU in News
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        {/* Main Tabs */}
                        <div className="flex justify-center space-x-4 border-b border-slate-200 pb-4">
                            <button
                                onClick={() => setActiveTab("images")}
                                className={cn(
                                    "rounded-full px-6 py-2 text-sm font-semibold transition-colors",
                                    activeTab === "images"
                                        ? "bg-dsnlu-dark-blue text-white"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                )}
                            >
                                Images
                            </button>
                            <button
                                onClick={() => setActiveTab("video")}
                                className={cn(
                                    "rounded-full px-6 py-2 text-sm font-semibold transition-colors",
                                    activeTab === "video"
                                        ? "bg-dsnlu-dark-blue text-white"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                )}
                            >
                                Video
                            </button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 md:p-10">
                        {activeTab === "images" && (
                            <>
                                {/* Year Tabs */}
                                <div className="mb-8 flex justify-center space-x-2">
                                    {Object.keys(newsData)
                                        .sort((a, b) => Number(b) - Number(a))
                                        .map((year) => (
                                            <button
                                                key={year}
                                                onClick={() => setActiveYear(year)}
                                                className={cn(
                                                    "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                                                    activeYear === year
                                                        ? "bg-dsnlu-azure text-white"
                                                        : "bg-white text-slate-600 hover:bg-slate-50"
                                                )}
                                            >
                                                {year}
                                            </button>
                                        ))}
                                </div>

                                {/* News Items */}
                                <div className="space-y-12">
                                    {newsData[activeYear]?.map((item, index) => (
                                        <div key={index} className="space-y-4">
                                            <h3 className="text-xl font-bold text-[#ec595f]">
                                                {item.title}
                                            </h3>
                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                                {item.images.map((img, imgIndex) => (
                                                    <div
                                                        key={imgIndex}
                                                        className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 shadow-sm transition-all hover:shadow-md"
                                                    >
                                                        <img
                                                            src={img}
                                                            alt={`${item.title} - Image ${imgIndex + 1}`}
                                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {activeTab === "video" && (
                            <div className="space-y-12">
                                {videoData.map((item, index) => (
                                    <div key={index} className="space-y-4">
                                        <h3 className="text-xl font-bold text-[#ec595f]">
                                            {item.title}
                                        </h3>
                                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                            {item.videos.map((video, vidIndex) => (
                                                <a
                                                    key={vidIndex}
                                                    href={video.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group relative aspect-video overflow-hidden rounded-lg bg-black shadow-sm transition-all hover:shadow-md"
                                                >
                                                    <img
                                                        src={video.thumbnail}
                                                        alt={`Video thumbnail for ${item.title}`}
                                                        className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                                            <Play className="h-6 w-6 fill-white text-white" />
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
