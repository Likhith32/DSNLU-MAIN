"use client";

import { useAdmin } from "@/contexts/AdminContext";

export function AdminBar() {
  const { isAdmin, setIsAdmin } = useAdmin();

  if (!isAdmin) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-50 bg-green-100 border-b border-green-300 px-4 py-2 flex items-center justify-between">
      {/* ✅ Visual Indicator */}
      <span className="text-green-700 font-semibold">
        ADMIN MODE ENABLED
      </span>

      {/* ✅ Logout Button */}
      <button
        className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        onClick={async () => {
          await fetch("/api/admin/logout", { method: "POST" });
          setIsAdmin(false);
          window.location.reload();
        }}
      >
        Logout Admin
      </button>
    </div>
  );
}
