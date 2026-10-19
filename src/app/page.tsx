"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ShieldAlert, 
  Crosshair, 
  Trophy, 
  Flame, 
  Users, 
  Download, 
  Play, 
  Compass, 
  Zap, 
  ChevronRight, 
  Gamepad2, 
  Radio, 
  Monitor, 
  Smartphone,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"pc" | "mobile">("pc");

  const maps = [
    {
      name: "Erangel",
      type: "8x8 km • Klassik",
      desc: "Tashlandiq harbiy baza, o'rmonlar va shaharchalardan iborat afsonaviy jang maydoni.",
      badge: "Klassik",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Miramar",
      type: "8x8 km • Cho'l",
      desc: "Quruq qumli tog'lar va uzoq masofali snayper otishmalari uchun eng mukammal sahro.",
      badge: "Snayper",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sanhok",
      type: "4x4 km • Jungli",
      desc: "Quyuq tropik o'rmonlar, shiddatli to'qnashuvlar va tezkor battle royale jangi.",
      badge: "Shiddatli",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Vikendi",
      type: "6x6 km • Qorli muzlik",
      desc: "Qor bosgan tepaliklar, muzlagan daryolar va o'ziga xos qor mobillari bilan to'la xarita.",
      badge: "Muzlik",
      image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const weapons = [
    { name: "M416", category: "Shturm miltig'i (AR)", cal: "5.56mm", damage: 41, rate: 88, range: 60 },
    { name: "AWM", category: "Snayper miltig'i (SR)", cal: ".300 Magnum", damage: 105, rate: 25, range: 100 },
    { name: "Beryl M762", category: "Shturm miltig'i (AR)", cal: "7.62mm", damage: 45, rate: 82, range: 55 },
    { name: "Vector", category: "Pulemyot-to'pponcha (SMG)", cal: "9mm", damage: 31, rate: 95, range: 35 },
  ];

  const tournaments = [
    {
      title: "PUBG Tashkent Open Cup 2026",
      prize: "$10,000",
      date: "25-Oktyabr, 2026",
      status: "Ro'yxatdan o'tish ochiq",
      teams: "64 Jamoa",
    },
    {
      title: "Uzbekistan Pro League Season 4",
      prize: "$25,000",
      date: "12-Noyabr, 2026",
      status: "Tez kunda",
      teams: "32 Pro Jamoa",
    },
    {
      title: "Weekly Solo Survival Challenge",
      prize: "$1,500",
      date: "Har Yakshanba",
      status: "Jonli",
      teams: "100 Ishtirokchi",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07080c] text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#08090df0] border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-linear-to-tr from-amber-600 to-yellow-400 flex items-center justify-center font-black text-black text-2xl tracking-tighter shadow-lg shadow-amber-500/20">
              P
            </div>
            <div>
              <span className="text-2xl font-black tracking-widest text-white uppercase italic">
                PUBG<span className="text-amber-500">.UZ</span>
              </span>
              <p className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">Battlegrounds</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase text-zinc-300">
            <Link href="/about" className="hover:text-amber-400 transition-colors">O'yin Haqida</Link>
            <Link href="/maps" className="hover:text-amber-400 transition-colors">Xaritalar</Link>
            <Link href="/weapons" className="hover:text-amber-400 transition-colors">Qurollar</Link>
            <Link href="/tournaments" className="hover:text-amber-400 transition-colors">Turnirlar</Link>
            <Link href="/requirements" className="hover:text-amber-400 transition-colors">Talablar</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/download" 
              className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold px-6 py-2.5 rounded-md text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 active:scale-95"
            >
              <Download className="w-4 h-4" /> Yuklab Olish
            </Link>
          </div>

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
            <Link onClick={() => setMobileMenuOpen(false)} href="/about" className="text-zinc-300 hover:text-amber-400">O'yin Haqida</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/maps" className="text-zinc-300 hover:text-amber-400">Xaritalar</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/weapons" className="text-zinc-300 hover:text-amber-400">Qurollar</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/tournaments" className="text-zinc-300 hover:text-amber-400">Turnirlar</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/requirements" className="text-zinc-300 hover:text-amber-400">Talablar</Link>
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

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/80">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105 filter saturate-150"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#07080c] via-[#07080c]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs uppercase tracking-widest mb-6 animate-pulse">
            <Flame className="w-4 h-4 text-amber-500" /> Yangi Mavsum: Qonli Qasamyod
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white mb-6">
            YERGA TUSH. <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-yellow-400 to-amber-600">QUROLLAN.</span> OMON QOL.
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed mb-10">
            100 nafar o'yinchi, ulkan xaritalar va bittagina g'olib. O'zbekistonning eng yirik PUBG battle royale hamjamiyatiga qo'shiling va haqiqiy g'alabani qo'lga kiriting!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/download" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black text-base font-extrabold px-8 py-4 rounded-md tracking-wider uppercase transition-all shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95"
            >
              <Gamepad2 className="w-5 h-5" /> Hozir Bepul O'ynang
            </Link>
            <Link 
              href="/tournaments" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 bg-zinc-900/80 hover:bg-zinc-800 text-white text-base font-bold px-8 py-4 rounded-md tracking-wider uppercase transition-all hover:scale-105 active:scale-95"
            >
              <Trophy className="w-5 h-5 text-amber-400" /> Turnirlarga Qo'shilish
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-zinc-800/80 pt-10">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-amber-400">100+ MLN</div>
              <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider mt-1">Faol O'yinchilar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-white">9 TA</div>
              <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider mt-1">Unikal Xaritalar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-amber-400">50+</div>
              <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider mt-1">Haqiqiy Qurollar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-white">#1</div>
              <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider mt-1">Battle Royale Janri</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / GAME FEATURES */}
      <section id="about" className="py-24 bg-[#0a0c12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded">
              G'alaba Formulalari
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mt-4">
              Nega PUBG Dunyodagi Eng Zo'r Otishma O'yini?
            </h2>
            <p className="mt-4 text-zinc-400">
              PUBG oddiy otishma emas, bu strategik rejalashtirish, jamoaviy birdamlik va haqiqiy adrenalin sinovidir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-linear-to-b from-zinc-900/90 to-zinc-950 p-8 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all group">
              <div className="w-14 h-14 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Crosshair className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">Haqiqiy Ballistika</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Har bir qurolning orqaga tepishi, o'qning og'ishi va masofaga qarab tushishi haqiqiy fizika qonunlariga asoslangan.
              </p>
            </div>

            <div className="bg-linear-to-b from-zinc-900/90 to-zinc-950 p-8 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all group">
              <div className="w-14 h-14 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">Taktik Jamoaviy O'yin</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                4 kishilik Squad yoki Duoda o'ynang. Aloqa, tezkor yordam va to'g'ri pozitsiya tanlash g'alabani hal qiladi.
              </p>
            </div>

            <div className="bg-linear-to-b from-zinc-900/90 to-zinc-950 p-8 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all group">
              <div className="w-14 h-14 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">Dinamik Moviy Zona</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Vaqt o'tishi bilan qisqarib boruvchi xavfli zona o'yinchilarni to'qnashuvga majbur qiladi. Doim harakatda bo'ling!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAPS SHOWCASE */}
      <section id="maps" className="py-24 border-y border-zinc-800 bg-[#07080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded">
                Jang Maydonlari
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mt-4">
                Afsonaviy Xaritalar
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-zinc-400 max-w-md text-sm">
                Har bir xarita o'ziga xos iqlim, relyef va taktika talab qiladi. Qayerga tushishni to'g'ri tanlang!
              </p>
              <Link 
                href="/maps" 
                className="inline-flex items-center gap-2 self-start sm:self-auto text-amber-400 hover:text-amber-300 font-bold text-xs uppercase tracking-wider bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 px-4 py-2.5 rounded-lg transition-all"
              >
                Barcha Xaritalar <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {maps.map((map, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:border-amber-500 transition-all duration-300 flex flex-col justify-end min-h-95"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${map.image}')` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

                <div className="relative p-6 z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase bg-amber-500 text-black font-extrabold px-2.5 py-0.5 rounded">
                      {map.badge}
                    </span>
                    <span className="text-xs text-zinc-300 font-mono">{map.type}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">{map.name}</h3>
                  <p className="text-zinc-300 text-xs line-clamp-2 leading-relaxed">{map.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEAPONS ARSENAL */}
      <section id="weapons" className="py-24 bg-[#0a0c12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded">
                Arsenal & Qurol-Yaroq
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mt-4">
                G'alabani Belgilovchi Qurollar
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-zinc-400 max-w-md text-sm">
                O'zingizga mos qurolni toping va jang maydonida tengsiz ustunlikka erishing.
              </p>
              <Link 
                href="/weapons" 
                className="inline-flex items-center gap-2 self-start sm:self-auto text-amber-400 hover:text-amber-300 font-bold text-xs uppercase tracking-wider bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 px-4 py-2.5 rounded-lg transition-all"
              >
                To'liq Arsenal <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weapons.map((w, i) => (
              <div key={i} className="bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black tracking-wider text-white uppercase">{w.name}</h3>
                    <p className="text-xs text-amber-400 font-mono uppercase mt-0.5">{w.category}</p>
                  </div>
                  <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-3 py-1 rounded border border-zinc-700">
                    {w.cal}
                  </span>
                </div>

                <div className="space-y-3 mt-4 text-xs font-mono">
                  <div>
                    <div className="flex justify-between mb-1 text-zinc-400">
                      <span>ZARAR (DAMAGE)</span>
                      <span className="text-white font-bold">{w.damage}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-linear-to-r from-amber-600 to-amber-400 h-full rounded-full" style={{ width: `${w.damage}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-zinc-400">
                      <span>OTISH TEZLIGI (FIRE RATE)</span>
                      <span className="text-white font-bold">{w.rate}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-linear-to-r from-amber-600 to-amber-400 h-full rounded-full" style={{ width: `${w.rate}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-zinc-400">
                      <span>MASOFA (RANGE)</span>
                      <span className="text-white font-bold">{w.range}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-linear-to-r from-amber-600 to-amber-400 h-full rounded-full" style={{ width: `${w.range}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURNAMENTS SECTION */}
      <section id="tournaments" className="py-24 border-y border-zinc-800 bg-[#07080c] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded">
                Kibersport
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mt-4">
                Turnirlar & Sovrinlar
              </h2>
            </div>
            <Link 
              href="/tournaments" 
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm tracking-wide uppercase transition-colors"
            >
              Barcha Turnirlar Jadvali <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tournaments.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 rounded-xl p-6 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase">
                      {t.status}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">{t.teams}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.title}</h3>
                  <p className="text-zinc-400 text-xs mb-6 font-mono">{t.date}</p>
                </div>

                <div className="border-t border-zinc-800 pt-4 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-mono">Mukofot Jamg'armasi</span>
                    <span className="text-2xl font-black text-amber-400">{t.prize}</span>
                  </div>
                  <button className="bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-200 text-xs font-bold uppercase px-4 py-2 rounded transition-colors">
                    Ariza Berish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM REQUIREMENTS & DOWNLOAD */}
      <section id="system" className="py-24 bg-[#0a0c12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded">
              Platformalar & Talablar
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mt-4">
              O'yinni O'rnatish
            </h2>
            <p className="mt-4 text-zinc-400">
              O'zingizga qulay platformani tanlang va bir zumda jang maydoniga sho'ng'ing.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
              <button 
                onClick={() => setActiveTab("pc")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === "pc" ? "bg-amber-500 text-black shadow-md" : "text-zinc-400 hover:text-white"
                }`}
              >
                <Monitor className="w-4 h-4" /> Kompyuter (PC / Steam)
              </button>
              <button 
                onClick={() => setActiveTab("mobile")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === "mobile" ? "bg-amber-500 text-black shadow-md" : "text-zinc-400 hover:text-white"
                }`}
              >
                <Smartphone className="w-4 h-4" /> PUBG Mobile (iOS / Android)
              </button>
            </div>
          </div>

          {activeTab === "pc" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/60 p-8 rounded-2xl border border-zinc-800">
              <div>
                <h3 className="text-lg font-bold text-amber-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> Minimal Tizim Talablari
                </h3>
                <ul className="space-y-4 text-sm text-zinc-300 font-mono">
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Operatsion tizim:</span>
                    <span>Windows 10 64-bit</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Protsessor (CPU):</span>
                    <span>Intel i5-4430 / AMD FX-6300</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Operativ xotira (RAM):</span>
                    <span>8 GB RAM</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Videokarta (GPU):</span>
                    <span>GTX 960 2GB / Radeon R7 370</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Xotiradan joy:</span>
                    <span>50 GB bo'sh joy</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-yellow-500" /> Tavsiya Etilgan Talablar
                </h3>
                <ul className="space-y-4 text-sm text-zinc-300 font-mono">
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Operatsion tizim:</span>
                    <span>Windows 11 / 10 64-bit</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Protsessor (CPU):</span>
                    <span>Intel i5-7600K / Ryzen 5 1600</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Operativ xotira (RAM):</span>
                    <span>16 GB RAM</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Videokarta (GPU):</span>
                    <span>GTX 1060 6GB / RX 580 8GB</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Xotiradan joy:</span>
                    <span>SSD da 50 GB bo'sh joy</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/60 p-8 rounded-2xl border border-zinc-800">
              <div>
                <h3 className="text-lg font-bold text-amber-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-amber-500" /> Android Qurilmalar
                </h3>
                <ul className="space-y-4 text-sm text-zinc-300 font-mono">
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Android versiyasi:</span>
                    <span>Android 5.1.1 yoki undan yuqori</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Operativ xotira (RAM):</span>
                    <span>Kamida 3 GB (Tavsiya: 4+ GB)</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Hajmi:</span>
                    <span>Taxminan 4-6 GB to'liq resurslar bilan</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-yellow-500" /> Apple iOS (iPhone/iPad)
                </h3>
                <ul className="space-y-4 text-sm text-zinc-300 font-mono">
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">iOS versiyasi:</span>
                    <span>iOS 11.0 yoki undan yangi</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Model:</span>
                    <span>iPhone 8 va undan yuqori</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500">Hajmi:</span>
                    <span>Kamida 5 GB bo'sh xotira</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Download CTA banner */}
          <div id="download" className="mt-12 bg-linear-to-r from-amber-600 via-amber-500 to-yellow-500 rounded-2xl p-8 sm:p-12 text-black flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                G'alaba Qozonishga Tayyormisiz?
              </h3>
              <p className="mt-2 text-zinc-950 font-medium max-w-xl">
                O'yinni hoziroq bepul yuklab oling, o'z otryadingizni yig'ing va birinchi g'alabangizni nishonlang!
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/download" 
                className="bg-black hover:bg-zinc-900 text-white font-extrabold px-6 py-3.5 rounded-lg text-sm tracking-wider uppercase transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Barcha Versiyalar
              </Link>
              <a 
                href="https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/" 
                target="_blank" 
                rel="noreferrer"
                className="bg-zinc-900 hover:bg-black text-white font-extrabold px-6 py-3.5 rounded-lg text-sm tracking-wider uppercase transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Monitor className="w-4 h-4" /> Steam (PC)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-[#050608] py-12 text-zinc-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-500 text-black font-black flex items-center justify-center text-lg">
              P
            </div>
            <span className="font-bold text-white tracking-widest uppercase">PUBG UZBEKISTAN</span>
          </div>

          <p className="text-xs text-zinc-500 text-center md:text-left">
            © 2026 PUBG Corporation. Barcha huquqlar himoyalangan. Landing page loyihasi taqdim etildi.
          </p>

          <div className="flex items-center gap-6 text-xs uppercase font-mono tracking-wider">
            <Link href="/about" className="hover:text-amber-400 transition-colors">Biz Haqimizda</Link>
            <Link href="/requirements" className="hover:text-amber-400 transition-colors">Talablar & Yordam</Link>
            <Link href="/tournaments" className="hover:text-amber-400 transition-colors">Turnirlar</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
