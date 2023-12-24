import { useContext, useEffect, useState } from "react";
import MyButton from "../button/page";
import { deleteUsers, logout } from "@/utils/firebase/authService";
import { UserContext } from "@/context/UserContext";

export default function Loggedin() {
  const { user } = useContext(UserContext);
  const [displayName, setDisplayName] = useState(null);

  return (
    <main className="flex flex-col items-center mt-40">
      <div className="flex gap-3">
        <h1 className="break-normal w-25">{`${displayName} você já está logado!`}</h1>
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
    </main>
  );
}
