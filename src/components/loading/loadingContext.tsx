// loadingContext.tsx

"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the interface for the context's value
interface LoadingContextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with the defined interface
const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

// Define the provider component with props type
interface LoadingProviderProps {
  children: ReactNode;
}

// Create the provider component
export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook for consuming the loading context
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
