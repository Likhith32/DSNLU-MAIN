"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
    BookOpen,
    Target,
    Flag,
    Users,
    FileText,
    Send,
    Award,
    Globe,
    UserPlus,
} from "lucide-react";

export default function StudentNewsletterPage() {
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
                        STUDENT NEWSLETTER
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4 space-y-8">
                {/* About SNL Section */}
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="md:col-span-1">
                        <Card className="border-none shadow-md h-full overflow-hidden">
                            <img
                                src="https://dsnlu.ac.in/storage/2023/08/SNL_AUG_2023-Edition.jpg"
                                alt="SNL August 2023 Edition"
                                className="w-full h-auto object-cover"
                            />
                            <CardContent className="p-4 bg-white text-center">
                                <a
                                    href="https://dsnlu.ac.in/storage/2023/08/7TH-EDITION.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md bg-dsnlu-azure px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-dsnlu-dark-blue focus:outline-none focus:ring-2 focus:ring-dsnlu-azure focus:ring-offset-2"
                                >
                                    Download Latest Edition
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="md:col-span-2">
                        <Card className="border-none shadow-md h-full">
                            <CardHeader className="bg-white pb-2 pt-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-dsnlu-azure/10 rounded-lg">
                                        <BookOpen className="h-6 w-6 text-dsnlu-azure" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue">
                                        About SNL
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 text-slate-700 leading-relaxed space-y-4">
                                <p>
                                    The Student Newsletter Committee is established with an
                                    intention to encourage communication in the Student community.
                                    This is a committee of students headed by a faculty advisor
                                    that is primarily intended for the DSNLU Community. This
                                    committee works on the periodical issues of the student
                                    newsletter.
                                </p>
                                <p>
                                    The Student Newsletter is a compilation of latest updates,
                                    opinions and write-ups of the students, and also certain
                                    interesting sections related to our students. This Committee
                                    is responsible for the periodical newsletter and the DSNLU
                                    Blog.
                                </p>
                                <p>
                                    The thought behind the introduction of SNL is to collect and
                                    publish the opinions of the students on various allotted
                                    topics, thus encouraging the dialogue in the University and
                                    communication among the students. This sharing of opinions
                                    might also make the students open to any kind of opinions
                                    without being judgmental. The intention is to convert our
                                    students into people who are open-minded and to increase their
                                    ability to receive all types of opinions be it supporting or
                                    against.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Mission & Goals Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Mission */}
                    <Card className="border-none shadow-md h-full">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-dsnlu-lime/10 rounded-lg">
                                    <Target className="h-6 w-6 text-dsnlu-lime" />
                                </div>
                                <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                    Our Mission
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ul className="space-y-3 text-slate-700 list-disc pl-5 marker:text-dsnlu-lime">
                                <li>
                                    To encourage dialogue and communication in the Student
                                    Community.
                                </li>
                                <li>
                                    To enhance the research and innovative skills of the Students.
                                </li>
                                <li>
                                    To support and appreciate students for achieving great things.
                                </li>
                                <li>
                                    To create a great sense of unity among the members of the
                                    DSNLU community by sharing the news, opinions and thoughts of
                                    mutual interests.
                                </li>
                                <li>
                                    To make sure every student, faculty, parent and other member
                                    related to our University knows what’s happening in DSNLU.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Future Goals */}
                    <Card className="border-none shadow-md h-full">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-dsnlu-azure/10 rounded-lg">
                                    <Flag className="h-6 w-6 text-dsnlu-azure" />
                                </div>
                                <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                    Future Goals & Objectives
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ul className="space-y-3 text-slate-700 list-disc pl-5 marker:text-dsnlu-azure">
                                <li>
                                    The Committee intends to get an ISSN number for the periodical
                                    issues to prove its authenticity.
                                </li>
                                <li>
                                    Expand scope to people outside the DSNLU community by
                                    accepting contributions from outside our University.
                                </li>
                                <li>
                                    Start a blog in the official DSNLU website for the publication
                                    of Opinions and Legal Write-ups from DSNLU students and
                                    beyond.
                                </li>
                                <li>
                                    The best works will be included in the periodical newsletter
                                    issued by the Student Newsletter Committee.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* How We Achieve Mission */}
                <Card className="border-none shadow-md">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-dsnlu-lime/10 rounded-lg">
                                <Award className="h-6 w-6 text-dsnlu-lime" />
                            </div>
                            <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                How Do We Achieve Our Mission?
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <ul className="space-y-3 text-slate-700 list-disc pl-5 marker:text-dsnlu-lime">
                            <li>
                                Encourage students to contribute to the bimonthly newsletter,
                                enhancing research and innovative skills.
                            </li>
                            <li>
                                Appreciate students who get their works published by rewarding
                                them with an online certificate of publication.
                            </li>
                            <li>
                                Collect and share various stories and thoughts of our students.
                            </li>
                            <li>
                                Cover all events, announcements, works of committees/societies,
                                and accomplishments of students and alumni.
                            </li>
                            <li>
                                A dedicated team is constituted to achieve our mission and
                                objectives.
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* What's Inside & Audience */}
                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="border-none shadow-md h-full">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-dsnlu-azure/10 rounded-lg">
                                    <FileText className="h-6 w-6 text-dsnlu-azure" />
                                </div>
                                <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                    What’s Inside Our Newsletter?
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ul className="space-y-3 text-slate-700 list-disc pl-5 marker:text-dsnlu-azure">
                                <li>
                                    Opinions and views from the student community on recent
                                    events, legal updates, etc.
                                </li>
                                <li>
                                    Legal Updates: National/International news, case judgments,
                                    legislations, and student analysis.
                                </li>
                                <li>
                                    Stories reflecting achievements of students, faculty, and the
                                    university.
                                </li>
                                <li>
                                    Coverage of university events, including backstage activities
                                    and memories.
                                </li>
                                <li>Announcements and notifications of upcoming events.</li>
                                <li>
                                    Success stories, spotlights, letters, self-help articles,
                                    mini-interviews, and kindness corners.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-md h-full">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-dsnlu-lime/10 rounded-lg">
                                    <Globe className="h-6 w-6 text-dsnlu-lime" />
                                </div>
                                <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                    Primary Audience
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ul className="space-y-3 text-slate-700 list-disc pl-5 marker:text-dsnlu-lime">
                                <li>Current Students of DSNLU</li>
                                <li>University Faculty and Administration</li>
                                <li>DSNLU Alumni and Prospective Students</li>
                                <li>Parents and Guardians</li>
                            </ul>
                            <p className="mt-4 text-slate-600 italic">
                                The newsletter is open to everyone on the official DSNLU
                                website.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Plan of Action */}
                <Card className="border-none shadow-md">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-dsnlu-azure/10 rounded-lg">
                                <Send className="h-6 w-6 text-dsnlu-azure" />
                            </div>
                            <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                The Plan of Action
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 text-slate-700 space-y-4">
                        <div className="space-y-2">
                            <h3 className="font-bold text-dsnlu-dark-blue">
                                1. DSNLU Blog
                            </h3>
                            <p>
                                Creation of a blog in the official website for Opinions,
                                case-comments, articles, etc. Submissions will be invited with a
                                15-20 day timeline. Updated every 2 weeks.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-dsnlu-dark-blue">
                                2. Email Newsletters
                            </h3>
                            <p>
                                A brief newsletter template mailed to subscribers with links to
                                blogs. Students and faculty receive this automatically.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-dsnlu-dark-blue">
                                3. The Newsletter (PDF)
                            </h3>
                            <p>
                                Bimonthly publication containing the best opinions and legal
                                write-ups from the blog, along with university-related sections.
                            </p>
                        </div>
                        <p className="italic text-slate-500 mt-4 border-t pt-4">
                            Currently, the Committee focuses on the Newsletter and its
                            periodical issues. The Blog is a future goal to extend scope
                            beyond DSNLU.
                        </p>
                    </CardContent>
                </Card>

                {/* Team Section */}
                <div className="grid gap-8 md:grid-cols-2">
                    {/* About Team & Recruitment */}
                    <div className="space-y-8">
                        <Card className="border-none shadow-md">
                            <CardHeader className="bg-white pb-2 pt-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-dsnlu-lime/10 rounded-lg">
                                        <Users className="h-6 w-6 text-dsnlu-lime" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                        About SNL Team
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <p className="text-slate-700">
                                    The SNL team comprises of Faculty Advisor, Student Convener,
                                    Content-Writers, Researchers, Editors (Editor-in-chief,
                                    Associate Editor), and Designer.
                                </p>
                                <div className="mt-6">
                                    <h3 className="font-bold text-dsnlu-dark-blue mb-2">
                                        Faculty Advisory Board
                                    </h3>
                                    <p className="text-slate-700">1. Dr. K. Sita Manikyam</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md">
                            <CardHeader className="bg-white pb-2 pt-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-dsnlu-azure/10 rounded-lg">
                                        <UserPlus className="h-6 w-6 text-dsnlu-azure" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                        Recruitment
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 text-slate-700 space-y-4">
                                <p>
                                    Every Academic Year, applications are accepted for
                                    content-writers, researchers, editors, and designers.
                                    Selection is based on Statement of Purpose, Sample Works, and
                                    an interview.
                                </p>
                                <p>
                                    <strong>Designers:</strong> Sample Newsletter (min. 2 pages) +
                                    Purpose document.
                                    <br />
                                    <strong>Others:</strong> Write-up on allotted topic (400-500
                                    words).
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Current Team List */}
                    <Card className="border-none shadow-md h-full">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-dsnlu-dark-blue/10 rounded-lg">
                                    <Users className="h-6 w-6 text-dsnlu-dark-blue" />
                                </div>
                                <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                    The Current SNL Team
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                <div className="pb-2 border-b border-slate-100">
                                    <p className="font-bold text-dsnlu-azure">
                                        Sai Chaitanya Yepuri
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        5th year (Student Convener & Researcher)
                                    </p>
                                </div>
                                <div className="pb-2 border-b border-slate-100">
                                    <p className="font-bold text-dsnlu-azure">Nehal Gupta</p>
                                    <p className="text-sm text-slate-600">
                                        5th year (Editor-in-Chief)
                                    </p>
                                </div>
                                <div className="pb-2 border-b border-slate-100">
                                    <p className="font-bold text-dsnlu-azure">
                                        Meghana Killampalli
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        4th year (Student Co-Convener & Designer)
                                    </p>
                                </div>
                                <div className="pb-2 border-b border-slate-100">
                                    <p className="font-bold text-dsnlu-azure">Meghna Srinivas</p>
                                    <p className="text-sm text-slate-600">
                                        4th year (Researcher)
                                    </p>
                                </div>
                                <div className="pb-2 border-b border-slate-100">
                                    <p className="font-bold text-dsnlu-azure">Ayushman Somani</p>
                                    <p className="text-sm text-slate-600">
                                        4th year (Content-Writer)
                                    </p>
                                </div>
                                <div className="pb-2 border-b border-slate-100">
                                    <p className="font-bold text-dsnlu-azure">Soumya Tiwari</p>
                                    <p className="text-sm text-slate-600">
                                        3rd year (Content-Writer)
                                    </p>
                                </div>
                                <div className="pb-2 border-b border-slate-100">
                                    <p className="font-bold text-dsnlu-azure">Archana Pingal</p>
                                    <p className="text-sm text-slate-600">
                                        3rd year (Content Writer)
                                    </p>
                                </div>
                                <div className="pb-2 border-b border-slate-100">
                                    <p className="font-bold text-dsnlu-azure">
                                        Vineela Kottapalli
                                    </p>
                                    <p className="text-sm text-slate-600">2nd year (Editor)</p>
                                </div>
                                <div className="pb-2 border-b border-slate-100">
                                    <p className="font-bold text-dsnlu-azure">Harshita Killi</p>
                                    <p className="text-sm text-slate-600">
                                        1st year (Content Writer)
                                    </p>
                                </div>
                                <div className="pb-2 border-b border-slate-100">
                                    <p className="font-bold text-dsnlu-azure">
                                        K. Sri Lasya Sandilya
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        1st year (Content Writer)
                                    </p>
                                </div>
                                <div className="pb-2 border-b border-slate-100">
                                    <p className="font-bold text-dsnlu-azure">
                                        BVLN Bhuvaneshwaree
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        1st year (Content Writer)
                                    </p>
                                </div>
                                <div className="pb-2 border-b border-slate-100">
                                    <p className="font-bold text-dsnlu-azure">Dumpa Sruthi</p>
                                    <p className="text-sm text-slate-600">
                                        1st year (Designer)
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold text-dsnlu-azure">Nishanth Kanike</p>
                                    <p className="text-sm text-slate-600">
                                        1st year (Designer)
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
