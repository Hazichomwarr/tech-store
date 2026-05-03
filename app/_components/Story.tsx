export default function Story() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="h-87.5 bg-gray-200 rounded-2xl overflow-hidden">
          <img
            src="/images/tech_samsung.png" // replace with real image later
            alt="store"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">More Than a Tech Store</h2>

          <p className="text-gray-600 mb-6">
            We’re your neighborhood tech plug — helping you find the right
            device, fix what’s broken, and upgrade your everyday life.
          </p>

          {/* Highlights */}
          <div className="space-y-3 mb-6">
            <p>✔ Fast repairs</p>
            <p>✔ Best pricing</p>
            <p>✔ Quality products</p>
          </div>

          {/* CTA */}
          <div className="flex justify-start gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-xl">
              Visit Our Store
            </button>
            <a
              href="tel:+9294537790"
              className="border border-blue-500 px-6 py-3 rounded-xl"
            >
              Call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
