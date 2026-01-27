"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Mail, Phone, User } from "lucide-react";
import Image from "next/image";

const libraryImages = [
    "https://dsnlu.ac.in/storage/2023/01/Library-image-1.jpg",
    "https://dsnlu.ac.in/storage/2023/01/Library-image-5.jpg",
    "https://dsnlu.ac.in/storage/2023/01/Library-image-4.jpg",
    "https://dsnlu.ac.in/storage/2023/01/Library-image-3.jpg",
    "https://dsnlu.ac.in/storage/2023/01/Library-image-2.jpg",
];

const teamMembers = [
    {
        name: "Dr. Rajesh Jampani",
        designation: "Deputy Librarian & Librarian I/c",
        image: "https://dsnlu.ac.in/storage/2023/01/Dr.Rajesh.jpg",
    },
    {
        name: "Dr. R.Leela Mohana Kumari",
        designation: "Assistant Librarian",
        image: "https://dsnlu.ac.in/storage/2023/01/Dr.-Leela.jpg",
    },
    {
        name: "Mr. M. Dhanunjaya Naidu",
        designation: "Assistant Librarian",
        image: "https://dsnlu.ac.in/storage/2023/01/Dhananjuya-Naidu.jpg",
    },
    {
        name: "Mr. D.V.V.G. Muralidhar Rao",
        designation: "Sr. Record Assistant",
        image: "https://dsnlu.ac.in/storage/2023/01/Murali.jpg",
    },
    {
        name: "Mr. E. Shanmukeswara Rao",
        designation: "Record Assistant",
        image: "https://dsnlu.ac.in/storage/2023/01/shanmukha-.jpg",
    },
    {
        name: "Mr. D. Ram Prasad",
        designation: "Attender",
        image: "https://dsnlu.ac.in/storage/2023/01/D.Ram-Prasad.jpg",
    },
    {
        name: "N. Eswar Rao",
        designation: "Administrative Assistant",
        image: "https://dsnlu.ac.in/storage/2023/02/eswar-rao-scaled.jpg",
    },
];

const advisoryCommittee = [
    { name: "Dr. B. Soma", role: "Chair Person" },
    { name: "Prof. Nandini C.P.", role: "Member" },
    { name: "Dr. P. Jogi Naidu", role: "Member" },
    { name: "Dr. Rifat Khan", role: "Member" },
    { name: "Ms. Sherley Hepsiba D", role: "Member" },
    { name: "Dr. J. Rajesh", role: "Convener" },
    { name: "Dr. R. Leela Mohana Kumari", role: "Co-Convener" },
];

export default function AboutLibraryPage() {
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
                        ABOUT LIBRARY
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4 space-y-12">
                {/* Description & Gallery */}
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {libraryImages.map((src, index) => (
                            <div
                                key={index}
                                className="relative h-64 w-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <Image
                                    src={src}
                                    alt={`Library Image ${index + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                        <p className="text-lg leading-relaxed text-slate-700">
                            Library is the live nerve of any academic institution of higher
                            learning. Its importance increases many-fold in law institutions
                            as it plays a significant role in the pursuit of academic
                            excellence. Keeping this in view, a constant effort is being made
                            to enrich the library with a collection of a wide variety of books
                            and journals from the perspective of law students and scholars.
                            Internet facilities through LAN and Wi-Fi and E-resources with
                            Remotexs are also added to the law library. Open access system is
                            implemented for easy access to books and other materials.
                        </p>
                    </div>
                </div>

                {/* Library Team */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <User className="h-6 w-6 text-dsnlu-azure" />
                        <h2 className="text-2xl font-bold text-dsnlu-dark-blue">
                            LIBRARY TEAM
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 text-center group"
                            >
                                <CardContent className="p-6 flex flex-col items-center">
                                    <div className="relative h-32 w-32 mb-4 overflow-hidden rounded-full border-4 border-slate-100 group-hover:border-dsnlu-azure transition-colors">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold text-dsnlu-dark-blue text-lg mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-medium">
                                        {member.designation}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Advisory Committee & Contact */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Advisory Committee */}
                    <Card className="border-none shadow-md h-full">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-dsnlu-dark-blue mb-4 pb-2 border-b border-slate-100">
                                Library Advisory Committee
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 text-slate-700">
                                            <th className="p-3 font-semibold border-b border-slate-200">
                                                Committee Members
                                            </th>
                                            <th className="p-3 font-semibold border-b border-slate-200">
                                                Role
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {advisoryCommittee.map((member, index) => (
                                            <tr key={index} className="hover:bg-slate-50 transition-colors">
                                                <td className="p-3 text-slate-700 font-medium">
                                                    {member.name}
                                                </td>
                                                <td className="p-3 text-slate-600">{member.role}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Librarian */}
                    <Card className="border-none shadow-md h-full bg-dsnlu-dark-blue text-white">
                        <CardContent className="p-8 flex flex-col justify-center h-full">
                            <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">
                                CONTACT LIBRARIAN
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-bold text-dsnlu-lime mb-1">
                                        Dr. J. RAJESH
                                    </h4>
                                    <p className="text-slate-300">
                                        Deputy Librarian & Librarian In-Charge
                                    </p>
                                </div>
                                <div className="space-y-1 text-slate-300">
                                    <p>Damodaram Sanjivayya National Law University,</p>
                                    <p>“NYAYAPRASTHA”, Sabbavaram,</p>
                                    <p>Visakhapatnam – 531035.</p>
                                </div>
                                <div className="space-y-3 pt-4 border-t border-white/20">
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-dsnlu-lime" />
                                        <div className="flex flex-col">
                                            <a
                                                href="mailto:library@dsnlu.ac.in"
                                                className="hover:text-dsnlu-lime transition-colors"
                                            >
                                                library@dsnlu.ac.in
                                            </a>
                                            <a
                                                href="mailto:jampani.rajesh@dsnlu.ac.in"
                                                className="hover:text-dsnlu-lime transition-colors"
                                            >
                                                jampani.rajesh@dsnlu.ac.in
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 text-dsnlu-lime" />
                                        <a
                                            href="tel:08924-248216"
                                            className="hover:text-dsnlu-lime transition-colors"
                                        >
                                            08924-248216 (Ext: 321)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
