import Link from "next/link";

// const categories = [
//   { name: "Phones", icon: "📱", slug: "phones", desc: "Smartphones & Tablets" },
//   { name: "Audio", icon: "🎧", slug: "audios", desc: "" },
//   { name: "Accessories", icon: "🔌", slug: "accessories", desc: "" },
//   { name: "Computers", icon: "💻", slug: "computers", desc: "" },
//   { name: "Music Gear", icon: "🎸", slug: "gears", desc: "" },
//   { name: "Repairs", icon: "🔧", slug: "repairs", desc: "" },
// ];

// export default function Categories() {
//   return (
//     <section className="bg-white py-16 px-6">
//       <div className="max-w-6xl m-auto">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Shop by Category
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//           {categories.map((cat, i) => (
//             <Link
//               key={i}
//               href={`/categories/${cat.slug}`}
//               className="bg-gray-100 rounded-2xl p-8 text-center hover:shadow-xl transition cursor-pointer"
//             >
//               <div className="text-4xl mb-4">{cat.icon}</div>
//               <h3 className="text-lg font-semibold">{cat.name}</h3>
//               <p className="mt-2 text-sm text-gray-500">{cat.desc}</p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

const categories = [
  { name: "Phones", icon: "📱", slug: "phones", desc: "Smartphones & tablets" },
  { name: "Audio", icon: "🎧", slug: "audio", desc: "Speakers & headphones" },
  {
    name: "Accessories",
    icon: "🔌",
    slug: "accessories",
    desc: "Chargers & cables",
  },
  {
    name: "Computers",
    icon: "💻",
    slug: "computers",
    desc: "Laptops & screens",
  },
  {
    name: "Music Gear",
    icon: "🎸",
    slug: "gears",
    desc: "Instruments & audio gear",
  },
  { name: "Repairs", icon: "🔧", slug: "repairs", desc: "Fix & maintenance" },
];

export default function Categories() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl m-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={`/category/${cat.slug}`}
              className="bg-gray-100 rounded-2xl p-8 text-center hover:shadow-xl transition"
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
