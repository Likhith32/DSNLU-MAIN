"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
    FileText,
    Inbox,
    MessageSquare,
    User,
    Mail,
    Phone,
    HelpCircle,
    Building,
} from "lucide-react";

export default function SCSTCellGrievanceRedressalPage() {
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
                        Grievance Redressal
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4 space-y-8">
                {/* Introduction Card */}
                <Card className="border-none shadow-md">
                    <CardContent className="p-8 text-slate-700 leading-relaxed">
                        <p>
                            SC/ST students and employees may approach the Coordinator of the
                            SC/ST Cell for redressal of any grievances related to academic,
                            administrative, or social issues. The Coordinator regularly
                            interacts with the concerned individuals to understand their
                            concerns and takes appropriate action or provides necessary
                            guidance and support to resolve the matter effectively.
                        </p>
                    </CardContent>
                </Card>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Procedure Card */}
                    <Card className="border-none shadow-md h-full">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-dsnlu-azure/10 rounded-lg">
                                    <FileText className="h-6 w-6 text-dsnlu-azure" />
                                </div>
                                <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                    Procedure to File a Complaint
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-slate-700">
                                A written complaint may be submitted directly to the
                                Coordinator, SC/ST Cell.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Drop Box Card */}
                    <Card className="border-none shadow-md h-full">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-dsnlu-lime/10 rounded-lg">
                                    <Inbox className="h-6 w-6 text-dsnlu-lime" />
                                </div>
                                <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                    Drop Box Facility
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-slate-700">
                                A Drop Box is available in the SC/ST Cell. Any student or
                                employee belonging to SC/ST categories may drop their complaint
                                if any.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Form Card */}
                <Card className="border-none shadow-lg overflow-hidden">
                    <CardHeader className="bg-dsnlu-dark-blue text-white py-6">
                        <div className="flex items-center gap-3">
                            <MessageSquare className="h-6 w-6 text-dsnlu-lime" />
                            <CardTitle className="text-2xl font-bold">
                                Submit a Grievance Online
                            </CardTitle>
                        </div>
                        <p className="text-slate-300 mt-2">
                            Fill out the form below to send a message directly to the SC/ST
                            Cell.
                        </p>
                    </CardHeader>
                    <CardContent className="p-8 bg-white">
                        <form className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium text-slate-700 flex items-center gap-2"
                                    >
                                        <User className="h-4 w-4 text-dsnlu-azure" /> Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 focus:border-dsnlu-azure focus:outline-none focus:ring-1 focus:ring-dsnlu-azure"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-slate-700 flex items-center gap-2"
                                    >
                                        <Mail className="h-4 w-4 text-dsnlu-azure" /> Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="your.email@example.com"
                                        className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 focus:border-dsnlu-azure focus:outline-none focus:ring-1 focus:ring-dsnlu-azure"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-medium text-slate-700 flex items-center gap-2"
                                    >
                                        <Phone className="h-4 w-4 text-dsnlu-azure" /> Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="Your Phone Number"
                                        className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 focus:border-dsnlu-azure focus:outline-none focus:ring-1 focus:ring-dsnlu-azure"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="reason"
                                        className="text-sm font-medium text-slate-700 flex items-center gap-2"
                                    >
                                        <HelpCircle className="h-4 w-4 text-dsnlu-azure" /> Reason
                                        for Contact
                                    </label>
                                    <select
                                        id="reason"
                                        className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 focus:border-dsnlu-azure focus:outline-none focus:ring-1 focus:ring-dsnlu-azure bg-white"
                                        required
                                    >
                                        <option value="">Select Reason</option>
                                        <option value="Verbal abuse">Verbal abuse</option>
                                        <option value="Physical abuse">Physical abuse</option>
                                        <option value="Any others">Any others</option>
                                    </select>
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label
                                        htmlFor="department"
                                        className="text-sm font-medium text-slate-700 flex items-center gap-2"
                                    >
                                        <Building className="h-4 w-4 text-dsnlu-azure" />{" "}
                                        Department
                                    </label>
                                    <select
                                        id="department"
                                        className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 focus:border-dsnlu-azure focus:outline-none focus:ring-1 focus:ring-dsnlu-azure bg-white"
                                        required
                                    >
                                        <option value="">Select Department</option>
                                        <option value="Students">Students</option>
                                        <option value="Administration">Administration</option>
                                        <option value="Library">Library</option>
                                        <option value="ACADEMICS">ACADEMICS</option>
                                    </select>
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium text-slate-700"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Say Something..."
                                        className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 focus:border-dsnlu-azure focus:outline-none focus:ring-1 focus:ring-dsnlu-azure"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full md:w-auto min-w-[200px]"
                                >
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
