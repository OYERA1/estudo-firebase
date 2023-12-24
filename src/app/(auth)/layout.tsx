"use client";

import { UserContext } from "@/context/UserContext";
import Loggedin from "@/src/components/loggedin/page";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user } = useContext(UserContext);
  const router = useRouter();

  if (user) {
    router.push("/profile");
  }

  // Se o usuário não está logado, renderiza o conteúdo normal
  return <>{children}</>;
}
