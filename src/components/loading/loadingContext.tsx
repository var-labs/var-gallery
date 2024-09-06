"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';


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
  
  useEffect(() => {
    const savedLoadingState = sessionStorage.getItem('isLoading');
    if (savedLoadingState) {
        setIsLoading(false);
    } else {
        setIsLoading(true);
    }

  const handleNetworkChange = () => {
      if (navigator.onLine) {
          setTimeout(() => {
              setIsLoading(false);
              sessionStorage.setItem('isLoading', 'false');
            }, 1000);
        } else {
            setIsLoading(true);
            sessionStorage.setItem('isLoading', 'true');
        }
    };

    setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('isLoading', 'false');
    }, 3000);
    
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("online", handleNetworkChange);
    
    return () => {
        window.removeEventListener("online", handleNetworkChange);
        window.removeEventListener("offline", handleNetworkChange);
    };
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>)
}

// Custom hook for consuming the loading context
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
