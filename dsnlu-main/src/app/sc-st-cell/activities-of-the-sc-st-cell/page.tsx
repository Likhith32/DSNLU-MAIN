"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export default function SCSTCellActivitiesPage() {
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
                        Activities of the SC/ST Cell
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4 space-y-8">
                {/* Introduction Card */}
                <Card className="border-none shadow-md">
                    <CardContent className="p-8 text-slate-700 leading-relaxed space-y-4">
                        <p>
                            The SC/ST Cell at the University was established to collaborate
                            with the university authorities in effectively implementing
                            various policies and programs initiated by the Central Government,
                            Ministry of Education (formerly MHRD), UGC, and the State
                            Government for the welfare of SC/ST students.
                        </p>
                        <p>
                            The Cell actively engages in creating awareness among SC/ST
                            students, particularly those from rural backgrounds, about their
                            rights and opportunities. The staff of the Cell work diligently to
                            coordinate and address issues related to admissions, ensuring fair
                            representation and support. The Cell regularly disseminates
                            information about government scholarships, fellowships, and other
                            welfare schemes through circulars and notices.
                        </p>
                        <p>
                            In addition, the Cell oversees the accommodation arrangements for
                            male and female students in hostels and ensures the proper
                            implementation of reservation policies in teaching and
                            non-teaching appointments, as well as in the allotment of
                            residential quarters to SC/ST employees.
                        </p>
                    </CardContent>
                </Card>

                {/* Monitoring Activities Card */}
                <Card className="border-none shadow-md">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue">
                            Monitoring Activities of the SC/ST Cell
                        </CardTitle>
                        <p className="text-slate-600 mt-2">
                            The SC/ST Cell at the University actively monitors and coordinates
                            the following activities:
                        </p>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <h3 className="font-bold text-dsnlu-dark-blue text-lg flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-dsnlu-lime" />
                                    Scholarship Awareness and Publicity
                                </h3>
                                <p className="text-slate-700 pl-7">
                                    The Cell widely disseminates information through circulars to
                                    faculty and students regarding various scholarships and
                                    fellowships, including the Post-Metric Scholarship, Andhra
                                    Pradesh Higher Education Special Scholarship, Meritorious
                                    Scholarship, P.G. Women Scholarship, and other financial aid
                                    opportunities.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-dsnlu-dark-blue text-lg flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-dsnlu-lime" />
                                    Support and Grievance Redressal
                                </h3>
                                <p className="text-slate-700 pl-7">
                                    The Cell addresses the concerns of SC/ST students and
                                    employees by liaising with university authorities and
                                    resolving issues amicably. It serves as a user-friendly
                                    support system and counselor for SC/ST students and staff.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-dsnlu-dark-blue text-lg flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-dsnlu-lime" />
                                    Assistance for Research Scholars
                                </h3>
                                <p className="text-slate-700 pl-7">
                                    The Cell provides guidance and support to SC/ST research
                                    scholars in securing fellowships offered by the University and
                                    Government agencies.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-dsnlu-dark-blue text-lg flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-dsnlu-lime" />
                                    Implementation of Government Schemes
                                </h3>
                                <p className="text-slate-700 pl-7">
                                    The Cell implements various initiatives of the Ministry of
                                    Education (formerly MHRD) and the University Grants Commission
                                    (UGC) aimed at enhancing the academic performance of SC/ST
                                    students and bridging educational gaps.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-dsnlu-dark-blue text-lg flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-dsnlu-lime" />
                                    Advisory Role in Recruitment and Promotions
                                </h3>
                                <p className="text-slate-700 pl-7">
                                    The Cell advises university committees on the latest
                                    regulations and best practices regarding SC/ST reservations in
                                    recruitment and promotions, ensuring compliance with
                                    reservation policies.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-dsnlu-dark-blue text-lg flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-dsnlu-lime" />
                                    Book Bank and Educational Resources
                                </h3>
                                <p className="text-slate-700 pl-7">
                                    The Cell oversees the establishment and operation of the Book
                                    Bank for SC/ST students, encouraging them to utilize available
                                    resources effectively. It also facilitates the distribution of
                                    Book Grants to eligible students.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Special Activities Card */}
                <Card className="border-none shadow-md bg-dsnlu-azure/5">
                    <CardHeader className="pb-2 pt-6">
                        <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue">
                            Special Activities of the SC/ST Cell
                        </CardTitle>
                        <p className="text-slate-600 mt-2">
                            DSNLU is committed to empowering students from SC/ST communities
                            through focused initiatives aimed at academic, professional, and
                            personal development. To achieve this, the SC/ST Cell is planning
                            to launch the following special activities:
                        </p>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="font-bold text-dsnlu-dark-blue mb-2">
                                    Soft Skills and Personality Development Training
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    Programs designed to enhance communication, leadership, and
                                    interpersonal skills, boosting the confidence and
                                    employability of SC/ST students.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="font-bold text-dsnlu-dark-blue mb-2">
                                    Judicial Services Coaching
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    Specialized coaching sessions to prepare aspiring SC/ST
                                    students for competitive examinations such as Judicial
                                    Services and other law-related public sector opportunities.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="font-bold text-dsnlu-dark-blue mb-2">
                                    Mentorship Programs
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    Structured mentorship from legal professionals, alumni, and
                                    faculty members to guide SC/ST students in academic progress,
                                    career planning, and personal growth.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="font-bold text-dsnlu-dark-blue mb-2">
                                    Legal Research and Publication Opportunities
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    Support for SC/ST students to engage in legal research
                                    projects, with opportunities to publish work on themes related
                                    to constitutional rights, social justice, and marginalised
                                    communities.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                                <h3 className="font-bold text-dsnlu-dark-blue mb-2">
                                    Placement and Internship Support
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    Tailored assistance in securing internships and placements
                                    through partnerships with inclusive law firms, NGOs, and
                                    public sector organizations.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
