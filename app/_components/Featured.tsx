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
  return (
    // <section className="bg-gray-950 text-white py-16 px-6">
    <section className="bg-white text-black py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            {/* <div className="h-40 bg-gray-800 mb-4 rounded-xl" /> */}
            <img
              src={p.src}
              alt={p.name}
              className="h-40 bg-gray-800 mb-4 rounded-xl"
            />

            <h3 className="text-xl font-semibold text-neutral-100">{p.name}</h3>
            <p className="text-gray-400">{p.tag}</p>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-blue-400 font-bold">{p.price}</span>
              <button className="text-sm border px-3 py-1 rounded-lg">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
