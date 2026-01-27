"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Scale, Shield, BookOpen, Gavel } from "lucide-react";

export default function SCSTCellSafeguardsPage() {
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
                        Constitutional Safeguards and Legislation
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4 space-y-8">
                {/* Constitutional Safeguards Card */}
                <Card className="border-none shadow-md">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-dsnlu-azure/10 rounded-lg">
                                <Shield className="h-6 w-6 text-dsnlu-azure" />
                            </div>
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue">
                                Constitutional Safeguards
                            </CardTitle>
                        </div>
                        <p className="text-slate-600">
                            The Constitution of India, which established the nation as a
                            sovereign, socialist, secular, and democratic republic, enshrines
                            the Right to Equality as a fundamental right.
                        </p>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <h3 className="font-bold text-dsnlu-dark-blue text-lg">
                                    Equality Before Law (Article 14)
                                </h3>
                                <p className="text-slate-700">
                                    Guarantees that every individual is equal before the law.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-dsnlu-dark-blue text-lg">
                                    Prohibition of Discrimination (Article 15)
                                </h3>
                                <p className="text-slate-700">
                                    Forbids discrimination on grounds of religion, race, caste,
                                    sex, or place of birth, while allowing the State to make
                                    special provisions for women, children, Scheduled Castes
                                    (SCs), and Scheduled Tribes (STs).
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-dsnlu-dark-blue text-lg">
                                    Equality of Opportunity (Article 16)
                                </h3>
                                <p className="text-slate-700">
                                    Secures equal access to public employment opportunities, with
                                    the State empowered to make special provisions for the
                                    advancement of SCs, STs, and other backward classes.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-dsnlu-dark-blue text-lg">
                                    Abolition of Untouchability (Article 17)
                                </h3>
                                <p className="text-slate-700">
                                    Declares untouchability a punishable offense, prohibiting its
                                    practice in any form.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-100">
                            <h3 className="font-bold text-dsnlu-dark-blue text-xl mb-4">
                                Directive Principles & Other Provisions
                            </h3>
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex gap-3">
                                    <BookOpen className="h-5 w-5 text-dsnlu-lime flex-shrink-0 mt-1" />
                                    <div>
                                        <span className="font-semibold">
                                            Promote Educational and Economic Interests (Article 46):
                                        </span>{" "}
                                        Ensure the advancement of SCs, STs, and other weaker
                                        sections.
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <BookOpen className="h-5 w-5 text-dsnlu-lime flex-shrink-0 mt-1" />
                                    <div>
                                        <span className="font-semibold">
                                            Open Hindu Religious Institutions (Article 25(b)):
                                        </span>{" "}
                                        Mandates that Hindu religious institutions of public
                                        character must be accessible to all classes and sections of
                                        Hindus.
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <BookOpen className="h-5 w-5 text-dsnlu-lime flex-shrink-0 mt-1" />
                                    <div>
                                        <span className="font-semibold">
                                            Remove Barriers to Access (Article 15(2)):
                                        </span>{" "}
                                        Eliminates restrictions on access to public spaces such as
                                        shops, restaurants, hotels, and places of public
                                        entertainment funded by the State.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-100">
                            <h3 className="font-bold text-dsnlu-dark-blue text-xl mb-4">
                                Reservation & Administrative Safeguards
                            </h3>
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 space-y-4">
                                <p className="text-slate-700">
                                    <strong>
                                        Reservation in Public Employment and Education (Articles 16
                                        and 335):
                                    </strong>{" "}
                                    Authorize the State to provide reservations for backward
                                    classes, including SCs and STs, in cases of inadequate
                                    representation.
                                </p>
                                <p className="text-slate-700">
                                    <strong>Tribal Advisory Councils (Article 164 and 338):</strong>{" "}
                                    Established in states to protect tribal interests.
                                </p>
                                <p className="text-slate-700">
                                    <strong>
                                        Special Administration for Tribal Areas (Articles 244, Fifth
                                        and Sixth Schedules):
                                    </strong>{" "}
                                    Provides for autonomous governance in tribal regions to
                                    preserve their culture and rights.
                                </p>
                                <div className="mt-4 p-4 bg-white rounded border border-slate-200 text-sm text-slate-600 italic">
                                    "The Reservation Policy acts as a Constitutional mechanism to
                                    create a society of equals... Constitutionally, reservation
                                    quotas are fixed in proportion to the population — 15% for
                                    Scheduled Castes and 7.5% for Scheduled Tribes."
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Legislation Card */}
                <Card className="border-none shadow-md">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-dsnlu-lime/10 rounded-lg">
                                <Gavel className="h-6 w-6 text-dsnlu-lime" />
                            </div>
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue">
                                Legislation
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <Scale className="h-6 w-6 text-dsnlu-azure flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-dsnlu-dark-blue text-lg">
                                        The Protection of Civil Rights Act, 1955
                                    </h3>
                                    <p className="text-slate-700 mt-1">
                                        Formerly the Untouchability Offences Act, 1955. Provides for
                                        penalties against those who, on the grounds of
                                        untouchability, prevent any person from exercising their
                                        rights guaranteed under the abolition of untouchability.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <Scale className="h-6 w-6 text-dsnlu-azure flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-dsnlu-dark-blue text-lg">
                                        The Scheduled Castes and Scheduled Tribes (Prevention of
                                        Atrocities) Act, 1989
                                    </h3>
                                    <p className="text-slate-700 mt-1">
                                        Defines specific acts as atrocities against SCs and STs and
                                        prescribes stringent punishments for their commission. The
                                        comprehensive rules framed under this Act provide for the
                                        relief, rehabilitation, and protection of affected
                                        individuals, along with proactive preventive measures.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <Scale className="h-6 w-6 text-dsnlu-azure flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-dsnlu-dark-blue text-lg">
                                        Constitution (65th Amendment) Act, 1990
                                    </h3>
                                    <p className="text-slate-700 mt-1">
                                        Replaced the earlier Special Officer for Scheduled Castes
                                        and Scheduled Tribes (under Article 338) with the{" "}
                                        <strong>
                                            National Commission for Scheduled Castes and Scheduled
                                            Tribes
                                        </strong>
                                        . This body is primarily tasked with investigating,
                                        monitoring, and ensuring the effective implementation of
                                        constitutional and legal safeguards for SCs and STs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
