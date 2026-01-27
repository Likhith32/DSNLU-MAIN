"use client";

import { Card } from "@/components/ui/Card";

export default function RegistrarPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-[88px] pb-12">
            {/* Hero / Header Section */}
            <div className="bg-dsnlu-azure/10 py-12 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-dsnlu-dark-slate mb-2">Registrar (I/c)</h1>
                    <div className="h-1 w-24 bg-dsnlu-lime mx-auto rounded-full"></div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-12 gap-8 mb-16">
                    {/* Image Column */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="https://dsnlu.ac.in/storage/2024/08/Dr.-Viswachandra-Nath-M-.png"
                                alt="Dr. Viswachandra Nath Madasu"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                            <h3 className="text-xl font-bold text-dsnlu-dark-slate mb-1">Dr. Viswachandra Nath Madasu</h3>
                            <p className="text-dsnlu-azure font-medium">Registrar-In Charge</p>
                        </div>
                    </div>

                    {/* Message Column */}
                    <div className="md:col-span-8">
                        <Card className="h-full p-8 bg-white border-none shadow-lg">
                            <div className="mb-6 border-b border-gray-100 pb-6">
                                <h2 className="text-3xl font-bold text-dsnlu-dark-slate mb-2">
                                    Message from the Registrar
                                </h2>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                                <p>
                                    Education is an integration of academic and professional learning which builds strong foundation among future professionals. The positive outcomes of good education facilitate the personal development of the students and contribute to the national growth. In the current era of technological advancements, students need a few catalysts to stimulate their potential and appropriate guidance to help them make the right choices at the right time.
                                </p>
                                <p>
                                    The campus of DSNLU has been built up in a pollution free environment. It is a premier law university with highly qualified and experienced faculty. The university provides excellent environment of learning and research.
                                </p>
                                <p>
                                    Our objective is to improve the standards to achieve excellence in the field of education. The core strength of a university is the commitment towards overall development of the students and the staff members. Education is a complete process that leads to the attainment of the full potential of the students. Our endeavour is to equip our students with life-skills to face the real world – be it planning, organizing, team building, communicating effectively or dealing with challenges confidently. We make sure that our students are rooted in the values of Indian culture and maintain the global outlook.
                                </p>
                                <p>
                                    The vision of DSNLU is to transform persons into personalities. With our futuristic vision, we wish that our students should be successful and be proud of what they achieve in their lives.
                                </p>
                                <p>
                                    We are confident that DSNLU is the best place for learning and I assure you that the life of students at DSNLU campus would be highly rewarding in the terms of academic pursuit.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
