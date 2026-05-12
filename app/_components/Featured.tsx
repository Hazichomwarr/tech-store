"use client";

import { useState } from "react";
import Image from "next/image";
import { BUSINESS_WHATSAPP } from "@/lib/businessInfo";

const products = [
  {
    name: "Samsung A03",
    price: "$120",
    tag: "🔥 Trending",
    src: "/images/tech_samsung.jpeg",
  },
  {
    name: "Bluetooth Speaker",
    price: "$45",
    tag: "💰 Best Deal",
    src: "/images/tech_speaker.jpeg",
  },
  {
    name: "Headphones",
    price: "$30",
    tag: "⭐ Popular",
    src: "/images/tech_headphone.jpeg",
  },
];

export default function Featured() {
  const [selected, setSelected] = useState(products[0]);

  return (
    <section id="featured" className="bg-white text-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            Featured Products
          </span>

          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-neutral-900">
            Tech Picks Customers Love
          </h2>

          <p className="mt-4 text-neutral-600 text-lg">
            Explore some of our most popular products available in-store today.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-14 grid lg:grid-cols-[1.3fr_.7fr] gap-8 items-start">
          {/* Selected Product */}
          <div className="bg-neutral-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="relative h-75 md:h-125">
              <Image
                src={selected.src}
                alt={selected.name}
                fill
                className="object-cover"
              />

              {/* Tag */}
              <span className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold shadow">
                {selected.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-3xl font-bold text-neutral-900">
                    {selected.name}
                  </h3>

                  <p className="mt-2 text-neutral-600">
                    High-quality tech products available now in-store.
                  </p>
                </div>

                <span className="text-3xl font-bold text-blue-600">
                  {selected.price}
                </span>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={BUSINESS_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  Get It Now
                </a>

                <button className="border border-neutral-300 hover:bg-neutral-200 px-6 py-3 rounded-xl font-semibold transition">
                  Available In Store
                </button>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="space-y-4">
            {products.map((p, i) => {
              const isActive = selected.name === p.name;

              return (
                <button
                  key={i}
                  onClick={() => setSelected(p)}
                  className={`w-full text-left rounded-2xl border transition overflow-hidden ${
                    isActive
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : "border-neutral-200 hover:border-blue-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-4 p-4">
                    {/* Thumbnail */}
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={p.src}
                        alt={p.name}
                        fill
                        className="object-cover w-auto"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <p className="text-sm text-blue-600 font-medium">
                        {p.tag}
                      </p>

                      <h4 className="text-lg font-bold text-neutral-900 mt-1">
                        {p.name}
                      </h4>

                      <p className="text-neutral-500 text-sm mt-1">
                        Available today
                      </p>
                    </div>

                    {/* Price */}
                    <span className="text-lg font-bold text-blue-600">
                      {p.price}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
