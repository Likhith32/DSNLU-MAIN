"use client";

import { Banner } from "@/components/ui/banner";
import { Card, CardContent } from "@/components/ui/Card";
import { Phone, Mail, Globe, ExternalLink } from "lucide-react";

export default function AntiRaggingContactDetailsPage() {
    const contactData = [
        {
            type: "HEI-ARC",
            name: "Prof. D. Surya Prakasa Rao",
            designation: "Vice Chancellor & Chairman of ARC",
            mobile: "9848265998",
            email: "vc2dsnlu@gmail.com",
        },
        {
            type: "HEI-ARC",
            name: "Dr Dayanand Murthy C.P",
            designation: "Associate Professor & Member of ARC",
            mobile: "9393719745",
            email: "dmurthy@dsnlu.ac.in",
        },
        {
            type: "HEI-ARC",
            name: "Dr P. Jogi Naidu",
            designation: "Associate Professor & Member of ARC",
            mobile: "9910927182",
            email: "pjoginaidu1@dsnlu.ac.in",
        },
        {
            type: "HEI-ARC",
            name: "Dr Bharat Kumar .R",
            designation: "Assistant Professor & Member of ARC",
            mobile: "8500056969",
            email: "rbharat87@dsnlu.ac.in",
        },
        {
            type: "HEI-ARC",
            name: "Dr N. Bhagya Lakshmi",
            designation: "Assistant Professor & Member of ARC",
            mobile: "9849528129",
            email: "bhagyasri.n@dsnlu.ac.in",
        },
        {
            type: "HEI-ARC",
            name: "Dr Ch. Lakshmi",
            designation: "Assistant Professor & Member of ARC",
            mobile: "",
            email: "",
        },
        {
            type: "HEI-ARC",
            name: "Dr A. Nageswara Rao",
            designation: "Assistant Professor & Member of ARC",
            mobile: "",
            email: "",
        },
        {
            type: "POLICE",
            name: "C. I, Sabbavaram PS",
            designation: "Member",
            mobile: "9440796089",
            email: "sbvmsho@gmail.com",
        },
        {
            type: "POLICE",
            name: "S. I , Sabbavaram PS",
            designation: "Member",
            mobile: "9492894881",
            email: "sbvmsho@gmail.com",
        },
        {
            type: "HEI-ARC",
            name: "First year student Parent",
            designation: "Member",
            mobile: "",
            email: "",
        },
        {
            type: "HEI-ARC",
            name: "Final year student",
            designation: "Member",
            mobile: "",
            email: "",
        },
        {
            type: "HEI-ARC",
            name: "First Year Student",
            designation: "Member",
            mobile: "",
            email: "",
        },
        {
            type: "HEI-ARC",
            name: "Prof Nandini CP",
            designation: "Convenor",
            mobile: "9949221603",
            email: "nandinicp@dsnlu.ac.in",
        },
        {
            type: "HEI-WARDENS",
            name: "Dr P. Jogi Naidu",
            designation: "Chief Warden – Boys Hostel",
            mobile: "9910927182",
            email: "pjoginaidu1@dsnlu.ac.in",
        },
        {
            type: "HEI-WARDENS",
            name: "Dr N. Bhagya Lakshmi",
            designation: "Chief Warden, Girls Hostel",
            mobile: "9849528129",
            email: "bhagyasri.n@dsnlu.ac.in",
        },
        {
            type: "HEI-WARDENS",
            name: "Dr Durga Prasad",
            designation: "Warden, Boys Hostel",
            mobile: "9346957997",
            email: "dr.durgaprasad@dsnlu.ac.in",
        },
        {
            type: "HEI-WARDENS",
            name: "",
            designation: "Warden, Girls Hostel",
            mobile: "",
            email: "",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner
                title="Anti Ragging Contact Details"
                backgroundImage="https://dsnlu.ac.in/storage/2022/12/about-us-bannar.jpg"
            />

            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg max-w-6xl mx-auto">
                    <CardContent className="p-8 md:p-12">
                        <div className="text-center mb-12 space-y-8">
                            <h1 className="text-3xl font-bold text-dsnlu-dark-blue border-b pb-4 inline-block">
                                NATIONAL RAGGING PREVENTION PROGRAMME
                            </h1>

                            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                                    <h3 className="text-xl font-bold text-dsnlu-azure mb-4">
                                        National Anti-Ragging Helpline
                                    </h3>
                                    <div className="space-y-3 text-slate-700">
                                        <p className="font-semibold">24x7 Toll Free: <span className="text-xl text-dsnlu-dark-blue">1800-180-5522</span></p>
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-dsnlu-azure" />
                                            <a href="mailto:helpline@antiragging.in" className="hover:text-dsnlu-azure transition-colors">helpline@antiragging.in</a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Globe className="w-4 h-4 text-dsnlu-azure" />
                                            <a href="http://www.antiragging.in/" target="_blank" rel="noopener noreferrer" className="hover:text-dsnlu-azure transition-colors">www.antiragging.in</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                                    <h3 className="text-xl font-bold text-dsnlu-azure mb-4">
                                        UGC Monitoring Agency
                                    </h3>
                                    <div className="space-y-3 text-slate-700">
                                        <p className="font-semibold">Centre for Youth (C4Y)</p>
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-dsnlu-azure" />
                                            <a href="mailto:antiragging@c4yindia.org" className="hover:text-dsnlu-azure transition-colors">antiragging@c4yindia.org</a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Globe className="w-4 h-4 text-dsnlu-azure" />
                                            <a href="http://www.c4yindia.org/" target="_blank" rel="noopener noreferrer" className="hover:text-dsnlu-azure transition-colors">www.c4yindia.org</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-lg max-w-4xl mx-auto">
                                <p className="text-red-700 font-bold text-lg mb-2">
                                    RAGGING IS A CRIMINAL OFFENCE AND THE CULPRITS WILL ATTRACT PUNITIVE ACTION AS MENTIONED IN THE UGC REGULATIONS
                                </p>
                                <a
                                    href="http://www.antiragging.in/assets/pdf/annexure/Annexure-I.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 font-medium underline"
                                >
                                    View Regulations <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-6 text-center">
                                Contact Details of the Nodal Officers of Anti-Ragging Committee
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-slate-200">
                                    <thead>
                                        <tr className="bg-dsnlu-dark-blue text-white">
                                            <th className="p-4 text-left border border-slate-300">Type</th>
                                            <th className="p-4 text-left border border-slate-300">Person Name</th>
                                            <th className="p-4 text-left border border-slate-300">Designation</th>
                                            <th className="p-4 text-left border border-slate-300">Mobile</th>
                                            <th className="p-4 text-left border border-slate-300">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contactData.map((row, index) => (
                                            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                                <td className="p-3 border border-slate-200 font-medium text-slate-600">{row.type}</td>
                                                <td className="p-3 border border-slate-200 font-semibold text-dsnlu-dark-blue">{row.name || "-"}</td>
                                                <td className="p-3 border border-slate-200 text-slate-700">{row.designation}</td>
                                                <td className="p-3 border border-slate-200 text-slate-700">
                                                    {row.mobile ? (
                                                        <a href={`tel:${row.mobile}`} className="hover:text-dsnlu-azure flex items-center gap-1">
                                                            <Phone className="w-3 h-3" /> {row.mobile}
                                                        </a>
                                                    ) : "-"}
                                                </td>
                                                <td className="p-3 border border-slate-200 text-slate-700">
                                                    {row.email ? (
                                                        <a href={`mailto:${row.email}`} className="hover:text-dsnlu-azure flex items-center gap-1">
                                                            <Mail className="w-3 h-3" /> {row.email}
                                                        </a>
                                                    ) : "-"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
