"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Monitor, 
  Smartphone, 
  CheckCircle2, 
  Flame, 
  Download, 
  Gamepad2, 
  Cpu, 
  HardDrive, 
  Zap, 
  Layers, 
  HelpCircle,
  ExternalLink
} from "lucide-react";

export default function RequirementsPage() {
  const [platform, setPlatform] = useState<"pc" | "mobile" | "console">("pc");

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
            Texnik Qo'llanma
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-6 mb-6">
            TIZIM <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">TALABLARI VA O'RNATISH</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Qurilmangiz PUBG uchun to'g'ri keladimi? Kompyuter (PC), Mobil (Android/iOS) va Konsol qurilmalari uchun minimal hamda tavsiya etilgan barcha texnik parametrlar bilan tanishing.
          </p>
        </div>
      </section>

      {/* PLATFORM SWITCHER TABS */}
      <section className="py-8 bg-[#0a0c12] border-b border-zinc-800/80 sticky top-20 z-40 backdrop-blur-md bg-[#0a0c12f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="inline-flex p-1.5 bg-zinc-900 border border-zinc-800 rounded-xl max-w-full overflow-x-auto">
            <button 
              onClick={() => setPlatform("pc")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                platform === "pc" ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-black" : "text-zinc-400 hover:text-white"
              }`}
            >
              <Monitor className="w-4 h-4" /> PC (Kompyuter / Steam)
            </button>
            <button 
              onClick={() => setPlatform("mobile")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                platform === "mobile" ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-black" : "text-zinc-400 hover:text-white"
              }`}
            >
              <Smartphone className="w-4 h-4" /> PUBG Mobile (iOS & Android)
            </button>
            <button 
              onClick={() => setPlatform("console")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                platform === "console" ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-black" : "text-zinc-400 hover:text-white"
              }`}
            >
              <Gamepad2 className="w-4 h-4" /> Konsol (PS5 / Xbox)
            </button>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS CONTENT */}
      <section className="py-16 bg-[#07080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {platform === "pc" && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Minimum PC */}
                <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                    <h2 className="text-xl font-black text-amber-400 uppercase tracking-wide flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-500" /> Minimal Tizim Talablari
                    </h2>
                    <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded">
                      30-45 FPS (720p / 1080p Low)
                    </span>
                  </div>

                  <ul className="space-y-4 text-sm font-mono text-zinc-300">
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Operatsion tizim:</span>
                      <span className="text-white font-semibold">64-bit Windows 10</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Protsessor (CPU):</span>
                      <span className="text-white font-semibold">Intel Core i5-4430 / AMD FX-6300</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Operativ xotira (RAM):</span>
                      <span className="text-white font-semibold">8 GB RAM</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Videokarta (GPU):</span>
                      <span className="text-white font-semibold">NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">DirectX versiyasi:</span>
                      <span className="text-white font-semibold">Versiya 11</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Tarmoq tezligi:</span>
                      <span className="text-white font-semibold">Keng polosali internet aloqasi (Ping &lt; 80ms)</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between pb-1 gap-1">
                      <span className="text-zinc-500">Qattiq disk (HDD/SSD):</span>
                      <span className="text-amber-400 font-bold">50 GB bo'sh joy</span>
                    </li>
                  </ul>
                </div>

                {/* Recommended PC */}
                <div className="bg-zinc-900/80 rounded-2xl border border-amber-500/40 p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-amber-500 text-black text-[10px] font-black uppercase px-4 py-1 rounded-bl-lg font-mono">
                    Tavsiya Qilinadi
                  </div>

                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                    <h2 className="text-xl font-black text-white uppercase tracking-wide flex items-center gap-2">
                      <Flame className="w-5 h-5 text-amber-500" /> Tavsiya Etilgan Talablar
                    </h2>
                    <span className="text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-1 rounded">
                      60-144 FPS (1080p / 1440p High)
                    </span>
                  </div>

                  <ul className="space-y-4 text-sm font-mono text-zinc-300">
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Operatsion tizim:</span>
                      <span className="text-white font-semibold">64-bit Windows 10 / 11</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Protsessor (CPU):</span>
                      <span className="text-white font-semibold">Intel Core i5-7600K / AMD Ryzen 5 1600</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Operativ xotira (RAM):</span>
                      <span className="text-white font-semibold">16 GB RAM (Dual-channel)</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Videokarta (GPU):</span>
                      <span className="text-white font-semibold">NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">DirectX versiyasi:</span>
                      <span className="text-white font-semibold">Versiya 12</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Tarmoq tezligi:</span>
                      <span className="text-white font-semibold">Optik tolali internet aloqasi</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between pb-1 gap-1">
                      <span className="text-zinc-500">Qattiq disk (SSD):</span>
                      <span className="text-amber-400 font-bold">50 GB bo'sh joy (NVMe SSD tavsiya)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Competitive Esports Spec */}
              <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">Pro Kibersport Darajasi (240Hz+)</span>
                  <h3 className="text-2xl font-black text-white uppercase mt-1">Eng Yuqori Kadrlar Chastotasi Uchun</h3>
                  <p className="text-zinc-400 text-sm mt-2 max-w-xl">
                    Intel Core i7-13700K / AMD Ryzen 7 7800X3D, RTX 4070 yoki undan yuqori videokarta, 32 GB DDR5 RAM hamda 240Hz monitor orqali mutlaq ustunlikka erishing.
                  </p>
                </div>
                <a 
                  href="https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-8 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-amber-500/20"
                >
                  <ExternalLink className="w-4 h-4" /> Steam'da Yuklab Olish (Bepul)
                </a>
              </div>
            </div>
          )}

          {platform === "mobile" && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Android Requirements */}
                <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                    <h2 className="text-xl font-black text-amber-400 uppercase tracking-wide flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-amber-500" /> Android Qurilmalar
                    </h2>
                    <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded">
                      Google Play
                    </span>
                  </div>

                  <ul className="space-y-4 text-sm font-mono text-zinc-300">
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Android versiyasi:</span>
                      <span className="text-white font-semibold">Android 5.1.1 yoki yangiroq (Android 10+ tavsiya)</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Operativ xotira (RAM):</span>
                      <span className="text-white font-semibold">Kamida 3 GB (Tavsiya: 6 GB yoki 8 GB)</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Protsessor (SoC):</span>
                      <span className="text-white font-semibold">Snapdragon 660 / MediaTek Helio G80 (Tavsiya: Snapdragon 8 Gen)</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Grafika (FPS):</span>
                      <span className="text-white font-semibold">60 FPS (Extreme) yoki 90/120 FPS qo'llab-quvvatlash</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between pb-1 gap-1">
                      <span className="text-zinc-500">Kerakli xotira hajmi:</span>
                      <span className="text-amber-400 font-bold">Kamida 6-8 GB bo'sh xotira (xaritalar bilan)</span>
                    </li>
                  </ul>
                </div>

                {/* iOS Requirements */}
                <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                    <h2 className="text-xl font-black text-amber-400 uppercase tracking-wide flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-amber-500" /> Apple iOS (iPhone & iPad)
                    </h2>
                    <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded">
                      App Store
                    </span>
                  </div>

                  <ul className="space-y-4 text-sm font-mono text-zinc-300">
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">iOS versiyasi:</span>
                      <span className="text-white font-semibold">iOS 12.0 yoki undan yuqori</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Minimal qurilmalar:</span>
                      <span className="text-white font-semibold">iPhone 8, iPhone X, iPad 6-avlod</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Tavsiya etilgan modellar:</span>
                      <span className="text-white font-semibold">iPhone 13, 14, 15, 16 Pro (120Hz ProMotion)</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-800/60 pb-3 gap-1">
                      <span className="text-zinc-500">Operativ xotira:</span>
                      <span className="text-white font-semibold">3 GB va undan yuqori</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between pb-1 gap-1">
                      <span className="text-zinc-500">Kerakli xotira hajmi:</span>
                      <span className="text-amber-400 font-bold">Kamida 7 GB bo'sh xotira</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mobile Store Links */}
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-black text-white uppercase">PUBG Mobile Rasmiy Yuklab Olish</h3>
                  <p className="text-zinc-400 text-sm mt-1">O'z smartfoningizga mos rasmiy do'kondan o'rnating.</p>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.tencent.ig" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-black border border-zinc-700 hover:border-amber-500 px-6 py-3 rounded-lg text-xs font-mono font-bold text-white uppercase transition-all"
                  >
                    Google Play
                  </a>
                  <a 
                    href="https://apps.apple.com/app/pubg-mobile/id1330123889" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-black border border-zinc-700 hover:border-amber-500 px-6 py-3 rounded-lg text-xs font-mono font-bold text-white uppercase transition-all"
                  >
                    Apple App Store
                  </a>
                </div>
              </div>
            </div>
          )}

          {platform === "console" && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-8 shadow-xl">
                  <h2 className="text-xl font-black text-amber-400 uppercase tracking-wide mb-6 pb-4 border-b border-zinc-800">
                    PlayStation 4 / PlayStation 5
                  </h2>
                  <ul className="space-y-4 text-sm font-mono text-zinc-300">
                    <li className="flex justify-between border-b border-zinc-800/60 pb-3">
                      <span className="text-zinc-500">PS5 unumdorligi:</span>
                      <span className="text-white font-semibold">4K / 60 FPS silliq rejim</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800/60 pb-3">
                      <span className="text-zinc-500">PS4 / PS4 Pro:</span>
                      <span className="text-white font-semibold">1080p / 30-60 FPS</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800/60 pb-3">
                      <span className="text-zinc-500">Tarmoq obunasi:</span>
                      <span className="text-white font-semibold">PlayStation Plus talab qilinmaydi (Bepul)</span>
                    </li>
                    <li className="flex justify-between pb-1">
                      <span className="text-zinc-500">Kerakli hajm:</span>
                      <span className="text-amber-400 font-bold">55 GB bo'sh joy</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-8 shadow-xl">
                  <h2 className="text-xl font-black text-amber-400 uppercase tracking-wide mb-6 pb-4 border-b border-zinc-800">
                    Xbox One / Xbox Series X|S
                  </h2>
                  <ul className="space-y-4 text-sm font-mono text-zinc-300">
                    <li className="flex justify-between border-b border-zinc-800/60 pb-3">
                      <span className="text-zinc-500">Series X unumdorligi:</span>
                      <span className="text-white font-semibold">4K / 60 FPS</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800/60 pb-3">
                      <span className="text-zinc-500">Series S:</span>
                      <span className="text-white font-semibold">1080p / 60 FPS</span>
                    </li>
                    <li className="flex justify-between border-b border-zinc-800/60 pb-3">
                      <span className="text-zinc-500">Tarmoq obunasi:</span>
                      <span className="text-white font-semibold">Xbox Live Gold shart emas (Free-to-Play)</span>
                    </li>
                    <li className="flex justify-between pb-1">
                      <span className="text-zinc-500">Kerakli hajm:</span>
                      <span className="text-amber-400 font-bold">55 GB bo'sh joy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* FAQ SECTION */}
          <div className="mt-16 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-black uppercase text-white mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-500" /> Ko'p Beriladigan Savollar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-white mb-1">PUBG PC bepulmi?</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Ha, PUBG: BATTLEGROUNDS rasman Free-to-Play modeliga o'tgan. Steam platformasi orqali bepul yuklab olib o'ynashingiz mumkin.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">HDD da o'ynasa bo'ladimi yoki SSD shartmi?</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  HDD da o'yin ishlaydi, biroq binolar va teksturalar tezroq yuklanishi va qotib qolmasligi uchun SSD o'rnatish qat'iy tavsiya etiladi.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">PC va Mobile o'yinchilari birga o'ynay oladimi?</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Yo'q, PUBG PC va PUBG Mobile mutlaqo boshqa dvijok va serverlarda ishlaydi. Ular o'rtasida crossplay mavjud emas.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Pingni qanday pasaytirsa bo'ladi?</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  O'zbekistonda barqaror ping (40-60 ms) uchun Wi-Fi o'rniga kabel orqali internetga ulanish va eng yaqin Rossiya yoki Yevropa serverlarini tanlash lozim.
                </p>
              </div>
            </div>
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
        <p>© 2026 PUBG Corporation. Tizim talablari va o'rnatish qo'llanmasi.</p>
      </footer>
    </div>
  );
}
