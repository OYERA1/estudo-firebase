'use client'

import { UserContext } from "@/context/UserContext";
import MyButton from "@/src/components/button/page";
import { deleteUsers, logout } from "@/utils/firebase/authService";
import { redirect, useRouter } from "next/navigation";

import { useContext } from "react";

export default function Profile(){
    const {user} = useContext(UserContext)
    const route = useRouter()

    return <>
    { user ? <main className="flex flex-col items-center mt-40">
    <div className="flex gap-3">
      <h1 className="break-normal w-25">{`${user.displayName} você já está logado!`}</h1>
      <button
        onClick={() => deleteUsers(user)}
        className="w-20 break-words rounded bg-zinc-50 text-black p-2 h-full"
      >
        Deletar conta?
      </button>
    </div>
    <MyButton
      onClick={() => logout()}
      className="flex items-center mt-32 w-max p-8 font-bold"
    >
      Logout
    </MyButton>
  </main> : 
  <main className="flex flex-col items-center mt-20">

  <p>
    Você não está logado
    </p>
    <button className="p-4 bg-white rounded text-black mt-5" onClick={() => route.push('/login')}>Logar!</button>
      </main>
    }</> 
}