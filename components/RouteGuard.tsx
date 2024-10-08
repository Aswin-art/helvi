"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  role: string | undefined;
};

const RouteGuard = ({ children, role }: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (role) {
      if (role === "USER") {
        router.replace("/users");
      } else if (role === "ADMIN") {
        router.replace("/admin");
      } else if (role === "ADMIN_POST") {
        router.replace("/admin-post");
      }
    }
  }, [role, router]);

  return <>{children}</>;
};

export default RouteGuard;
