"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";
import { BUSINESS_LOCATION } from "@/lib/businessInfo";

// export default function Hero() {
//   return (
//     <section className="relative h-[90vh] flex items-center justify-center bg-black text-white overflow-hidden">
//       {/* Background */}

//       <div className="absolute inset-0">
//         <Image
//           src="/images/store3.png"
//           alt="store"
//           className="object-cover opacity-65 w-auto h-auto"
//           fill
//           priority
//         />
//         <div className="absolute inset-0 bg-black/20" />
//       </div>

//       {/* Content */}

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="relative z-10 text-center px-4"
//       >
//         <h1 className="text-5xl md:text-6xl font-bold mb-4">HSA Electronics</h1>
//         <p className="mt-2 font-bold text-xl">Your Neighborhood Tech Plug</p>

//         <p className="mt-4 text-gray-200 font-bold mb-6 max-w-xl mx-auto">
//           Phones. Audio. Repairs. Everything Tech — One Spot.
//         </p>

//         <div className="mt-10 flex gap-4 justify-center">
//           <a href="#featured">
//             <Button className="font-bold">Shop Featured</Button>
//           </a>
//           <a href={BUSINESS_LOCATION} target="_blank" rel="noopener noreferrer">
//             <Button variant="outline" className="font-bold">
//               Visit Our Store
//             </Button>
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/store3.png"
          alt="HSA Electronics Store"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/80" />

        {/* Glow */}
        <div className="absolute inset-0 bg-blue-800/10 mix-blend-screen" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/10 px-5 py-2 rounded-full text-sm font-medium text-blue-100 mb-8">
          ⚡ Phones • Gaming • Audio • Repairs
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95]">
          HSA
          <span className="text-blue-400"> Electronics</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-xl md:text-2xl font-semibold text-white/90">
          Your Neighborhood Tech Plug
        </p>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Shop phones, TVs, gaming systems, speakers, accessories, repairs, and
          more — all in one trusted local tech store.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#featured">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-2xl text-base font-bold shadow-2xl">
              Shop Featured
            </Button>
          </a>

          <a href={BUSINESS_LOCATION} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-white/30 bg-white/5 backdrop-blur hover:bg-white/10 text-white px-8 py-6 rounded-2xl text-base font-bold"
            >
              Visit Our Store
            </Button>
          </a>
        </div>

        {/* Trust Row */}
        <div className="mt-14 flex flex-col flex-wrap items-center justify-center gap-4 text-sm text-gray-300 md:flex-row">
          <div className="flex items-center gap-2">✅ Trusted Local Store</div>

          <div className="flex items-center gap-2">🔥 Affordable Pricing</div>

          <div className="flex items-center gap-2">⚡ Fast Repairs</div>
        </div>
      </motion.div>
    </section>
  );
}
