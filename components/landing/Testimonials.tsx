"use client";

import { useRef, useState, useEffect, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    initial: "JD",
    name: "John Doe",
    position: "CEO, Tech Innovators",
    text: "Stack Pinnacle transformed our IT infrastructure, resulting in a 30% increase in efficiency and significant cost savings. Their team is professional, knowledgeable, and always available when we need them.",
  },
  {
    initial: "JS",
    name: "Jane Smith",
    position: "CTO, Digital Solutions",
    text: "The cybersecurity solutions provided by Stack Pinnacle have given us peace of mind. Their proactive approach to security has prevented several potential breaches and kept our data safe.",
  },
  {
    initial: "RJ",
    name: "Robert Johnson",
    position: "COO, Global Enterprises",
    text: "The custom software developed by Stack Pinnacle has streamlined our operations and improved customer satisfaction. Their team took the time to understand our needs and delivered a solution that exceeded our expectations.",
  },
  {
    initial: "AM",
    name: "Alice Miller",
    position: "CIO, Future Technologies",
    text: "Stack Pinnacle's cloud migration strategy saved us thousands in infrastructure costs while improving our system reliability. Their expertise in modern cloud architecture is unmatched.",
  },
  {
    initial: "TP",
    name: "Tom Parker",
    position: "Director of Operations, Innovate Inc",
    text: "Working with Stack Pinnacle has been a game-changer for our business. Their IT support team resolves issues quickly and their strategic guidance has helped us make better technology decisions.",
  },
];

const Testimonials = forwardRef<HTMLElement>((props, ref) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  // Carousel navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelector(".testimonial-content"), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={setRefs} id="testimonials" className="w-full py-12 md:py-24">
      <div className="w-full px-8 md:px-16 lg:px-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#5ebc66]/20 px-3 py-1 text-sm text-[#5ebc66]">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#172737]">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-[#848b94] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to
              say about our services.
            </p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="mx-auto max-w-4xl py-12 relative">
          <div className="overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all duration-500 transform testimonial-content">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-[#c5ddca] flex items-center justify-center">
                <span className="font-bold text-[#172737]">
                  {testimonials[currentTestimonial].initial}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#172737]">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-sm text-[#848b94]">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>
            <p className="text-[#848b94] italic">
              "{testimonials[currentTestimonial].text}"
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#5ebc66] text-[#5ebc66] hover:bg-[#5ebc66] hover:text-white hover:cursor-pointer"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            {/* Indicators */}
            <div className="flex items-center gap-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    currentTestimonial === index
                      ? "w-6 bg-[#5ebc66]"
                      : "w-2 bg-[#c5ddca]"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#5ebc66] text-[#5ebc66] hover:bg-[#5ebc66] hover:text-white hover:cursor-pointer"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
