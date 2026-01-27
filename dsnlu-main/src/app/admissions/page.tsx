import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, Download, ExternalLink } from "lucide-react";

export default function Admissions() {
    const notifications = [
        {
            title: "CLAT 2025 Admission Notice",
            date: "December 2024",
            category: "Admissions",
            status: "Open",
        },
        {
            title: "LL.M. Batch 2024-25 Additional List",
            date: "August 2024",
            category: "Postgraduate",
            status: "Closed",
        },
        {
            title: "3 Year LL.B. Admissions 2025-26 Applications Invited",
            date: "January 2025",
            category: "Undergraduate",
            status: "Open",
        },
        {
            title: "Vacant Seats Notification for 5 Year B.A., LL.B. (Hons.) 2025",
            date: "January 2025",
            category: "Undergraduate",
            status: "Open",
        },
        {
            title: "Ph.D. Admission Notification 2024-25",
            date: "July 2024",
            category: "Doctoral",
            status: "Closed",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Admissions</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-2xl font-bold mb-4">Latest Notifications</h2>
                    {notifications.map((notification, index) => (
                        <Card key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center space-x-2 text-sm text-slate-500 mb-2">
                                    <Calendar size={14} />
                                    <span>{notification.date}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium">
                                        {notification.category}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{notification.title}</h3>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                {notification.status === "Open" ? (
                                    <Button size="sm" className="bg-dsnlu-lime text-dsnlu-slate hover:bg-lime-500">
                                        Apply Now
                                    </Button>
                                ) : (
                                    <span className="text-sm font-medium text-red-500 px-4">Closed</span>
                                )}
                                <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                                    <Download size={16} />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="lg:col-span-1 space-y-8">
                    <Card className="bg-dsnlu-azure/5 border-dsnlu-azure/20">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://consortiumofnlus.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center text-dsnlu-azure hover:underline">
                                    <ExternalLink size={16} className="mr-2" /> CLAT 2025 Official Website
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-slate-700 dark:text-slate-300 hover:text-dsnlu-azure">
                                    <Download size={16} className="mr-2" /> Download Prospectus
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-slate-700 dark:text-slate-300 hover:text-dsnlu-azure">
                                    <Download size={16} className="mr-2" /> Fee Structure
                                </a>
                            </li>
                        </ul>
                    </Card>

                    <Card>
                        <h3 className="text-xl font-bold mb-4">Contact Admissions</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                            For admission related queries, please contact:
                        </p>
                        <div className="space-y-2 text-sm font-medium">
                            <p>Phone: +91 8924 248216</p>
                            <p>Email: admissions@dsnlu.ac.in</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
