"use client";
import React from "react";
import Navbar from "@/components/navigation/Navbar";
import { useLoading } from "@/components/loading/loadingContext";
import LoadingScreen from "@/components/loading/loading-screen";

const ClientRootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoading();

  if (isLoading) {
    return <LoadingScreen/>
  }
  
  return (
    <>
      <nav className="flex justify-center">
        <Navbar />
      </nav>
      {children}
    </>
  );
};

export default ClientRootLayout;
