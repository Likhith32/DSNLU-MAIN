"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";
import Image from "next/image";

export default function CWCLEventsPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="CWCL Events" />

            <div className="container mx-auto mt-12 px-4">
                <div className="grid gap-8">
                    {/* Awareness Program */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Awareness Program: Protection Laws of Women and Child
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <p className="mb-4">
                                The Centre for Women and Child Law, Damodaram Sanjivayya
                                National Law University conducted an awareness program on the
                                Protection Laws of Women and Children at Dr. Ambedkar’s
                                Gurukulam (Girls), Megadrigadda, Visakhapatnam on 07.11.2023.
                            </p>
                            <p className="mb-4">
                                Under the guidance of
                                <br />
                                <strong>Prof (Dr) D. Surya Prakasa Rao</strong>, Hon’ble Vice
                                Chancellor,
                                <br />
                                <strong>Dr. N. Bhagya Lakshmi</strong>, Faculty Member along
                                with the student members attended the above program.
                            </p>
                            <p className="mb-6">
                                The center highlighted the legislation of the Dowry Prohibition
                                Act, 1961, Prohibition of Child Marriage Act, 2006, POCSO Act,
                                2012, Articles 14, 15, and 21 of the Indian Constitution and
                                Crimes against Women and IPC. Booklets are issued by the center
                                at the end of the program.
                            </p>

                            {/* Image Gallery */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                                {[1, 2, 3, 4].map((num) => (
                                    <div
                                        key={num}
                                        className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md"
                                    >
                                        <Image
                                            src={`https://dsnlu.ac.in/storage/2024/01/cwcl-events${num}.png`}
                                            alt={`CWCL Event Image ${num}`}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Other Events */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Past Events
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed space-y-6">
                            <div className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                                <h3 className="text-xl font-semibold text-dsnlu-azure mb-2">
                                    National Seminar
                                </h3>
                                <p>
                                    “Live- in – Relationship: Impact on Family Laws in India” 11
                                    <sup>th</sup> & 12<sup>th</sup> of March, 2023.
                                </p>
                            </div>

                            <div className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                                <h3 className="text-xl font-semibold text-dsnlu-azure mb-2">
                                    National Girl Child Day
                                </h3>
                                <p className="mb-2">
                                    To commemorate the National Girl Child day on January 24,
                                    2023, the Centre organised Picture and Perception Competition
                                    and Poster Making Competition on 23<sup>rd</sup> of January
                                    2023 to symbolise the significance of ending all forms of
                                    discrimination against the girl child and to raise awareness.
                                </p>
                                <p>
                                    The National Girl Child Day is celebrated by the Centre at
                                    DSNLU on January 24, 2023 to raise awareness on issues
                                    relating to girl child. Ms. Gowthami Sali, Superintendent of
                                    Police of Anakapalli District, the Chief Guest of the
                                    programme interacted with the students.
                                </p>
                            </div>

                            <div className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                                <h3 className="text-xl font-semibold text-dsnlu-azure mb-2">
                                    International Women’s Day
                                </h3>
                                <p>
                                    Seminar on “Gender Equality Today for a Sustainable Tomorrow”
                                    was organised on 8<sup>th</sup> of March, 2022 and celebrated
                                    International Women’s Day.
                                </p>
                            </div>

                            <div className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                                <h3 className="text-xl font-semibold text-dsnlu-azure mb-2">
                                    International Day for Elimination of Violence against Women
                                </h3>
                                <p>
                                    National Webinar on “Violence Against Women: Issues &
                                    Concerns” was organised on 25<sup>th</sup> of November 2021 on
                                    the occasion of International Day for Elimination of Violence
                                    against Women.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
