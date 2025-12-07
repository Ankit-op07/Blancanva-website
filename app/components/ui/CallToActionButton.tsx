import { Link } from "../../utils/Link"
import type { Variants } from "motion/react"
import { MotionDiv } from "@/app/utils/lazy-ui"

export const CallToActionButton = () => {
  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6, // Waits for text to finish
      },
    },
  }

  const buttonVariants: Variants = {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      y: 10,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <MotionDiv
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex flex-wrap items-center gap-4 pt-4"
    >
      {/* Button 1: View Our Work (Outline Style) */}
      <Link href="/projects">
        <MotionDiv
          variants={buttonVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center justify-center rounded border border-slate-300 bg-transparent px-6 py-3 text-sm font-medium text-slate-900 transition-all duration-300 hover:border-slate-900 hover:bg-slate-50"
        >
          View Our Work
        </MotionDiv>
      </Link>

      {/* Button 2: Contact Us (Dark Fill Style) */}
      <Link href="/contact">
        <MotionDiv
          variants={buttonVariants}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-flex items-center justify-center overflow-hidden rounded bg-[#333333] px-7 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-black"
        >
          {/* Optional noise texture for premium feel */}
          <div className="pointer-events-none absolute inset-0 -z-1 opacity-20 [background-image:url('/assets/framer-noise.png')] [background-size:100px] bg-repeat" />
          <span className="relative z-10">Contact Us</span>
        </MotionDiv>
      </Link>
    </MotionDiv>
  )
}