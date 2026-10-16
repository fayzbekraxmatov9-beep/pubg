"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "O'yin Haqida" },
    { href: "/maps", label: "Xaritalar" },
    { href: "/weapons", label: "Qurollar" },
    { href: "/tournaments", label: "Turnirlar" },
    { href: "/requirements", label: "Talablar" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#08090df0] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-linear-to-tr from-amber-600 to-yellow-400 flex items-center justify-center font-black text-black text-2xl tracking-tighter shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            P
          </div>
          <div>
            <span className="text-2xl font-black tracking-widest text-white uppercase italic">
              PUBG<span className="text-amber-500">.UZ</span>
            </span>
            <p className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">Battlegrounds</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase text-zinc-300">
          {navLinks.map((link) => {
            const isActive = currentPage === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`transition-colors ${
                  isActive ? "text-amber-400 font-bold" : "hover:text-amber-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Download Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/download" 
            className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold px-6 py-2.5 rounded-md text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 active:scale-95"
          >
            <Download className="w-4 h-4" /> Yuklab Olish
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden p-2 text-zinc-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6 flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              onClick={() => setMobileMenuOpen(false)} 
              href={link.href} 
              className={`text-zinc-300 hover:text-amber-400 ${
                currentPage === link.href ? "text-amber-400 font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            onClick={() => setMobileMenuOpen(false)} 
            href="/download" 
            className="w-full text-center bg-amber-500 text-black font-extrabold py-3 rounded-md uppercase"
          >
            Yuklab Olish
          </Link>
        </div>
      )}
    </header>
  );
}
