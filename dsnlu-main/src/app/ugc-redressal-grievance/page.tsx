"use client";

import { Banner } from "@/components/ui/banner";
import { Card, CardContent } from "@/components/ui/Card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function UGCGrievanceRedressalPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner
                title="UGC-Grievance Redressal"
                backgroundImage="https://dsnlu.ac.in/storage/2022/12/about-us-bannar.jpg"
            />

            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg max-w-4xl mx-auto">
                    <CardContent className="p-8 md:p-12">
                        <h1 className="text-3xl font-bold text-dsnlu-dark-blue mb-8 border-b pb-4">
                            UGC-Grievance Redressal
                        </h1>

                        <div className="space-y-8 text-lg text-slate-700">
                            <div className="space-y-2">
                                <p className="font-bold text-xl text-dsnlu-azure">
                                    University Grants Commission (UGC)
                                </p>
                                <p className="font-semibold">
                                    Redressal of Grievance of Students of DSNLU
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold text-dsnlu-dark-blue mb-4">
                                    Ombuds Person
                                </h3>
                                <div className="space-y-3">
                                    <p className="font-semibold text-lg">Prof. A.B.S.V. Ranga Rao</p>

                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-dsnlu-azure" />
                                        <span>Office No: <a href="tel:08924248216" className="hover:text-dsnlu-azure transition-colors">08924-248216</a></span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-dsnlu-azure" />
                                        <span>Email-ID: <a href="mailto:rangarao_ausw@yahoo.com" className="hover:text-dsnlu-azure transition-colors">rangarao_ausw@yahoo.com</a></span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-200">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-6 h-6 text-dsnlu-azure mt-1 flex-shrink-0" />
                                    <p className="uppercase font-medium leading-relaxed">
                                        DAMODARAM SANJIVAYYA NATIONAL LAW UNIVERSITY,<br />
                                        NYAYAPRASTHA, SABBAVARAM,<br />
                                        VISAKHAPATNAM- 531035,<br />
                                        ANDHRA PRADESH, INDIA
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 pl-9">
                                    <Phone className="w-5 h-5 text-dsnlu-azure" />
                                    <span className="font-bold">OFFICE: <a href="tel:+918924248216" className="hover:text-dsnlu-azure transition-colors">+91 8924-248216</a></span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
