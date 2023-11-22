"use client";

import { ReactNode, useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function UsersGuard({ children }: { children: ReactNode }) {
  function isAdmin() {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("userRole") === "admin") {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  if (!isAdmin()) {
    redirect("/dashboard");
  } else return <>{children}</>;
}
