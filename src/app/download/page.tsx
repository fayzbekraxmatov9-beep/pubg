"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  Monitor, 
  Smartphone, 
  Gamepad2, 
  ExternalLink, 
  ShieldCheck, 
  HardDrive, 
  Zap, 
  CheckCircle2,
  AlertTriangle,
  Play,
  Layers
} from "lucide-react";

export default function DownloadPage() {
  const [downloadStarted, setDownloadStarted] = useState<string | null>(null);

  const platforms = [
    {
      id: "pc",
      title: "PUBG: BATTLEGROUNDS (PC)",
      platformName: "Steam (Windows PC)",
      icon: <Monitor className="w-8 h-8 text-amber-500" />,
      size: "~45-50 GB",
      cost: "BEPUL (Free-to-Play)",
      badge: "Eng Ommabop",
      badgeColor: "bg-amber-500 text-black",
      desc: "Kompyuter uchun to'liq versiya. Unreal Engine 4 grafikasi, 144Hz+ silliq kadrlar va to'liq jangovar ballistika.",
      primaryActionText: "Steam Orqali Yuklab Olish",
      link: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/",
      steps: [
        "Steam dasturini kompyuteringizga o'rnating va akkauntga kiring",
        "Qidiruv bo'limiga 'PUBG: BATTLEGROUNDS' deb yozing",
        "'Play Game' yoki 'O'yinni O'rnatish' tugmasini bosing",
        "O'rnatish tugagach, kutubxonangizdan o'yinni ishga tushiring"
      ]
    },
    {
      id: "android",
      title: "PUBG MOBILE (Android)",
      platformName: "Google Play Store / APK",
      icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
      size: "~1.2 GB (To'liq paket: ~6 GB)",
      cost: "BEPUL",
      badge: "Mobil",
      badgeColor: "bg-emerald-500 text-black",
      desc: "Smartfon va planshetlar uchun rasmiy versiya. 90/120 FPS qo'llab-quvvatlash va har oy yangilanadigan tematik mavsumlar.",
      primaryActionText: "Google Play'da Ochish",
      link: "https://play.google.com/store/apps/details?id=com.tencent.ig",
      steps: [
        "Google Play ilovasini oching",
        "PUBG Mobile ilovasini toping va 'O'rnatish' tugmasini bosing",
        "O'yin ichiga kirib kerakli xaritalar va audio resurslarni yuklab oling"
      ]
    },
    {
      id: "ios",
      title: "PUBG MOBILE (Apple iOS)",
      platformName: "Apple App Store",
      icon: <Smartphone className="w-8 h-8 text-sky-400" />,
      size: "~2.5 GB (Resurslar: ~7 GB)",
      cost: "BEPUL",
      badge: "iOS",
      badgeColor: "bg-sky-500 text-black",
      desc: "iPhone va iPad foydalanuvchilari uchun maxsus moslashtirilgan. ProMotion 120Hz ekranlarda mutlaqo qotishlarsiz ishlaydi.",
      primaryActionText: "App Store'da Ochish",
      link: "https://apps.apple.com/app/pubg-mobile/id1330123889",
      steps: [
        "App Store do'koniga kiring",
        "PUBG Mobile sahifasini ochib 'Get' (Yuklab olish) tugmasini bosing",
        "O'rnatilgach, Game Center yoki ijtimoiy tarmoqlar orqali profilingizga kiring"
      ]
    },
    {
      id: "console",
      title: "PUBG: Konsollar Uchun",
      platformName: "PlayStation & Xbox",
      icon: <Gamepad2 className="w-8 h-8 text-purple-400" />,
      size: "~55 GB",
      cost: "BEPUL",
      badge: "Konsol",
      badgeColor: "bg-purple-500 text-white",
      desc: "PS4, PS5, Xbox One va Xbox Series X|S egalari uchun. 4K rezolyutsiyada 60 FPS o'yin jarayoni va qulay geympad boshqaruvi.",
      primaryActionText: "PlayStation / Xbox Store",
      link: "https://www.playstation.com/games/pubg-battlegrounds/",
      steps: [
        "Konsol menyusidan PlayStation Store yoki Xbox Store'ga kiring",
        "PUBG deb qidiruv bering va bepul kutubxonangizga qo'shing",
        "Yuklab olish yakunlangach, geympad orqali jang maydoniga tushing"
      ]
    }
  ];

  const handleDownloadClick = (title: string, link: string) => {
    setDownloadStarted(title);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-zinc-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#08090df0] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center font-black text-black text-2xl tracking-tighter shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              P
            </div>
            <div>
              <span className="text-2xl font-black tracking-widest text-white uppercase italic">
                PUBG<span className="text-amber-500">.UZ</span>
              </span>
              <p className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">Bosh Sahifaga Qaytish</p>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Link 
              href="/about" 
              className="hidden sm:inline-flex text-xs uppercase tracking-wider font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              O'yin Haqida
            </Link>
            <Link 
              href="/maps" 
              className="hidden sm:inline-flex text-xs uppercase tracking-wider font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Xaritalar
            </Link>
            <Link 
              href="/weapons" 
              className="hidden sm:inline-flex text-xs uppercase tracking-wider font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Qurollar
            </Link>
            <Link 
              href="/tournaments" 
              className="hidden sm:inline-flex text-xs uppercase tracking-wider font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Turnirlar
            </Link>
            <Link 
              href="/requirements" 
              className="hidden sm:inline-flex text-xs uppercase tracking-wider font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Talablar
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-amber-500 bg-zinc-900 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Bosh Sahifa
            </Link>
          </div>
        </div>
      </header>

      {/* HEADER SECTION */}
      <section className="relative py-20 overflow-hidden border-b border-zinc-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 filter saturate-150"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080c]/80 via-[#07080c] to-[#07080c]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded">
            Rasmiy Tarqatish Markazi
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-6 mb-6">
            PUBG'NI <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">BEPUL YUKLAB OLING</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Qurilmangizni tanlang, rasmiy va xavfsiz manbalar orqali o'rnatib, bugunoq omon qolish jangida qatnashing. Barcha platformalarda 100% bepul!
          </p>
        </div>
      </section>

      {/* PLATFORMS GRID */}
      <section className="py-16 bg-[#07080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {downloadStarted && (
            <div className="mb-10 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl flex items-center justify-between">
              <span className="text-sm font-mono flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <strong>{downloadStarted}</strong> uchun yuklab olish sahifasi yangi oynada ochildi!
              </span>
              <button 
                onClick={() => setDownloadStarted(null)}
                className="text-xs underline text-zinc-400 hover:text-white"
              >
                Yopish
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((p) => (
              <div 
                key={p.id}
                className="bg-zinc-900/80 rounded-2xl border border-zinc-800 hover:border-amber-500/60 p-6 sm:p-8 flex flex-col justify-between transition-all group shadow-xl"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                        {p.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-black text-white uppercase tracking-wide">{p.title}</h2>
                        <p className="text-xs font-mono text-zinc-400">{p.platformName}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded shadow ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-zinc-950 p-3.5 rounded-xl border border-zinc-800/80 mb-6">
                    <div>
                      <span className="text-zinc-500 block">O'lchami:</span>
                      <span className="text-zinc-200 font-bold">{p.size}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Narxi:</span>
                      <span className="text-amber-400 font-bold">{p.cost}</span>
                    </div>
                  </div>

                  {/* Step by step */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block font-bold">
                      O'rnatish Ketma-Ketligi:
                    </span>
                    <ol className="space-y-2 text-xs text-zinc-400">
                      {p.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-zinc-800 text-amber-400 font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <button 
                    onClick={() => handleDownloadClick(p.title, p.link)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 active:scale-95"
                  >
                    <Download className="w-4 h-4" /> {p.primaryActionText} <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SAFETY / OFFICIAL NOTICE */}
          <div className="mt-16 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white uppercase">Xavfsiz va Rasmiy Manbalar</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Faqat rasmiy do'konlar (Steam, Google Play, Apple App Store) orqali yuklab oling. Noma'lum saytlardan yuklangan mod va fayllar profilingiz bloklanishiga yoki qurilmangiz zararlanishiga olib kelishi mumkin.
              </p>
            </div>
            <Link 
              href="/requirements"
              className="shrink-0 text-xs font-mono font-bold uppercase text-amber-400 hover:text-amber-300 border border-zinc-700 hover:border-amber-500 px-4 py-2.5 rounded-lg transition-all"
            >
              Talablarni Ko'rish
            </Link>
          </div>

          {/* BACK TO HOME CTA */}
          <div className="mt-16 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-8 py-4 rounded-lg uppercase tracking-wider transition-all shadow-xl shadow-amber-500/25 active:scale-95"
            >
              <Gamepad2 className="w-5 h-5" /> Asosiy Sahifaga Qaytish
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-[#050608] py-10 text-center text-zinc-500 text-xs">
        <p>© 2026 PUBG Corporation. Rasmiy yuklab olish portali.</p>
      </footer>
    </div>
  );
}
