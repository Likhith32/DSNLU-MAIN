"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { db } from "@/lib/db";
import { Trash2, Plus } from "lucide-react";

export default function ManageNotifications() {
    const [notifications, setNotifications] = useState<any[]>([]);
    const [newNotification, setNewNotification] = useState({ title: "", link: "", date: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadNotifications();
    }, []);

    const loadNotifications = async () => {
        const data = await db.notifications.getAll();
        setNotifications(data || []);
        setLoading(false);
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newNotification.title || !newNotification.date) return;

        await db.notifications.add(newNotification);
        setNewNotification({ title: "", link: "", date: "" });
        loadNotifications();
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this notification?")) {
            await db.notifications.delete(id);
            loadNotifications();
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-dsnlu-dark-blue">Manage Notifications</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Add New Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Add New Notification</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleAdd} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-dsnlu-azure outline-none"
                                    value={newNotification.title}
                                    onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Link (Optional)</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-dsnlu-azure outline-none"
                                    value={newNotification.link}
                                    onChange={(e) => setNewNotification({ ...newNotification, link: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                                <input
                                    type="date"
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-dsnlu-azure outline-none"
                                    value={newNotification.date}
                                    onChange={(e) => setNewNotification({ ...newNotification, date: e.target.value })}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full bg-dsnlu-azure hover:bg-dsnlu-dark-blue text-white">
                                <Plus className="w-4 h-4 mr-2" /> Add Notification
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* List */}
                <Card>
                    <CardHeader>
                        <CardTitle>Existing Notifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div className="space-y-4 max-h-[500px] overflow-y-auto">
                                {notifications.length === 0 && <p className="text-slate-500">No notifications found.</p>}
                                {notifications.map((item) => (
                                    <div key={item.id} className="flex justify-between items-start p-3 bg-slate-50 rounded border">
                                        <div>
                                            <p className="font-medium text-dsnlu-dark-blue">{item.title}</p>
                                            <p className="text-xs text-slate-500">{item.date}</p>
                                            {item.link && <p className="text-xs text-blue-500 truncate max-w-[200px]">{item.link}</p>}
                                        </div>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="text-red-500 hover:text-red-700 p-1"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
