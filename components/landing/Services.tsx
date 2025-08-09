"use client";

import { forwardRef } from "react";
import {
  Cloud,
  Shield,
  Code,
  Server,
  BarChart,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const serviceCards = [
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure to power your business applications and data storage needs.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Cybersecurity",
    description:
      "Protect your business from threats with our comprehensive security solutions.",
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your specific business requirements.",
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "IT Infrastructure",
    description:
      "Design, implementation, and management of your IT infrastructure.",
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Data Analytics",
    description:
      "Turn your data into actionable insights with our analytics solutions.",
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Mobile Solutions",
    description:
      "Develop and deploy mobile applications to reach your customers wherever they are.",
  },
];

const Services = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="services"
      className="w-full py-12 md:py-24 bg-[#c5ddca]/30"
    >
      <div className="w-full px-8 md:px-16 lg:px-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#5ebc66]/20 px-3 py-1 text-sm text-[#5ebc66]">
              Our Services
            </div>
            <h2 className="heading-2 text-[#172737]">
              Comprehensive IT Solutions
            </h2>
            <p className="max-w-[900px] text-lg text-[#848b94]">
              We offer a wide range of IT services to meet your business needs.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className="service-card group relative overflow-hidden rounded-lg border bg-background p-6 shadow-lg transition-all hover:shadow-md hover:border-[#5ebc66] hover:scale-105 duration-300 hover:bg-[#5ebc66] hover:text-white h-[280px] flex flex-col"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5ebc66]/10 text-[#5ebc66] mb-4 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="heading-5 text-[#172737] mb-2 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-base text-[#848b94] group-hover:text-white/90 transition-colors duration-300 flex-grow">
                {service.description}
              </p>
              <Link
                href="#contact"
                className="mt-4 flex items-center text-[#5ebc66] group-hover:text-white transition-all duration-300 group-hover:opacity-100 hover:cursor-pointer link"
              >
                <span className="font-medium">Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";

export default Services;
