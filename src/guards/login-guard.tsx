"use client";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import moment from "moment";
import { jwtDecode } from "jwt-decode";

export default function LoginGuard({ children }: { children: ReactNode }) {
  const token: any = localStorage.getItem("licenseToken");
  function isValid() {
    if (token) {
      return isValidToken(token || "");
    } else {
      return false;
    }
  }
  if (isValid()) {
    return <>{children}</>;
  }
  return redirect("/login");
}

function isValidToken(token: string) {
  try {
    const now = moment();

    const expirationData = moment((jwtDecode(token) as any)?.exp * 1000);

    let diff = expirationData.diff(now);

    if (diff < 0) return false;

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
