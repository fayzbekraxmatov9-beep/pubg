import React from "react";
import Link from "next/link";
import { Footer, Navbar } from "@/components";


// Mahsulot interfeysi
interface MahsulotItem {
  id: number | string;
  name: string;
  price: number | string;
  description: string;
}

export default async function MahsulotlarPage() {
  let mahsulotlar: MahsulotItem[] = [];
  let errorMsg = "";

  try {
    // 127.0.0.1:8000 dan ma'lumot olish
    const res = await fetch("http://127.0.0.1:8000/mahsulot/", {
      cache: "no-store", // har safar yangi ma'lumot olib kelish uchun
    });

    if (!res.ok) {
      throw new Error(`Server xatosi: ${res.status}`);
    }

    mahsulotlar = await res.json();
  } catch (err: any) {
    errorMsg = "Backend serverga (127.0.0.1:8000) ulanib bo'lmadi. Backend ishlayaptimi?";
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-cyan-400">
          Backenddan Kelgan Mahsulotlar (127.0.0.1:8000)
        </h1>

        {errorMsg ? (
          <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-sm">
            {errorMsg}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mahsulotlar.map((items: any) => (
              <div
                key={items.id}
                className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/40 transition-all"
              >
                <span className="text-xs text-slate-500 font-mono">ID: {items.id}</span>
                <h2 className="text-xl font-bold text-white mt-1">{items.name}</h2>
                <p className="text-emerald-400 font-bold text-lg mt-2">${items.price}</p>
                <p className="text-slate-400 text-sm mt-2">{items.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}