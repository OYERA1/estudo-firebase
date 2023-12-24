"use client";

import { onAuthChanged } from "@/utils/firebase/authService";
import { User } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState<User | null>();

  return (
    <header className="flex justify-around items-end pt-5">
      <Link href="/">
        <h1 className="font-bold text-[20px] uppercase">
          {user ? user.displayName : "OYERA"}
        </h1>
      </Link>
      <nav className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </nav>
    </header>
  );
}
