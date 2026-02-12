"use client";

import Image from "next/image";
import Link from "next/link";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Research", href: "/research" },
];

export function Footer() {
  return (
    <footer className="w-full bg-black px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/Logo.svg"
              alt=""
              width={40}
              height={40}
              className="h-9 w-auto sm:h-10"
            />
            <span className="text-base font-semibold text-white sm:text-lg">
              Zestlogic Systems Private Limited
            </span>
          </Link>
          <div className="mt-6 flex flex-col gap-1 text-sm text-white/90">
            <a
              href="mailto:info@zestlogics.com"
              className="hover:text-white"
            >
              info@zestlogics.com
            </a>
            <span>Pune, Maharashtra, India</span>
            <span>California, USA</span>
          </div>
          <p className="mt-8 text-sm text-white/80">
            © 2026 Zestlogic Systems Private Limited. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-col gap-3 lg:items-end">
          {footerNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-white/90 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
