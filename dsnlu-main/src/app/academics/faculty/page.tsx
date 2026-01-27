"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const facultyData = {
    administration: [
        {
            name: "Prof. (Dr) D. Surya Prakasa Rao",
            designation: "Hon'ble Vice Chancellor",
            image: "https://dsnlu.ac.in/storage/2023/10/3-1-e1712994432753.jpeg",
            link: "https://dsnlu.ac.in/faculty/prof-d-surya-prakasa-rao/",
        },
    ],
    regular: [
        {
            name: "Prof. Nandini C.P",
            designation: "Professor",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-Nandini.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-nandini-c-p/",
        },
        {
            name: "Dr. Dayananda Murthy C.P",
            designation: "Associate Professor",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-Dayananda.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-dayananda-murthy/",
        },
        {
            name: "Dr. P. Jogi Naidu",
            designation: "Associate Professor",
            image: "https://dsnlu.ac.in/storage/2022/12/Mr.-Jogi-Naidu-2.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-p-jogi-naidu/",
        },
        {
            name: "Dr. R. Bharat Kumar",
            designation: "Assistant Professor",
            image: "https://dsnlu.ac.in/storage/2022/12/bharat-sir-1.png",
            link: "https://dsnlu.ac.in/faculty/dr-r-bharat-kumar/",
        },
        {
            name: "Dr. Soma Battacharjya",
            designation: "Assistant Professor",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-Soma.jpg",
            link: "https://dsnlu.ac.in/faculty/ms-soma-battacharjya-m-a-ll-m/",
        },
        {
            name: "Dr. Bhagyalakshmi N",
            designation: "Assistant Professor",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-N.-Bhagya-lakshmi.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-namballa-bhagyalakshmi/",
        },
        {
            name: "Dr. Ch. Lakshmi",
            designation: "Assistant Professor",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-Ch.Lakshmi.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-lakshmi-chebolu/",
        },
        {
            name: "Dr. A. Nageswara Rao",
            designation: "Assistant Professor",
            image: "https://dsnlu.ac.in/storage/2024/10/Dr.-A.-Nageswar-Rao-1.png",
            link: "https://dsnlu.ac.in/faculty/dr-a-nageswara-rao/",
        },
        {
            name: "Dr. Rifat Khan",
            designation: "Assistant Professor",
            image: "https://dsnlu.ac.in/storage/2024/10/Dr.-Rifat-Khan.png",
            link: "https://dsnlu.ac.in/faculty/dr-rifat-khan/",
        },
        {
            name: "Dr. Viswachandra Nath Madasu",
            designation: "Lecturer",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-Viswachandra.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-viswachandra-nath-madasu/",
        },
        {
            name: "Mr. Abhishek Sinha",
            designation: "Lecturer",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-Abhiskek.jpg",
            link: "https://dsnlu.ac.in/faculty/mr-abhishek-sinha/",
        },
        {
            name: "Dr. Deepthi R",
            designation: "Teaching Associate",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-Deepthi.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-deepthi-rodda/",
        },
        {
            name: "Dr. Neelima Boghadi",
            designation: "Teaching Associate",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-Neelima.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-b-neelima/",
        },
        {
            name: "Ms. Sherley Hepsiba Dokiburra",
            designation: "Teaching Associate",
            image: "https://dsnlu.ac.in/storage/2024/10/Dr.-Sherley-Hepsiba-Dokiburra-1.png",
            link: "https://dsnlu.ac.in/faculty/dr-sherleyhepsibadokiburra/",
        },
        {
            name: "Dr.Arvind Nath Tripathi",
            designation: "Research Assistant",
            image: "https://dsnlu.ac.in/storage/2022/12/arvind-tripathi-1.png",
            link: "https://dsnlu.ac.in/faculty/dr-arvindnath-tripathi/",
        },
        {
            name: "Ms. D Aparna",
            designation: "Research Assistant",
            image: "https://dsnlu.ac.in/storage/2024/10/Ms.-D.-Aparna-2.png",
            link: "https://dsnlu.ac.in/faculty/ms-d-aparna/",
        },
        {
            name: "Ms. Gali Parivarthana",
            designation: "Research Assistant",
            image: "https://dsnlu.ac.in/storage/2024/10/Ms.-Gali-Parivarthana-1.png",
            link: "https://dsnlu.ac.in/faculty/ms-galiparivarthana/",
        },
        {
            name: "Dr. S. Kiran Kumari",
            designation: "Research Assistant",
            image: "https://dsnlu.ac.in/storage/2024/11/Dr.-S.-Kiran-Kumari.png",
            link: "https://dsnlu.ac.in/faculty/dr-s-kiran-kumari/",
        },
    ],
    contract: [
        {
            name: "Dr. K Sudha",
            designation: "Assistant Professor",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-K.Sudha_.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-k-sudha/",
        },
        {
            name: "Dr. V.Sunitha",
            designation: "Assistant Professor",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-V.Sunitha.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-v-sunitha/",
        },
        {
            name: "Dr. Paramata Bhuvaneswari",
            designation: "Teaching Associate",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-P.Bhuvaneswari.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-p-bhuvaneswari/",
        },
        {
            name: "Dr. Durga Prasad Inturu",
            designation: "Teaching Associate",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-Durga-Prasad.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-i-durga-prasad/",
        },
    ],
    adhoc: [
        {
            name: "Mr. R.V Vishnu kumar",
            designation: "Assistant Professor",
            image: "https://dsnlu.ac.in/storage/2022/12/Mr.-Vishnu-Kumar.jpg",
            link: "https://dsnlu.ac.in/faculty/mr-r-v-vishnukumar/",
        },
        {
            name: "Mr. A. Nageswara Rao",
            designation: "Adhoc Faculty",
            image: "https://dsnlu.ac.in/storage/2022/12/NAGESWARA.png",
            link: "https://dsnlu.ac.in/faculty/sri-a-nageswara-rao/",
        },
        {
            name: "Prof. Killi Janardhana Rao",
            designation: "Adhoc Faculty",
            image: "https://dsnlu.ac.in/storage/2025/03/Prof.-Killi-Janardhana-Rao.png",
            link: "https://dsnlu.ac.in/faculty/prof-killi-janardhana-rao/",
        },
        {
            name: "Dr. T. Y. Nirmala Devi",
            designation: "Faculty - Political Science",
            image: "https://dsnlu.ac.in/storage/2022/12/Dr.-Nirmala.jpg",
            link: "https://dsnlu.ac.in/faculty/dr-t-y-nirmala-devi/",
        },
        {
            name: "Mr. R. V Prasad",
            designation: "Faculty - Sociology",
            image: "https://dsnlu.ac.in/storage/2024/10/Mr.-R.V.-Prasad-1.png",
            link: "https://dsnlu.ac.in/faculty/mr-r-v-prasad/",
        },
        {
            name: "Dr. Sarita Rani Chukka",
            designation: "Faculty - English",
            image: "https://dsnlu.ac.in/storage/2024/10/Dr.-Saritha-Rani.png",
            link: "https://dsnlu.ac.in/faculty/dr-sarita-rani-chukka/",
        },
    ],
};

const tabs = [
    { id: "administration", label: "Administration Staff" },
    { id: "regular", label: "Regular Faculty" },
    { id: "contract", label: "5 Year Contract" },
    { id: "adhoc", label: "Adhoc Faculty" },
];

export default function FacultyPage() {
    const [activeTab, setActiveTab] = useState("administration");

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
                        Faculty
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                {/* Tabs */}
                <div className="mb-8 flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-4 md:justify-start">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "rounded-full px-6 py-2 text-sm font-medium transition-all duration-200",
                                activeTab === tab.id
                                    ? "bg-dsnlu-azure text-white shadow-md"
                                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-dsnlu-dark-blue"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {facultyData[activeTab as keyof typeof facultyData].map((member, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden border-none shadow-md transition-all hover:shadow-xl"
                        >
                            <CardContent className="p-0">
                                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
                                        <a
                                            href={member.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block rounded-md bg-dsnlu-lime px-4 py-2 text-xs font-bold text-dsnlu-dark-blue hover:bg-white"
                                        >
                                            View Profile
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-white p-4 text-center">
                                    <h3 className="mb-1 text-lg font-bold text-dsnlu-dark-blue">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-medium text-dsnlu-azure">
                                        {member.designation}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
