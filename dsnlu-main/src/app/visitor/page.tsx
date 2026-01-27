"use client";

import { Banner } from "@/components/ui/banner";
import { Card, CardContent } from "@/components/ui/Card";

export default function VisitorPage() {
    const visitorsData = [
        {
            sNo: "1.",
            name: "Hon’ble Sri Justice N.V. Ramana",
            designation: "Judge\nSupreme Court of India",
            from: "24.04.2021",
            to: "23.06.2021",
        },
        {
            sNo: "2.",
            name: "Hon’ble Sri Justice L. Nageswara Rao",
            designation: "Judge\nSupreme Court of India",
            from: "24.06.2021",
            to: "11.08.2022",
        },
        {
            sNo: "3.",
            name: "Hon’ble Sri Justice Pamidighantam Sri Narasimha",
            designation: "Judge\nSupreme Court of India",
            from: "12.08.2022",
            to: "",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner
                title="Visitor"
                backgroundImage="https://dsnlu.ac.in/storage/2022/12/about-us-bannar.jpg"
            />

            <div className="container mx-auto mt-12 px-4">
                <div className="grid md:grid-cols-12 gap-8 mb-16">
                    <div className="md:col-span-3">
                        <div className="sticky top-24">
                            <img
                                src="https://dsnlu.ac.in/storage/2022/12/Justice-Shri-P.-Kodanda-Ramayya-234x300-1.jpg"
                                alt="Hon'ble Mr. Justice Pamidighantam Sri Narasimha"
                                className="w-full rounded-lg shadow-lg border-4 border-white"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-9">
                        <Card className="border-none shadow-md h-full">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-dsnlu-dark-blue mb-6 border-b pb-2">
                                    Hon'ble Mr. Justice Pamidighantam Sri Narasimha
                                </h2>

                                <div className="space-y-4 text-slate-700 text-justify leading-relaxed">
                                    <p>
                                        Born on 03 May 1963 to Smt. Satyavati and Late Justice Shri P. Kodanda Ramayya in Hyderabad. Graduated with triple majors in Economics, Political Science, and Public Administration from Nizam College, Hyderabad, and pursued law at the Campus Law Centre, Delhi University, in 1988. Enrolled as an Advocate in the same year and practiced before the High Court, Civil Courts, and Tribunals in Hyderabad and shifted counsel practice to Supreme Court. He appeared in a large number of cases, including that of Constitution Benches, before the Supreme Court. During this time, he was appointed as the commission counsel for the Justice Chinnappa Reddy Commission. He was a member of the Supreme Court Legal Aid Committee.
                                    </p>
                                    <p>
                                        He was designated as a Senior Advocate by the Full Court of the Supreme Court of India in the year 2008. As a Senior Advocate, he appeared in many public law cases involving constitutional, administrative, and environmental issues. He specialised in laws relating to Telecom, Competition, Electricity, and other Regulatory Jurisdictions. He was the amicus curiae for the Forest Bench and other cases concerning Judicial Appointments, Fast Track courts, and Tribal laws.
                                    </p>
                                    <p>
                                        He was appointed as the Additional Solicitor General of India in 2014. During that time, he assisted the Court as a Law Officer in several landmark cases, including the NJAC case before the Constitution Bench. He was part of the Indian Supreme Court Delegation to the Canadian Supreme Court, where he presented a paper on extradition and the environment. He had the rare opportunity of leading the Indian team and represented India before the International Tribunal for the Law of the Sea (ITLOS) in Hamburg, Germany. He also represented India before the Permanent Court of Arbitration (PCA), Hague in Investment Treaty Arbitration.
                                    </p>
                                    <p>
                                        He was part of the Governing Body of the National Legal Services Authority of India (NALSA) and closely associated with the Mediation and Conciliation Project Committee (MCPC) of the Supreme Court of India. As a Law Officer, he was instrumental in constituting and being part of the High-powered Committee suggesting sweeping changes to the Arbitration Act and proposing a mechanism for Institutional Arbitration. He is closely associated with the making of the law on Mediation. He was a member of Committees relating to the restructuring of all Appellate Tribunals and reviewing the legal regime concerning Corporate Social Responsibility. He has also been a member of the Investor Education and Protection Fund Authority (IEPFA). Supreme Court appointed him as a Mediator in the BCCI case. He could successfully mediate between the members and the Board for holding elections and the constitution of an elected body.
                                    </p>
                                    <p>
                                        He had been on the Executive Council of many National Law Universities and other educational institutions.
                                    </p>
                                    <p className="font-semibold text-dsnlu-dark-blue">
                                        Elevated as a Judge of the Supreme Court of India directly from the Bar on 31 August 2021.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <Card className="border-none shadow-lg max-w-5xl mx-auto">
                    <CardContent className="p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h1 className="text-2xl md:text-3xl font-bold text-dsnlu-dark-blue mb-2">
                                VISITOR – CHIEF JUSTICE OF INDIA
                            </h1>
                            <p className="text-slate-500 italic mb-2">or</p>
                            <h2 className="text-xl md:text-2xl font-bold text-dsnlu-azure">
                                His Nominee – JUDGE, SUPREME COURT OF INDIA
                            </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-slate-200">
                                <thead>
                                    <tr className="bg-dsnlu-dark-blue text-white">
                                        <th className="p-4 text-center border border-slate-300 w-16">SI.No.</th>
                                        <th className="p-4 text-center border border-slate-300" colSpan={2}>NAME</th>
                                        <th className="p-4 text-center border border-slate-300">From</th>
                                        <th className="p-4 text-center border border-slate-300">To</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {visitorsData.map((row, index) => (
                                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                            <td className="p-4 border border-slate-200 text-center font-medium text-slate-600">{row.sNo}</td>
                                            <td className="p-4 border border-slate-200 font-bold text-dsnlu-dark-blue text-lg" colSpan={1}>
                                                {row.name}
                                            </td>
                                            <td className="p-4 border border-slate-200 text-slate-700 whitespace-pre-line">
                                                {row.designation}
                                            </td>
                                            <td className="p-4 border border-slate-200 text-center text-slate-700 font-medium">{row.from}</td>
                                            <td className="p-4 border border-slate-200 text-center text-slate-700 font-medium">{row.to || "-"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
