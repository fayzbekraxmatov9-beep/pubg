"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Trophy, 
  Calendar, 
  Users, 
  Flame, 
  ShieldCheck, 
  Clock, 
  Gamepad2, 
  ChevronRight,
  Medal,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function TournamentsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedTournament, setSelectedTournament] = useState<string | null>(null);

  const filters = [
    { id: "ALL", label: "Barchasi" },
    { id: "ACTIVE", label: "Ro'yxatdan O'tish Ochiq" },
    { id: "LIVE", label: "Jonli Efirda" },
    { id: "UPCOMING", label: "Kutilayotgan" },
  ];

  const tournaments = [
    {
      id: "tashkent-cup",
      title: "PUBG Tashkent Open Cup 2026",
      status: "ACTIVE",
      statusLabel: "Ro'yxatdan o'tish ochiq",
      prizePool: "$10,000",
      firstPlace: "$5,000",
      secondPlace: "$3,000",
      thirdPlace: "$2,000",
      format: "Squad (4 kishi)",
      mode: "FPP • Erangel & Miramar",
      slots: "64 Jamoa",
      registeredTeams: 42,
      date: "25-Oktyabr, 2026",
      time: "18:00 (Toshkent vaqti)",
      entryFee: "Bepul (Saralash orqali)",
      description: "O'zbekistonning eng iqtidorli jamoalari uchun ochiq kubok. Saralash bosqichidan muvaffaqiyatli o'tgan 16 ta jamoa finalda g'oliblik uchun kurashadi.",
    },
    {
      id: "pro-league-s4",
      title: "Uzbekistan Pro League Season 4",
      status: "UPCOMING",
      statusLabel: "Tez Kunda",
      prizePool: "$25,000",
      firstPlace: "$12,000",
      secondPlace: "$7,000",
      thirdPlace: "$4,000",
      format: "Pro Squad (4 kishi)",
      mode: "FPP • Barcha Xaritalar",
      slots: "32 Pro Jamoa",
      registeredTeams: 18,
      date: "12-Noyabr, 2026",
      time: "19:00 (Toshkent vaqti)",
      entryFee: "Taklifnoma asosida",
      description: "Kibersport federatsiyasi rasmiy mavsumi. Yilning eng kuchli professional kiber-jamoalari global chempionat yo'llanmasi uchun bahslashadi.",
    },
    {
      id: "weekly-solo",
      title: "Weekly Solo Survival Challenge",
      status: "LIVE",
      statusLabel: "Jonli / Har Hafta",
      prizePool: "$1,500",
      firstPlace: "$800",
      secondPlace: "$400",
      thirdPlace: "$300",
      format: "Solo (1 kishi)",
      mode: "TPP • Sanhok & Erangel",
      slots: "100 Ishtirokchi",
      registeredTeams: 96,
      date: "Har Yakshanba",
      time: "20:00 (Toshkent vaqti)",
      entryFee: "Bepul",
      description: "Yakkaxon jangchilar sinovi. Hech kimga tayanmasdan faqat o'z mahoratingiz bilan omon qoling va har haftalik sovrinni qo'lga kiriting.",
    },
    {
      id: "fergana-duo",
      title: "Fergana Valley Duo Showdown",
      status: "ACTIVE",
      statusLabel: "Ro'yxatdan o'tish ochiq",
      prizePool: "$3,000",
      firstPlace: "$1,500",
      secondPlace: "$1,000",
      thirdPlace: "$500",
      format: "Duo (2 kishi)",
      mode: "FPP • Vikendi & Taego",
      slots: "50 Juftlik",
      registeredTeams: 31,
      date: "30-Oktyabr, 2026",
      time: "17:30 (Toshkent vaqti)",
      entryFee: "Bepul",
      description: "Do'stingiz bilan birlashib, qorli Vikendi va Taego zaminida raqiblarga zarba bering. Taktik juftliklar chempionati.",
    },
    {
      id: "mobile-masters",
      title: "PUBG Mobile Tashkent Masters",
      status: "UPCOMING",
      statusLabel: "Tez Kunda",
      prizePool: "$8,000",
      firstPlace: "$4,000",
      secondPlace: "$2,500",
      thirdPlace: "$1,500",
      format: "Mobile Squad (4 kishi)",
      mode: "TPP • Erangel & Miramar",
      slots: "64 Jamoa",
      registeredTeams: 12,
      date: "05-Dekabr, 2026",
      time: "16:00 (Toshkent vaqti)",
      entryFee: "Bepul",
      description: "Mobil qurilmalar uchun rasmiy turnir. Eng zo'r PUBG Mobile jamoalari to'qnashuvi.",
    },
  ];

  const filteredTournaments = activeFilter === "ALL" 
    ? tournaments 
    : tournaments.filter(t => t.status === activeFilter);

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
            Kibersport Arena
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-6 mb-6">
            PUBG <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">TURNIRLAR & KUBOKLAR</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            O'z mahoratingizni sinovdan o'tkazing, jamoangiz bilan ro'yxatdan o'ting va yirik pul mukofotlarini yutib oling. O'zbekiston kiber-arena cho'qqisiga chiqing!
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="py-8 bg-[#0a0c12] border-b border-zinc-800/80 sticky top-20 z-40 backdrop-blur-md bg-[#0a0c12f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeFilter === f.id
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-black"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TOURNAMENTS LIST */}
      <section className="py-16 bg-[#07080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredTournaments.map((t) => (
              <div 
                key={t.id}
                className="bg-zinc-900/80 rounded-2xl border border-zinc-800 hover:border-amber-500/60 p-6 sm:p-8 transition-all group shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`text-xs font-mono font-black uppercase px-3 py-1 rounded border ${
                        t.status === "ACTIVE" 
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" 
                          : t.status === "LIVE"
                          ? "bg-red-500/10 text-red-400 border-red-500/30 animate-pulse"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                      }`}>
                        {t.statusLabel}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-2.5 py-0.5 rounded">
                        {t.format}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {t.mode}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
                      {t.title}
                    </h2>
                    <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
                      {t.description}
                    </p>
                  </div>

                  {/* Prize pool badge */}
                  <div className="bg-gradient-to-br from-amber-500/10 via-zinc-950 to-zinc-900 border border-amber-500/30 rounded-xl p-5 text-center min-w-[200px] shrink-0">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono block">Mukofot Jamg'armasi</span>
                    <span className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight block my-1">
                      {t.prizePool}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">1-o'rin: <strong className="text-white">{t.firstPlace}</strong></span>
                  </div>
                </div>

                {/* Details bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 text-xs font-mono border-b border-zinc-800/80">
                  <div>
                    <span className="text-zinc-500 block mb-1">O'tkazilish sanasi:</span>
                    <span className="text-zinc-200 font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" /> {t.date}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block mb-1">Boshlanish vaqti:</span>
                    <span className="text-zinc-200 font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> {t.time}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block mb-1">Jamoalar sig'imi:</span>
                    <span className="text-zinc-200 font-semibold flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-amber-400" /> {t.registeredTeams} / {t.slots}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block mb-1">Qatnashish:</span>
                    <span className="text-zinc-200 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> {t.entryFee}
                    </span>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                    <span>2-o'rin: <strong className="text-zinc-200">{t.secondPlace}</strong></span>
                    <span>•</span>
                    <span>3-o'rin: <strong className="text-zinc-200">{t.thirdPlace}</strong></span>
                  </div>
                  <button 
                    onClick={() => setSelectedTournament(t.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 active:scale-95"
                  >
                    <Trophy className="w-4 h-4" /> Ro'yxatdan O'tish
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Registration Modal Simulation */}
          {selectedTournament && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">Turnirga Ariza</span>
                    <h3 className="text-xl font-black text-white uppercase mt-1">{selectedTournament}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedTournament(null)}
                    className="text-zinc-400 hover:text-white p-1 text-lg font-bold"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); alert("Arizangiz qabul qilindi! Menejerlar tez orada bog'lanadi."); setSelectedTournament(null); }} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1 uppercase">Jamoa Nomi / O'yinchi Niki</label>
                    <input 
                      required
                      placeholder="Masalan: Tashkent Wolves"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1 uppercase">Telegram yoki Telefon Raqam</label>
                    <input 
                      required
                      placeholder="@captain_nick yoki +998 90 123 45 67"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1 uppercase">Kapitan PUBG ID</label>
                    <input 
                      required
                      placeholder="Masalan: 512398471"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button 
                      type="submit"
                      className="flex-1 bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3 rounded-lg text-xs uppercase tracking-wider transition-all"
                    >
                      Arizani Yuborish
                    </button>
                    <button 
                      type="button"
                      onClick={() => setSelectedTournament(null)}
                      className="px-4 py-3 rounded-lg border border-zinc-700 text-zinc-300 text-xs font-bold uppercase hover:bg-zinc-800"
                    >
                      Bekor Qilish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

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
        <p>© 2026 PUBG Corporation. Turnirlar va kiber-arena sahifasi.</p>
      </footer>
    </div>
  );
}
