import Link from "next/link";
import { Gamepad2 } from "lucide-react";

interface BackToHomeCtaProps {
  text?: string;
  href?: string;
}

export default function BackToHomeCta({
  text = "Asosiy Sahifaga Qaytish",
  href = "/",
}: BackToHomeCtaProps) {
  return (
    <div className="mt-16 text-center">
      <Link 
        href={href} 
        className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-8 py-4 rounded-lg uppercase tracking-wider transition-all shadow-xl shadow-amber-500/25 active:scale-95"
      >
        <Gamepad2 className="w-5 h-5" /> {text}
      </Link>
    </div>
  );
}
