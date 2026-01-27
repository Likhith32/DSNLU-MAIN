"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";

export default function LegalIncubationCentreEventsPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="EVENTS" />

            <div className="container mx-auto mt-12 px-4">
                <div className="grid gap-8">
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                EVENTS
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <ul className="list-disc list-inside space-y-4 ml-2">
                                <li>
                                    National Level Competition on Crime Scene Investigation (CSI
                                    -6.0) on 18th March 2025 by Legal Incubation Centre, DSNLU.
                                </li>
                                <li>
                                    National Level Competition on Crime Scene Investigation (CSI
                                    -5.0) on 23rd March 2024 by Legal Incubation Centre, DSNLU.
                                </li>
                                <li>
                                    Collage Making Competition – Celebrating World Entrepreneurship
                                    Day with the theme “MAKE IN INDIA” on 21<sup>st</sup> August,
                                    2023.
                                </li>
                                <li>
                                    ‘VIBODHA’- A two-day national workshop on entrepreneurship with
                                    special reference to legal entrepreneurship on 18<sup>th</sup> &
                                    19<sup>th</sup> March, 2023.
                                </li>
                                <li>
                                    Four successful editions of our flag ship event called Crime
                                    Scene Investigation (CSI) and the previous edition of Crime
                                    Scene Investigation (CSI 4.0) was conducted on 24<sup>th</sup>{" "}
                                    September 2022.
                                </li>
                                <li>
                                    Two Day Online Workshop organized on FORENSIC SCIENCE AND ITS
                                    EVIDENTIARY VALUE on 25<sup>th</sup> & 26<sup>th</sup>{" "}
                                    September, 2021.
                                </li>
                                <li>
                                    One Day Online Workshop organized in Association with the DSNLU
                                    Alumni Association on “Legal Profession and Practice- Challenges
                                    and Prospects” on 10<sup>th</sup> April, 2021.
                                </li>
                                <li>
                                    The LIC organized a Workshop on Criminal Trial Advocacy in
                                    October 2018 and a National Workshop on Civil Trial Advocacy in
                                    March 2019.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
