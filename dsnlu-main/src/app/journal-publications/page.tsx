"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";
import Link from "next/link";

export default function JournalPublicationsPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="Journal & Publications" />

            <div className="container mx-auto mt-12 px-4">
                <div className="grid gap-8">
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                DSNLU Journal of Science, Technology & Law – (DJSTL) - ISSN No-
                                2583-1208
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">
                                        About Journal
                                    </h3>
                                    <p>
                                        The DSNLU Journal of Science, Technology & Law published by
                                        CIPR & T bearing <strong>ISSN No- 2583-1208</strong>, is a
                                        peer-reviewed, double-blind and open access journal, with
                                        this third volume first issue discussing some seminal themes
                                        of IP & Technology aspects of contemporary relevance. The
                                        issue explores a wide spectrum of thoughts and through its
                                        varied articulations attempts to open up dialogues in
                                        diverse domains of application of intellectual property laws
                                        and technology.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">
                                        Eligibility:
                                    </h3>
                                    <p>
                                        DSNLU Journal of Science, Technology & Law is accepting
                                        original and unpublished submissions from academicians,
                                        professionals, research scholars and students.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">
                                        Theme:
                                    </h3>
                                    <p>
                                        The peer-reviewed journal DSNLU Journal of Science,
                                        Technology & Law solicits high quality articles pertaining
                                        to areas of intellectual property law & Technology law.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">
                                        Submission Guidelines
                                    </h3>
                                    <p className="mb-2">
                                        The authors must follow the guidelines given below
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-2">
                                        <li>
                                            Manuscripts must be accompanied by a covering letter in a
                                            separate document containing the following details of the
                                            author and co-author(s) (if any): Name; Affiliation /
                                            Academic Qualification; Contact Number and e-mail address;
                                            Postal address.
                                        </li>
                                        <li>
                                            A maximum number of authors permitted is two <em>e.,</em>{" "}
                                            one author and one co-author
                                        </li>
                                        <li>
                                            The manuscript shall not contain the name and affiliation
                                            of the author(s).
                                        </li>
                                        <li>
                                            The manuscript must be accompanied by an abstract of not
                                            exceeding 300 words, with five keywords. This must be the
                                            first page of the submission
                                        </li>
                                        <li>Similarity must not exceed 10%</li>
                                        <li>
                                            Co-authorship is not allowed in the case of Legislative
                                            Comments.
                                        </li>
                                        <li>
                                            All submissions should be made electronically in the form
                                            of an MS Word (.doc) file by filling the google form{" "}
                                            <strong>
                                                <Link
                                                    href="https://docs.google.com/forms/d/e/1FAIpQLSchuZ2GeYnoR8NxUWulMmp8rql7e_4CmMt7kNCXIoFn8o7_yg/viewform?usp=pp_url"
                                                    className="text-blue-600 hover:underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    here
                                                </Link>
                                            </strong>{" "}
                                            by{" "}
                                            <strong>
                                                31<sup>st</sup> May( For First Issue) , 31<sup>st</sup>{" "}
                                                Oct ( Second Issue).{" "}
                                            </strong>
                                        </li>
                                        <li>
                                            Title of the Manuscript must be [Your Name & Category of
                                            Submission] ex. – Mahith & Long Article.
                                        </li>
                                        <li>
                                            The Review Process would take for a time period of not
                                            less than 12 weeks from the last date of submissions.
                                        </li>
                                        <li>
                                            The decision on the manuscripts will be communicated at
                                            the end of the completion of the Review Process.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">
                                        Formatting Guidelines
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2 ml-2">
                                        <li>
                                            The body of the manuscript should be in Times New Roman,
                                            Size 12 and 1.5 spacing.
                                        </li>
                                        <li>
                                            Title of the article Times New Roman, Size 14, Bold –{" "}
                                            <strong>
                                                Copyright Infringement in the Digital Era
                                            </strong>
                                        </li>
                                        <li>
                                            Main headings with Roman Numbers, Times New Roman, Size
                                            12, Bold – <strong>I</strong>. <strong>Introduction</strong>
                                        </li>
                                        <li>
                                            Sub-headings with Numerical Times New Roman, Size 12, Bold
                                            and Italics – <strong> Perspectives from India</strong>
                                        </li>
                                        <li>
                                            Sub-headings of Level 2 Times New Roman, size 12, Italics
                                            – <em> Lessons Learnt</em>
                                        </li>
                                        <li>
                                            The citation must be given as a footnote and must conform
                                            to The Harvard Bluebook style of citation (21<sup>st</sup>
                                            edition).
                                        </li>
                                        <li>
                                            The footnotes and references should be in Times New Roman,
                                            size 10 and single spacing.
                                        </li>
                                    </ul>
                                    <p className="mt-4 font-bold">
                                        Note: The submissions will be rejected at the outright, if
                                        they are not complied with the above-mentioned formatting
                                        guidelines.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">
                                        All the Articles Must strictly adhere to the following word
                                        Limit
                                    </h3>

                                    <h4 className="text-md font-semibold text-dsnlu-azure mt-4 mb-2">
                                        Long Articles – 5000 – 8000 Words
                                    </h4>
                                    <p>
                                        Long articles must be comprehensive and contain a rigorous
                                        in-depth analysis of the contemporary problem(s) and idea(s)
                                        relating to Intellectual Property Rights. It should include
                                        identification of lacunae in the existing status quo along
                                        with alternatives, suggestions, and references to a range of
                                        sources.
                                    </p>

                                    <h4 className="text-md font-semibold text-dsnlu-azure mt-4 mb-2">
                                        Short Articles – 3000 – 5000 Words
                                    </h4>
                                    <p>
                                        Short articles should rigorously analyze the contemporary
                                        problem(s) and idea(s) relating to Intellectual Property
                                        Rights. They should ideally identify lacunae in the existing
                                        status quo, provide solutions, and alternative suggestions,
                                        and should include references to a range of sources.
                                    </p>

                                    <h4 className="text-md font-semibold text-dsnlu-azure mt-4 mb-2">
                                        Legislative Comment – 2000 – 3000 words
                                    </h4>
                                    <p>
                                        The comment should provide a rigorous analysis of a recent
                                        legislative instrument. It should examine the objective of
                                        the legislation and the legal impact the same is expected to
                                        have.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">
                                        Contact
                                    </h3>
                                    <p>
                                        For any queries, please drop a mail to –{" "}
                                        <strong>
                                            <a
                                                href="mailto:ipr@dsnlu.ac.in"
                                                className="text-blue-600 hover:underline"
                                            >
                                                ipr@dsnlu.ac.in
                                            </a>
                                            .{" "}
                                        </strong>
                                    </p>
                                    <p className="mt-2">
                                        <strong>For Previous Issues Visit</strong> –{" "}
                                        <strong>
                                            <Link
                                                href="https://dsnlu.ac.in/dsnlu-journal-of-science-technology-and-law/"
                                                className="text-blue-600 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                https://dsnlu.ac.in/dsnlu-journal-of-science-technology-and-law/
                                            </Link>
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
