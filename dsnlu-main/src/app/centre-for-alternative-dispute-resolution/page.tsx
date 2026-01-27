"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";
import Link from "next/link";

export default function CentreForADRPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="CENTRE FOR ALTERNATIVE DISPUTE RESOLUTION" />

            <div className="container mx-auto mt-12 px-4">
                <div className="grid gap-8">
                    {/* Introduction */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Introduction
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <p className="mb-4">
                                The justice system in India has been under great stress for a
                                number of reasons, primarily due to the enormous pendency of
                                court cases in India underlining the need for Alternative
                                Dispute Resolution (ADR) methods. ADR refers to a variety of
                                dispute resolution strategies that mainly act as alternatives to
                                litigation and are usually performed with the help of a neutral
                                and impartial third party. Mediation, Conciliation, Arbitration,
                                Lok Adalats, Mediation-Arbitration Early Neutral Assessment and
                                Mini Trial are some examples of ADR procedures. The ADR centre,
                                DSNLU therefore found it appropriate to provide a new platform
                                for academic deliberations and research studies on the methods,
                                practices and procedures of ADR techniques.
                            </p>
                            <p>
                                Keeping in view the aforesaid facts, it was decided to establish
                                DSNLU Centre for Alternative Dispute Resolution (CADR
                                hereinafter) under the aegis of Damodaram Sanjivayya National
                                Law University, Visakhapatnam.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Vision and Mission */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Vision and Mission
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <p className="mb-4">
                                The CADR has a vision to encourage the use of ADR methods by
                                legal and non-legal practitioners, students and the general
                                public at large. In order to settle conflicts and disputes, the
                                skills used in ADR approaches are required for us all. These are
                                life skills. The CADR aims to contribute by way of knowing other
                                people’s views, interplay, empathy, critical thought and
                                interests. In terms of conflicts and differences, the CADR seeks
                                to promote ADR culture. We deem that the future of dispute
                                resolution is and should belong to ADR. Our focus is therefore
                                on training the next generation of ADR practitioners whether
                                they are lawyers, HR managers, engineers, finance professionals,
                                doctors or belonging to any other field.
                            </p>
                            <p className="mb-4">
                                Thus, we at CADR are of firm belief that it is important that
                                the benefits of ADR be seen and projected to reach the ultimate
                                beneficiaries through a structured forum dedicated to ADR rather
                                than the current fragmented approach embraced by others.
                            </p>
                            <p className="mb-4">
                                We at CADR would contribute to promote Lok Adalat as a dispute
                                resolution process as stipulated under Legal Services Authority
                                Act, 1987.
                            </p>
                            <p>
                                We at CADR strive for professional service, value independence
                                and encourage flexibility in dispute resolution. We are
                                committed to delivering–whatever the challenge; and while doing
                                so practice the dictum of the ADR which is a ‘win-win’ situation
                                for all.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Objectives */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                OBJECTIVES
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <p className="mb-4">
                                The listed objectives of the Centre inter alia are as follows:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 ml-2">
                                <li>
                                    To undertake and promote policy oriented research and academic
                                    teaching in ADR procedures, namely: Mediation, Conciliation,
                                    Arbitration, Lok Adalats Negotiation and Mini Trial.
                                </li>
                                <li>
                                    Assist the Government in policy-formulation on aspects related
                                    to arbitration law in the country.
                                </li>
                                <li>
                                    To conduct online customized training programs for the
                                    targeted teams of system functionaries/stakeholders and help
                                    them in uplifting their theoretical approach towards the law
                                    pertaining to ADR and thus bridge the gap between the theory
                                    and practice.
                                </li>
                                <li>
                                    To undertake research projects on the above and related
                                    multi-disciplinary fields and to provide opportunities for
                                    experiential learning to students.
                                </li>
                                <li>
                                    To organize periodic guest lectures seminars, workshops,
                                    courses, training programs and annual conferences.
                                </li>
                                <li>
                                    To collaborate with institutions of ADR and provide training
                                    and awareness to the people about the benefits of ADR through
                                    various awareness camps and classes.
                                </li>
                                <li>
                                    To provide mediation and Arbitration to the interested
                                    parties.
                                </li>
                                <li>
                                    Provide quality training to industry professionals with the
                                    aid of recognized experts to help increase the standard and
                                    quality of arbitration services, especially in the areas of
                                    arbitration where there is a large demand for quality services
                                    and a shortage of qualified professionals.
                                </li>
                                <li>
                                    To adopt the best practices in the field of ADR and to promote
                                    ADR culture in India.
                                </li>
                            </ol>
                            <p className="mt-4">
                                The Committee shall comprise of a team of student members under
                                the mentorship and guidance of Chair Person and Faculty Advisor.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Committee Table */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Committee Members
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-slate-200">
                                    <thead>
                                        <tr className="bg-[#341e11] text-white">
                                            <th className="border border-slate-200 px-4 py-2 text-left">
                                                Honorary Chair Person
                                            </th>
                                            <th className="border border-slate-200 px-4 py-2 text-left">
                                                Faculty Member
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white">
                                            <td className="border border-slate-200 px-4 py-2 align-top text-slate-700">
                                                Dr. P.Jogi Naidu
                                            </td>
                                            <td className="border border-slate-200 px-4 py-2 align-top text-slate-700">
                                                Dr. N. Bhagyalakshmi
                                                <br />
                                                Dr. A. Nageswara Rao
                                                <br />
                                                Mr. R. Vishnu Kumar
                                                <br />
                                                Dr. I. Durga Prasad
                                                <br />
                                                Dr. R. Deepthi
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    {/* JALAF Link */}
                    <div className="text-center">
                        <Link
                            href="https://dsnlu.ac.in/storage/2025/10/JALAF-Volume-1-Issue-1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-lg font-bold text-dsnlu-azure hover:underline"
                        >
                            JALAF Volume 1. Issue 1 – The Arbitration Journal of DSNLU
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
