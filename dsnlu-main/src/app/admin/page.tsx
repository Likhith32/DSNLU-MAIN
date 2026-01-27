"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Bell, FileText, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-dsnlu-dark-blue">Dashboard</h1>

            <div className="grid md:grid-cols-3 gap-6">
                <Link href="/admin/notifications">
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-dsnlu-azure">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg font-medium text-slate-600">Notifications</CardTitle>
                            <Bell className="w-5 h-5 text-dsnlu-azure" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-dsnlu-dark-blue">Manage</p>
                            <p className="text-sm text-slate-500 mt-1">Latest news & updates</p>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/admin/results">
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-green-500">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg font-medium text-slate-600">Results</CardTitle>
                            <FileText className="w-5 h-5 text-green-500" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-dsnlu-dark-blue">Manage</p>
                            <p className="text-sm text-slate-500 mt-1">Exam results & schedules</p>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/admin/gallery">
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-purple-500">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg font-medium text-slate-600">Gallery</CardTitle>
                            <ImageIcon className="w-5 h-5 text-purple-500" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-dsnlu-dark-blue">Manage</p>
                            <p className="text-sm text-slate-500 mt-1">Event photos & albums</p>
                        </CardContent>
                    </Card>
                </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-dsnlu-dark-blue mb-4">Welcome to Admin Panel</h2>
                <p className="text-slate-600">
                    Use the sidebar navigation to manage different sections of the website.
                    Changes made here will be reflected immediately on the public website.
                </p>
            </div>
        </div>
    );
}
