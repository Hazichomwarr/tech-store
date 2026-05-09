"use client";

import { BUSINESS_PHONE } from "@/lib/businessInfo";
import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <Container>
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="font-semibold text-neutral-900 cursor-pointer">
              <a
                href="/"
                className="flex items-center gap-3 font-semibold text-neutral-900 cursor-pointer"
              >
                <Image
                  src="/images/hsa-logo.jpg"
                  alt="HSA Electronics logo"
                  width={42}
                  height={42}
                  className="object-contain rounded-2xl h-auto"
                />

                <span className="block">HSA Electronics</span>
              </a>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="/#category"
                className="text-sm text-neutral-500 hover:text-black"
              >
                Products
              </a>
              <a
                href="/#category"
                className="text-sm text-neutral-500 hover:text-black"
              >
                Services
              </a>

              <a href={BUSINESS_PHONE}>
                <Button>Call Now</Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </Container>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 visible bg-black/40" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <button onClick={() => setOpen(false)} className="text-xl mb-6">
          ✕
        </button>

        {/* Links */}
        <div className="flex flex-col gap-6">
          <a
            href="/#category"
            onClick={() => setOpen(false)}
            className="text-base"
          >
            Products
          </a>
          <a
            href="/#service"
            onClick={() => setOpen(false)}
            className="text-base"
          >
            Services
          </a>

          <a href={BUSINESS_PHONE}>
            <Button>📞 Call Now</Button>
          </a>
        </div>
      </div>
    </>
  );
}
