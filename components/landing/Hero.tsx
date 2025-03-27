"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { FlipWords } from "../ui/flip-words";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const words = ["Innovation", "Solutions", "Systems", "Software", "Computing"];

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (heroRef.current) {
      const heroContent = heroRef.current.querySelectorAll(".animate-item");
      gsap.from(heroContent, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section ref={heroRef} className="w-full">
      <div className="relative flex h-[45rem] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:radial-gradient(#d4d4d4_2px,transparent_2px)]",
            "dark:[background-image:radial-gradient(#404040_2px,transparent_2px)]"
          )}
        />
        <div className="w-full px-6 md:px-10 lg:px-24">
          <div className="grid gap-6 md:gap-20 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#c5ddca] px-3 py-1 text-sm text-[#172737] animate-item">
                Innovative IT Solutions
              </div>
              <h1 className="text-2xl sm:text-3xl! xl:text-4xl! 2xl:text-5xl! font-semibold text-[#172737] animate-item">
                Transform Your Business with Modern
                <FlipWords words={words} duration={2000} /> <br />
              </h1>
              <p className="text-lg text-[#848b94] animate-item">
                We provide cutting-edge IT services to help your business thrive
                in the digital age. From cloud solutions to cybersecurity, we've
                got you covered.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-item">
                <Button
                  size="lg"
                  className="bg-[#5ebc66] hover:bg-[#5ebc66]/90 text-white hover:cursor-pointer"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#5ebc66] text-[#5ebc66] hover:bg-[#c5ddca] hover:cursor-pointer"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-item rounded-xl">
              <Image
                src="/hero_img.png"
                width={550}
                height={550}
                alt="IT Services"
                className="rounded-lg object-contain shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
