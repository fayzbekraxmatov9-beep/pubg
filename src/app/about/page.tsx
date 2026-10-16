import { Navbar, Footer, PageHeader, BackToHomeCta } from "@/components";
import { 
  Crosshair, 
  ShieldAlert, 
  Users, 
  Trophy, 
  Compass, 
  Zap, 
  Target,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "PUBG Haqida - Battle Royale Tarixi va Mexanikasi",
  description: "PUBG (PlayerUnknown's Battlegrounds) o'yini tarixi, qoidalari, survival mexanikasi va o'yin olami haqida batafsil ma'lumot.",
};

export default function AboutPage() {
  const milestones = [
    { year: "2017", title: "Battle Royale Inqilobi", desc: "Brendan Greene ('PlayerUnknown') tomonidan yaratilgan o'yin Steam platformasida ilk bor paydo bo'ldi va bir vaqtning o'zida 3.2 million o'yinchilik rekordni o'rnatdi." },
    { year: "2018", title: "Mobil Versiya Chiqishi", desc: "PUBG Mobile iOS va Android qurilmalari uchun taqdim etilib, butun dunyo bo'ylab yuzlab millionlab yangi jangchilarni qamrab oldi." },
    { year: "2020", title: "Kibersport Cho'qqisi", desc: "Global chempionatlar (PGI.S, PGC) tashkil etilib, millionlab dollarlik mukofot jamg'armalari bilan kiberolamda yetakchilikni mustahkamladi." },
    { year: "2022-2026", title: "Free-to-Play va Yangi Davr", desc: "O'yin barcha kompyuter va konsol o'yinchilari uchun bepul bo'ldi, yangi taktik vositalar va yangilangan xaritalar qo'shildi." },
  ];

  const coreMechanics = [
    {
      icon: <Crosshair className="w-8 h-8 text-amber-500" />,
      title: "Realistik Fizika va Otishma",
      desc: "O'yinda 'hitscan' yo'q — har bir o'q masofa, tortishish kuchi va havo qarshiligiga qarab harakatlanadi. Qurol tebranishi (recoil) esa mahorat talab qiladi."
    },
    {
      icon: <Compass className="w-8 h-8 text-amber-500" />,
      title: "Keng Maydon va Taktika",
      desc: "Xaritalar shahar, qishloq, o'rmon, daryo va tog'lardan iborat. Qayerga tushish, transport topish va balandlikni egallash g'alabaning asosiy kalitidir."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-amber-500" />,
      title: "Moviy Doira (Blue Zone)",
      desc: "Har bir necha daqiqada xavfsiz oq hudud qisqarib boradi. Moviy zonadan tashqarida qolgan o'yinchilar doimiy zarar oladi, bu esa barchani to'qnashuvga chorlaydi."
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "Otryad Birgaligi (Squads)",
      desc: "Yolg'iz (Solo), juftlikda (Duo) yoki to'rt kishilik Otryad (Squad) rejimlarida o'ynang. Yaralangan jamoadoshni qutqarish va koordinatsiya muhim rol o'ynaydi."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Airdrop va Maxsus Ta'minot",
      desc: "Samolyotdan tashlanadigan airdrop qutilarida AWM, Groza, 3-darajali dubulg'a va zirh kabi eng kuchli noyob aslahalar mavjud bo'ladi."
    },
    {
      icon: <Trophy className="w-8 h-8 text-amber-500" />,
      title: "Winner Winner Chicken Dinner",
      desc: "100 nafar omon qoluvchidan faqatgina bitta o'yinchi yoki otryad eng oxirigacha yashab qoladi va afsonaviy g'alabani nishonlaydi."
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080c] text-zinc-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* NAVBAR */}
      <Navbar currentPage="/about" />

      {/* HERO SECTION OF ABOUT */}
      <PageHeader 
        badge="To'liq Ensiklopediya"
        title="PUBG: BATTLEGROUNDS"
        highlightedText="HAQIDA"
        description="PUBG (PlayerUnknown's Battlegrounds) — butun dunyo bo'ylab 'Battle Royale' janrini ommalashtirgan va millionlab o'yinchilarni qamrab olgan afsonaviy taktik otishma o'yinidir."
      />

      {/* WHAT IS PUBG */}
      <section className="py-20 border-b border-zinc-800 bg-[#0a0c12]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2">Asosiy G'oya</span>
              <h2 className="text-3xl font-black uppercase text-white tracking-wide mb-6">
                100 O'yinchi. 1 Ta Orol. Bittagina G'olib.
              </h2>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                O'yin har safar 100 nafar qurolsiz o'yinchining samolyotdan parashyut orqali ulkan orolga sakrashi bilan boshlanadi. Parashyutdan tushganingizdan so'ng, sizning birinchi maqsadingiz — qurol, zirh, tibbiy vositalar va himoya vositalarini topishdir.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Vaqt o'tishi bilan o'yin maydoni tobora torayib boradi. Bu esa o'yinchilarni yashirinishdan ko'ra, strategik to'qnashuvlar olib borishga majbur qiladi.
              </p>
            </div>
            <div className="bg-gradient-to-tr from-amber-500/20 via-zinc-900 to-zinc-950 p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-500" /> O'yinning 3 Oltin Qoidasi
              </h3>
              <ul className="space-y-4 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Pozitsiya — hammasi:</strong> Doim balandlikda va qoplam (cover) ortida bo'ling, ochiq maydonlardan qoching.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Ovozni tinglang:</strong> Qadam tovushlari, o'q uzish va transport motorining ovozi orqali dushmanning aniq joyini aniqlang.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Resurslarni tejash:</strong> Keraksiz otishmalarga kirishmang va o'yin yakuniga (final circle) ko'proq resurs saqlang.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CORE MECHANICS */}
      <section className="py-20 border-b border-zinc-800 bg-[#07080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded">
              Tizim va Mexanikalar
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-4">
              O'yin Qanday Ishlaydi?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreMechanics.map((item, i) => (
              <div key={i} className="bg-zinc-900/60 p-8 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all">
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold uppercase text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="py-20 bg-[#0a0c12]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded">
              Tarix va Rivojlanish
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-4">
              PUBGning Katta Yo'li
            </h2>
          </div>

          <div className="space-y-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="sm:w-32 shrink-0">
                  <span className="text-3xl font-black text-amber-400 font-mono">{m.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase mb-2">{m.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BACK CTA */}
          <BackToHomeCta />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

