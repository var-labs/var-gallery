"use client";
import React, { useEffect } from "react";
import { useLoading } from "@/components/loading/loadingContext";
import Navbar from "@/components/navigation/Navbar";
import { reuleaux } from "ldrs";

reuleaux.register();
const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-[#020505]">
      <l-reuleaux
        size="37"
        stroke="5"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.2"
        color="white"
      ></l-reuleaux>
    </div>
  );
};

const ClientRootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  if (isLoading) {
    return <LoadingScreen />;
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
