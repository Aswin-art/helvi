"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  role: string | undefined;
};

const RouteGuard = ({ children, role }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (role) {
      if (
        role === "USER" &&
        (pathname.startsWith("/admin") || pathname.startsWith("/admin-post"))
      ) {
        router.replace("/users");
      } else if (
        role === "ADMIN" &&
        (pathname.startsWith("/users") || pathname.startsWith("/admin-post"))
      ) {
        router.replace("/admin");
      } else if (
        role === "ADMIN_POST" &&
        (pathname.startsWith("/users") || pathname.startsWith("/admin"))
      ) {
        router.replace("/admin-post");
      }
    }
  }, [role, router, pathname]);

  return <>{children}</>;
};

export default RouteGuard;
