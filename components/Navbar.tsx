"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Research", href: "/research" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-10 bg-black">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 pt-4">
        <Link href="/" className="flex shrink-0 items-center gap-1">
          <Image
            src="/Logo.svg"
            alt="Zestlogic"
            width={56}
            height={56}
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden flex-1 justify-end md:flex">
          <NavigationMenu viewport={false} className="max-w-none flex-1 justify-end">
            <NavigationMenuList className="gap-0 border-0 bg-transparent p-0">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <NavigationMenuItem key={item.label} className="border-0">
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={`whitespace-nowrap px-3 py-3 text-sm font-medium transition-colors hover:bg-transparent hover:text-white/90 focus:bg-transparent lg:px-4 ${
                          isActive ? "text-blue-400" : "text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] border-white/10 bg-black [&>button]:text-white [&>button]:opacity-90">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? "text-blue-400" : "text-white hover:text-white/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
