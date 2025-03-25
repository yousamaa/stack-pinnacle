"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
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

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="w-full px-6 md:px-12 lg:px-40 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-32 md:w-64 pt-1 cursor-pointer" onClick={handleLogoClick}>
            <img
              src="/stack-pinnacle-logo-no-background.png"
              alt="Stack Pinnacle Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <nav className="hidden lg:flex gap-10">
          <button
            onClick={() => scrollToSection(servicesRef)}
            className="text-[#172737] hover:text-[#5ebc66] transition-colors hover:cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="text-[#172737] hover:text-[#5ebc66] transition-colors hover:cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(teamRef)}
            className="text-[#172737] hover:text-[#5ebc66] transition-colors hover:cursor-pointer"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection(testimonialsRef)}
            className="text-[#172737] hover:text-[#5ebc66] transition-colors hover:cursor-pointer"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="text-[#172737] hover:text-[#5ebc66] transition-colors hover:cursor-pointer"
          >
            Contact
          </button>
        </nav>
        <Button className="bg-[#5ebc66] hover:bg-[#5ebc66]/90 text-white hover:cursor-pointer">
          Get Started
        </Button>
      </div>
    </header>
  );
}
