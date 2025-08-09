"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import gsap from "gsap";

interface HeaderProps {
  scrollToSection: (elementRef: React.RefObject<HTMLElement | null>) => void;
  servicesRef: React.RefObject<HTMLElement | null>;
  aboutRef: React.RefObject<HTMLElement | null>;
  teamRef: React.RefObject<HTMLElement | null>;
  testimonialsRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
}

export default function Header({
  scrollToSection,
  servicesRef,
  aboutRef,
  teamRef,
  testimonialsRef,
  contactRef,
}: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleLogoClick = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < 50) {
        window.location.reload();
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Services", ref: servicesRef },
    { name: "About", ref: aboutRef },
    { name: "Team", ref: teamRef },
    { name: "Testimonials", ref: testimonialsRef },
    { name: "Contact", ref: contactRef },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="w-full px-6 md:px-12 lg:px-20 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            className="w-32 md:w-64 pt-1 cursor-pointer"
            onClick={handleLogoClick}
            aria-label="Go to top"
          >
            <Image
              src="/stack-pinnacle-logo-no-background.png"
              alt="Stack Pinnacle Logo"
              width={256}
              height={64}
              className="w-full h-auto object-contain"
              priority
            />
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1">
              <span
                className={`block h-0.5 w-full bg-[#172737] transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-[#172737] transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-[#172737] transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className="text-[#172737] hover:text-[#5ebc66] transition-colors hover:cursor-pointer font-medium nav-item"
              >
                {item.name}
              </button>
            ))}
          </nav>
          <Button
            className="bg-[#5ebc66] hover:bg-[#5ebc66]/90 text-white hover:cursor-pointer"
            onClick={() => scrollToSection(contactRef)}
            aria-label="Get started by contacting sales"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white p-4 shadow-md">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.ref);
                  setMobileMenuOpen(false);
                }}
                className="text-[#172737] hover:text-[#5ebc66] transition-colors hover:cursor-pointer py-2 text-left nav-item"
              >
                {item.name}
              </button>
            ))}
            <Button
              className="bg-[#5ebc66] hover:bg-[#5ebc66]/90 text-white hover:cursor-pointer mt-2"
              onClick={() => {
                scrollToSection(contactRef);
                setMobileMenuOpen(false);
              }}
              aria-label="Get started by contacting sales"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
