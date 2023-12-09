import Link from "next/link";

export default function MyForm({ children, className, onSubmit }: any) {
  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col items-center border-2 rounded-xl mt-10 w-[500px] h-full p-10 shadow-[0_0_122px_5px_rgba(255,255,255,0.32)] ${className}`}
    >
      {children}
    </form>
  );
}
