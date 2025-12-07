import Image, { StaticImageData } from "next/image"
import clsx from "clsx"

export const Card = ({
  src,
  alt,
  color,
  type = "",
  reveal = true,
}: {
  src: StaticImageData
  alt: string
  color?: string
  type?: string
  reveal?: boolean
  text?: string
}) => {
  return (
    <div
      className={`group relative h-full w-full overflow-hidden rounded-2xl`}
    >
      {/* Image Container - handles the zoom effect */}
      <div className="h-full w-full duration-500 group-hover:scale-105">
        <Image 
          className="h-full w-full bg-gray-200 object-cover" 
          src={src} 
          alt={alt} 
          priority 
          decoding="async" 
        />
      </div>

      {/* Overlay Content */}
      <span
        className={clsx(
          "absolute inset-0 z-10 flex flex-col justify-between p-4 transition-opacity duration-400",
          reveal ? "opacity-100" : "opacity-0" 
        )}
        style={
          { 
            // Gradient ensures text readability
            background: `linear-gradient(to top, ${color || '#000000'}cc 0%, transparent 60%)` 
          } as React.CSSProperties
        }
      >
        {/* Top Section: Type Badge */}
        <div className="flex justify-start">
          <span className="w-fit rounded-full border border-white/20 bg-gray-900/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm shadow-sm">
            {type}
          </span>
        </div>

        {/* Bottom Section: Title & Circular Arrow Button */}
        <div className="flex items-end justify-between text-white">
          <span className="text-xl font-medium tracking-tight shadow-black/20 drop-shadow-md">
            {alt.split(" ")[0]}
          </span>
          
          {/* Circular Arrow Icon */}
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
            </svg>
          </span>
        </div>
      </span>
    </div>
  )
}