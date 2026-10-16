import Link from "next/link";
import { 
  ArrowLeft, 
  MapPin, 
  Compass, 
  Maximize2, 
  Users, 
  Layers, 
  Crosshair, 
  Snowflake, 
  Sun, 
  TreePine, 
  Building2,
  Gamepad2
} from "lucide-react";

export const metadata = {
  title: "PUBG Xaritalari - Erangel, Miramar, Sanhok, Vikendi va Boshqalar",
  description: "PUBG: BATTLEGROUNDS rasmiy xaritalari, ularning o'lchamlari, iqlimi, xarakterli nuqtalari va tushish joylari bo'yicha qo'llanma.",
};

export default function MapsPage() {
  const mapsData = [
    {
      name: "Erangel",
      badge: "Klassik",
      badgeColor: "bg-amber-500 text-black",
      size: "8x8 km",
      weather: "Mo''tadil / Yomg'ir / Tuman",
      terrain: "O'rmonlar, tepaliklar, shaharchalar va harbiy baza",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      description: "PUBG tarixidagi ilk va eng mashhur xarita. Qora dengiz mintaqasida joylashgan tashlandiq harbiy tajriba oroli bo'lib, o'zida Pochinki, Sosnovka harbiy bazasi va Georgopol kabi afsonaviy nuqtalarni jamlagan.",
      hotDrops: ["Pochinki", "Military Base (Sosnovka)", "School", "Georgopol"],
      vehicleDensity: "Yuqori (UAZ, Dacia, Mototsikl)",
      icon: <TreePine className="w-5 h-5 text-amber-400" />
    },
    {
      name: "Miramar",
      badge: "Cho'l & Snayper",
      badgeColor: "bg-yellow-500 text-black",
      size: "8x8 km",
      weather: "Issiq quyosh / Qum bo'roni",
      terrain: "Toshli tog'lar, sahro kanyonlari va yirik sanoat shaharlari",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      description: "Meksika iqlimi va ulkan cho'llardan ilhomlangan xarita. Snayper janglari va uzoq masofali to'qnashuvlar uchun eng mukammal joy. Baland tog'lar va chuqur daralar relyef ustunligini beradi.",
      hotDrops: ["Hacienda del Patrón", "Pecado", "Los Leones", "San Martin"],
      vehicleDensity: "O'rta (Mirado, Pickup, Van)",
      icon: <Sun className="w-5 h-5 text-yellow-400" />
    },
    {
      name: "Sanhok",
      badge: "Shiddatli Jungli",
      badgeColor: "bg-emerald-500 text-black",
      size: "4x4 km",
      weather: "Tropik nam / Momaqaldiroq",
      terrain: "Qalin tropik o'rmonlar, qadimiy ibodatxonalar va daryolar",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      description: "Janubi-sharqiy Osiyo changalzorlarida kechadigan shiddatli jang. Xarita o'lchami ixcham bo'lgani sababli, tushgan daqiqangizdanoq to'qnashuvlar boshlanadi. Quyuq o't-o'lanlar va yashirinish joylari ko'p.",
      hotDrops: ["Bootcamp", "Paradise Resort", "Ruins", "Camp Alpha"],
      vehicleDensity: "Past (Scooter, Tukshai, Rony)",
      icon: <Compass className="w-5 h-5 text-emerald-400" />
    },
    {
      name: "Vikendi",
      badge: "Muzlik & Qor",
      badgeColor: "bg-cyan-500 text-black",
      size: "6x6 km",
      weather: "Muzdek qor / Shimol yog'dusi (Aurora)",
      terrain: "Qorli tog'lar, muzlagan daryolar, kosmodrom va qal'alar",
      image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80",
      description: "Markaziy Yevropa uslubidagi qorli qishloqlar va tog'lar. Qor ustida qoladigan oyoq izlari dushmanni kuzatishga imkon beradi. Xaritada osma dor yo'llari (cable cars) va qor mobillari mavjud.",
      hotDrops: ["Cosmodrome", "Castle", "Dino Park", "Goroka"],
      vehicleDensity: "O'rta (Snowmobile, Snowbike, Zima)",
      icon: <Snowflake className="w-5 h-5 text-cyan-400" />
    },
    {
      name: "Taego",
      badge: "Koreya Muhiti",
      badgeColor: "bg-blue-500 text-black",
      size: "8x8 km",
      weather: "Quyoshli / Yumshoq iqlim",
      terrain: "80-yillardagi Koreya qishloqlari, aeroport va daryolar",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
      description: "PUBG vatani bo'lmish Janubiy Koreya madaniyati va 1980-yillar manzaralari. Bu xaritada 'Comeback BR' (mag'lub bo'lganlarga qayta tirilish imkoni) mexanikasi va o'ziga xos Hyundai Pony Coupe avtomobili bor.",
      hotDrops: ["Terminal", "Ho San Prison", "Palace", "Buk San Sa"],
      vehicleDensity: "Yuqori (Pony Coupe, Porter)",
      icon: <Building2 className="w-5 h-5 text-blue-400" />
    },
    {
      name: "Deston",
      badge: "Zamonaviy Megapolis",
      badgeColor: "bg-purple-500 text-white",
      size: "8x8 km",
      weather: "Bo'ronli / Suv bosgan",
      terrain: "Ulkan osmono'par binolar, botqoqliklar va konsert maydonlari",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
      description: "Futuristik suv bosgan shahar va botqoqliklar. Ascender (arqoq ko'targichlar) orqali osmono'par binolarning tomiga chiqish va cheksiz parashyutdan foydalanish mumkin.",
      hotDrops: ["Ripton", "Concert District", "Hydroelectric Dam", "Arena"],
      vehicleDensity: "Yuqori (Airboat, Pillar DPL)",
      icon: <Building2 className="w-5 h-5 text-purple-400" />
    }
  ];

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

          <div className="flex items-center gap-4">
            <Link 
              href="/about" 
              className="hidden sm:inline-flex text-xs uppercase tracking-wider font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              O'yin Haqida
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
          className="absolute inset-0 bg-cover bg-center opacity-25 filter saturate-150"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080c]/80 via-[#07080c] to-[#07080c]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded">
            Jang Maydonlari Katalogi
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-6 mb-6">
            PUBG BATTLEGROUNDS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">XARITALARI</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Har bir xarita o'ziga xos taktik yondashuv, transport turlari va qurol tanlovini talab qiladi. Omon qolish uchun hudud xususiyatlarini puxta o'rganing.
          </p>
        </div>
      </section>

      {/* MAPS DETAILED LIST */}
      <section className="py-20 bg-[#0a0c12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {mapsData.map((map, index) => (
              <div 
                key={index} 
                className="bg-zinc-900/90 rounded-2xl border border-zinc-800 overflow-hidden hover:border-amber-500/60 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${map.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`text-xs font-mono uppercase font-black px-3 py-1 rounded shadow ${map.badgeColor}`}>
                        {map.badge}
                      </span>
                      <span className="text-xs font-mono uppercase font-bold px-3 py-1 rounded bg-black/70 text-white backdrop-blur-sm border border-zinc-700">
                        {map.size}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-black/60 rounded-lg backdrop-blur-sm border border-zinc-700">
                          {map.icon}
                        </div>
                        <h2 className="text-3xl font-black uppercase text-white tracking-wide">{map.name}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-6">
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {map.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono border-t border-zinc-800/80 pt-4">
                      <div>
                        <span className="text-zinc-500 block mb-1 uppercase tracking-wider">Iqlim & Ob-havo:</span>
                        <span className="text-zinc-200 font-semibold">{map.weather}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block mb-1 uppercase tracking-wider">Relyef:</span>
                        <span className="text-zinc-200 font-semibold">{map.terrain}</span>
                      </div>
                    </div>

                    <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80">
                      <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block mb-2 font-bold flex items-center gap-1.5">
                        <Crosshair className="w-3.5 h-3.5 text-amber-400" /> Eng Qaynoq Nuqtalar (Hot Drops):
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {map.hotDrops.map((drop, i) => (
                          <span key={i} className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800">
                            {drop}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Transport: <strong className="text-zinc-200">{map.vehicleDensity}</strong></span>
                  <span className="text-amber-400 font-semibold uppercase">100 O'yinchi</span>
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
        <p>© 2026 PUBG Corporation. Xaritalar bo'yicha to'liq qo'llanma.</p>
      </footer>
    </div>
  );
}
