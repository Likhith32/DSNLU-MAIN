"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeatureLink {
    label: string;
    href: string;
}

interface FeatureCardProps {
    image: string;
    title: string;
    description: string;
    links: FeatureLink[];
}

function FeatureCard({ image, title, description, links }: FeatureCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="h-48 overflow-hidden relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {description}
                </p>
                <div className="space-y-2">
                    {links.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-dsnlu-azure/5 border border-gray-100 hover:border-dsnlu-azure/20 group transition-all"
                        >
                            <span className="font-medium text-gray-700 group-hover:text-dsnlu-azure transition-colors">
                                {link.label}
                            </span>
                            <ArrowRight size={16} className="text-gray-400 group-hover:text-dsnlu-azure transform group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function FeatureCards() {
    const features: FeatureCardProps[] = [
        {
            title: "Academics",
            image: "https://dsnlu.ac.in/storage/2022/12/Academics.png",
            description: "We offer a variety of programmes: undergraduate, post-graduate, Ph.D. as well as part time programmes.",
            links: [
                { label: "Gallery", href: "/gallery" },
                { label: "Membership", href: "/membership" },
            ]
        },
        {
            title: "Programs",
            image: "https://dsnlu.ac.in/storage/2022/12/Programes.png",
            description: "Law colleges across India have a different selection process and eligibility criteria for admissions at UG and PG levels.",
            links: [
                { label: "Student Activity Gallery", href: "/student-activity-gallery" },
                { label: "Guest Lectures", href: "/guest-lectures" },
            ]
        },
        {
            title: "Students",
            image: "https://dsnlu.ac.in/storage/2022/12/Students.png",
            description: "DSNLU endeavors to be a premier law school with state-of-the-art facilities and emphasis on clinical aspects to promote.",
            links: [
                { label: "Placement and Internship", href: "/placement-and-internship" },
                { label: "DSNLU Alumni", href: "/alumni" },
            ]
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <FeatureCard key={i} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
