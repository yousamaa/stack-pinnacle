"use client"

import Link from "next/link"
import { Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#172737] text-white py-6">
      <div className="w-full px-6 md:px-12 lg:px-40">
        <div className="grid gap-40 md:grid-cols-2 lg:grid-cols-4 place-items-center p-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-[#5ebc66] flex items-center justify-center">
                <span className="font-bold text-white">SP</span>
              </div>
              <span className="font-bold text-xl">Stack Pinnacle</span>
            </div>
            <p className="text-sm text-[#c5ddca]">
              Providing innovative IT solutions to help businesses thrive in the digital age.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm text-[#c5ddca]">
              <li>
                <Link href="#" className="hover:text-[#5ebc66] transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#5ebc66] transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#5ebc66] transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#5ebc66] transition-colors">
                  IT Infrastructure
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-sm text-[#c5ddca]">
              <li>
                <Link href="#" className="hover:text-[#5ebc66] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#5ebc66] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#5ebc66] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#5ebc66] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="space-y-2 text-sm text-[#c5ddca]">
              <li>
                <Link href="#" className="hover:text-[#5ebc66] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#5ebc66] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#5ebc66] transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-[#848b94]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#c5ddca]">© {new Date().getFullYear()} Stack Pinnacle. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-[#c5ddca] hover:text-[#5ebc66]">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-[#c5ddca] hover:text-[#5ebc66]">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-[#c5ddca] hover:text-[#5ebc66]">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 