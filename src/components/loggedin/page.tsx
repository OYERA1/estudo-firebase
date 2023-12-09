import MyButton from "../button/page";
import { User } from "firebase/auth";
import { deleteUsers, logout } from "@/utils/firebase/authService";

interface LoggedInPorps {
  user: User | null;
}

export default function Loggedin({ user }: LoggedInPorps) {
  return (
    <main className="flex flex-col items-center mt-40">
      <div className="flex gap-3">
        <h1 className="break-normal w-25">
          {user ? user.displayName : null} você já está logado!
        </h1>
        <button
          onClick={() => deleteUsers(user)}
          className="w-20  break-words rounded bg-zinc-50 text-black p-2 h-full"
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
