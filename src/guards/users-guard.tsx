import { ReactNode } from "react";
import { redirect } from "next/navigation";

export default function UsersGuard({ children }: { children: ReactNode }) {
  const userRole: any = localStorage.getItem("userRole");

  if (userRole !== "admin") {
    redirect("/dashboard");
  } else return <>{children}</>;
}
