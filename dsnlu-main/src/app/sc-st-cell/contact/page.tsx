"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Mail, Phone, MapPin, User } from "lucide-react";

export default function SCSTCellContactPage() {
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
                        Contact
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4 space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Contact Details Card */}
                    <Card className="border-none shadow-md h-full">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-dsnlu-azure/10 rounded-lg">
                                    <User className="h-6 w-6 text-dsnlu-azure" />
                                </div>
                                <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                    Key Contacts
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            {/* Chairperson */}
                            <div className="flex flex-col space-y-2 pb-4 border-b border-slate-100 last:border-0">
                                <h3 className="font-bold text-lg text-dsnlu-dark-blue">
                                    Dr. A. Nageswara Rao
                                </h3>
                                <p className="text-slate-600 font-medium">
                                    Chairperson, SC/ST Cell, DSNLU
                                </p>
                                <div className="flex items-center gap-2 text-slate-600">
                                    <Phone className="h-4 w-4 text-dsnlu-azure" />
                                    <span>+91 83418 71919</span>
                                </div>
                            </div>

                            {/* Secretary */}
                            <div className="flex flex-col space-y-2 pb-4 border-b border-slate-100 last:border-0">
                                <h3 className="font-bold text-lg text-dsnlu-dark-blue">
                                    Dr. Viswachandra Nath. M
                                </h3>
                                <p className="text-slate-600 font-medium">
                                    Secretary, SC/ST Cell, DSNLU
                                </p>
                                <div className="flex items-center gap-2 text-slate-600">
                                    <Phone className="h-4 w-4 text-dsnlu-azure" />
                                    <span>+91 91107 73504</span>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="pt-2">
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <Mail className="h-5 w-5 text-dsnlu-azure" />
                                    <div>
                                        <p className="text-sm text-slate-500">Contact Email</p>
                                        <a
                                            href="mailto:sc-st-grievancecell@dsnlu.ac.in"
                                            className="font-medium text-dsnlu-dark-blue hover:text-dsnlu-azure transition-colors"
                                        >
                                            sc-st-grievancecell@dsnlu.ac.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Address Card */}
                    <Card className="border-none shadow-md h-full">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-dsnlu-lime/10 rounded-lg">
                                    <MapPin className="h-6 w-6 text-dsnlu-lime" />
                                </div>
                                <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                    Address
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p className="font-bold text-lg text-dsnlu-dark-blue">
                                    Damodaram Sanjivayya National Law University (DSNLU)
                                </p>
                                <p>
                                    NYAYAPRASTHA, Sabbavaram,
                                    <br />
                                    Visakhapatnam – 531 035.
                                    <br />
                                    Andhra Pradesh, INDIA
                                </p>
                            </div>

                            {/* Map Placeholder or Additional Info could go here */}
                            <div className="mt-8 h-48 w-full bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-sm border border-slate-200">
                                Map View Placeholder
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
