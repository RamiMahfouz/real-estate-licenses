import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "../components/top-nav";
import { WarningDialog } from "@/components/warning-dialog";
import { Snakbar } from "@/components/snackbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate Licenses",
  description: "Real Estate Licenses Managements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body dir="rtl" className={inter.className}>
        <WarningDialog />
        
        <div className="w-full h-full min-h-[100vh] flex flex-grow ">
        <Snakbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
