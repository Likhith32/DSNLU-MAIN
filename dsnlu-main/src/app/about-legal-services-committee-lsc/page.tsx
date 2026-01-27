"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Scale, BookOpen, Users } from "lucide-react";

export default function AboutLSCPage() {
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
                        ABOUT LEGAL SERVICES COMMITTEE (LSC)
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4 space-y-8">
                {/* Quote Section */}
                <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-dsnlu-azure italic text-slate-700 text-lg md:text-xl text-center">
                    &ldquo;First step towards the change is awareness&rdquo;
                    <div className="mt-2 font-bold text-dsnlu-dark-blue not-italic text-base">
                        - Nathaniel Branden
                    </div>
                </div>

                {/* Overview Section */}
                <Card className="border-none shadow-md">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-dsnlu-azure/10 rounded-lg">
                                <Scale className="h-6 w-6 text-dsnlu-azure" />
                            </div>
                            <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                About the Committee
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 text-slate-700 leading-relaxed space-y-4">
                        <p>
                            The Legal services committee (LSC) is the most promising
                            experiment in the field of law, and it has demonstrated certain
                            very real values with a promise of development along other lines.
                            Legal services committee have come into existence experimentally
                            because of the existence of the need in legal education for
                            meeting the problems of the changing times and the need of the bar
                            for increased effectiveness in its public relation work.
                        </p>
                        <p>
                            Over the years, our legal services have expanded considerably to
                            meet the changing needs of the community at large in the
                            Vishakhapatnam and other places as well. Legal services committee
                            has and will continue to contribute towards upholding the rule of
                            law on behalf of Damodaram Sanjivayya National Law University,
                            (Nyayaprastha) at Sabbavaram, Vishakapatanam in the country of
                            India.
                        </p>
                        <p>
                            The acknowledged purpose of the DSNLU Legal Services Committee
                            (LSC) is to promote access to the legal system, whereby every
                            person is able to invoke the legal process irrespective of social
                            or economic incapacity.
                        </p>
                        <p>
                            The DSNLU Legal Services Committee (LSC) is headed by the faculty
                            coordinator, Smt. Namballa Bhagyalakshmi, and also comprises of
                            students of the all five years of the B.A. L.L.B (Hons) Course.
                            Furthermore, the course is meant to act as a platform for
                            introducing to the students of the practicalities of the legal
                            system.
                        </p>
                        <p>
                            Creating Legal awareness towards legal aid and settlement of
                            disputes through amicable settlement methods are the main
                            functions of the committee. Legal awareness programmes are taken
                            up for empowerment of legal knowledge to all the citizens in
                            general and to the weaker sections of the society in particular.
                            Various activities are taken up to reach the vulnerable sections
                            of the society such as SC/ST, women, various industrial laborers
                            etc., It offers the student a chance to develop a social view
                            point. It also sounds out the strengths and weaknesses of the law
                            student in respect to the tasks he will have to perform as a
                            practicing lawyer. It provides a means for strengthening his weak
                            points and, when the system has been perfected and coordinated
                            with the work of admissions committees of various bar associations
                            & other societies, should provide a means for keeping out of the
                            profession many who are able to pass all examinations but are not
                            able to practice law.
                        </p>
                    </CardContent>
                </Card>

                {/* Awareness Areas Section */}
                <Card className="border-none shadow-md">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-dsnlu-lime/10 rounded-lg">
                                <BookOpen className="h-6 w-6 text-dsnlu-lime" />
                            </div>
                            <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                Awareness Areas
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <ul className="list-disc list-inside space-y-2 text-slate-700">
                            <li>
                                <strong>General Legal services:</strong> (what are courts, its
                                working, Hierarchy of courts, Power of courts, Legal services
                                authority establishments, etc)
                            </li>
                            <li>
                                <strong>Consumer law awareness:</strong> (Consumer protection
                                act, 1986)
                            </li>
                            <li>
                                <strong>Family Law:</strong> (Divorce laws, claiming
                                maintenance, adoption, Succession laws etc.)
                            </li>
                            <li>
                                <strong>Human rights of citizens:</strong> (About NHRC &
                                Protection of Human Rights act, 1993.)
                            </li>
                            <li>
                                <strong>Women protection laws:</strong> (Sexual harassment at
                                work places, welfare, reservations. etc.,)
                            </li>
                            <li>
                                <strong>Welfare laws for senior citizens:</strong> (Maintenance
                                and Welfare of Parents and Senior Citizens Act, 2007 etc.,)
                            </li>
                            <li>
                                <strong>Arbitration, Mediation, Negotiations etc.</strong>
                            </li>
                            <li>
                                <strong>Rights in our constitution & civil laws:</strong>{" "}
                                (Fundamental Rights & right to legal aid etc.,)
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Committee Members Section */}
                <Card className="border-none shadow-md">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-dsnlu-azure/10 rounded-lg">
                                <Users className="h-6 w-6 text-dsnlu-azure" />
                            </div>
                            <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                Legal Services Committee & Pro Bono Club Members
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left text-sm md:text-base">
                                <thead>
                                    <tr className="bg-dsnlu-azure text-white">
                                        <th className="px-4 py-3 font-semibold border border-dsnlu-azure" colSpan={2}>
                                            Committee Members
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                                    <tr>
                                        <td className="px-4 py-3 border border-slate-200 font-medium text-dsnlu-dark-blue">
                                            Dr. Rifat Khan
                                        </td>
                                        <td className="px-4 py-3 border border-slate-200 text-slate-700">
                                            Convener
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 border border-slate-200 font-medium text-dsnlu-dark-blue">
                                            Dr. N. Bhagya Lakshmi
                                        </td>
                                        <td className="px-4 py-3 border border-slate-200 text-slate-700">
                                            Member
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 border border-slate-200 font-medium text-dsnlu-dark-blue">
                                            Dr. Ch. Lakshmi
                                        </td>
                                        <td className="px-4 py-3 border border-slate-200 text-slate-700">
                                            Member
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 border border-slate-200 font-medium text-dsnlu-dark-blue">
                                            Dr. P. Bhuvaneswari
                                        </td>
                                        <td className="px-4 py-3 border border-slate-200 text-slate-700">
                                            Member
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 border border-slate-200 font-medium text-dsnlu-dark-blue">
                                            Ms. Sherley Hepsiba D
                                        </td>
                                        <td className="px-4 py-3 border border-slate-200 text-slate-700">
                                            Member
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 border border-slate-200 font-medium text-dsnlu-dark-blue">
                                            Dr. R. Deepthi
                                        </td>
                                        <td className="px-4 py-3 border border-slate-200 text-slate-700">
                                            Member
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
