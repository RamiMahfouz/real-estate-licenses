"use client";

import { ReactNode, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import moment from "moment";
import { jwtDecode } from "jwt-decode";

export default function LoginGuard({ children }: { children: ReactNode }) {
  function isValid() {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("licenseToken")) {
        return isValidToken(localStorage.getItem("licenseToken") || "");
      } else {
        return false;
      }
    }
  }
  if (isValid()) {
    return <>{children}</>;
  } else {
    return redirect("/login");
  }
}

export function isValidToken(token: string) {
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
