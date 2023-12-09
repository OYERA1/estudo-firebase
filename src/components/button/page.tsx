export default function MyButton({ children, className, onClick }: any) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`bg-white text-black rounded-md w-2/4
  h-12
  capitalize hover:bg-gradient-to-tr hover:to-zinc-200 hover:from-zinc-500 hover:via-zinc-300 active:scale-90 ${className}`}
    >
      <span>{children}</span>
    </button>
  );
}
