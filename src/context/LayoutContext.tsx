"use client";
import { createContext, useContext, useState } from "react";

type LayoutContextType = {
  isNavOpen: boolean;
  toggleNav: () => void;
};

const LayoutContext = createContext<LayoutContextType | null>(null);

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => setIsNavOpen(prev => !prev);

  return (
    <LayoutContext.Provider value={{ isNavOpen, toggleNav }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error("useLayout must be used inside LayoutProvider");
  return ctx;
};
