export default function Visit() {
  return (
    <section className="bg-neutral-50 py-16 px-6 text-center">
      <div className="max-w-6xl m-auto">
        <h2 className="text-3xl font-bold mb-4">Visit Us</h2>

        <p className="text-gray-400 mb-4">123 Main Street, Your City</p>

        <p className="mb-6">Mon - Sat: 10AM - 8PM</p>

        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 text-white px-10 py-3 cursor-pointer rounded-xl hover:bg-blue-600">
            Call Now
          </button>
          <button className="border border-blue-500 px-6 py-3 cursor-pointer rounded-xl hover:bg-neutral-200">
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
}
