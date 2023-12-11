"use client";

import Loggedin from "@/src/components/loggedin/page";
import { onAuthChanged } from "@/utils/firebase/authService";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function unsubscribe() {
      return onAuthChanged((authUser) => {
        setUser(authUser);
        setLoading(false);
      });
    }

    return unsubscribe();
  }, []);

  if (loading) {
    // Aguarde até que o usuário seja carregado antes de renderizar o conteúdo
    return <div className="flex items-center">Loading...</div>;
  }

  if (user) {
    return <Loggedin user={user} />;
  }

  return <>{children}</>;
}
