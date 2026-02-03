"use client";

import { createContext, useContext } from "react";
import { useSearchParams } from "next/navigation";

type AdminContextType = {
  isAdminMode: boolean;
};

const AdminContext = createContext<AdminContextType>({
  isAdminMode: false,
});

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();

  // ✅ Admin ONLY when ?admin=true is present
  const isAdminMode = searchParams.get("admin") === "true";

  return (
    <AdminContext.Provider value={{ isAdminMode }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);
