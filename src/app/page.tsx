"use client";

import { logout, onAuthChanged } from "@/utils/firebase/authService";
import { useContext, useEffect, useState } from "react";
import Loggedin from "../components/loggedin/page";
import { User } from "firebase/auth";
import Modal from "../components/userModal/page";
import { UserContext } from "@/context/UserContext";

interface NomeNumero {
  nome: string;
  numero: number;
}

export default function Home() {
  const { user } = useContext(UserContext);

  const [tabela, setTabela] = useState<NomeNumero[]>([]);
  const [nomeNumero, setNomeNumero] = useState<NomeNumero>({
    nome: "",
    numero: 0,
  });

  function handleSubmit(e: any) {
    e.preventDefault();

    setTabela([...tabela, nomeNumero]);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNomeNumero({
      ...nomeNumero,
      [e.target.id]: e.target.value,
    });
  }

  function handleDelete(index: number) {
    const newTabela = [...tabela];
    newTabela.splice(index, 1);
    setTabela(newTabela);
  }

  return (
    <div className="h-screen flex flex-col items-center bg-black text-white">
      {user ? <Modal /> : null}
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
