import { HeroScrollClick } from "./HeroScrollClick"
import { AnimatedElement } from "./ui/AnimatedElement"
import { CallToActionButton } from "./ui/CallToActionButton"

export const HeroV2 = () => {
  return (
    <section className="mx-auto max-w-6xl pt-25 sm:pt-28 md:pt-32">
      <div className="inside relative flex flex-col md:flex-row px-5.5 pb-12 md:px-11 md:pb-24">
        
        {/* Left Side: Content */}
        <div className="flex max-w-2xl flex-col gap-8 md:min-w-[500px]">

          {/* Headline */}
          <h1 className="xs:text-5xl relative z-5 text-4xl leading-[1.1] font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            {/* Line 1: First 3 words */}
            <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="block">
              We Build Brands
            </AnimatedElement>
            
            {/* Line 2: Next 2 words */}
            <AnimatedElement element="span" offsetPx={20} delay={0.1} fadeDirection="left" className="block text-slate-800">
              That People
            </AnimatedElement>
            
            {/* Line 3: Last word */}
            <AnimatedElement element="span" offsetPx={20} delay={0.2} fadeDirection="left" className="block text-slate-700">
              Remember
            </AnimatedElement>
          </h1>

          {/* Description */}
          <AnimatedElement 
            element="p" 
            delay={0.4} 
            className="max-w-md text-base font-normal leading-relaxed text-slate-600 md:text-lg"
          >
            Design, strategy & storytelling for brands that want to look premium and communicate clearly.
          </AnimatedElement>

          <CallToActionButton />
        </div>
        {/* Don't remove this span */}
        <span data-stack-target-id className="xs:ml-[8%] [flex:1 _0_0px] xs:mt-20 mt-24 ml-[4%] h-1 w-2 sm:mt-11 xl:ml-[16%]" />
           <HeroScrollClick />

        {/* subtle background ellipse */}
        <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-indigo-100 via-transparent to-transparent blur-3xl md:block" />
      </div>
    </section>
  )
}