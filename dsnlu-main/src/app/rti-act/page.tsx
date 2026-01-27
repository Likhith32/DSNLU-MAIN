import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function RTIActPage() {
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
                        RTI ACT
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-center text-xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            RTI ACT
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 p-6 md:p-10">
                        {/* Payment of RTI Fees */}
                        <div className="rounded-lg bg-slate-50 p-6">
                            <h3 className="mb-4 text-xl font-bold text-dsnlu-dark-blue">
                                PAYMENT OF RTI FEES:
                            </h3>
                            <p className="text-lg text-slate-700">
                                As per RTI Act 2005, Rules in favor of “The Registrar”,
                                Damodaram Sanjivayya National Law University, Visakhapatnam.
                            </p>
                        </div>

                        <div className="text-center text-lg font-semibold text-slate-800">
                            AS PER THE PROVISIONS OF RTI ACT 2005, THE AUTHORITIES ARE
                            CONSTITUTED AS GIVEN BELOW:
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {/* Public Information Officer */}
                            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                                <h3 className="mb-4 text-xl font-bold text-[#e7ab10]">
                                    PUBLIC INFORMATION OFFICER:
                                </h3>
                                <div className="space-y-2 text-slate-700">
                                    <p className="font-semibold">Dr. A. Nageswara Rao</p>
                                    <p>Assistant Registrar (Administration & Establishment)</p>
                                    <p className="mt-4 text-sm text-slate-500">
                                        DAMODARAM SANJIVAYYA NATIONAL LAW UNIVERSITY ‘NYAYAPRASTHA’,
                                        <br />
                                        SABBAVARAM, VISAKHAPATNAM- 531035
                                        <br />
                                        ANDHRA PRADESH, INDIA.
                                    </p>
                                </div>
                            </div>

                            {/* First Appellate Authority */}
                            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                                <h3 className="mb-4 text-xl font-bold text-[#e7ab10]">
                                    FIRST APPELLATE AUTHORITY:
                                </h3>
                                <div className="space-y-2 text-slate-700">
                                    <p className="font-semibold">Dr. Viswachandra Nath M</p>
                                    <p>Registrar-In Charge</p>
                                    <p className="mt-4 text-sm text-slate-500">
                                        DAMODARAM SANJIVAYYA NATIONAL LAW UNIVERSITY ‘NYAYAPRASTHA’,
                                        <br />
                                        SABBAVARAM, VISAKHAPATNAM- 531035
                                        <br />
                                        ANDHRA PRADESH, INDIA.
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
