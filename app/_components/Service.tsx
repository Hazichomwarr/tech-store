import {
  BUSINESS_LOCATION,
  BUSINESS_PHONE,
  BUSINESS_WHATSAPP,
} from "@/lib/businessInfo";
import Image from "next/image";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

const services = [
  {
    id: 53,
    name: "Phone Screen Repair",
    price: "$69",
    desc: "Fast screen replacement service for cracked or damaged smartphone displays.",
    tag: "Most Requested",
    imagSrc: "/categories/repairs/screen-repair.png",
  },
  {
    id: 54,
    name: "Battery Replacement",
    price: "$69",
    desc: "Restore battery life and performance with professional battery replacement service.",
    tag: "Best Deal",
    imagSrc: "/categories/repairs/battery-replacement.png",
  },

  {
    id: 55,
    name: "Laptop Diagnostic Service",
    price: "$49",
    desc: "Professional troubleshooting service to identify hardware and software issues quickly.",
    tag: "Professional Service",
    imagSrc: "/categories/repairs/laptop-diagnostic.png",
  },
  {
    id: 56,
    name: "Charging Port Repair",
    price: "$79",
    desc: "Repair faulty charging ports to keep your device powered and connected.",
    tag: "Quick Fix",
    imagSrc: "/categories/repairs/port-repair.png",
  },
];

export default function Service() {
  return (
    <section id="service" className="bg-neutral-50 py-20">
      <Container>
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            Repair Services
          </span>

          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">
            Fast Repairs. Efficient Service. Results Guaranteed.
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            From cracked screens to battery issues, we help keep your devices
            working like new — quickly and professionally.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.id}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                {s.imagSrc ? (
                  <Image
                    src={s.imagSrc}
                    alt={s.name}
                    width={600}
                    height={500}
                    className="h-65 w-full object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="h-65 bg-gray-100 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}

                {/* Tag */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-blue-600 shadow">
                  {s.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Top Row */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {s.name}
                  </h3>

                  <span className="text-xl font-bold text-blue-600 whitespace-nowrap">
                    {s.price}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {s.desc}
                </p>

                {/* Features */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="bg-neutral-100 px-3 py-1 rounded-full text-sm text-neutral-700">
                    Fast Service
                  </span>

                  <span className="bg-neutral-100 px-3 py-1 rounded-full text-sm text-neutral-700">
                    Quality Parts
                  </span>

                  <span className="bg-neutral-100 px-3 py-1 rounded-full text-sm text-neutral-700">
                    Trusted Support
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={BUSINESS_LOCATION}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="px-5 py-3 font-semibold">
                      Visit Store
                    </Button>
                  </a>

                  <a
                    href={BUSINESS_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="px-5 py-3 font-semibold"
                    >
                      Ask on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-blue-600 px-8 py-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Need a quick repair today?
              </h3>

              <p className="mt-2 text-blue-100">
                Call us now or visit the store for fast and reliable service.
              </p>
            </div>

            <a href={BUSINESS_PHONE}>
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 text-base font-bold rounded">
                📞 Call Now
              </button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
