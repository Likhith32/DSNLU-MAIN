"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { PlayCircle, Calendar, User } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define types for our data
type VideoLink = {
    title: string;
    url: string;
};

type Lecture = {
    image: string;
    speaker: string;
    designation?: string;
    topics: string[];
    videos?: VideoLink[];
};

type YearData = {
    [year: string]: Lecture[];
};

const guestLecturesData: YearData = {
    "2025": [
        {
            image: "https://dsnlu.ac.in/storage/2025/11/Screenshot-2025-11-18-155643.png",
            speaker: "Acharya Venkatesh Chakkilam",
            designation: "Scholar in Sanskrit, Vedanta, and Shad-Darshana",
            topics: ["Lecture on “Nyaya”"],
            videos: [
                {
                    title: 'Guest lecture "Nyaya" by Acharya Venkatesh Chakkilam',
                    url: "https://www.youtube.com/watch?v=ATi3XzSUztY",
                },
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/11/2-2-e1763443520837.jpg",
            speaker: "Dr. Debasree Debnath",
            designation: "Assistant Professor of Law, NLU Tripura",
            topics: ["Guest Lecture Series"],
            videos: [
                {
                    title: "Guest lecture by Dr. Debasree Debnath",
                    url: "https://www.youtube.com/watch?v=1Nk5gJXnUYs",
                },
                {
                    title: "DSNLU Guest Lecture 2",
                    url: "https://www.youtube.com/watch?v=8DFICW8grjk",
                },
                {
                    title: "DSNLU Guest Lecture 3",
                    url: "https://www.youtube.com/watch?v=yniXCP7f_RU",
                },
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/10/Prof.-Dr.-Jeet-Singh-Man.jpeg",
            speaker: "Prof. (Dr.) Jeet Singh Mann",
            designation: "Professor, NLU, DELHI",
            topics: [
                "What is Research?",
                "Law of Torts",
                "Quality Research",
                "Labour Laws",
            ],
            videos: [
                {
                    title: "Special Lecture | What is Research?",
                    url: "https://www.youtube.com/watch?v=MPJcVCuUIHs",
                },
                {
                    title: "Special Lecture | Law of Torts",
                    url: "https://www.youtube.com/watch?v=jCYnWvi2YLY",
                },
                {
                    title: "Special Lecture | Quality Research",
                    url: "https://www.youtube.com/watch?v=j3i_CrRAHYQ",
                },
                {
                    title: "Special Lecture | Labour Laws",
                    url: "https://www.youtube.com/watch?v=mPOWUkM4TvA",
                },
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/10/Prof.-Dr.-Lakshminath.jpg",
            speaker: "Prof. Dr. A. Lakshminath",
            designation: "Founder Chancellor of DSNLU",
            topics: ["Constitutional Law"],
            videos: [
                {
                    title: "Special Lecture | Constitutional Law",
                    url: "https://www.youtube.com/watch?v=H1qFjo1Laww",
                },
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/07/Dr.-Jagdish-W.-Khobragade.png",
            speaker: "Dr. Jagdish W. Khobragade",
            designation:
                "Assistant Professor of Law, Maharashtra National Law University, Nagpur",
            topics: [
                "Lecture on “IPR & Labor Law” for 5th Semester Students on 17th, 18th July, 2025",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/04/Prof.-Dr.-David-Ambrose-.png",
            speaker: "Prof. (Dr.) David Ambrose",
            designation: "Department of Legal Studies, University of Madras",
            topics: [
                "Special Lecture on “Orientation – Moot Court” on 21-04-2025",
                "Lecture on Jurisprudence on 21-04-2025 & 22-04-2025",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2023/11/dummy.png",
            speaker: "Dr. Poosarla Bayola Kiran",
            designation:
                "Assistant Professor of Law, NALSAR University of Law, Hyderabad",
            topics: [
                "Lecture on RERA Infrastructure Development on 22-04-2025",
                "Lecture on Jurisprudence on 22-04-2025 & 23-04-2025",
                "Lecture on Ropeways Projects and Legal Framework on 23-04-2025",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/04/Prof.-Dr.-Kondaiah-Jonnalagadda.png",
            speaker: "Prof. (Dr.) Kondaiah Jonnalagadda",
            designation: "Professor of Law, MNLU, Chhatrapati Sambhajinagar",
            topics: [
                "Lecture on Research Methods and Economic Offences on 19th April, 2025",
                "Lecture on Contemporary Research Areas in Transnational Law on 20th April, 2025",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/04/Prof.-Anand-Prakash-Mishra.png",
            speaker: "Prof. Anand Prakash Mishra",
            designation:
                "Prof. of Practice & Vice Dean, Jindal Global Law School; Director of Law Admissions – O.P. Jindal Global University",
            topics: [
                "Lecture on Institution Building in Law School: Opportunities and Challenges",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/04/Sri.-V.-Kalyana-Rama-Rao.png",
            speaker: "Sri. V. Kalyana Rama Rao",
            designation: "Senior Advocate",
            topics: [
                "The Scope of Power of the Supreme Court under Art. 142 of Constitution",
                "Discussion on The State of Tamil Nadu v. The Governor of Tamil Nadu and ANR",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/04/Dr-RajeshKumar-Ramnandan-singh.png",
            speaker: "Dr. Rajesh Kumar Ramnandan Singh",
            designation: "Associate Professor, Parul University, Gujarat",
            topics: [
                "Information to Police and Their Power to Investigate – Bail Provision in India (01st April, 2025)",
                "Law of Contracts (02nd April, 2025)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/04/Mr.-Shubhank-Khare.png",
            speaker: "Mr. Shubhank Khare",
            designation: "Manager – Legal Career, Parul University, Gujarat",
            topics: [
                "Lecture on Careers and Placements (01st & 02nd April, 2025)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2023/11/dummy.png",
            speaker: "Mr. Samuel Nagdesi",
            designation: "Chartered Accountant",
            topics: [
                "LEGAL PROWESS & ARTIFICIAL INTELLIGENCE- THE FUTURE OF LEGAL PROFESSION (26th March, 2025)",
                "INTERNATIONAL BUSINESS THE LANDSCAPE-ECONOMICS, FINANCE, RISK MANAGEMENT & TAXATION & DISPUTE RESOLUTION (27th March, 2025)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/03/Dr-Ketan-Piyushbhai-Desai.webp",
            speaker: "Dr. Ketan Piyushbhai Desai",
            designation: "Principal, Parul Institute of Law, PARUL UNIVERSITY",
            topics: [
                "Research Methodology (24th Feb, 2025)",
                "Centre State Relations (25th Feb, 2025)",
                "Human Rights and Law (27th Feb, 2025)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/03/Dr-Ruchi-Tiwari.webp",
            speaker: "Dr. Ruchi Tiwari",
            designation: "Associate Professor, PARUL UNIVERSITY",
            topics: [
                "IPR – Geographical Indicators and Research Methodology (24th & 25th Feb, 2025)",
                "Forensic Science and Law (27th Feb, 2025)",
            ],
        },
    ],
    "2024": [
        {
            image: "https://dsnlu.ac.in/storage/2024/03/Dr.-Y.-Vishnu-Priya.png",
            speaker: "Sri. Ramana Kompella",
            designation:
                "Vice President, Cisco Fellow and Head of Cisco Research Wing, USA",
            topics: [
                "Relevance of the Caste and Class Discrimination in Corporate World (11th Nov, 2024)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/03/Dr.-Y.-Vishnu-Priya.png",
            speaker: "CIPR&T",
            designation: "",
            topics: ["Industrial Design Symposium (26th Oct, 2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/03/Dr.-Y.-Vishnu-Priya.png",
            speaker: "Prof. T Ramakrishna",
            designation:
                "Former Professor & IPR Chair Professor at MHRD, NLSIU",
            topics: ["Intellectual Property Law (26th Oct, 2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/03/Dr.-Y.-Vishnu-Priya.png",
            speaker: "Dr J K Pradhan",
            designation:
                "Joint Controller of Patents and Designs, RGNIIPM Government of India",
            topics: ["The Patent Law (26th Oct, 2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/03/Dr.-Y.-Vishnu-Priya.png",
            speaker: "Ms. Disha Chaudhari",
            designation:
                "Senior Research Associate at CLPR, Bengaluru",
            topics: [
                "Diversity, Equity, and Inclusivity in the Workplace (28th Sept, 2024)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2025/04/Prof-R-Venkata-Rao.png",
            speaker: "Prof. (Dr.) R. Venkata Rao",
            designation:
                "Hon’ble Vice Chancellor IIULER, Goa & Former Vice Chancellor NLSIU",
            topics: ["New Criminal Laws (19th Sept, 2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/03/Dr.-Y.-Vishnu-Priya.png",
            speaker: "Dr. G.S. Chauhan",
            designation: "Joint Secretary UGC",
            topics: [
                "Role of women in the construction of global society with special reference to India (05th Aug, 2024)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/03/Dr.-Y.-Vishnu-Priya.png",
            speaker: "Dr. Nitu Kumari",
            designation:
                "Assistant Professor of History, Maharashtra National Law University, Nagpur",
            topics: [
                "Ancient Jurisprudence and Indian Constitution (29th July, 2024)",
                "British Imperialism impact on Indian Constitution (29th July, 2024)",
                "How to publish your research paper (30th July, 2024)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/03/Dr.-Y.-Vishnu-Priya.png",
            speaker: "Dr. Debasree Debnath",
            designation: "Assistant Professor of Law, National Law University Tripura",
            topics: ["Family Law/Jurisprudence/ Legal Methods (29, 30th July, 2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/07/DSNLU-Guest-Lecture.png",
            speaker: "Prof. (Dr.) V. Kesava Rao",
            designation:
                "Adjunct Professor of Law, NALSAR, Hyderabad; Former I/C Vice Chancellor, DSNLU and NUSRL, Ranchi",
            topics: ["Specific Contracts (10th July, 2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/DR-PAYAL-THAOREY38071.jpg",
            speaker: "Dr. Payal Thaorey",
            designation:
                "Head of the Department, Assistant Professor(Sr. Gr), Rashtrasant Tukadoji Maharaj Nagpur University",
            topics: ["Cyber Laws (03-04-2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/Mr.-Ravi-Kiran-Edara-e1712146122949.jpeg",
            speaker: "Mr. Ravi Kiran Edara",
            designation: "Additional Director General, NACIN, Visakhapatnam",
            topics: [
                "Thriving Beyond Exams: Strategies for Success and Joyful Living (02-04-2024)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/03/Dr.-Y.-Vishnu-Priya.png",
            speaker: "Prof. (Dr.) Y. Vishnu Priya",
            designation: "Professor of Law, Osmania University, Hyderabad",
            topics: [
                "Family Law- II (18-03-2024)",
                "Labour Law -II (19-03-2024)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/Dr.-Ch.-Sudhakara-Babu-e1712146097438.jpeg",
            speaker: "Dr. Ch. Sudhakara Babu",
            designation: "Principal, Jagarlamudi Chandramouli College, Guntur",
            topics: [
                "Growing Menace of Violence Against Women - The Ways of Curbing It (12-03-2024)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/03/Dr.-K.V.-Kumar.png",
            speaker: "Dr. K.V. Kumar",
            designation: "Additional Legislative Counsel, Govt. of India official, Delhi",
            topics: ["Delivered Lecture to LL.M Students (09-03-2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/Dr.-A.-Raghunadha-Reddy-e1712146167646.jpeg",
            speaker: "Prof. (Dr.) A. Raghunadha Reddy",
            designation: "Former Professor, The Tamilnadu Ambedkar Law University, Chennai",
            topics: [
                "Legal Studies: A Movement from Rationalism to Empiricism (5th, 6th-03-2024)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/Dr.-Reddivari-Revath-e1712146296502.jpeg",
            speaker: "Prof. (Dr.) Reddivari Revathi",
            designation: "Former Professor, The Tamilnadu Ambedkar Law University, Chennai",
            topics: [
                "Interactions between Social Norms and Legal Norms (5th, 6th-03-2024)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/Mr.-Samuel-Nagadesi-e1712146367612.jpeg",
            speaker: "Mr. Samuel Nagadesi",
            designation: "Chartered Accountant",
            topics: ["Tax Law (01-03-2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/Ms.-Preeti-e1712146418787.jpeg",
            speaker: "Ms. Preeti",
            designation: "Assistant Professor of Law, MNLU, Nagpur",
            topics: ["Family Law- II (26th, 27th-02-2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/gl24-1.jpeg",
            speaker: "Hon’ble Justice DVSS Somayajulu",
            designation: "Former Judge, High Court of A.P. & Professor Emeritus, DSNLU",
            topics: ["ADR (20-02-2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/gl24-2.jpeg",
            speaker: "Dr. Poosarla Bayola Kiran",
            designation: "Assistant Professor of Law, NALSAR University of Law, Hyderabad",
            topics: [
                "Law of Banking and Negotiable Instruments & Sports Laws (15-02-2024 & 16-02-2024)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/gl24-3.jpg",
            speaker: "Prof. (Dr.) M. V. R. Raju",
            designation:
                "Senior Professor and Head Dept. of Psychology and Parapsychology, Andhra University, Visakhapatnam",
            topics: ["Mental Health and Social Well Being (12-02-2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/gl24-4.jpeg",
            speaker: "Sri Alapati Giridhar",
            designation: "Principal District and Sessions Judge, Visakhapatnam",
            topics: ["Dynamics of Legal Profession (10-02-2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/gl24-5.jpeg",
            speaker: "Prof. (Dr.) David Ambrose",
            designation:
                "Professor and Head (Rtd), Department of Legal Studies, University of Madras",
            topics: ["ADR (08-02-2024)"],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/gl24-6.jpeg",
            speaker: "Mr. Amitava Majumdar",
            designation: "Managing Partner, Bose and Mitra. Mumbai",
            topics: [
                "Maritime law – An Introduction Career Prospects in Maritime Law (05-02-2024)",
            ],
        },
    ],
    "2023": [
        {
            image: "https://dsnlu.ac.in/storage/2024/04/Prof.-Dr.-Kondaiah-Jonnalagadda.jpg",
            speaker: "Prof. (Dr.) Kondaiah Jonnalagadda",
            designation:
                "Professor of Law and Head-Department of Law, MNLU, Aurangabad",
            topics: [
                "Law on Capital Markets and Prospectus (28th Nov, 2023)",
                "The Takeover Code 2011 (29th Nov, 2023)",
                "Research Methodology (30th Nov, 2023)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/Prof.-A-Lakshminath1.jpeg",
            speaker: "Prof. (Dr.) A. Lakshminath",
            designation:
                "Founder Chancellor of DSNLU & Professor of Emirates NLS, Aurangabad",
            topics: [
                "Constitutional Law (28th Nov, 2023)",
                "Jurisprudence (28th Nov, 2023)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/dsnlu-1.jpg",
            speaker: "Prof. (Dr.) David Ambrose",
            designation:
                "Professor and Head (Rtd), Department of Legal Studies, University of Madras",
            topics: [
                "Law and Justice in a Globalised World (7th Nov, 2023)",
                "Research Methods and Legal Writing (8th Nov, 2023)",
                "Public International Law (09th Nov, 2023)",
                "Jurisprudence (10th Nov, 2023)",
            ],
        },
        {
            image: "https://dsnlu.ac.in/storage/2024/04/N.-Venkateshwarlu-264x300-1.jpg",
            speaker: "Prof. N. Venkateshwarlu",
            designation: "Professor of Law, Osmania University",
            topics: [
                "Guest Lecture (8th Nov, 2023)",
                "Commercial Arbitration (09th Nov, 2023)",
                "Corporate Securities Laws (10th Nov, 2023)",
            ],
        },
    ],
};

export default function GuestLecturesPage() {
    const [activeYear, setActiveYear] = useState("2025");

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
                        GUEST LECTURES
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {["2025", "2024", "2023"].map((year) => (
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

                {/* Lectures Grid */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Calendar className="h-6 w-6 text-dsnlu-azure" />
                        <h2 className="text-2xl font-bold text-dsnlu-dark-blue">
                            Guest Lectures - {activeYear}
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {guestLecturesData[activeYear].map((lecture, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row">
                                        {/* Image Section */}
                                        <div className="w-full md:w-1/3 relative h-64 md:h-auto bg-slate-100">
                                            <Image
                                                src={lecture.image}
                                                alt={lecture.speaker}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Details Section */}
                                        <div className="w-full md:w-2/3 p-6 flex flex-col">
                                            <div className="mb-4">
                                                <div className="flex items-start gap-2 mb-1">
                                                    <User className="h-5 w-5 text-dsnlu-azure mt-1 shrink-0" />
                                                    <div>
                                                        <h3 className="text-lg font-bold text-dsnlu-dark-blue">
                                                            {lecture.speaker}
                                                        </h3>
                                                        {lecture.designation && (
                                                            <p className="text-sm text-slate-500 mt-1">
                                                                {lecture.designation}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex-grow">
                                                <h4 className="font-semibold text-slate-700 mb-2">
                                                    Topics Covered:
                                                </h4>
                                                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                                                    {lecture.topics.map((topic, i) => (
                                                        <li key={i}>{topic}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {lecture.videos && lecture.videos.length > 0 && (
                                                <div className="mt-6 pt-4 border-t border-slate-100">
                                                    <h4 className="font-semibold text-dsnlu-lime mb-3 flex items-center gap-2">
                                                        <PlayCircle className="h-4 w-4" />
                                                        Watch Videos
                                                    </h4>
                                                    <div className="space-y-2">
                                                        {lecture.videos.map((video, i) => (
                                                            <a
                                                                key={i}
                                                                href={video.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="block text-sm text-slate-600 hover:text-dsnlu-azure hover:underline truncate"
                                                            >
                                                                {video.title}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
