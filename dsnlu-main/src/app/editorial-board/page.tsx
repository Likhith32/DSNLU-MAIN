"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";

export default function EditorialBoardPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="IPR Editorial & Advisory Board" />

            <div className="container mx-auto mt-12 px-4">
                <div className="grid gap-8">
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Board Members
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-dsnlu-dark-blue mb-2 uppercase">
                                        Chief Patron
                                    </h3>
                                    <p className="text-lg">
                                        <strong>Hon&apos;ble Sri Justice P. Narasimha</strong>, Judge,
                                        Supreme Court of India & Visitor, DSNLU Visakhapatnam
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-dsnlu-dark-blue mb-2 uppercase">
                                        Patron
                                    </h3>
                                    <p className="text-lg">
                                        <strong>Hon’ble Sri Justice Dhiraj Singh Thakur</strong>,
                                        Chief Justice, High Court of Andhra Pradesh & Chancellor,
                                        DSNLU Visakhapatnam
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-dsnlu-dark-blue mb-2 uppercase">
                                        Honorary Editor
                                    </h3>
                                    <p className="text-lg">
                                        <strong>Prof. (Dr.) D. Surya Prakasa Rao</strong>,
                                        Vice-Chancellor, DSNLU Visakhapatnam.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-dsnlu-dark-blue mb-2 uppercase">
                                        Chief Editor
                                    </h3>
                                    <p className="text-lg">
                                        <strong>Dr. Dayananda Murthy C.P</strong>, Associate
                                        Professor, Chair Person, Centre for IPR and Technology,
                                        DSNLU, Visakhapatnam
                                        <br />
                                        Email-{" "}
                                        <a
                                            href="mailto:dmurthy@dsnlu.ac.in"
                                            className="text-blue-600 hover:underline"
                                        >
                                            dmurthy@dsnlu.ac.in
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-dsnlu-dark-blue mb-4 uppercase">
                                        Advisory Board
                                    </h3>
                                    <ul className="space-y-4">
                                        <li>
                                            <strong>Prof. (Dr.) V.C. Vivekananda</strong>,
                                            Vice-Chancellor, HNLU-Raipur.
                                        </li>
                                        <li>
                                            <strong>Prof. (Dr.) V.K. Ahuja</strong>, Director, Indian
                                            Law Institute-Delhi & Former Vice-Chancellor, NLUJA-Assam.
                                        </li>
                                        <li>
                                            <strong>Prof. (Dr.) T. Ramakrishna</strong>, Professor of
                                            Law, IPR Chair Professor, NLSIU-Bangalore.
                                        </li>
                                        <li>
                                            <strong>Prof. (Dr.) Irene Calboli</strong>, Professor of
                                            Law, Texas A & M University School of Law, Academic
                                            Fellow, School of Law, University of Geneva.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-dsnlu-dark-blue mb-4 uppercase">
                                        Editorial Board
                                    </h3>
                                    <ul className="space-y-4">
                                        <li>
                                            <strong>Dr. Ragini P Khubalkar</strong>, Associate
                                            Professor, MNLU-Nagpur.
                                        </li>
                                        <li>
                                            <strong>Prof. (Dr.) G.B. Reddy</strong>, Senior Professor
                                            of Law, University College of Law, Osmania
                                            University-Hyderabad.
                                        </li>
                                        <li>
                                            <strong>Prof. (Dr.) Subhash Chandra Roy</strong>,
                                            Professor of Law, DPIIT, IPR Chair Professor, CNLU-Patna.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
