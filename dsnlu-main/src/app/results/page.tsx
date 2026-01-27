import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FileText, Download } from "lucide-react";

export default function Results() {
    const results = [
        {
            title: "B.A., LL.B. (Hons.) Even Semester Main & Repeat Results (Sem II, IV, VI, VIII, X)",
            date: "April 2024",
            program: "B.A., LL.B. (Hons.)",
        },
        {
            title: "LL.M. 2nd Semester Examination Results",
            date: "August 2024",
            program: "LL.M.",
        },
        {
            title: "B.A., LL.B. Odd Semester Revaluation Results (Sem I, III, V, VII, IX)",
            date: "November 2024",
            program: "B.A., LL.B. (Hons.)",
        },
        {
            title: "3 Year LL.B. Even Semester Examination Results (Sem II)",
            date: "July 2025",
            program: "3 Year LL.B.",
        },
        {
            title: "Odd Semester Repeat Examination Results (Sem I)",
            date: "August 2025",
            program: "All Programs",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Examination Results</h1>

            <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                    {results.map((result, index) => (
                        <Card key={index} className="flex items-center justify-between p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="h-10 w-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 shrink-0">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">{result.title}</h3>
                                    <p className="text-sm text-slate-500">Published: {result.date} • {result.program}</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" className="shrink-0">
                                <Download size={16} className="mr-2" /> Download PDF
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
