import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#050608] py-12 text-zinc-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-amber-500 text-black font-black flex items-center justify-center text-lg">
            P
          </div>
          <span className="font-bold text-white tracking-widest uppercase">PUBG UZBEKISTAN</span>
        </Link>

        <p className="text-xs text-zinc-500 text-center md:text-left">
          © 2026 PUBG Corporation. Barcha huquqlar himoyalangan.
        </p>

        <div className="flex items-center gap-6 text-xs uppercase font-mono tracking-wider">
          <Link href="/about" className="hover:text-amber-400 transition-colors">Biz Haqimizda</Link>
          <Link href="/requirements" className="hover:text-amber-400 transition-colors">Talablar & Yordam</Link>
          <Link href="/tournaments" className="hover:text-amber-400 transition-colors">Turnirlar</Link>
        </div>
      </div>
    </footer>
  );
}
