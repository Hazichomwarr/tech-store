import Image from "next/image";
import { BUSINESS_WHATSAPP } from "@/lib/businessInfo";

export default function Deal() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT - IMAGE */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg z-10">
              🔥 HOT DEAL
            </div>

            <div className="bg-white/10 backdrop-blur rounded-3xl p-6">
              <Image
                src="/images/tech_speaker.jpeg"
                alt="Bluetooth Speaker"
                width={600}
                height={500}
                className="w-full h-[320px] object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div>
            <span className="uppercase tracking-widest text-blue-100 font-semibold">
              Deal of the Day
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              Bluetooth Speaker
            </h2>

            <p className="mt-4 text-lg text-blue-100">
              Powerful bass, portable design, and long battery life — perfect
              for home, outdoor, and everyday listening.
            </p>

            {/* Pricing */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl line-through text-blue-200">$59</span>

              <span className="text-5xl font-extrabold">$39</span>

              <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                Save $20
              </span>
            </div>

            {/* Features */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                🔊 Deep Bass
              </span>

              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                🔋 Long Battery
              </span>

              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                📦 In Stock
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={BUSINESS_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold text-lg transition"
              >
                Get It Now
              </a>

              <button className="border border-white/40 hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition">
                Available Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
