"use client";
import React, { createContext, useState } from "react";

interface RiskProfile {
  id: string;
  riskProfile: string;
  income: number;
}

export const PerfilContext = createContext<{
  riskProfile: any[];
  loadRikProfile: () => Promise<void>;
  // createRiskProfile: (riskProfile: RiskProfile) => Promise<void>;
}>({
  riskProfile: [],
  loadRikProfile: async () => {},
  // createRiskProfile: async (riskProfile: RiskProfile) => {},
});

export const PerfilProvider = ({ children }: { children: React.ReactNode }) => {
  const [riskProfile, setRiskProfile] = useState<any[]>([]);

  async function loadRikProfile() {
    const res = await fetch("/api/getAuth");
    const data = await res.json();
    setRiskProfile(data);
  }

  return (
    <PerfilContext.Provider value={{ riskProfile, loadRikProfile }}>
      {children}
    </PerfilContext.Provider>
  );
};
