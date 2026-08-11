import Mic from "@/assets/icons/mic.svg";

export default function Logo() {
  return (
    <div className="flex gap-1 items-center">
      <Mic className="h-8 w-8 bg-accent p-2 rounded-full" />
      <span className="font-bold text-white">Deadair</span>
    </div>
  );
}
