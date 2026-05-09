// import { BUSINESS_LOCATION, BUSINESS_PHONE } from "@/lib/businessInfo";

// export default function Story() {
//   return (
//     <section className="bg-white py-20 px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* Image */}
//         <div className="h-87.5 bg-gray-200 rounded-2xl overflow-hidden">
//           <img
//             src="/images/tech_samsung.png" // replace with real image later
//             alt="store"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div>
//           <h2 className="text-3xl font-bold mb-4">More Than a Tech Store</h2>

//           <p className="text-gray-600 mb-6">
//             We’re your neighborhood tech plug — helping you find the right
//             device, fix what’s broken, and upgrade your everyday life.
//           </p>

//           {/* Highlights */}
//           <div className="space-y-3 mb-6">
//             <p>✔ Fast repairs</p>
//             <p>✔ Best pricing</p>
//             <p>✔ Quality products</p>
//           </div>

//           {/* CTA */}
//           <div className="flex justify-start gap-4">
//             <button className="bg-blue-500 text-white px-6 py-3 rounded-xl">
//               <a
//                 href={BUSINESS_LOCATION}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Visit Our Store
//               </a>
//             </button>
//             <a
//               href={BUSINESS_PHONE}
//               className="border border-blue-500 px-6 py-3 rounded-xl"
//             >
//               Call now
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { BUSINESS_LOCATION, BUSINESS_PHONE } from "@/lib/businessInfo";

export default function Story() {
  return (
    <section className="bg-neutral-50 py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* IMAGE */}
        <div className="relative">
          {/* floating badge */}
          <div className="absolute -top-5 -left-5 bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg z-10 font-semibold">
            Trusted Local Tech Store
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/tech_samsung.png"
              alt="HSA Electronics"
              width={700}
              height={700}
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            About HSA Electronics
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
            More Than Just a Tech Store
          </h2>

          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            We’re your neighborhood tech plug — helping customers find the right
            devices, repair what matters, and upgrade everyday life with
            affordable technology and reliable service.
          </p>

          <p className="mt-4 text-neutral-600 leading-relaxed">
            From phones and gaming systems to car audio and repairs, we focus on
            making tech simple, accessible, and trustworthy.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-200">
              <p className="font-semibold text-neutral-900">⚡ Fast Repairs</p>

              <p className="text-sm text-neutral-500 mt-1">
                Quick turnaround & reliable service
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-200">
              <p className="font-semibold text-neutral-900">💰 Best Pricing</p>

              <p className="text-sm text-neutral-500 mt-1">
                Affordable tech for every budget
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-200">
              <p className="font-semibold text-neutral-900">
                🔥 Trending Products
              </p>

              <p className="text-sm text-neutral-500 mt-1">
                Phones, gaming & audio equipment
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-200">
              <p className="font-semibold text-neutral-900">
                🤝 Trusted Support
              </p>

              <p className="text-sm text-neutral-500 mt-1">
                Friendly help when you need it
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={BUSINESS_LOCATION}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-2xl font-semibold transition"
            >
              Visit Our Store
            </a>

            <a
              href={BUSINESS_PHONE}
              className="border border-neutral-300 hover:bg-neutral-100 px-7 py-4 rounded-2xl font-semibold transition"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
