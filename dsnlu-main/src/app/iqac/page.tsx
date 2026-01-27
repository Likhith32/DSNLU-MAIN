import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const naacCommitteeMembers = [
    { name: "Dr. P. Jogi Naidu", designation: "Convener" },
    { name: "Dr. N. Bhagya Lakshmi", designation: "Member" },
    { name: "Dr. Rifat Khan", designation: "Member" },
    { name: "Dr. A. Nageswara Rao", designation: "Member" },
    { name: "Dr. R. Deepthi", designation: "Member" },
    { name: "Dr. B. Neelima", designation: "Member" },
    { name: "Ms. Sherley Hepsiba D", designation: "Member" },
    { name: "Dr. S. Kiran Kumari", designation: "Member" },
    { name: "Ms. Gali Parivartana", designation: "Member" },
    { name: "Ms. D. Aparna", designation: "Member" },
];

const iqacCommitteeMembers = [
    {
        name: "Prof. D. Surya Prakasa Rao, Vice-Chancellor",
        designation: "Ex-Officio Member",
    },
    {
        name: "Dr. M. Viswachandra Nath, Registrar In-charge and Director, IQAC",
        designation: "Ex-Officio Member",
    },
    { name: "Prof. Nandini C.P.", designation: "Ex-Officio Member" },
    { name: "Dr. Dayananda Murthy C.P.", designation: "Member" },
    { name: "Dr. P. Jogi Naidu", designation: "Member" },
    { name: "Dr. Soma Bhattacharjya", designation: "Member" },
    { name: "Dr. Ch. Lakshmi", designation: "Member" },
    { name: "Dr. A. Nageswara Rao", designation: "Member" },
    { name: "Dr. K. Sudha", designation: "Member" },
    {
        name: "Prof. K. Sita Manikyam, Professor, Dr. B.R. Ambedkar Law College, Andhra University",
        designation: "Member",
    },
    { name: "Ms. Sherley Hepsiba Dokiburra", designation: "Member" },
];

export default function IQACPage() {
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
                        IQAC
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-center text-xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            Internal Quality Assurance Cell (IQAC)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 p-6 md:p-10">
                        {/* Introduction */}
                        <div className="prose max-w-none text-slate-700">
                            <p className="leading-relaxed">
                                The terms efficiency, effectiveness, equity, and quality have
                                often been used synonymously for an institution to achieve
                                excellence. Quality is synonymous with the creation of
                                universities, and it is the hallmark that makes a university
                                distinct from others in this competitive age. It is the quality
                                that makes an educational institution visible in producing
                                path-breaking research outputs and employable graduates. Taking
                                the mandate for enhancement of quality in higher education and
                                research, the University Grants Commission, New Delhi, made a
                                policy decision during the 11th Five-Year Plan period for all
                                Higher Educational Institutions (HEIs) to establish an Internal
                                Quality Assurance Cell (IQAC). The Cell aims to make continuous
                                intervention to provide timely guidance and add value to the
                                functioning of the academic and administrative activities of the
                                University. In order to ensure the continuous improvement in
                                quality parameters, the Damodaram Sanjivayya National Law
                                University, being a National Law University, established the
                                IQAC in 2018 as an internal quality assurance mechanism to
                                nurture and foster a quality culture for the students, scholars,
                                teachers, and ministerial staff.
                            </p>
                        </div>

                        {/* Functions of IQAC */}
                        <div>
                            <h3 className="mb-4 text-xl font-bold text-dsnlu-dark-blue">
                                Functions of IQAC
                            </h3>
                            <ol className="list-decimal space-y-2 pl-6 text-slate-700">
                                <li>
                                    Development and application of quality benchmarks/parameters
                                    for various academic and administrative activities of the
                                    institution.
                                </li>
                                <li>
                                    Facilitating the creation of a learner-centered environment
                                    that is good for quality education and helping teachers get
                                    the knowledge and technology they need to teach and learn in a
                                    way that involves them.
                                </li>
                                <li>
                                    Arrangement for feedback response from students, parents, and
                                    other stakeholders on quality-related institutional processes.
                                </li>
                                <li>
                                    Dissemination of information on various quality parameters of
                                    higher education.
                                </li>
                                <li>
                                    Organization of inter and intra-institutional workshops,
                                    seminars on quality-related themes, and promotion of quality
                                    circles.
                                </li>
                                <li>
                                    Documentation of the various programmes/activities leading to
                                    quality improvement.
                                </li>
                                <li>
                                    Acting as a nodal agency of the Institution for coordinating
                                    quality-related activities, including adoption and
                                    dissemination of best practices.
                                </li>
                                <li>
                                    Development and maintenance of institutional databases through
                                    MIS for the purpose of maintaining and enhancing the
                                    institutional quality.
                                </li>
                                <li>Development of a quality culture in the institution.</li>
                                <li>
                                    Preparation of the Annual Quality Assurance Report (AQAR) as
                                    per the guidelines and parameters of NAAC, to be submitted to
                                    NAAC.
                                </li>
                            </ol>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h3 className="mb-4 text-xl font-bold text-dsnlu-dark-blue">
                                BENEFITS
                            </h3>
                            <p className="mb-2 text-slate-700">
                                IQAC will facilitate/contribute:
                            </p>
                            <ol className="list-decimal space-y-2 pl-6 text-slate-700">
                                <li>
                                    Ensure a heightened level of clarity and focus on
                                    institutional functioning towards quality enhancement.
                                </li>
                                <li>Ensure that the quality culture is internalized.</li>
                                <li>
                                    Enhance and coordinate the institution’s various activities
                                    and institutionalize all good practices.
                                </li>
                                <li>
                                    Provide a sound basis for decision-making to improve
                                    institutional functioning.
                                </li>
                                <li>Act as a dynamic system for quality changes in HEIs.</li>
                                <li>
                                    Build an organized methodology of documentation and internal
                                    communication.
                                </li>
                            </ol>
                        </div>

                        {/* NAAC Committee Table */}
                        <div>
                            <h3 className="mb-4 text-xl font-bold text-dsnlu-dark-blue">
                                NAAC Committee
                            </h3>
                            <div className="overflow-x-auto rounded-lg border border-slate-200">
                                <table className="w-full min-w-[600px] border-collapse text-left">
                                    <thead>
                                        <tr className="bg-dsnlu-azure text-white">
                                            <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                                                Committee Members
                                            </th>
                                            <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                                                Designation
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        {naacCommitteeMembers.map((member, index) => (
                                            <tr
                                                key={index}
                                                className="transition-colors hover:bg-slate-50"
                                            >
                                                <td className="px-6 py-4 font-medium text-slate-900">
                                                    {member.name}
                                                </td>
                                                <td className="px-6 py-4 text-slate-600">
                                                    {member.designation}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* IQAC Committee Table */}
                        <div>
                            <h3 className="mb-4 text-xl font-bold text-dsnlu-dark-blue">
                                IQAC Committee
                            </h3>
                            <div className="overflow-x-auto rounded-lg border border-slate-200">
                                <table className="w-full min-w-[600px] border-collapse text-left">
                                    <thead>
                                        <tr className="bg-dsnlu-azure text-white">
                                            <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                                                Committee Members
                                            </th>
                                            <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                                                Designation
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        {iqacCommitteeMembers.map((member, index) => (
                                            <tr
                                                key={index}
                                                className="transition-colors hover:bg-slate-50"
                                            >
                                                <td className="px-6 py-4 font-medium text-slate-900">
                                                    {member.name}
                                                </td>
                                                <td className="px-6 py-4 text-slate-600">
                                                    {member.designation}
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
