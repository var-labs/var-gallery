import type { Metadata } from "next";
import { Plus_Jakarta_Sans, } from "next/font/google";
import { LoadingProvider } from "@/components/loading/loadingContext";
import dynamic from "next/dynamic";
import "./globals.css";

const ClientRootLayout = dynamic(() => import('./clientRootLayout'), {
  ssr: false,
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['200','300','400', '500', '600', '700', '800',],
});

export const metadata: Metadata = {
  title: "Var",
  description: "Generated by create next app",
  icons: "/assets/Var-rounded.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#020505] ${plusJakarta.className} custom-cursor`}>
        <LoadingProvider>
          <ClientRootLayout>{children}</ClientRootLayout>
        </LoadingProvider>
      </body>
    </html>
  );
}