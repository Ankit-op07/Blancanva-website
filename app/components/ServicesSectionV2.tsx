import React from "react"
import clsx from "clsx"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { Text } from "../ui/Elements"
import type { Variants } from "motion/react"
import { MotionDiv } from "../utils/lazy-ui"
import { Icon } from "./Icon" // Assuming you have a generic icon for the placeholder content

// Data extracted from the requested image
const servicesData = [
  {
    title: "Brand Identity Design",
    description:
      "We craft clean, modern brand identities that communicate who you are and what you stand for. From logos to full identity systems, we make your brand unforgettable.",
    tags: ["Branding", "Visual Identity", "Logo Design"],
  },
  {
    title: "Marketing Strategy",
    description:
      "We build performance-driven marketing strategies that help brands connect with the right audience through clear messaging and purposeful storytelling.",
    tags: ["Marketing", "Strategy", "Campaigns"],
  },
  {
    title: "Social Media Management",
    description:
      "End-to-end content creation, post design, captions, scheduling, and growth strategy. We maintain your brand's voice while making your feed look polished and consistent.",
    tags: ["Social Media", "Content Creation", "SMM"],
  },
  {
    title: "UI/UX Design",
    description:
      "We design intuitive digital experiences with clean layouts, strong hierarchy, and clear interactions. Perfect for websites, mobile apps, and SaaS products.",
    tags: ["UI/UX", "Web Design", "App Design"],
  },
  {
    title: "Website & App Development",
    description:
      "Beautiful, responsive, and fast websites built with SEO-friendly structure and clean user-first design. Ideal for businesses, portfolios, and e-commerce.",
    tags: ["Web Development", "Frontend", "WordPress"],
  },
  {
    title: "Graphic Design",
    description:
      "From marketing materials to campaign creatives, we design high-quality visuals that elevate your brand across every touchpoint.",
    tags: ["Graphic Design", "Print", "Creatives"],
  },
]

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    // Section with a light gray background to make white cards pop, matching the image
    <section id="services" className={clsx("bg-white py-16 md:py-24", className)}>
      <div className="inside-container">
        <div className="mb-12 md:mb-16">
          <AnimatedH2 className="text-center !text-black">Our Services</AnimatedH2>
        </div>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}

// Sub-component for individual cards
const ServiceCard = ({ service }: { service: (typeof servicesData)[0] }) => {
  return (
    <MotionDiv
      variants={cardVariants}
      className="group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      {/* Top Row: Illustration Placeholder & Explore Button */}
      <div className="mb-6 flex items-start justify-between">
        {/* Image/Illustration Placeholder */}
        {/* Since I don't have the exact illustrations, I'm using a placeholder block to maintain layout structure.
            Replace this div with your actual <img> or <Icon> component when you have them. */}
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
          {/* Placeholder Icon - Replace with actual service icon */}
          <Icon name="cube" width={32} height={32} className="opacity-50" />
        </div>

        {/* Explore more button */}
        <button className="flex items-center gap-1 rounded-full border border-gray-300 px-4 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-gray-400 hover:text-black">
          Explore more
          {/* Simple inline SVG for top-right arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="translate-y-[1px]"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col">
        <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
        <Text className="mb-6 flex-grow text-sm leading-relaxed text-gray-600">{service.description}</Text>
      </div>

      {/* Tags / Badges */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-gray-200/80 px-3 py-1 text-[11px] font-medium text-gray-700">
            {tag}
          </span>
        ))}
      </div>
    </MotionDiv>
  )
}