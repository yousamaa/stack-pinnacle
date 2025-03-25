"use client";

import { useRef, useEffect, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = forwardRef<HTMLElement>((props, ref) => {
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
      const contactItems = sectionRef.current.querySelectorAll(".contact-item");
      gsap.from(contactItems, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <section
      ref={setRefs}
      id="contact"
      className="w-full py-12 md:py-24 bg-[#c5ddca]/30"
    >
      <div className="w-full px-6 md:px-12 lg:px-40">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-[#5ebc66]/20 px-3 py-1 text-sm text-[#5ebc66] contact-item">
              Contact Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#172737] contact-item">
              Get in Touch
            </h2>
            <p className="text-[#848b94] contact-item">
              Ready to transform your business with our IT solutions? Contact us
              today to schedule a consultation with one of our experts.
            </p>
            <div className="space-y-2">
              <div className="flex items-center contact-item">
                <div className="h-10 w-10 rounded-full bg-[#5ebc66]/10 flex items-center justify-center mr-3">
                  <span className="font-bold text-[#5ebc66]">📍</span>
                </div>
                <p className="text-[#172737]">
                  123 Tech Street, Silicon Valley, CA 94043
                </p>
              </div>
              <div className="flex items-center contact-item">
                <div className="h-10 w-10 rounded-full bg-[#5ebc66]/10 flex items-center justify-center mr-3">
                  <span className="font-bold text-[#5ebc66]">📞</span>
                </div>
                <p className="text-[#172737]">(123) 456-7890</p>
              </div>
              <div className="flex items-center contact-item">
                <div className="h-10 w-10 rounded-full bg-[#5ebc66]/10 flex items-center justify-center mr-3">
                  <span className="font-bold text-[#5ebc66]">✉️</span>
                </div>
                <p className="text-[#172737]">info@stackpinnacle.com</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm contact-item">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium text-[#172737]"
                  >
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="John"
                    className="border-[#c5ddca] focus-visible:ring-[#5ebc66]"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium text-[#172737]"
                  >
                    Last Name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Doe"
                    className="border-[#c5ddca] focus-visible:ring-[#5ebc66]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#172737]"
                >
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="john.doe@example.com"
                  type="email"
                  className="border-[#c5ddca] focus-visible:ring-[#5ebc66]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-[#172737]"
                >
                  Company
                </label>
                <Input
                  id="company"
                  placeholder="Your Company"
                  className="border-[#c5ddca] focus-visible:ring-[#5ebc66]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#172737]"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[120px] border-[#c5ddca] focus-visible:ring-[#5ebc66]"
                />
              </div>
              <Button className="w-full bg-[#5ebc66] hover:bg-[#5ebc66]/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
