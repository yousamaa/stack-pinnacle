"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { FlipWords } from "../ui/flip-words";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const words = ["Innovation", "Solutions" ,"Systems", "Software", "Computing"];

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
    <section ref={heroRef} className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="w-full px-6 md:px-12 lg:px-40">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-[#c5ddca] px-3 py-1 text-sm text-[#172737] animate-item">
              Innovative IT Solutions
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#172737] animate-item">
              Transform Your Business with Modern
              <FlipWords words={words} duration={500} /> <br />
            </h1>
            <p className="max-w-[600px] text-[#848b94] md:text-xl animate-item">
              We provide cutting-edge IT services to help your business thrive
              in the digital age. From cloud solutions to cybersecurity, we've
              got you covered.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-item">
              <Button className="bg-[#5ebc66] hover:bg-[#5ebc66]/90 text-white hover:cursor-pointer">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-[#5ebc66] text-[#5ebc66] hover:bg-[#c5ddca] hover:cursor-pointer"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-item">
            <Image
              src="https://racxstudio.vercel.app/static/media/BuildWebsite.2d15641dcb298d3ebdbc.png"
              width={550}
              height={550}
              alt="IT Services"
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
