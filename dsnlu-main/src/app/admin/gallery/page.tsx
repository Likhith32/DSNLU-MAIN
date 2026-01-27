"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { db } from "@/lib/db";
import { Trash2, Plus } from "lucide-react";
import Image from "next/image";

export default function ManageGallery() {
    const [gallery, setGallery] = useState<any[]>([]);
    const [newItem, setNewItem] = useState({ url: "", caption: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadGallery();
    }, []);

    const loadGallery = async () => {
        const data = await db.gallery.getAll();
        setGallery(data || []);
        setLoading(false);
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newItem.url) return;

        await db.gallery.add(newItem);
        setNewItem({ url: "", caption: "" });
        loadGallery();
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this photo?")) {
            await db.gallery.delete(id);
            loadGallery();
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-dsnlu-dark-blue">Manage Gallery</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Add New Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Add New Photo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleAdd} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-dsnlu-azure outline-none"
                                    value={newItem.url}
                                    onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
                                    required
                                    placeholder="https://..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Caption</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-dsnlu-azure outline-none"
                                    value={newItem.caption}
                                    onChange={(e) => setNewItem({ ...newItem, caption: e.target.value })}
                                />
                            </div>
                            <Button type="submit" className="w-full bg-dsnlu-azure hover:bg-dsnlu-dark-blue text-white">
                                <Plus className="w-4 h-4 mr-2" /> Add Photo
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* List */}
                <Card>
                    <CardHeader>
                        <CardTitle>Existing Photos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div className="grid grid-cols-2 gap-4 max-h-[500px] overflow-y-auto">
                                {gallery.length === 0 && <p className="col-span-2 text-slate-500">No photos found.</p>}
                                {gallery.map((item) => (
                                    <div key={item.id} className="relative group border rounded overflow-hidden h-32">
                                        <Image
                                            src={item.url}
                                            alt={item.caption || "Gallery Image"}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        {item.caption && (
                                            <div className="p-2 bg-white text-xs text-center truncate">
                                                {item.caption}
                                            </div>
                                        )}
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
