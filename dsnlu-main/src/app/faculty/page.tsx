import { Card } from "@/components/ui/Card";
import { User, GraduationCap, BookOpen } from "lucide-react";

export default function Faculty() {
    const facultyMembers = [
        {
            name: "Prof. (Dr.) D. Surya Prakasa Rao",
            designation: "Hon'ble Vice-Chancellor",
            qualifications: "LL.M., Ph.D. (Nagpur University)",
            specialization: "Criminal Law, Constitutional Law, Human Rights",
            image: "bg-slate-200",
        },
        {
            name: "Prof. Nandini C.P.",
            designation: "Professor",
            qualifications: "B.A.L., LL.M., M.M.M., Ph.D.",
            specialization: "Criminal Law, Cyber Law, IPR",
            image: "bg-slate-200",
        },
        {
            name: "Dr. Dayananda Murthy C.P.",
            designation: "Associate Professor & Head, Academic Affairs",
            qualifications: "B.A.L., LL.M., M.F.T., Ph.D.",
            specialization: "Corporate Law, Competition Law, IPR",
            image: "bg-slate-200",
        },
        {
            name: "Dr. P. Jogi Naidu",
            designation: "Associate Professor",
            qualifications: "LL.M., Ph.D.",
            specialization: "ADR, Corporate Law",
            image: "bg-slate-200",
        },
        {
            name: "Dr. R. Bharat Kumar",
            designation: "Assistant Professor",
            qualifications: "B.S.L., LL.B., M.A., LL.M.",
            specialization: "Banking & Finance Law, Sports Law",
            image: "bg-slate-200",
        },
        {
            name: "Dr. Soma Bhattacharjya",
            designation: "Assistant Professor & Associate Dean (U.G)",
            qualifications: "M.A., LL.M.",
            specialization: "Criminal Justice, International Law",
            image: "bg-slate-200",
        },
        {
            name: "Dr. N. Bhagyalakshmi",
            designation: "Assistant Professor",
            qualifications: "LL.M., Ph.D.",
            specialization: "Women & Child Law, ADR",
            image: "bg-slate-200",
        },
        {
            name: "Dr. Ch. Lakshmi",
            designation: "Assistant Professor",
            qualifications: "M.L. (First Class)",
            specialization: "Business Laws, International Human Rights",
            image: "bg-slate-200",
        },
        {
            name: "Dr. K. Sudha",
            designation: "Assistant Professor & Dean Examinations",
            qualifications: "Ph.D., M.L., B.L., B.A.",
            specialization: "Environmental Law, Administrative Law",
            image: "bg-slate-200",
        },
        {
            name: "Dr. Viswachandra Nath Madasu",
            designation: "Lecturer & Registrar (I/c)",
            qualifications: "M.A., M.Phil., Ph.D.",
            specialization: "Legal History, Public Health History",
            image: "bg-slate-200",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Faculty</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facultyMembers.map((member, index) => (
                    <Card key={index} className="flex flex-col items-center text-center p-8 hover:shadow-lg transition-shadow">
                        <div className={`h-32 w-32 rounded-full ${member.image} mb-6 flex items-center justify-center overflow-hidden border-4 border-white shadow-md`}>
                            {/* Placeholder for real image */}
                            <User size={64} className="text-slate-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                        <p className="text-dsnlu-azure font-medium mb-3">{member.designation}</p>

                        <div className="w-full space-y-2 text-sm text-slate-600 dark:text-slate-400 text-left bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                            <div className="flex items-start gap-2">
                                <GraduationCap size={16} className="mt-0.5 shrink-0 text-dsnlu-lime" />
                                <span>{member.qualifications}</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <BookOpen size={16} className="mt-0.5 shrink-0 text-dsnlu-lime" />
                                <span className="italic">{member.specialization}</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
