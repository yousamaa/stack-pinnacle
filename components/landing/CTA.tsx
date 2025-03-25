"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CTA() {
  const ctaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    if (ctaRef.current) {
      const ctaItems = ctaRef.current.querySelectorAll(".cta-item")
      gsap.from(ctaItems, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      })
    }
  }, [])

  return (
    <section ref={ctaRef} className="w-full py-12 md:py-24 bg-[#172737] text-white">
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl cta-item">
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-[900px] text-[#c5ddca] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed cta-item">
              Get started with our IT solutions today and take your business to the next level.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row cta-item">
            <Button className="bg-[#5ebc66] hover:bg-[#5ebc66]/90 text-white">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-[#c5ddca] text-gray-900 hover:text-[#5ebc66] hover:bg-[#c5ddca]/10 hover:cursor-pointer">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 