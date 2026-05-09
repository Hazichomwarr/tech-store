// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { productCatalog } from "@/lib/products";

// export default async function CategoryPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   const filtered = productCatalog.filter((p) => p.category === slug);

//   if (filtered.length === 0) return notFound();

//   return (
//     <div className="bg-white min-h-screen px-6 py-10">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="bg-gray-100 p-6 rounded-2xl mb-8">
//           <h1 className="text-3xl font-bold capitalize">{slug}</h1>
//           <p className="text-gray-500">Browse our best {slug}</p>
//         </div>

//         {/* Filters */}
//         <div className="flex gap-3 mb-8 flex-wrap">
//           {["All", "Budget", "Popular", "Premium"].map((f, i) => (
//             <button
//               key={i}
//               className="px-4 py-2 bg-gray-100 rounded-xl text-sm hover:bg-gray-200"
//             >
//               {f}
//             </button>
//           ))}
//         </div>

//         {/* Products */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {filtered.map((p) => (
//             <div
//               key={p.id}
//               className="border rounded-2xl p-4 hover:shadow-lg transition"
//             >
//               <div className="h-40 bg-gray-100 mb-4 rounded-xl flex items-center justify-center text-gray-400">
//                 Image
//               </div>

//               <h3 className="font-semibold">{p.name}</h3>

//               {p.tag && (
//                 <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded mt-1 inline-block">
//                   {p.tag}
//                 </span>
//               )}

//               <p className="text-blue-500 font-bold mt-2">{p.price}</p>

//               <Link
//                 href={`/product/${p.id}`}
//                 className="block mt-3 text-sm text-blue-600"
//               >
//                 View Details →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// app/category/[slug]/page.tsx
import { notFound } from "next/navigation";
import { productCatalog } from "@/lib/products";
import SelectedCatgory from "@/app/_components/SelectedCategory";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filtered = productCatalog.filter((p) => p.category === slug);

  if (filtered.length === 0) return notFound();

  return (
    <section className="py-12">
      <SelectedCatgory slug={slug} cat={filtered} />
    </section>
  );
}
