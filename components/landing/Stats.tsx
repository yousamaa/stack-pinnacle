"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Stats() {
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll(".stat-item");
      gsap.from(statItems, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <section
      ref={statsRef}
      className="w-full py-12 md:py-24 bg-[#172737] text-white"
    >
      <div className="w-full px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2 stat-item">
            <h3 className="text-4xl font-bold text-[#5ebc66] heading-3">
              500+
            </h3>
            <p className="text-sm text-[#c5ddca]">Clients Served</p>
          </div>
          <div className="space-y-2 stat-item">
            <h3 className="text-4xl font-bold text-[#5ebc66] heading-3">
              1,000+
            </h3>
            <p className="text-sm text-[#c5ddca]">Projects Completed</p>
          </div>
          <div className="space-y-2 stat-item">
            <h3 className="text-4xl font-bold text-[#5ebc66] heading-3">50+</h3>
            <p className="text-sm text-[#c5ddca]">IT Experts</p>
          </div>
          <div className="space-y-2 stat-item">
            <h3 className="text-4xl font-bold text-[#5ebc66] heading-3">10+</h3>
            <p className="text-sm text-[#c5ddca]">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
