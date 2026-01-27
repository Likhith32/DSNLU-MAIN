"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FileText, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ViceChancellorPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-[88px] pb-12">
            {/* Hero / Header Section */}
            <div className="bg-dsnlu-azure/10 py-12 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-dsnlu-dark-slate mb-2">Vice Chancellor</h1>
                    <div className="h-1 w-24 bg-dsnlu-lime mx-auto rounded-full"></div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Profile Section */}
                <div className="grid md:grid-cols-12 gap-8 mb-16">
                    {/* Image & Quick Links Column */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="https://dsnlu.ac.in/storage/2024/04/vcdsnlu.jpeg"
                                alt="Prof. D. Surya Prakasa Rao"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="space-y-3">
                            <Link href="/vice-chancellors-message" className="block">
                                <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3 text-dsnlu-dark-slate border-dsnlu-azure/30 hover:bg-dsnlu-azure/5 hover:text-dsnlu-azure">
                                    <MessageSquare className="w-5 h-5" />
                                    Vice Chancellor’s Message
                                </Button>
                            </Link>

                            <a href="https://dsnlu.ac.in/storage/2024/07/Prof_-D_S_Prakasa-Rao_CV.pdf" target="_blank" rel="noopener noreferrer" className="block">
                                <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3 text-dsnlu-dark-slate border-dsnlu-azure/30 hover:bg-dsnlu-azure/5 hover:text-dsnlu-azure">
                                    <FileText className="w-5 h-5" />
                                    Vice Chancellor's CV
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Bio Column */}
                    <div className="md:col-span-8">
                        <Card className="h-full p-8 bg-white border-none shadow-lg">
                            <div className="mb-6 border-b border-gray-100 pb-6">
                                <h2 className="text-3xl font-bold text-dsnlu-dark-slate mb-2">
                                    Prof. D. Surya Prakasa Rao
                                </h2>
                                <p className="text-xl text-dsnlu-azure font-medium mb-4">
                                    Hon'ble Vice Chancellor, Damodaram Sanjivayya National Law University
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-dsnlu-dark-slate">Mobile:</span> 9848265998
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-dsnlu-dark-slate">Email:</span> suryaprakash_dasari@yahoo.co.in
                                    </div>
                                    <div className="col-span-2">
                                        <span className="font-semibold text-dsnlu-dark-slate">Highest Qualification:</span> Ph.D. in Law, LL.M. (JRF & NET – 1990)
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                                <p>
                                    Prof. (Dr.) D. Surya Prakasa Rao recently joined as Vice-Chancellor, DSNLU. Previously he was Visiting Professor in Law at Maharashtra National Law University, Nagpur from June 1, 2022 to May 31, 2023. Until recently he served the Prestigious Oldest Law College Dr. B. R. Ambedkar College of Law, Andhra University. He served the Andhra University Law College in different capacities such as Principal, Chairman, Faculty of Law; Chairman, Board of Studies in Law; Convener, Research Forum; Student Advisor; Deputy Warden and Dean, Guest Houses of Andhra University.
                                </p>
                                <p>
                                    He was the recipient of Andhra Pradesh State Best Teacher Award in 2016 and Best Research Award of Andhra University in 2007 and Dr. Sarvepalli Radhakrishna Best Teacher Award of Andhra University in 2009. He is a rare combination of Academics, Research and Administration. He is one of the Senior Professors who had served the University with 36 years teaching experience including 15 years of Professor of Law. His areas of Specialisations are wide including Jurisprudence, Constitutional Law of India, Human Rights Law, Family Law, Criminal Law and Commercial Laws.
                                </p>
                                <p>
                                    He published more than 50 articles in reputed Law Journals and One book. He has participated and presented papers in more than 200 National and International Seminars and Conferences. He organized several UGC sponsored National Seminars and Workshops on abatement of Pollution for NALSAR University of Law, Hyderabad. He chaired several Technical Sessions and delivered Key Note Addresses in more than 5 National Seminars. He has successfully guided more than 50 Ph.D. Scholars in Law and more than 30 Research Scholars are pursuing Ph.D. in Law under his guidance.
                                </p>
                                <p>
                                    He is Coordinator for Human Rights and Duties Programmes including M.A. in Human Rights and Duties, LL.M. in Human Rights and Duties and P.G. Diploma in Human Rights and Duties. He is also Coordinator for UGC SAP DRS-II Law in the College from 2015 to 2020. He was a member of Learning Outcome Curriculum Framework (LOCF) of Human Rights and Duties of University Grants Commission, New Delhi for both UG and PG Courses (2018 to 2020). He is Selection Committee member for both Major Research Projects and Minor Research Projects of UGC. He completed one Major Research Project and two Minor Research Projects. He is a Life Member of Indian Law Institute, New Delhi. He has served as Subject Expert in various committees Selection and supervisory of UGC, UPSC, APPSC, TPSC and OPSC. He was a member of Senate of Andhra University.
                                </p>
                                <p>
                                    He did his Doctorate in Law from Nagpur University in 1997 and also studied LL.B. (1982-83) and LL.M. (1983-1985) in Nagpur University and got first rank in LL.M. Commercial Laws. He was qualified UGC JRF and NET in Law when it was introduced in 1990. He visited United Nations Organizations (UNO) and attended programme on the Indigenous People in 2016 with the partial scholarship granted by Andhra University. He also attended one International Seminar in Institute of Human Rights, Colombia University, New York and presented a paper on Human Rights of Indigenous people – New Challenges.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Table Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                        <div className="bg-dsnlu-dark-slate p-4 text-center">
                            <h3 className="text-xl font-bold text-white">VICE-CHANCELLORS</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider w-16">Sl.No.</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">From</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">To</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {[
                                        { id: 1, name: "Prof. Y. Satyanarayana", from: "16.09.2008", to: "03.11.2011" },
                                        { id: 2, name: "Prof. R.G.B. Bhagavath Kumar", from: "04.11.2011", to: "02.11.2015" },
                                        { id: 3, name: "Prof. G.S.N. Raju (In-Charge)", from: "02.11.2015", to: "08.02.2016" },
                                        { id: 4, name: "Prof. E.A. Narayana (In-Charge)", from: "08.02.2016", to: "24.06.2016" },
                                        { id: 5, name: "Prof. V. Kesava Rao (In-Charge)", from: "24.06.2016", to: "24.12.2018" },
                                        { id: 6, name: "Prof. S. Surya Prakash", from: "24.12.2018", to: "31.05.2023" },
                                        { id: 7, name: "Prof. D. Surya Prakasa Rao", from: "19.10.2023", to: "Present" },
                                    ].map((row) => (
                                        <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-gray-500">{row.id}.</td>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{row.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">{row.from}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">{row.to}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
