"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { db } from "@/lib/db";
import { Trash2, Plus } from "lucide-react";

export default function ManageResults() {
    const [results, setResults] = useState<any[]>([]);
    const [newResult, setNewResult] = useState({ title: "", link: "", date: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadResults();
    }, []);

    const loadResults = async () => {
        const data = await db.results.getAll();
        setResults(data || []);
        setLoading(false);
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newResult.title || !newResult.date) return;

        await db.results.add(newResult);
        setNewResult({ title: "", link: "", date: "" });
        loadResults();
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this result?")) {
            await db.results.delete(id);
            loadResults();
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-dsnlu-dark-blue">Manage Results</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Add New Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Add New Result</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleAdd} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-dsnlu-azure outline-none"
                                    value={newResult.title}
                                    onChange={(e) => setNewResult({ ...newResult, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Link (PDF/Page URL)</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-dsnlu-azure outline-none"
                                    value={newResult.link}
                                    onChange={(e) => setNewResult({ ...newResult, link: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                                <input
                                    type="date"
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-dsnlu-azure outline-none"
                                    value={newResult.date}
                                    onChange={(e) => setNewResult({ ...newResult, date: e.target.value })}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full bg-dsnlu-azure hover:bg-dsnlu-dark-blue text-white">
                                <Plus className="w-4 h-4 mr-2" /> Add Result
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* List */}
                <Card>
                    <CardHeader>
                        <CardTitle>Existing Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div className="space-y-4 max-h-[500px] overflow-y-auto">
                                {results.length === 0 && <p className="text-slate-500">No results found.</p>}
                                {results.map((item) => (
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
