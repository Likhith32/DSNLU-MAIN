"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Pencil, Trash2, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ListItem {
  id?: string;
  title: string;
  link: string;
  isNew?: boolean;
  date?: string;
}

interface ScrollableListProps {
  title: string;
  viewAllLink: string;
  items: ListItem[];
  editable?: boolean;
  onAdd?: (data: ListItem) => void;
  onEdit?: (id: string, data: Partial<ListItem>) => void;
  onDelete?: (id: string) => void;
  className?: string;
  height?: string;
}

export function ScrollableList({
  title,
  viewAllLink,
  items,
  editable = false,
  onAdd,
  onEdit,
  onDelete,
  className,
  height = "h-[400px]",
}: ScrollableListProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ListItem>>({
    title: "",
    link: "",
    isNew: true,
  });

  const handleAdd = () => {
    if (formData.title && formData.link) {
      onAdd?.({
        title: formData.title,
        link: formData.link,
        isNew: formData.isNew,
        date: new Date().toISOString().slice(0, 10),
      });
      setFormData({ title: "", link: "", isNew: true });
      setShowAddForm(false);
    }
  };

  const handleEdit = (item: ListItem) => {
    if (!item.id) return;
    setEditingId(item.id);
    setFormData({
      title: item.title,
      link: item.link,
      isNew: item.isNew || false,
    });
    setShowAddForm(true);
  };

  const handleSaveEdit = () => {
    if (editingId && formData.title && formData.link) {
      onEdit?.(editingId, formData);
      setFormData({ title: "", link: "", isNew: true });
      setEditingId(null);
      setShowAddForm(false);
    }
  };

  const handleCancel = () => {
    setFormData({ title: "", link: "", isNew: true });
    setEditingId(null);
    setShowAddForm(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      onDelete?.(id);
    }
  };

  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-lg border border-white/20 overflow-hidden flex flex-col",
        className
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 backdrop-blur-sm">
        <h3 className="font-bold text-dsnlu-dark-slate text-lg">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          {editable && !showAddForm && (
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-1 bg-dsnlu-azure text-white px-3 py-1.5 rounded-md hover:bg-dsnlu-azure/90 text-xs font-semibold"
            >
              <Plus size={14} />
              ADD NEW
            </button>
          )}

          <Link
            href={viewAllLink}
            className="text-xs font-semibold text-dsnlu-azure flex items-center gap-1"
          >
            VIEW ALL <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      {/* Add / Edit Form */}
      {editable && showAddForm && (
        <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-blue-100">
          <h4 className="font-semibold text-sm mb-3 text-gray-800">
            {editingId ? "Edit Item" : "Add New Item"}
          </h4>

          <div className="space-y-3">
            {/* Title */}
            <input
              type="text"
              placeholder="Enter title"
              value={formData.title || ""}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-dsnlu-azure
              text-sm bg-white text-gray-800 placeholder:text-gray-400"
            />

            {/* Link */}
            <input
              type="text"
              placeholder="https://example.com/document.pdf"
              value={formData.link || ""}
              onChange={(e) =>
                setFormData({ ...formData, link: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-dsnlu-azure
              text-sm bg-white text-gray-800 placeholder:text-gray-400"
            />

            {/* isNew */}
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={formData.isNew || false}
                onChange={(e) =>
                  setFormData({ ...formData, isNew: e.target.checked })
                }
              />
              Mark as <span className="text-red-600 font-semibold">NEW</span>
            </label>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                onClick={editingId ? handleSaveEdit : handleAdd}
                className="flex-1 bg-dsnlu-azure text-white py-2 rounded-md text-sm"
              >
                {editingId ? "Save Changes" : "Add Item"}
              </button>

              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      <div className={cn("overflow-y-auto p-2 space-y-2", height)}>
        {items.map((item, index) => (
          <div key={item.id || index} className="group relative">
            <Link
              href={item.link}
              target="_blank"
              className="block p-3 rounded-lg hover:bg-dsnlu-azure/5 border"
            >
              <p className="text-sm text-gray-700 font-medium pr-20">
                {item.title}
              </p>

              {item.isNew && (
                <span className="inline-block mt-1 text-[10px] font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded">
                  NEW
                </span>
              )}
            </Link>

            {editable && item.id && (
              <div className="absolute right-3 top-3 hidden group-hover:flex gap-1">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleEdit(item);
                  }}
                  className="p-1.5 bg-blue-500 text-white rounded"
                >
                  <Pencil size={12} />
                </button>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(item.id!);
                  }}
                  className="p-1.5 bg-red-500 text-white rounded"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
