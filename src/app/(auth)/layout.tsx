"use client";

import Loggedin from "@/src/components/loggedin/page";
import { onAuthChanged } from "@/utils/firebase/authService";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  async function awaitUser() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    useEffect(() => {
      function unsubscribe() {
        return onAuthChanged((authUser) => {
          setUser(authUser);
          setLoading(false); // Defina loading como false quando o usuário estiver atualizado
        });
      }

      return unsubscribe();
    }, []);

    if (loading) {
      // Aguarde até que o usuário seja carregado antes de renderizar o conteúdo
      return <div className="flex items-center">Loading...</div>;
    }
  }

  if (user) {
    return <Loggedin user={user} />;
  }

  return <>{children}</>;
}
