"use client";

import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user } = useContext(UserContext);
  const router = useRouter();

  if (user) {
    router.push("/profile");
  }

  return <>{children}</>;
}
