import Link from "next/link";

//   { name: "Audio", icon: "🎧", slug: "audio", desc: "Speakers & headphones" },
//   {
//     name: "Accessories",
//     icon: "🔌",
//     slug: "accessories",
//     desc: "Chargers & cables",
//   },
//   {
//     name: "Laptops",
//     icon: "💻",
//     slug: "computers",
//     desc: "Laptops & screens",
//   },
//   {
//     name: "Music Gear",
//     icon: "🎸",
//     slug: "gears",
//     desc: "Instruments & audio gear",
//   },
//   { name: "Repairs", icon: "🔧", slug: "repairs", desc: "Fix & maintenance" },
// ];

const categories = [
  {
    name: "Phones & Tablets",
    desc: "New & used smartphones, tablets & mobile devices",
    icon: "📱",
    slug: "phones",
  },
  {
    name: "Bluetooth Speakers",
    desc: "Portable speakers with powerful sound & bass",
    icon: "🔊",
    slug: "bluetooth-speakers",
  },
  {
    name: "Headphones",
    desc: "Wireless, wired & noise-cancelling headphones",
    icon: "🎧",
    slug: "headphones",
  },

  // {
  //   name: "Gaming",
  //   desc: "PS5, Xbox, controllers & gaming accessories",
  //   icon: "🎮",
  //   slug: "gaming",
  // },
  {
    name: "Car Audio",
    desc: "Speakers, subwoofers & car sound systems",
    icon: "🚘",
    slug: "car-audio",
  },
  {
    name: "Car Alarms",
    desc: "Security systems & alarm installations for vehicles",
    icon: "🚨",
    slug: "car-alarms",
  },
  {
    name: "Music Gear",
    desc: "Guitars, instruments & studio equipment",
    icon: "🎸",
    slug: "music-gear",
  },
  {
    name: "Accessories",
    desc: "Chargers, cables, cases & everyday tech essentials",
    icon: "🔌",
    slug: "accessories",
  },

  {
    name: "Laptops",
    desc: "Reliable laptops for school, work & everyday use",
    icon: "💻",
    slug: "laptops",
  },

  {
    name: "TVs",
    desc: "Smart TVs & affordable home entertainment",
    icon: "📺",
    slug: "tvs",
  },
  // {
  //   name: "Repairs",
  //   desc: "Phone repair, screen replacement & tech support",
  //   icon: "🔧",
  //   slug: "repairs",
  // },

  {
    name: "DJ Stuff",
    desc: "Mixers, microphones, lights & party gear",
    icon: "🎚️",
    slug: "dj-sstuff",
  },
];

export default function Categories() {
  return (
    <section id="category" className="bg-white py-16 px-6">
      <div className="max-w-6xl m-auto">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            All Categories
          </span>
          <h2 className="text-3xl font-bold text-center mb-10">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={`/category/${cat.slug}`}
              className="bg-gray-100 rounded-2xl p-8 text-center hover:shadow-xl transition cursor-pointer"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// const Categories = [
//   {
//     name: "Phones & Tablets",
//     desc: "New & used smartphones",
//     icon: "📱",
//     slug: "phones",
//   },
//   {
//     name: "Bluetooth Speakers",
//     desc: "Portable speakers & premium sound",
//     icon: "needs icon",
//     slug: "bluetooth-speakers",
//   },
//   {
//     name: "TVs",
//     desc: "Affordable TVs ready today",
//     icon: "needs icon",
//     slug: "tvs",
//   },
//   {
//     name: "Gaming",
//     desc: "PS5, Xbox & gaming gear",
//     icon: "needs icon",
//     slug: "gaming",
//   },
//   {
//     name: "Car Audio",
//     desc: "Speakers & sound systems",
//     icon: "needs icon",
//     slug: "car-audio",
//   },
//   {
//     name: "Accessories",
//     desc: "Chargers, cases & more",
//     icon: "🔌",
//     slug: "accessories",
//   },
//   {
//     name: "headphones",
//     desc: "needs description",
//    icon: "🎧",
//     slug: "accessories",
//   },
//   {
//     name: "Laptops",
//     desc: "needs description",
//     icon: "💻",
//     slug: "accessories",
//   },
// {
//     name: "Music Gear",
//     icon: "🎸",
//     slug: "gears",
//     desc: "Instruments & audio gear",
//   },
//   { name: "Repairs", icon: "🔧", slug: "repairs", desc: "Fix & maintenance" },
//   {
//     name: "Car Alarms",
//     desc: "needs description",
//     icon: "needs icon",
//     slug: "accessories",
//   },
//   {
//     name: "DJ Stuff",
//     desc: "needs description",
//     icon: "needs icon",
//     slug: "accessories",
//   },
// ];

// const secondaryCategories = [
//   "headphones",
//   "laptops",
//   "car-alarms",
//   "dj-stuff",
//   "ebikes",
//   "scooters",
// ];

// export default function Categories2() {
//   return (
//     <section id="category" className="bg-neutral-50 py-20">
//       <Container>
//         {/* HEADER */}
//         <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div className="max-w-2xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
//               What Are You Looking For?
//             </h2>

//             <p className="mt-3 text-neutral-600">
//               Browse categories and find what you need fast.
//             </p>
//           </div>

//           {/* Shopify link */}
//           <a
//             href="https://orange-electronics-5815.myshopify.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm font-medium text-orange-600 hover:text-orange-700"
//           >
//             🛒 Prefer shopping online?
//           </a>
//         </div>

//         {/* FEATURED GRID */}
//         <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {featuredCategories.map((cat) => (
//             <Link
//               key={cat.slug}
//               href={`/category/${cat.slug}`}
//               className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//             >
//               {/* image */}
//               <div className="overflow-hidden">
//                 <Image
//                   src={cat.image}
//                   alt={cat.name}
//                   width={800}
//                   height={500}
//                   className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
//                 />
//               </div>

//               {/* content */}
//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-neutral-900">
//                   {cat.name}
//                 </h3>

//                 <p className="mt-1 text-sm text-neutral-600">{cat.desc}</p>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* SECONDARY CATEGORIES */}
//         <div className="mt-10">
//           <p className="text-sm font-medium text-neutral-500">
//             More Categories
//           </p>

//           <div className="mt-4 flex flex-wrap gap-3">
//             {secondaryCategories.map((cat) => (
//               <Link
//                 key={cat}
//                 href={`/category/${cat}`}
//                 className="rounded-full bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm hover:bg-neutral-100 transition"
//               >
//                 {cat.replaceAll("-", " ")}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
