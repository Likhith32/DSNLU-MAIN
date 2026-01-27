"use client";
import { createContext, useContext, useState } from "react";

const AdminContext = createContext<any>(null);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const login = () => {
    setIsAdmin(true);
    setIsAdminMode(true);
  };

  const logout = () => {
    setIsAdmin(false);
    setIsAdminMode(false);
  };

  const toggleMode = () => {
    if (isAdmin) setIsAdminMode(!isAdminMode);
  };

  return (
    <AdminContext.Provider
      value={{ isAdmin, isAdminMode, login, logout, toggleMode }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
