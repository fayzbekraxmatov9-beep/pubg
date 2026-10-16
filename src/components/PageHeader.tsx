import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightedText?: string;
  description: string;
  bgImage?: string;
}

export default function PageHeader({
  badge,
  title,
  highlightedText,
  description,
  bgImage = "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80",
}: PageHeaderProps) {
  return (
    <section className="relative py-20 overflow-hidden border-b border-zinc-800">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 filter saturate-150"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07080c]/80 via-[#07080c] to-[#07080c]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded">
          {badge}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-6 mb-6">
          {title}{" "}
          {highlightedText && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
              {highlightedText}
            </span>
          )}
        </h1>
        <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
