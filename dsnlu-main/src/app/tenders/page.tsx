import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FileText, Download, Calendar } from "lucide-react";

export default function Tenders() {
    const tenders = [
        {
            title: "Procurement of Library Books and Journals for 2025-26",
            refNo: "DSNLU/LIB/2025/01",
            closingDate: "March 15, 2025",
            status: "Active",
        },
        {
            title: "Tender for Security Services at Sabbavaram Campus",
            refNo: "DSNLU/ADMIN/SEC/2025/04",
            closingDate: "February 28, 2025",
            status: "Active",
        },
        {
            title: "Supply and Installation of Air Conditioners in Academic Block",
            refNo: "DSNLU/ENG/AC/2025/02",
            closingDate: "January 30, 2025",
            status: "Closed",
        },
        {
            title: "Annual Maintenance Contract for IT Infrastructure",
            refNo: "DSNLU/IT/AMC/2024/12",
            closingDate: "December 15, 2024",
            status: "Closed",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Tenders & Procurement</h1>

            <div className="max-w-5xl mx-auto">
                <div className="grid gap-6">
                    {tenders.map((tender, index) => (
                        <Card key={index} className={`p-6 border-l-4 ${tender.status === 'Active' ? 'border-l-dsnlu-lime' : 'border-l-slate-300'}`}>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-3">
                                        <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${tender.status === 'Active' ? 'bg-dsnlu-lime/20 text-dsnlu-slate' : 'bg-slate-100 text-slate-500'}`}>
                                            {tender.status}
                                        </span>
                                        <span className="text-sm text-slate-500">Ref: {tender.refNo}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{tender.title}</h3>
                                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                        <Calendar size={14} className="mr-1.5" />
                                        Closing Date: {tender.closingDate}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Button variant="outline" size="sm">
                                        <FileText size={16} className="mr-2" /> Details
                                    </Button>
                                    <Button variant="primary" size="sm" disabled={tender.status !== 'Active'}>
                                        <Download size={16} className="mr-2" /> Document
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
