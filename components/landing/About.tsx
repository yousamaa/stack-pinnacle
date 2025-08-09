"use client";

import { useRef, useEffect, forwardRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = forwardRef<HTMLElement>((props, ref) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Combine the forwarded ref with our local ref
  const setRefs = (element: HTMLElement | null) => {
    // Update our local ref
    if (sectionRef.current !== element) {
      sectionRef.current = element;
    }

    // Forward the ref
    if (typeof ref === "function") {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sectionRef.current) {
      const aboutItems = sectionRef.current.querySelectorAll(".about-item");
      gsap.from(aboutItems, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <section ref={setRefs} id="about" className="w-full py-12 md:py-24">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center about-item">
            <Image
              src="/hero_img.png"
              width={450}
              height={450}
              alt="Stack Pinnacle team collaborating on IT architecture"
              className="rounded-lg object-contain shadow-md"
              loading="lazy"
            />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-[#5ebc66]/20 px-3 py-1 text-sm text-[#5ebc66] about-item">
              About Us
            </div>
            <h2 className="heading-2 text-[#172737] about-item">
              Your Trusted IT Partner
            </h2>
            <p className="text-base text-[#848b94] about-item max-w-xl">
              With over 10 years of experience in the IT industry, we've helped
              hundreds of businesses transform their operations through
              technology. Our team of experts is dedicated to providing
              innovative solutions that drive growth and efficiency.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center about-item">
                <CheckCircle className="mr-2 h-5 w-5 text-[#5ebc66]" />
                <span className="text-base text-[#172737]">
                  Expert team of IT professionals
                </span>
              </li>
              <li className="flex items-center about-item">
                <CheckCircle className="mr-2 h-5 w-5 text-[#5ebc66]" />
                <span className="text-base text-[#172737]">
                  Customized solutions for your business
                </span>
              </li>
              <li className="flex items-center about-item">
                <CheckCircle className="mr-2 h-5 w-5 text-[#5ebc66]" />
                <span className="text-base text-[#172737]">
                  24/7 support and maintenance
                </span>
              </li>
              <li className="flex items-center about-item">
                <CheckCircle className="mr-2 h-5 w-5 text-[#5ebc66]" />
                <span className="text-base text-[#172737]">
                  Cutting-edge technology and tools
                </span>
              </li>
            </ul>
            <Button
              size="lg"
              className="bg-[#5ebc66] hover:bg-[#5ebc66]/90 text-white mt-4 about-item"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
