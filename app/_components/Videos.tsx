export default function Videos() {
  return (
    // <section className="bg-gray-950 text-white py-16 px-6">
    <section className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">See It In Action</h2>

      <div className="flex gap-6 overflow-x-auto">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="min-w-62.5 h-100 bg-gray-800 rounded-2xl flex items-center justify-center"
          ></div>
        ))}
      </div>
    </section>
  );
}
