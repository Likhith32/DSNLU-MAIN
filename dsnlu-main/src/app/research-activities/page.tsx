"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";
import Image from "next/image";

export default function ResearchActivitiesPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="Research Activities" />

            <div className="container mx-auto mt-12 px-4">
                <div className="grid gap-8">
                    {/* Introduction & Events List */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                ACADEMIC AND RESEARCH ACTIVITIES DONE BY CENTRE FOR IPR AND
                                TECHNOLOGY OF DAMODARAM SANJIVAYYA NATIONAL LAW UNIVERSITY
                                (DSNLU)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <p className="mb-6">
                                Damodaram Sanjivayya National Law University, Visakhapatnam
                                provides an excellent setting for IP education as it offers the
                                Intellectual Property Law subject which is quite unique among
                                the national law school circuit in India. At DSNLU, the pedagogy
                                of IP law is developed through consistent inputs drawn from
                                faculties of science and management. IP teaching in India is
                                largely confined to text book study. Although there have been
                                recent attempts to improve the quality of IP law teaching in
                                India, nevertheless, the challenges faced by IP teaching
                                community in India largely concerns the availability of quality
                                materials focusing on Indian law in the light of settled and
                                emerging jurisprudence in comparative jurisdictions. The aim of
                                the IP Chair at DSNLU, Vizag is to develop a comprehensive legal
                                pedagogy of IP encompassing the scientific and technical aspects
                                of patents, intricate policy aspects of IP, and managerial
                                aspects of IP. To foster IPR and Technology research DSNLU has
                                organized following International and National Events by
                                establishing a Centre for IPR and Technology at its campus. They
                                are:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 ml-2">
                                <li>
                                    Filed Geographical Indication Application for Atreyapuram
                                    Putarekulu, before Geographical Indications Registry Chennai,
                                    on 13-12-2021, CBR No: 4830, Application Number 804.
                                </li>
                                <li>
                                    National Conference on “Role of Commercial Courts in Improving
                                    Ease of Doing Business Ranking in India – The Road Ahead!”
                                    Damodaram Sanjivayya National Law University, on 18th March
                                    2023.
                                </li>
                                <li>
                                    National Seminar on “Recent Trends in Air Transport Management
                                    and Aviation Law,” Damodaram Sanjivayya National Law
                                    University, on 11th February 2023.
                                </li>
                                <li>
                                    4<sup>th</sup> Edition of A.P.J Abdul Kalam Memorial National
                                    IPR Quiz,” Damodaram Sanjivayya National Law University, on
                                    22nd October 2022.
                                </li>
                                <li>
                                    “Round Table Conference on “Role of Commercial Courts in
                                    Improving Ease of Doing Business Ranking” on 30th July 2022.
                                </li>
                                <li>
                                    “Safeguarding the Traditional Knowledge (TK) in India – Need
                                    of the Hour,” Damodaram Sanjivayya National Law University, on
                                    9-10<sup>th</sup> April 2022.
                                </li>
                                <li>
                                    3<sup>rd</sup> A.P.J Abdul Kalam Memorial National IPR Quiz,”
                                    Damodaram Sanjivayya National Law University, on 19
                                    <sup>th</sup> October 2021
                                </li>
                                <li>
                                    International Event on “DSNLU Model WTO Ministerial Conference
                                    Simulation,” on 6-7<sup>th</sup> August 2021
                                </li>
                                <li>
                                    National Seminar on “Sports Law Governance and Regulation,”
                                    Damodaram Sanjivayya National Law University, on 10
                                    <sup>th</sup> April 2021
                                </li>
                                <li>
                                    International Webinar on “Challenges to Law and Technology in
                                    21<sup>st</sup> Century,” Damodaram Sanjivayya National Law
                                    University, on 16<sup>th</sup> December 2020
                                </li>
                                <li>
                                    2<sup>nd</sup>“Dr. A.P.J Abdul Kalam Memorial National IPR
                                    Quiz,” Damodaram Sanjivayya National Law University, on 20
                                    <sup>th</sup> November 2020
                                </li>
                                <li>
                                    “Roving Conference on Patent Co-operation Treaty (PCT),” in
                                    Association with WIPO, IPO, ASHOCHAM, Damodaram Sanjivayya
                                    National Law University, on 27<sup>th</sup> November 2019
                                </li>
                                <li>
                                    1<sup>st</sup> “Dr. A.P.J Abdul Kalam Memorial National IPR
                                    Quiz,” Damodaram Sanjivayya National Law University, on 19
                                    <sup>th</sup> October 2019
                                </li>
                                <li>
                                    National Seminar on “Copyrights and Internet Revolution – The
                                    Changing Landscape,” Damodaram Sanjivayya National Law
                                    University, on 10<sup>th</sup> August, 2019
                                </li>
                                <li>
                                    Intra -IPR Quiz, Damodaram Sanjivayya National Law University,
                                    on 9<sup>th</sup> April 2019
                                </li>
                                <li>
                                    National Essay Writing Competition “Regulation of E-commerce –
                                    Need of the Hour,” April 2019
                                </li>
                                <li>
                                    National Seminar on “Contemporary Aspects of Direct Taxes,”
                                    Damodaram Sanjivayya National Law University, on 16
                                    <sup>th</sup> March, 2019
                                </li>
                                <li>
                                    National Symposium on Geographical Indications and Plant
                                    Variety Protection- Issues and Challenges, on 8<sup>th</sup>{" "}
                                    September, 2018
                                </li>
                                <li>
                                    Inauguration of Centre for Intellectual Property Rights,
                                    Damodaram Sanjivayya National Law University, on 22
                                    <sup>nd</sup> September, 2018
                                </li>
                                <li>
                                    “DSNLU: Model Assembly of Member States,” 16-17<sup>th</sup>{" "}
                                    March, 2018, Damodaram Sanjivayya National Law University,
                                    Visakhapatnam
                                </li>
                                <li>
                                    “National Model Conference of Parties (COP),” 7&8<sup>th</sup>{" "}
                                    October, 2017, Damodaram Sanjivayya National Law University,
                                    Visakhapatnam
                                </li>
                            </ol>
                        </CardContent>
                    </Card>

                    {/* Encouraging study of IPR */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Encouraging study of Intellectual Property Rights in the
                                university
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <p className="mb-4">
                                The University has included IPR as a course at the Undergraduate
                                level for which four credits are being awarded in the overall
                                aggregation of assessment and marks of the student. Prof. (Dr.)
                                P. Sree Sudha was appointed as the Chairperson for the Centre
                                for IPR Damodaram Snajivayya National Law University (DC-IPR)
                                acts as the faculty of this course. This course introduces the
                                international and national legal regime on IPRs and helps to
                                impart knowledge in basic laws of Intellectual property rights.
                                It discusses various dimensions of Trademark, Patent,
                                Geographical Indications, Trade Secret law and copyright
                                litigation and explains the interplay between information
                                technology law and IPRs. This course encourages students to
                                understand the basic elements of Intellectual property laws by
                                analyzing the legal provisions to the legal issue arising in
                                copyrights; patent laws trademark laws and industrial designs.
                                Students can be acquainted with the formal procedures for
                                obtaining the patent, copyright and trademark thereby they can
                                identify the litigations of patent, trademark and copyright law
                                and apply the same in the profession. Apart from including IPRs
                                in its under-graduation courses, the university is also offering
                                exclusive curricula on IPR for doctoral and post-doctoral
                                studies.
                            </p>
                            <p>
                                Apart from this an Optional Paper “Biotechnology Law” will be
                                offered to 8th Semester Students which is aimed at empowering
                                students on legal and regulatory aspects relating to agriculture
                                bio-technology, patenting of bio similar and other contemporary
                                areas like bio-prospecting etc.
                            </p>
                        </CardContent>
                    </Card>

                    {/* IP Repository */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                IP Repository
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <p className="mb-8">
                                The objective of establishing an IP repository is to enable
                                qualitative research in IP and other interdisciplinary areas. It
                                includes the list of books on various IP related areas such as
                                Copyright, Patents, Geographical Indication, Industrial Designs,
                                IP & Technology, IP Taxation, EU IP law, IP & Tax, International
                                IP etc.
                            </p>

                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md">
                                    <Image
                                        src="https://dsnlu.ac.in/storage/2023/06/research-activities-1.png"
                                        alt="Research Activities 1"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md">
                                    <Image
                                        src="https://dsnlu.ac.in/storage/2023/06/research-activities-2.png"
                                        alt="Research Activities 2"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
