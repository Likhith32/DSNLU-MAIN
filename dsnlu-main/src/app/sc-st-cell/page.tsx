"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";

export default function SCSTCellPage() {
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
                        SC/ST Cell
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-md">
                    <CardContent className="p-8 text-slate-700 leading-relaxed space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">
                                INTRODUCTION
                            </h2>
                            <p className="mb-4">
                                The University Grants Commission (UGC) prioritized the welfare of
                                marginalized students and staff during the IX Plan period and
                                directed all universities to establish SC/ST Cells.
                            </p>
                            <p className="mb-4">
                                In line with this directive, Damodaram Sanjivayya National Law
                                University (DSNLU), Visakhapatnam, has taken a significant step
                                under the visionary leadership of our esteemed Vice-Chancellor,
                                Professor (Dr.) D. Surya Prakasa Rao, by establishing the SC/ST
                                Welfare Cell.
                            </p>
                            <p className="mb-4">
                                The SC/ST Cell at DSNLU was constituted in the year 2025, with
                                the primary focus on the welfare of SC/ST students and staff.
                                The main objective of the Cell is to monitor and ensure the
                                effective implementation of guidelines issued by the Ministry of
                                Education (formerly MHRD), the UGC, and the Government of Andhra
                                Pradesh.
                            </p>
                            <p>
                                The Cell oversees the implementation of reservation policies in
                                university admissions to various courses, hostel accommodations,
                                appointments to teaching and non-teaching posts, and the
                                maintenance of the roster register, ensuring that the rights and
                                interests of SC/ST students and staff are upheld.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">
                                Vision
                            </h2>
                            <p>
                                To be a leading institution of excellence in higher education,
                                committed to addressing evolving social realities through the
                                creation and application of knowledge. We strive to build a
                                people-centered, ecologically sustainable society that upholds
                                dignity, equality, social justice, and human rights for
                                all—especially for marginalized and vulnerable communities.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-4">
                                Mission
                            </h2>
                            <p>
                                In alignment with its vision, DSNLU, Visakhapatnam is dedicated
                                to nurturing skilled, ethical, and socially responsible
                                professionals through innovative teaching, rigorous research,
                                and meaningful community engagement. The University advances
                                legal knowledge, promotes critical inquiry, and actively
                                contributes to society through outreach and collaboration at
                                local, regional, national, and global levels.
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
