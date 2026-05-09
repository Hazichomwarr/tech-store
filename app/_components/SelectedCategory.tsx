// app/_components/SelectedCategory.tsx

"use client";

import { Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SelectedCatgory({
  slug,
  cat,
}: {
  slug: string;
  cat: Product[];
}) {
  const [tag, setTag] = useState<string>("All");

  const filtered =
    tag === "All" || !tag
      ? cat
      : cat.filter((p) => p.tag?.toLowerCase() === tag.toLowerCase());

  return (
    <div className="max-w-6xl m-auto">
      {/* Header */}
      <div className="bg-gray-100 p-6 rounded-2xl mb-8">
        <h1 className="text-3xl font-bold capitalize">{slug}</h1>
        <p className="text-gray-500">Browse our best {slug}</p>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {["All", "Budget", "Popular", "Premium"].map((f, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-xl text-sm ${
              tag === f
                ? "bg-black text-white"
                : "bg-neutral-100 hover:bg-gray-200"
            }`}
            onClick={() => setTag(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="border border-neutral-100 bg-white shadow rounded-2xl p-4 hover:shadow-lg transition"
          >
            {p.imagSrc ? (
              <Image
                src={p.imagSrc}
                alt={p.name}
                width={400}
                height={300}
                className="h-40 w-full object-cover rounded-xl"
              />
            ) : (
              <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}

            <h3 className="font-semibold">{p.name}</h3>

            {p.tag && (
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded mt-1 inline-block">
                {p.tag}
              </span>
            )}

            <p className="text-blue-500 font-bold mt-2">{p.price}</p>

            <Link
              href={`/product/${p.id}`}
              className="block mt-3 text-sm text-blue-600"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
