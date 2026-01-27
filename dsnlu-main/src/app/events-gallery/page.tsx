"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { db } from "@/lib/db";

type Event = {
    title: string;
    image: string;
    link: string;
};

type YearData = {
    [year: string]: Event[];
};

const eventsData: YearData = {
    "2025": [
        {
            title: "76th Constitution Day Celebrations @ DSNLU, 2025.",
            image: "https://dsnlu.ac.in/storage/2025/11/1-5.jpeg",
            link: "https://dsnlu.ac.in/events/76th-constitution-day-celebrations-dsnlu-2025/",
        },
        {
            title: "MOU Between JNTU Gurajada and DSNLU on AI Technology in Law – Certificate Course.",
            image: "https://dsnlu.ac.in/storage/2025/11/4-3.jpeg",
            link: "https://dsnlu.ac.in/events/mou-between-jntu-gurajada-and-dsnlu-on-ai-technology-in-law-certificate-course/",
        },
        {
            title: "DSNLU WEEKLY LECTURE SERIES: \"Transnational Corporations and Human Rights\" By Dr. Dayananda Murthy C.P",
            image: "https://dsnlu.ac.in/storage/2025/11/Screenshot-2025-11-20-154212.png",
            link: "https://dsnlu.ac.in/events/dsnlu-weekly-lecture-series-in-association-with-the-centre-for-human-rights-and-duties-topic-transnational-corporations-and-human-rights-predicament-by-dr-dayananda-murthy-c-p-associate-profess/",
        },
        {
            title: "DSNLU Christmas Celebrations – 2025.",
            image: "https://dsnlu.ac.in/storage/2025/11/5-1.jpeg",
            link: "https://dsnlu.ac.in/events/dsnlu-christmas-celebrations-2025/",
        },
        {
            title: "DSNLU # SPORTS # VOLTA – 2025.",
            image: "https://dsnlu.ac.in/storage/2025/11/5-4.jpg",
            link: "https://dsnlu.ac.in/events/dsnlu-sports-volta-2025/",
        },
        {
            title: "13th Intra Moot Court Competition on 25th & 26th October 2025.",
            image: "https://dsnlu.ac.in/storage/2025/11/1-3.jpg",
            link: "https://dsnlu.ac.in/events/13th-intra-moot-court-competition-on-25th-26th-october-2025/",
        },
        {
            title: "Guest Lecture by Prof. R. Venkata Rao on \"Why Legal Profession is called the Learned Profession?\"",
            image: "https://dsnlu.ac.in/storage/2025/11/06-1.jpeg",
            link: "https://dsnlu.ac.in/events/guest-lecture-by-prof-r-venkata-rao-vice-chancellor-iiuler-goa-on-why-legal-profession-is-called-the-learned-profession-and-the-odyssey-of-the-constitution-of-india-as-the-new-dharmasha/",
        },
        {
            title: "Guest lecture by Dr. Debasree Debnath, Assistant Professor of Law, NLU Tripura.",
            image: "https://dsnlu.ac.in/storage/2025/11/1-2.jpg",
            link: "https://dsnlu.ac.in/events/guest-lecture-by-dr-debasree-debnath-assistant-professor-of-law-nlu-tripura/",
        },
        {
            title: "Guest Lecture by Prof. Ranbir Singh on “Realist School of Jurisprudence”.",
            image: "https://dsnlu.ac.in/storage/2025/11/3-1-1.jpg",
            link: "https://dsnlu.ac.in/events/guest-lecture-by-prof-ranbir-singh-pro-chancellor-iilm-university-on-realist-school-of-jurisprudence/",
        },
        {
            title: "Interaction with Faculty Members by Prof. Ranbir Singh.",
            image: "https://dsnlu.ac.in/storage/2025/11/3-1.jpg",
            link: "https://dsnlu.ac.in/events/interaction-with-faculty-members-by-prof-ranbir-singh-pro-chancellor-iilm-university-at-conference-hall-dsnlu/",
        },
        {
            title: "Special Lecture on “CAREERS IN MARITIME LAW” By Shri Sri Hari Krishna.",
            image: "https://dsnlu.ac.in/storage/2025/11/9.jpg",
            link: "https://dsnlu.ac.in/events/special-lecture-on-careers-in-maritime-law-and-international-commercial-arbitration-by-shri-sri-hari-krishna-advocate-and-head-nimble-associates-dubai-at-dsnlu/",
        },
        {
            title: "Lecture on Law of Evidence by Hon’ble Shri. Justice D V S S Somayajulu.",
            image: "https://dsnlu.ac.in/storage/2025/11/1.jpeg",
            link: "https://dsnlu.ac.in/events/lecture-on-law-of-evidence-the-bharatiya-sakshya-adhiniyam-by-honble-shri-justice-d-v-s-s-somayajulu-former-judge-high-court-of-andhra-pradesh-senior-advocate-supreme-court-of-india-and-shri/",
        },
        {
            title: "Special Lecture by Prof. A. Chandra Mohan.",
            image: "https://dsnlu.ac.in/storage/2025/10/8.jpeg",
            link: "https://dsnlu.ac.in/events/special-lecture-by-prof-a-chandra-mohan-central-university-of-tamil-nadu-on-03-10-25/",
        },
        {
            title: "DSNLU – COMBINED CONVOCATION (8th, 9th, 10th, 11th & 12th Convocations).",
            image: "https://dsnlu.ac.in/storage/2025/09/029.jpeg",
            link: "https://dsnlu.ac.in/events/dsnlu-combined-convocation-8th-9th-10th-11th-12th-convocations-on-05-09-25/",
        },
        {
            title: "Inauguration of New Academic Block-II & Indoor Sports Complex.",
            image: "https://dsnlu.ac.in/storage/2025/09/A7.jpeg",
            link: "https://dsnlu.ac.in/events/inauguration-of-new-academic-block-ii-indoor-sports-complex-on-05-09-25/",
        },
        {
            title: "Endowment Lecture on “Climate Change and Law”.",
            image: "https://dsnlu.ac.in/storage/2025/09/4-2.jpeg",
            link: "https://dsnlu.ac.in/events/endowment-lecture-on-climate-change-and-law-on-05-09-25/",
        },
        {
            title: "UNVEILING OF THE STATUES – DSNLU.",
            image: "https://dsnlu.ac.in/storage/2025/09/11-1.jpeg",
            link: "https://dsnlu.ac.in/events/unveiling-of-the-statues-dsnlu-on-05-09-25/",
        },
        {
            title: "DSNLU WEEKLY LECTURE SERIES.",
            image: "https://dsnlu.ac.in/storage/2025/08/maxresdefault-1.jpg",
            link: "https://dsnlu.ac.in/events/dsnlu-weekly-lecture-series/",
        },
        {
            title: "Interactive Session by Prof.G.Mohan Gopal.",
            image: "https://dsnlu.ac.in/storage/2025/08/maxresdefault.jpg",
            link: "https://dsnlu.ac.in/events/interactive-session-by-prof-g-mohan-gopal-director-national-judicial-academy-bhopal/",
        },
        {
            title: "Guest talk by Hon’ble Justice D V S S Somayajulu & Shri. Vipin Nair.",
            image: "https://dsnlu.ac.in/storage/2025/08/1-7.jpeg",
            link: "https://dsnlu.ac.in/events/guest-talk-by-honble-justice-d-v-s-s-somayajulu-former-judge-high-court-of-a-p-sr-advocate-supreme-court-of-india-and-shri-vipin-nair-president-supreme-court-advocates-on-record-association/",
        },
        {
            title: "Orientation Lecture by Prof. Ranbir Singh.",
            image: "https://dsnlu.ac.in/storage/2025/08/1-6.jpeg",
            link: "https://dsnlu.ac.in/events/orientation-lecture-by-prof-ranbir-singh-pro-chancellor-iilm-university-on-22-08-2025/",
        },
        {
            title: "Independence Day Celebrations 2025.",
            image: "https://dsnlu.ac.in/storage/2025/08/12-2.jpeg",
            link: "https://dsnlu.ac.in/events/independence-day-celebrations-2025/",
        },
        {
            title: "Orientation Lecture By Hon’ble Dr. Justice Y. Lakshmana Rao.",
            image: "https://dsnlu.ac.in/storage/2025/08/9-1.jpeg",
            link: "https://dsnlu.ac.in/events/orientation-lecture-by-honble-dr-justice-y-lakshmana-rao-judge-high-court-of-a-p-on-09-08-2025/",
        },
        {
            title: "Orientation Lecture By Hon’ble Sri Justice Ravi Cheemalapati.",
            image: "https://dsnlu.ac.in/storage/2025/08/9.jpeg",
            link: "https://dsnlu.ac.in/events/orientation-lecture-by-honble-sri-justice-ravi-cheemalapati-judge-high-court-of-a-p-on-02-08-2025/",
        },
        {
            title: "DSNLU Lecture Series by Prof.(Dr.) D.S Prakasa Rao.",
            image: "https://dsnlu.ac.in/storage/2025/07/3-3.jpeg",
            link: "https://dsnlu.ac.in/events/dsnlu-weekly-lecture-series-1st-lecture-by-prof-dr-d-surya-prakasa-rao-vice-chancellor-dsnlu-on-18-07-25/",
        },
        {
            title: "Special Lecture on “Salient Features of Constitution of India”.",
            image: "https://dsnlu.ac.in/storage/2025/07/5-1.jpeg",
            link: "https://dsnlu.ac.in/events/special-lecture-on-salient-features-of-constitution-of-india-on-15-07-2025/",
        },
        {
            title: "Orientation Program for 1st Year B.A. LL.B. (Hons.) and 03 Year LL.B. students.",
            image: "https://dsnlu.ac.in/storage/2025/07/6.jpeg",
            link: "https://dsnlu.ac.in/events/orientation-program-for-1st-year-b-a-ll-b-hons-and-03-year-ll-b-students/",
        },
        {
            title: "Renovation of Academic Block & Plantation.",
            image: "https://dsnlu.ac.in/storage/2025/06/01.webp",
            link: "https://dsnlu.ac.in/events/to-mark-renovation-of-academic-block-plantation-in-dsnlu-on-13th-june-2025/",
        },
        {
            title: "13th Andhra Battalion Visakhapatnam – Annual Training Camp.",
            image: "https://dsnlu.ac.in/storage/2025/06/15.webp",
            link: "https://dsnlu.ac.in/events/13th-andhra-battalion-visakhapatnam-annual-training-camp-at-dsnlu/",
        },
        {
            title: "DSNLU – Solidarity to Indian Armed Forces on Operation Sindoor.",
            image: "https://dsnlu.ac.in/storage/2025/05/3-1.jpeg",
            link: "https://dsnlu.ac.in/events/dsnlu-solidarity-to-indian-armed-forces-on-operation-sindoor/",
        },
        {
            title: "DPIIT, IPR Chair – Program on IP & Music.",
            image: "https://dsnlu.ac.in/storage/2025/04/5-5.jpeg",
            link: "https://dsnlu.ac.in/events/dpiit-ipr-chair-dsnlu-program-on-ip-music-on-world-intellectual-property-day-26th-april2025/",
        },
        {
            title: "134th Birthday (Jayanthi) Celebrations of Bharat Ratna “Dr. B. R. Ambedkar”.",
            image: "https://dsnlu.ac.in/storage/2025/04/5-2.jpeg",
            link: "https://dsnlu.ac.in/events/134th-birthday-jayanthi-celebrations-of-bharat-ratna-dr-b-r-ambedkar-dsnlu/",
        },
        {
            title: "Justice Dr. V.R.K. Kurpa Sagar Special Lecture.",
            image: "https://dsnlu.ac.in/storage/2025/04/1-3.jpeg",
            link: "https://dsnlu.ac.in/events/justice-dr-v-r-k-kurpa-sagar-judge-high-court-of-a-p-visited-dsnlu-and-delivered-special-lecture-on-legal-education-and-profession/",
        },
        {
            title: "Intra Mock Trial Competition 2025.",
            image: "https://dsnlu.ac.in/storage/2025/04/3-1.jpg",
            link: "https://dsnlu.ac.in/events/intra-mock-trial-competition-2025-dsnlu-on-5th-6th-april-2025/",
        },
        {
            title: "Ugadi Celebrations – 2025.",
            image: "https://dsnlu.ac.in/storage/2025/04/1-6.jpeg",
            link: "https://dsnlu.ac.in/events/ugadi-celebrations-2025-dsnlu-on-30-03-2025/",
        },
        {
            title: "ONE DAY INTERNATIONAL WORKSHOP on CAREERS and TRENDS in INTERNATIONAL LAW.",
            image: "https://dsnlu.ac.in/storage/2025/03/17-1.jpg",
            link: "https://dsnlu.ac.in/events/one-day-international-workshop-on-careers-and-trends-in-international-law-by-cilad-dsnlu/",
        },
        {
            title: "National Level Competition on Crime Scene Investigation (CSI 6.0) 2025.",
            image: "https://dsnlu.ac.in/storage/2025/03/01.jpg",
            link: "https://dsnlu.ac.in/events/dsnlu-national-level-competition-on-crime-scene-investigation-csi-6-0-2025/",
        },
        {
            title: "National Colloquium On Redefining IP And Privacy.",
            image: "https://dsnlu.ac.in/storage/2025/03/24.jpg",
            link: "https://dsnlu.ac.in/events/dsnlu-national-colloquium-on-redefining-ip-and-privacy-in-an-accelerating-digital-landscape/",
        },
        {
            title: "VIS PRE-MOOT 2025.",
            image: "https://dsnlu.ac.in/storage/2025/03/8.jpg",
            link: "https://dsnlu.ac.in/events/vis-pre-moot-2025/",
        },
        {
            title: "Republic Day Celebrations – 2025.",
            image: "https://dsnlu.ac.in/storage/2025/01/9-5.jpg",
            link: "https://dsnlu.ac.in/events/republic-day-celebrations-2025/",
        },
        {
            title: "DSNLU CAMPUS VISIT by Hon’ble Justice Dhiraj Singh Thakur.",
            image: "https://dsnlu.ac.in/storage/2025/01/16-2.jpg",
            link: "https://dsnlu.ac.in/events/dsnlu-campus-visit-by-honble-justice-dhiraj-singh-thakur-honble-chief-justice-high-court-of-a-p-chancellor-dsnlu/",
        },
        {
            title: "DSNLU CAMPUS VISIT by Hon’ble Justice Pamidighantam Sri Narasimha.",
            image: "https://dsnlu.ac.in/storage/2025/01/15-1-1.jpg",
            link: "https://dsnlu.ac.in/events/dsnlu-campus-visit-by-honble-justice-pamidighantam-sri-narasimha-judge-supreme-court-of-india-visitor-dsnlu/",
        },
        {
            title: "Inauguration of National Youth Day Celebrations 2025.",
            image: "https://dsnlu.ac.in/storage/2025/01/3-2.jpg",
            link: "https://dsnlu.ac.in/events/inauguration-of-national-youth-day-celebrations-2025-dsnlu/",
        },
    ],
    "2024": [
        {
            title: "World Human Rights Day @ DSNLU on 10th December 2024",
            image: "https://dsnlu.ac.in/storage/2024/12/1-3.jpeg",
            link: "https://dsnlu.ac.in/events/world-human-rights-day-dsnlu-on-10th-december-2024/",
        },
        {
            title: "Observing Mahaparinirvan Diwas, the 69th Death Anniversary of DR. B.R. AMBEDKAR",
            image: "https://dsnlu.ac.in/storage/2024/12/1.jpg",
            link: "https://dsnlu.ac.in/events/observing-mahaparinirvan-diwas-the-69th-death-anniversary-of-dr-b-r-ambedkar-dsnlu-on-6th-december-2024/",
        },
        {
            title: "75th CONSTITUTIONAL DAY CELEBRATIONS @ DSNLU",
            image: "https://dsnlu.ac.in/storage/2024/11/2.jpg",
            link: "https://dsnlu.ac.in/events/75th-constitutional-day-celebrations-dsnlu-on-26th-november-2024/",
        },
        {
            title: "Two Day Interview Training Workshop",
            image: "https://dsnlu.ac.in/storage/2024/10/1-1.jpeg",
            link: "https://dsnlu.ac.in/events/two-day-interview-training-workshop-on-24-25-september-2024-seminar-hall-dsnlu-to-programs/",
        },
        {
            title: "1st Shri. D.V. Subba Rao National Mediation Competition 2024",
            image: "https://dsnlu.ac.in/storage/2024/10/8.jpeg",
            link: "https://dsnlu.ac.in/events/1st-shri-d-v-subba-rao-national-mediation-competition-2024-on-20th-to-22nd-september-2024-dsnlu/",
        },
        {
            title: "Orientation Program for 3 Year LL.B. Students",
            image: "https://dsnlu.ac.in/storage/2024/10/1-2.jpeg",
            link: "https://dsnlu.ac.in/events/orientation-program-for-3-year-ll-b-students-on-18-9-24-by-prof-dr-r-venkata-rao-honble-vice-chancellor-iiuler-goa-former-vice-chancellor-nlsiu-to-the-page-of-programs/",
        },
        {
            title: "DPIIT IPR Chair – Inauguration",
            image: "https://dsnlu.ac.in/storage/2024/09/14-1.jpeg",
            link: "https://dsnlu.ac.in/events/dpiit-ipr-chair-inauguration-19-08-2024/",
        },
        {
            title: "Independence Day Celebrations 2024",
            image: "https://dsnlu.ac.in/storage/2024/09/11-scaled.jpeg",
            link: "https://dsnlu.ac.in/events/independence-day-celebrations-2024/",
        },
        {
            title: "Orientation Lecture 8-8-24",
            image: "https://dsnlu.ac.in/storage/2024/09/3-1.jpeg",
            link: "https://dsnlu.ac.in/events/orientation-lecture-8-8-24/",
        },
        {
            title: "Orientation Lecture @ DSNLU by Hon’ble Justice Dr. K. Manmadha Rao",
            image: "https://dsnlu.ac.in/storage/2024/07/12-1.jpeg",
            link: "https://dsnlu.ac.in/events/orientation-lecture-dsnlu-by-honble-justice-dr-k-manmadha-rao-judge-high-court-of-a-p-on-13th-july-2024/",
        },
    ],
    "2023": [],
    "2022": [],
};

export default function EventsGalleryPage() {
    const [activeYear, setActiveYear] = useState("2025");
    const [dbEvents, setDbEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchGallery = async () => {
            const data = await db.gallery.getAll();
            if (data) {
                const formattedEvents = data.map((item: any) => ({
                    title: item.caption || "Untitled",
                    image: item.url,
                    link: "#"
                }));
                setDbEvents(formattedEvents);
            }
        };
        fetchGallery();
    }, []);

    // Merge DB events with 2025 static events
    const currentEvents = activeYear === "2025"
        ? [...(dbEvents || []), ...(eventsData["2025"] || [])]
        : eventsData[activeYear] || [];

    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="Events Gallery" />

            <div className="container mx-auto mt-12 px-4">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {["2025", "2024", "2023", "2022"].map((year) => (
                        <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                                activeYear === year
                                    ? "bg-dsnlu-azure text-white shadow-md"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                            )}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Events Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {currentEvents.length > 0 ? (
                        currentEvents.map((event, index) => (
                            <Card
                                key={index}
                                className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <CardContent className="flex flex-col flex-grow p-6">
                                    <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-4 line-clamp-3 group-hover:text-dsnlu-azure transition-colors">
                                        {event.title}
                                    </h3>
                                    <div className="mt-auto pt-4">
                                        <Link
                                            href={event.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-dsnlu-azure rounded-md hover:bg-dsnlu-dark-blue transition-colors duration-200"
                                        >
                                            View More
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 text-slate-500">
                            No events found for {activeYear}.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
