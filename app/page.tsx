"use client";

import { useState } from "react";
import { products } from "./data/products";

export default function Home() {
  const [selected, setSelected] = useState<any>(null);

  const whatsappLink = (product: string) => {
    return `https://wa.me/966XXXXXXXXX?text=أبغى أطلب ${product}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-blue-50 py-10 text-center">
        <h1 className="text-3xl font-bold text-black mb-3">
          التوحد نحلم ونحقق 💙
        </h1>
        <p className="text-gray-600">
          منتجات مميزة صُنعت بإبداع أطفال التوحد
        </p>
      </section>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(p)}
            className="bg-white rounded-2xl shadow hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer overflow-hidden"
          >
            <img
              src={p.image}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-black text-lg">
                {p.title}
              </h2>

              <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                عرض التفاصيل
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl w-[90%] md:w-[500px] relative">

            {/* ❌ Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 left-3 text-black text-xl"
            >
              ✕
            </button>

            <img
              src={selected.image}
              className="w-full h-48 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-bold mb-3 text-black">
              {selected.title}
            </h2>

            <h3 className="font-semibold mb-2 text-black">الخطوات:</h3>
            <ul className="list-disc pr-5 text-sm text-gray-700">
              {selected.steps.map((step: string, i: number) => (
                <li key={i}>{step}</li>
              ))}
            </ul>

            {/* 🛒 WhatsApp */}
            <a
              href={whatsappLink(selected.title)}
              target="_blank"
              className="block mt-5 bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition"
            >
              طلب عبر واتساب 🛒
            </a>

          </div>
        </div>
      )}

    </div>
  );
}