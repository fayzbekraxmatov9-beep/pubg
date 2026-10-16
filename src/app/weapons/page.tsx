"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Crosshair, 
  Zap, 
  ShieldAlert, 
  Target, 
  ChevronRight, 
  Gamepad2,
  Sliders,
  Flame
} from "lucide-react";

export default function WeaponsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    { id: "ALL", label: "Barchasi" },
    { id: "AR", label: "Shturm (AR)" },
    { id: "SR", label: "Snayper (SR)" },
    { id: "DMR", label: "Merganlik (DMR)" },
    { id: "SMG", label: "Pulemyot-to'pponcha (SMG)" },
    { id: "SHOTGUN", label: "Drobovik (SG)" },
    { id: "LMG", label: "Pulemyot (LMG)" },
  ];

  const weaponsList = [
    {
      name: "M416",
      category: "AR",
      categoryName: "Shturm Miltig'i",
      ammo: "5.56mm",
      damage: 41,
      fireRate: 88,
      range: 60,
      stability: 82,
      capacity: "30 (40)",
      description: "PUBG'dagi eng ommabop va muvozanatli qurol. Ko'plab modul (attachment)lar bilan jihozlanganda deyarli tebranmasdan aniq otadi.",
      modSlots: "5 ta (Nishon, Dastak, Magazin, Tumshuq, Qo'ndoq)",
    },
    {
      name: "Beryl M762",
      category: "AR",
      categoryName: "Shturm Miltig'i",
      ammo: "7.62mm",
      damage: 45,
      fireRate: 82,
      range: 55,
      stability: 62,
      capacity: "30 (40)",
      description: "Yuqori zararlanish va tez otish kuchiga ega 7.62mm li yirtqich. Orqaga tepishi kuchli, mahoratli o'yinchilar uchun ideal.",
      modSlots: "4 ta (Nishon, Dastak, Magazin, Tumshuq)",
    },
    {
      name: "AKM",
      category: "AR",
      categoryName: "Shturm Miltig'i",
      ammo: "7.62mm",
      damage: 47,
      fireRate: 70,
      range: 60,
      stability: 65,
      capacity: "30 (40)",
      description: "Klassik qudrat. Bitta o'qi jiddiy shikast yetkazadi, yaqin va o'rta masofada dushmanni bir zumda qulatishga qodir.",
      modSlots: "3 ta (Nishon, Magazin, Tumshuq)",
    },
    {
      name: "AWM",
      category: "SR",
      categoryName: "Snayper Miltig'i",
      ammo: ".300 Magnum",
      damage: 105,
      fireRate: 20,
      range: 100,
      stability: 75,
      capacity: "5 (7)",
      description: "Faqat airdrop orqali keladigan eng kuchli snayper. 3-darajali dubulg'ani ham bitta o'q bilan parchalab tashlaydi.",
      modSlots: "4 ta (Nishon, Magazin, Tumshuq, Yonoq qo'ndog'i)",
      isAirdrop: true,
    },
    {
      name: "Kar98k",
      category: "SR",
      categoryName: "Snayper Miltig'i",
      ammo: "7.62mm",
      damage: 79,
      fireRate: 25,
      range: 85,
      stability: 68,
      capacity: "5",
      description: "Klassik bolt-action snayper. 2-darajali dubulg'aga bitta bosh zarbasi (headshot) bilan o'yinchini yer tishlatadi.",
      modSlots: "3 ta (Nishon, Tumshuq, Qo'ndoq)",
    },
    {
      name: "M24",
      category: "SR",
      categoryName: "Snayper Miltig'i",
      ammo: "7.62mm",
      damage: 75,
      fireRate: 28,
      range: 90,
      stability: 72,
      capacity: "5 (7)",
      description: "Kar98k ga nisbatan tezroq o'q uchish tezligiga va kengaytirilgan magazinga ega yuqori darajali mergan quroli.",
      modSlots: "4 ta (Nishon, Magazin, Tumshuq, Yonoq qo'ndog'i)",
    },
    {
      name: "SLR",
      category: "DMR",
      categoryName: "Yarim Avtomat Mergan",
      ammo: "7.62mm",
      damage: 58,
      fireRate: 50,
      range: 75,
      stability: 58,
      capacity: "10 (20)",
      description: "DMR sinfidagi eng halokatli qurollardan biri. Yuqori zararga ega, o'rta va uzoq masofalarda tez-tez otish uchun mukammal.",
      modSlots: "4 ta (Nishon, Magazin, Tumshuq, Yonoq qo'ndog'i)",
    },
    {
      name: "Mini 14",
      category: "DMR",
      categoryName: "Yarim Avtomat Mergan",
      ammo: "5.56mm",
      damage: 48,
      fireRate: 55,
      range: 70,
      stability: 85,
      capacity: "20 (30)",
      description: "O'q uchish tezligi juda yuqori, tebranishi kam va barqaror. Uzoqdagi harakatlanuvchi nishonlarni urish uchun juda qulay.",
      modSlots: "3 ta (Nishon, Magazin, Tumshuq)",
    },
    {
      name: "Vector",
      category: "SMG",
      categoryName: "Kichik Pulemyot",
      ammo: "9mm",
      damage: 31,
      fireRate: 95,
      range: 35,
      stability: 88,
      capacity: "19 (33)",
      description: "Dahshatli otish tezligi. Yaqin masofada soniyaning ulushlarida butun magazinni nishonga joylab, dushmanga imkon qoldirmaydi.",
      modSlots: "5 ta (Nishon, Dastak, Magazin, Tumshuq, Taktik qo'ndoq)",
    },
    {
      name: "UMP45",
      category: "SMG",
      categoryName: "Kichik Pulemyot",
      ammo: ".45 ACP",
      damage: 41,
      fireRate: 75,
      range: 40,
      stability: 92,
      capacity: "25 (35)",
      description: "Boshlovchilar va tajribali o'yinchilar uchun eng barqaror qurol. Tebranishi minimal, ovoz so'ndiruvchi bilan juda sokin ishlaydi.",
      modSlots: "4 ta (Nishon, Dastak, Magazin, Tumshuq)",
    },
    {
      name: "DBS",
      category: "SHOTGUN",
      categoryName: "Qo'shstvolli Drobovik",
      ammo: "12 Gauge",
      damage: 96,
      fireRate: 45,
      range: 20,
      stability: 60,
      capacity: "14",
      description: "Binolar ichida tengsiz qirol. 14 ta patron sig'imi va ketma-ket ikki zarba berish imkoniyati yaqin jangda g'alabani kafolatlaydi.",
      modSlots: "1 ta (Nishon)",
    },
    {
      name: "MG3",
      category: "LMG",
      categoryName: "Yengil Pulemyot",
      ammo: "7.62mm",
      damage: 40,
      fireRate: 98,
      range: 65,
      stability: 70,
      capacity: "75",
      description: "Airdrop quroli. 660 va 990 otish tezligi rejimlariga ega. Transport vositalarini va otryadlarni bir necha soniyada yo'q qilib tashlaydi.",
      modSlots: "1 ta (Nishon)",
      isAirdrop: true,
    },
  ];

  const filteredWeapons = selectedCategory === "ALL" 
    ? weaponsList 
    : weaponsList.filter(w => w.category === selectedCategory);

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
            Arsenal & Harbiy Qurollar
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-6 mb-6">
            PUBG <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">QUROLLAR ARSENALI</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            PUBG janglarida to'g'ri qurol tanlash va uning ballistikasini bilish — omon qolishning asosiy omilidir. Qurollarning zararlanishi, otish tezligi va modullarini o'rganing.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER TABS */}
      <section className="py-8 bg-[#0a0c12] border-b border-zinc-800/80 sticky top-20 z-40 backdrop-blur-md bg-[#0a0c12f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-black"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WEAPONS GRID */}
      <section className="py-16 bg-[#07080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWeapons.map((weapon, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-900/80 rounded-2xl border border-zinc-800 hover:border-amber-500/60 p-6 flex flex-col justify-between transition-all group shadow-lg hover:shadow-amber-500/5"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-black text-white uppercase tracking-wider">{weapon.name}</h2>
                        {weapon.isAirdrop && (
                          <span className="flex items-center gap-1 text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                            <Flame className="w-3 h-3" /> Airdrop
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-amber-400 font-mono uppercase mt-1">{weapon.categoryName}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold bg-zinc-800 text-zinc-200 px-2.5 py-1 rounded border border-zinc-700 block">
                        {weapon.ammo}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 mt-1 block">
                        Sig'im: {weapon.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                    {weapon.description}
                  </p>

                  {/* Progress Stats */}
                  <div className="space-y-3 font-mono text-xs border-t border-zinc-800/80 pt-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-zinc-500">ZARARLANISH (DAMAGE)</span>
                        <span className="text-white font-bold">{weapon.damage}</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-amber-600 to-amber-400 h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(weapon.damage, 100)}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-zinc-500">OTISH TEZLIGI (FIRE RATE)</span>
                        <span className="text-white font-bold">{weapon.fireRate}%</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-full rounded-full transition-all duration-500"
                          style={{ width: `${weapon.fireRate}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-zinc-500">MASOFA (RANGE)</span>
                        <span className="text-white font-bold">{weapon.range}%</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full transition-all duration-500"
                          style={{ width: `${weapon.range}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-zinc-500">BARQARORLIK (STABILITY)</span>
                        <span className="text-white font-bold">{weapon.stability}%</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full transition-all duration-500"
                          style={{ width: `${weapon.stability}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mod slots */}
                <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-400">
                  <span className="text-zinc-500 block mb-1">Modullar o'rni:</span>
                  <span className="text-zinc-300 font-semibold">{weapon.modSlots}</span>
                </div>
              </div>
            ))}
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
        <p>© 2026 PUBG Corporation. Qurollar arsenali bo'yicha to'liq qo'llanma.</p>
      </footer>
    </div>
  );
}
