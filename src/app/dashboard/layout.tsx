"use client";
import LoginGuard from "@/guards/login-guard";
import TopNav from "../../components/top-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoginGuard>
        <TopNav />
        <div className="w-full h-full min-h-[100vh] flex p-6  flex-grow pt-[100px]  bg-[#eceff2]">
          {children}
        </div>
      </LoginGuard>
    </>
  );
}
