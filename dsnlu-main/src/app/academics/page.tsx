import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function Academics() {
    const courses = [
        {
            title: "B.A., LL.B. (Hons.)",
            duration: "5 Years",
            description: "A five-year integrated program designed to provide comprehensive legal education. Admission via CLAT.",
            seats: 138,
        },
        {
            title: "LL.M.",
            duration: "1 Year",
            description: "Postgraduate program with specializations in Corporate Law, Criminal Law, and Constitutional Law. Admission via CLAT.",
            seats: 51,
        },
        {
            title: "Ph.D. in Law",
            duration: "Min 3 Years",
            description: "Doctoral program for advanced legal research. Admission via university entrance exam and interview.",
            seats: "Variable",
        },
        {
            title: "LL.D.",
            duration: "3 Years",
            description: "Post-doctoral program for distinguished legal scholars.",
            seats: "Variable",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Academic Programs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <Card key={course.title} className="flex flex-col">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-dsnlu-azure">{course.title}</h2>
                            <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium mt-2">
                                {course.duration}
                            </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                            {course.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                            <span className="text-sm text-slate-500">Intake: {course.seats}</span>
                            <Button variant="outline" size="sm" className="gap-2">
                                <Download size={16} /> Brochure
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
