import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export default function Modal() {
  const { user } = useContext(UserContext);

  return (
    <main>
      <div>
        <h1>Nome</h1>
        <span>{user?.displayName}</span>
      </div>
    </main>
  );
}
