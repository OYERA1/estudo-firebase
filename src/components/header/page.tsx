import Link from "next/link";
import { PiSkullFill } from "react-icons/pi";

export default function Header() {
  return (
    <header className="flex justify-around items-end pt-5">
      <Link href="/">
        <h1 className="font-bold text-[20px]">OYERA</h1>
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
