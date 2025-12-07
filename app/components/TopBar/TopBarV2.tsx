import React from "react"
import { Link } from "../../utils/Link"
import { SITE_SLUGS } from "@/config/siteConfig"
// Import the logo file directly
import blancanvaLogo from "@/app/images/blancanva logo.svg"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: SITE_SLUGS.projects },
  { name: "Contact", href: "/contact" },
]

export const TopBarV2: React.FC = () => {
  return (
    <nav className="font-switzer fixed top-0 left-0 z-50 w-full bg-white px-6 py-4 shadow-md md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* LEFT: Logo Section */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="block transition-opacity duration-300 hover:opacity-70">
            {/* NOTE: If you are using Next.js, imported images are objects, so we use .src.
              If this throws an error in your setup, remove .src and just use {blancanvaLogo} 
            */}
            <img 
              src={blancanvaLogo.src || blancanvaLogo} 
              alt="Blancanva" 
              className="h-10 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* CENTER: Navigation Links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm font-normal text-black transition-opacity duration-300 ease-in-out hover:opacity-50"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT: CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/#quote"
            className="group relative overflow-hidden rounded bg-[#333333] px-6 py-2.5 text-sm text-white transition-all duration-300 hover:bg-black hover:shadow-lg hover:ring-1 hover:ring-black/5"
          >
            <span className="relative z-10">Get a Quote</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger Placeholder */}
        <div className="block md:hidden">
            <button className="text-black transition-opacity hover:opacity-50">Menu</button>
        </div>

      </div>
    </nav>
  )
}