"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { FileText, Download } from "lucide-react";

// --- Data Types ---
type NotificationItem = {
    title: string;
    url: string;
    type?: "pdf" | "link";
};

type YearData = {
    notifications: NotificationItem[];
    admissions?: NotificationItem[];
};

// --- Data ---
const archivesData: Record<string, YearData> = {
    "2025": {
        notifications: [
            {
                title: "CLAT 2025 Admission Notice",
                url: "https://dsnlu.ac.in/storage/2025/06/CLAT-2025-Admission-Notice.pdf",
                type: "pdf",
            },
            {
                title: "PG I Merit List Vacant Seat Notification 12-06-2024",
                url: "https://dsnlu.ac.in/all-notifications/pg-i-merit-list-vacant-seat-notification-12-06-2024-2/",
                type: "link",
            },
            {
                title: "One Year LL.M. Academic Calendar 2024-25",
                url: "https://dsnlu.ac.in/storage/2024/10/One-Year-LL.M.-Academic-Calendar-2024-25.pdf",
                type: "pdf",
            },
            {
                title: "3 Year LL.B. Academic Calendar for the AY- 2024-25",
                url: "https://dsnlu.ac.in/storage/2024/09/3-Year-LL.B-Academic-Calendar-2024-25.pdf",
                type: "pdf",
            },
        ],
    },
    "2024": {
        notifications: [
            {
                title:
                    "LIST OF SELECTED CANDIDATES FOR TEACHING POSTS AGAINST DSNLU ADVERTISEMENT",
                url: "https://dsnlu.ac.in/storage/2024/10/Selected-Candidates.pdf",
                type: "pdf",
            },
            {
                title: "3 Year LL.B. Merit List II",
                url: "https://dsnlu.ac.in/storage/2024/09/3-Year-LL.B.-Merit-List-II.pdf",
                type: "pdf",
            },
            {
                title: "3 Year LL.B. Merit List",
                url: "https://dsnlu.ac.in/storage/2024/08/3-Year-LL.B.-Merit-List.pdf",
                type: "pdf",
            },
            {
                title:
                    "Merit List Against Special Category Seat Notification 05-08-2024",
                url: "https://dsnlu.ac.in/storage/2024/08/Merit-List-Against-Special-Category-Seat-Notification-05-08-2024-1.pdf",
                type: "pdf",
            },
            {
                title: "3 Year LL.B. Admission Schedule 2024",
                url: "https://dsnlu.ac.in/storage/2024/08/3-Year-LL.B.-Admission-Schedule-2024.pdf",
                type: "pdf",
            },
            {
                title: "UG Merit List VI Against Vacant Seat Notifications",
                url: "https://dsnlu.ac.in/storage/2024/08/UG-Merit-List-VI-Against-Vacant-Seat-Notifications.pdf",
                type: "pdf",
            },
            {
                title: "Special Category Seat Notification 05-08-2024",
                url: "https://dsnlu.ac.in/storage/2024/08/Special-Category-Seat-Notification-05-08-2024.pdf",
                type: "pdf",
            },
            {
                title: "Merit List V Against Vacant Seat Notification 31-07-2024",
                url: "https://dsnlu.ac.in/storage/2024/08/Merit-List-V-Against-Vacant-Seat-Notification-31-07-2024-1.pdf",
                type: "pdf",
            },
            {
                title: "DSNLU Vacant Seat Notification IV 2024",
                url: "https://dsnlu.ac.in/storage/2024/07/DSNLU-Vacant-Seat-Notification-IV-2024.pdf",
                type: "pdf",
            },
            {
                title: "PG Merit List IV Against Vacant Seat Notifications",
                url: "https://dsnlu.ac.in/storage/2024/07/PG-Merit-List-IV-Against-Vacant-Seat-Notifications.pdf",
                type: "pdf",
            },
            {
                title:
                    "Foreign Citizens NRI-Resident Indians NRI – Sponsored – Merit List II -2024",
                url: "https://dsnlu.ac.in/storage/2024/07/Foreign-Citizens-NRI-Resident-Indians-NRI-Sponsored-Merit-List-II-2024.pdf",
                type: "pdf",
            },
            {
                title: "Merit List IV Against Vacant Seat 2024",
                url: "https://dsnlu.ac.in/storage/2024/07/Merit-List-IV-Against-Vacant-Seat-2024-1.pdf",
                type: "pdf",
            },
            {
                title: "DSNLU Vacant Seat Notification III 2024",
                url: "https://dsnlu.ac.in/storage/2024/07/DSNLU-Vacant-Seat-Notification-III-2024.-2.pdf",
                type: "pdf",
            },
            {
                title: "Merit List III Against Vacant Seat Notification 03-07-2024",
                url: "https://dsnlu.ac.in/storage/2024/07/Merit-List-III-Against-Vacant-Seat-Notification-03-07-2024.pdf",
                type: "pdf",
            },
            {
                title: "Foreign Citizens -NRI-NRI Sponsored – Merit List. 2024",
                url: "https://dsnlu.ac.in/storage/2024/07/Foreign-Citizens-NRI-NRI-Sponsored-Merit-List.-2024.pdf",
                type: "pdf",
            },
            {
                title:
                    "Wards of Kashmiri Migrants and Kashmiri Pandits Kashmiri Hindu Families (Non-Migrants) – Merit List 2024",
                url: "https://dsnlu.ac.in/storage/2024/07/Wards-of-Kashmiri-Migrants-and-Kashmiri-Pandits-Kashmiri-Hindu-Families-Non-Migrants-Merit-List-2024.pdf",
                type: "pdf",
            },
            {
                title: "DSNLU Vacant Seat Notification II 2024",
                url: "https://dsnlu.ac.in/storage/2024/07/DSNLU-Vacant-Seat-Notification-II-2024.pdf",
                type: "pdf",
            },
            {
                title: "Merit List II Against Vacant Seat Notification Dt 12-06-2024",
                url: "https://dsnlu.ac.in/storage/2024/07/Merit-List-II-Against-Vacant-Seat-Notification-Dt-12-06-2024.pdf",
                type: "pdf",
            },
            {
                title: "Application Form for IPR Chair Professor / Research Assistant",
                url: "https://dsnlu.ac.in/storage/2024/06/Application-Form-For-IPR.pdf",
                type: "pdf",
            },
            {
                title: "IPR Chair Recruitment Notification – Guidelines",
                url: "https://dsnlu.ac.in/storage/2024/06/IPR-Chair-Recruitment-Notification-Guidelines.pdf",
                type: "pdf",
            },
            {
                title: "PG I Merit List Vacant Seat Notification 12-06-2024",
                url: "https://dsnlu.ac.in/storage/2024/06/PG-I-Merit-List-Vacant-Seat-Notification-12-06-2024.pdf",
                type: "pdf",
            },
            {
                title: "UG I Merit List Vacant Seat Notification 12-06-2024",
                url: "https://dsnlu.ac.in/storage/2024/06/UG-I-Merit-List-Vacant-Seat-Notification-12-06-2024.pdf",
                type: "pdf",
            },
            {
                title: "3 Year LL.B. Course Admission Application",
                url: "https://dsnlu.ac.in/storage/2024/06/LL.B._Three_Year_Admission_Application.pdf",
                type: "pdf",
            },
            {
                title: "3 Year LL.B. Course Admission Notification",
                url: "https://dsnlu.ac.in/storage/2024/06/LL.B._Three_Year_Admission_Notification-1.pdf",
                type: "pdf",
            },
            {
                title: "Vacant Seat Notification 2024",
                url: "https://dsnlu.ac.in/storage/2024/06/DSNLU_Vacant_Seat_Notification_2024.pdf",
                type: "pdf",
            },
            {
                title: "Application form – Non-Teaching Posts",
                url: "https://dsnlu.ac.in/storage/2024/06/Application-form-Non-Teaching-Posts.pdf",
                type: "pdf",
            },
            {
                title: "Application form – Teaching Posts",
                url: "https://dsnlu.ac.in/storage/2024/06/Application-form-Teaching-Posts.pdf",
                type: "pdf",
            },
            {
                title:
                    "Recruitment Notification Teaching Staff & Non-Teaching Staff 2024",
                url: "https://dsnlu.ac.in/storage/2024/06/Recruitment-Notification-TS-NTS-2024-final.pdf",
                type: "pdf",
            },
            {
                title: "CLAT 2024 Admission Notice",
                url: "https://dsnlu.ac.in/storage/2024/03/clat-2024-admission-notice.pdf",
                type: "pdf",
            },
            {
                title: "DSNLU Refund Policy",
                url: "https://dsnlu.ac.in/storage/2024/06/DSNLU-Refund-Policy.pdf",
                type: "pdf",
            },
            {
                title:
                    "Application form for Wards of Kashmiri Migrants and Kashmiri Pandits/ Kashmiri Hindu Families (Non-Migrants) UG/PG Programmes for The Academic Year 2024-25",
                url: "https://dsnlu.ac.in/storage/2024/03/Kashmiri-Migrants-and-Kashmiri-Pandits-Kashmiri-Hindu-Families-Non-Migrants-Application-2024-25.pdf",
                type: "pdf",
            },
            {
                title:
                    "Notification for Wards of Kashmiri Migrants and Kashmiri Pandits/ Kashmiri Hindu Families (Non-Migrants) UG/PG Programmes for The Academic Year 2024-25",
                url: "https://dsnlu.ac.in/storage/2024/03/Kashmiri-Migrants-and-Kashmiri-Pandits-Kashimiri-Hindu-Families-Non-Migrants-Notification.pdf",
                type: "pdf",
            },
            {
                title:
                    "Foreign Citizens / NRI / NRI Sponsored Category Admission Application",
                url: "https://dsnlu.ac.in/storage/2024/03/FOREIGN-CITIZENS-NRI-NRI-SPONSORED-CATEGORY-APPLICATION-2024-25.pdf",
                type: "pdf",
            },
            {
                title:
                    "Foreign Citizens / NRI / NRI Sponsored Category Admission Notification & Instructions for 5 Year Integrated UG & PG Programmes for the AY 2024-25",
                url: "https://dsnlu.ac.in/storage/2024/03/DSNLU_FN_NRI-Notification-Instructions-2024-25.pdf",
                type: "pdf",
            },
        ],
        admissions: [
            {
                title: "5 Year B.A., LL.B.(Hons.) Academic Calendar 2024-25",
                url: "https://dsnlu.ac.in/storage/2024/06/5_Year_B.A._LL.B_Hons._Academic_Calendar_2024-25.pdf",
                type: "pdf",
            },
            {
                title: "CLAT 2024 Admission Notice",
                url: "https://dsnlu.ac.in/storage/2024/03/CLAT-2024-Admission-Notice.pdf",
                type: "pdf",
            },
            {
                title: "5 Year B.A., LL.B.(Hons.) Academic Calendar 2023-24",
                url: "https://dsnlu.ac.in/storage/2023/05/5-Year-B.A.-LL.B.Hons_.-Academic-Calendar-2023-24.pdf",
                type: "pdf",
            },
            {
                title: "One Year LL.M. Academic Calendar 2023-24",
                url: "https://dsnlu.ac.in/storage/2023/05/One-Year-LL.M.-Academic-Calendar-2023-24.pdf",
                type: "pdf",
            },
        ],
    },
    "2023": {
        notifications: [
            {
                title: "UG & PG Admissions Guidelines – 2024",
                url: "https://dsnlu.ac.in/storage/2023/12/UG-PG-Admission-Guidelines-2024-1.pdf",
                type: "pdf",
            },
        ],
    },
};

export default function ArchivesNotificationsPage() {
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
                        Archives Notifications
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        {/* Year Tabs */}
                        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-4">
                            {Object.keys(archivesData)
                                .sort((a, b) => Number(b) - Number(a))
                                .map((year) => (
                                    <button
                                        key={year}
                                        onClick={() => setActiveYear(year)}
                                        className={cn(
                                            "rounded-full px-6 py-2 text-sm font-semibold transition-colors",
                                            activeYear === year
                                                ? "bg-dsnlu-dark-blue text-white"
                                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        )}
                                    >
                                        {year}
                                    </button>
                                ))}
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 md:p-10">
                        {/* Notifications */}
                        <div className="space-y-8">
                            {archivesData[activeYear]?.notifications &&
                                archivesData[activeYear].notifications.length > 0 && (
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-dsnlu-dark-blue">
                                            NOTIFICATIONS - {activeYear}
                                        </h2>
                                        <div className="grid gap-4">
                                            {archivesData[activeYear].notifications.map(
                                                (item, index) => (
                                                    <a
                                                        key={index}
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group flex items-start space-x-4 rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-dsnlu-azure hover:shadow-md"
                                                    >
                                                        <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-dsnlu-azure transition-colors group-hover:bg-dsnlu-azure group-hover:text-white">
                                                            <FileText className="h-5 w-5" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="font-medium text-slate-900 group-hover:text-dsnlu-azure">
                                                                {item.title}
                                                            </h3>
                                                            <div className="mt-2 flex items-center text-sm text-slate-500">
                                                                <Download className="mr-1 h-3 w-3" />
                                                                <span>View File</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}

                            {/* Admissions */}
                            {archivesData[activeYear]?.admissions &&
                                archivesData[activeYear].admissions!.length > 0 && (
                                    <div className="space-y-4 pt-8">
                                        <h2 className="text-2xl font-bold text-dsnlu-dark-blue">
                                            Admissions - {activeYear}
                                        </h2>
                                        <div className="grid gap-4">
                                            {archivesData[activeYear].admissions!.map(
                                                (item, index) => (
                                                    <a
                                                        key={index}
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group flex items-start space-x-4 rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-dsnlu-azure hover:shadow-md"
                                                    >
                                                        <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-dsnlu-azure transition-colors group-hover:bg-dsnlu-azure group-hover:text-white">
                                                            <FileText className="h-5 w-5" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="font-medium text-slate-900 group-hover:text-dsnlu-azure">
                                                                {item.title}
                                                            </h3>
                                                            <div className="mt-2 flex items-center text-sm text-slate-500">
                                                                <Download className="mr-1 h-3 w-3" />
                                                                <span>View File</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
