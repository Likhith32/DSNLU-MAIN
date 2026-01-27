"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";

export default function CentreForWomenAndChildLawPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="CENTRE FOR WOMEN AND CHILD LAW" />

            <div className="container mx-auto mt-12 px-4">
                <div className="grid gap-8">
                    {/* About the Centre */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                About the Centre
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <p className="mb-4">
                                The DSNLU Centre for Women, Child and Law (CWCL) is a
                                reinvigorated version of the previously established Centre for
                                Child and Law. The Centre aims to serve the needs of the
                                domestic society. The main objective of the Centre is to
                                research on the intricate strands that bind Women, Children and
                                Law. The Centre is established with the object of channeling the
                                power of law to champion the cause of women and child rights by
                                encouraging and facilitating active discourse and deliberations
                                on issues relating to women and children. The protection of
                                women and children is one of the cardinal tasks of the nation.
                                Despite many laws intended to protect women’s rights gender
                                inequalities remain deeply entrenched in our society. Children
                                are also vulnerable by virtue of their age and so they are
                                easily exposed to violence and exploitation. The Centre aims to
                                mainstream the child and gender concerns by initiating research,
                                organizing guest lectures, workshops, seminars and conferences
                                on issues relating to women and children and conducting
                                awareness and sensitization programs to enlighten the public on
                                laws intended to protect women and children.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Objectives */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Objectives
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <ol className="list-decimal list-inside space-y-2 ml-2">
                                <li>
                                    To carryout research and capacity building on issues relating
                                    to women and child welfare
                                </li>
                                <li>
                                    To conduct awareness and sensitization programs to enlighten
                                    the public on laws intended to protect women and children.
                                </li>
                                <li>
                                    To organize guest lectures, workshops, seminars, conferences
                                    and panel discussions on issues relating to women and
                                    children.
                                </li>
                            </ol>
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
                                                Dr. Rifat Khan
                                            </td>
                                            <td className="border border-slate-200 px-4 py-2 align-top text-slate-700">
                                                Dr. Ch. Lakshmi
                                                <br />
                                                Ms. Sherley Hepsiba D<br />
                                                Ms. D. Aparna
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
