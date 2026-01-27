"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";

export default function CriminalJusticeAndAdministrationPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="Criminal Justice and Administration" />

            <div className="container mx-auto mt-12 px-4">
                <div className="grid gap-8">
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Criminal Justice and Administration
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-slate-200">
                                    <thead>
                                        <tr className="bg-dsnlu-dark-blue text-white">
                                            <th className="border border-slate-200 px-4 py-3 text-left font-bold">
                                                Honorary Chair Person
                                            </th>
                                            <th className="border border-slate-200 px-4 py-3 text-left font-bold">
                                                Faculty Member
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white">
                                            <td className="border border-slate-200 px-4 py-3 align-top">
                                                Dr. Soma B
                                            </td>
                                            <td className="border border-slate-200 px-4 py-3 align-top">
                                                <ul className="list-none space-y-1">
                                                    <li>Dr. Rifat Khan</li>
                                                    <li>Dr. V. Sunitha</li>
                                                    <li>Ms. Sherley Hepsiba D</li>
                                                </ul>
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
