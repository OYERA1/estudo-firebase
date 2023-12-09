"use client";

import { logout, onAuthChanged } from "@/utils/firebase/authService";
import { useEffect, useState } from "react";
import Loggedin from "../components/loggedin/page";
import { User } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    function unsubscribe() {
      return onAuthChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
    }

    return unsubscribe();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center bg-black text-white">
      <p className="mt-40">{user ? user.email : false}</p>
      <div className="flex mt-16 m-10  p-3 border-2 rounded-xl max-w-[400px] shadow-[0_0_122px_5px_rgba(255,255,255,0.32)] ">
        <span className="text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          repellendus quo ducimus cum veniam rerum esse cumque aspernatur
          repellat provident consequuntur, atque ipsa ut recusandae eius est
          expedita aut dolorum.
        </span>
      </div>

      {user ? (
        <button
          className="w-max p-2 bg-zinc-400 rounded"
          onClick={() => logout()}
        >
          Deslogar
        </button>
      ) : (
        false
      )}
    </div>
  );
}
