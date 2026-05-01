"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    // <section className="relative h-[90vh] flex items-center justify-center bg-black text-white overflow-hidden">
    <section className="relative h-[90vh] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/store.jpeg"
          alt="store"
          className="object-cover opacity-40"
          fill
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Neighborhood Tech Plug
        </h1>

        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Phones. Audio. Repairs. Everything Tech — One Spot.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl">
            Shop Featured
          </button>
          <button className="border border-white px-6 py-3 rounded-xl">
            Visit Store
          </button>
        </div>
      </motion.div>
    </section>
  );
}
