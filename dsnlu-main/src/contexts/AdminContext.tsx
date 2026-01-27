"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext<any>(null);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAdminMode, setIsAdminMode] = useState(false);

  useEffect(() => {
    // 🔥 Check URL param
    const params = new URLSearchParams(window.location.search);
    if (params.get("admin") === "true") {
      setIsAdminMode(true);
      localStorage.setItem("admin", "true");
    }

    // 🔥 Persist after refresh
    if (localStorage.getItem("admin") === "true") {
      setIsAdminMode(true);
    }
  }, []);

  return (
    <AdminContext.Provider value={{ isAdminMode, setIsAdminMode }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);
