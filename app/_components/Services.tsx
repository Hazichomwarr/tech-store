export default function Services() {
  const services = [
    { title: "📱 Devices", desc: "Phones, tablets, laptops" },
    { title: "🔊 Audio", desc: "Speakers, headphones, mics" },
    { title: "🔧 Repairs", desc: "Fix, unlock, setup" },
  ];

  return (
    // <section className="bg-black text-white py-16 px-6">
    <section className="bg-gray-50 text-black py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-2xl text-center">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
