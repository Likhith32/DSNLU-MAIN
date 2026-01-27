"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const resourcesData = [
    {
        category: "Commentaries",
        items:
            "Durga Das Basu on Constitution of India, Nimmer on Copy Right, A.Ramiaya on Contract Law, Chaturvedi & Pithisaria’ Income Tax Law, etc.",
    },
    {
        category: "Textbooks & Treaties",
        items:
            "Common Law Library series of books i.e.) Chitty on Contracts, Bowstead & Reynolds on Agency, Arlidge, Eady & Smith on Contempt, Mcgregor on Damages, MacGillivray on Insurance Law, Goff & Jones The Law of Unjust Enrichment, Charles Worth & Percy on Negligence, Jacob’s Precedents of Pleadings, Benjamin’s Sale of Goods, Clerk & Lindsell on Torts, De Smith’s Judicial review, etc.",
    },
    {
        category: "Legal periodicals",
        items:
            "Harvard Law Review, Modern Law Review, Law Quarterly Review, California Law Review, Columbia Law review, Public Law, Yale Law Journal, All India Reporter, Supreme Court Cases Weekly, etc.",
    },
    {
        category: "Law Reports",
        items:
            "U.S Supreme Court Reports, All England Law Reports, Law Reports of Indian Appeals, English Reports, Law Reports of Commonwealth, etc.",
    },
    {
        category: "Legal Encyclopedias",
        items:
            "Corpus Juris Secundum, American Jurisprudence, Halsbury’s Laws of India & England, Encyclopedia of Modern Philosophies of Law, etc.",
    },
    {
        category: "Digests & Abridgements",
        items:
            "Supreme Court Yearly Digest, A.P. High Court Yearly Digest, Labour Law Digest, Criminal Law Digest, AIR Supreme Court Digest, etc.",
    },
    {
        category: "Legal Dictionaries",
        items:
            "Advanced Law Lexicon, Black’s Law Dictionary by Garner, Legal Maxims: Classified and Illustrated, Stroud’s Judicial Dictionary of Words & Phrases, Oxford English Dictionary, Dictionary of Legal Quotations etc.",
    },
];

export default function PrintResourcesPage() {
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
                        PRINT RESOURCES
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4 space-y-8">
                <Card className="border-none shadow-md">
                    <CardContent className="p-8 space-y-6 text-slate-700 leading-relaxed">
                        <p>
                            Damodaram Sanjivayya National Law University Library has a vast
                            collection of print resources. In print resources, there are two
                            types of sources of law:
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-4 font-medium text-dsnlu-dark-blue">
                            <li>Primary Sources of Law</li>
                            <li>Secondary Sources of Law</li>
                        </ul>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-dsnlu-dark-blue">
                                1. Primary Sources
                            </h3>
                            <p>
                                Primary Sources are authoritative publications of law produced
                                by law-making bodies. The most important components of primary
                                sources are Legislation, Judgements, Government department
                                reports, Law reports, etc.
                            </p>
                            <p>
                                Damodaram Sanjivayya National Law University Library has some
                                important law reports such as Supreme Court Reports, All India
                                Reporter, and Supreme Court Cases for Indian judgments; All
                                England Law Reports for House of Lords & UK Supreme Court
                                judgments; Commonwealth Reports for High Court of Australia
                                judgments; and U.S. Supreme Court Reports for United States
                                judgments. These are some of the law reports published in
                                different countries.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-dsnlu-dark-blue">
                                2. Secondary Sources
                            </h3>
                            <p>
                                Secondary sources provide commentary on the law. Though they are
                                not binding on courts, they help to find mandatory or persuasive
                                primary authority on a subject. Some important secondary sources
                                available in Damodaram Sanjivayya National Law University
                                Library are Commentaries, Textbooks of all subject
                                specializations on law and Treaties, Legal Periodicals,
                                Encyclopedias, Digests, and Legal Dictionaries.
                            </p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>
                                    <span className="font-semibold text-dsnlu-azure">
                                        Commentaries:
                                    </span>{" "}
                                    Specifically comment on certain articles in a particular
                                    subject area of law, when we want to find out the
                                    interpretation and decisions etc. specific to it. There are
                                    different types of commentaries; some concentrate on Academic
                                    perspectives, while others are specifically addressed to
                                    Practitioners and focused on cases.
                                </li>
                                <li>
                                    <span className="font-semibold text-dsnlu-azure">
                                        Legal Encyclopedias:
                                    </span>{" "}
                                    Multi-volume sets of books, divided alphabetically into major
                                    legal subject headings covering either the entire field of law
                                    or a broad area.
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-md overflow-hidden">
                    <CardHeader className="bg-dsnlu-dark-blue text-white py-6">
                        <CardTitle className="text-xl md:text-2xl text-center">
                            PRINT RESOURCES AVAILABLE IN DSNLU LIBRARY
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-100 text-dsnlu-dark-blue">
                                        <th className="p-4 font-bold border-b border-slate-200 w-1/3 min-w-[200px]">
                                            Resource Type
                                        </th>
                                        <th className="p-4 font-bold border-b border-slate-200 min-w-[300px]">
                                            Examples
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {resourcesData.map((resource, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-slate-50 transition-colors"
                                        >
                                            <td className="p-4 font-semibold text-dsnlu-azure align-top">
                                                {resource.category}
                                            </td>
                                            <td className="p-4 text-slate-700 align-top">
                                                {resource.items}
                                            </td>
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
