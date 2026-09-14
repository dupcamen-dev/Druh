import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  /** Decorative background node (image, gradient, emoji grid…) */
  background?: ReactNode;
  icon?: ReactNode;
  description: string;
  href?: string;
  cta?: string;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1A1715]/10 bg-white p-5 shadow-[0_2px_4px_rgba(26,23,21,0.04),0_12px_24px_rgba(26,23,21,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(26,23,21,0.12)]",
        className,
      )}
      {...props}
    >
      {/* background layer (clipped to the card) */}
      <div className="pointer-events-none absolute inset-0">{background}</div>

      {/* content */}
      <div className="relative z-10 mt-auto flex flex-col gap-1.5">
        {icon && <div className="text-3xl leading-none">{icon}</div>}
        <h3 className="font-display font-bold text-[#1A1715] text-[17px]">
          {name}
        </h3>
        <p className="text-[13px] leading-relaxed text-[#555]">{description}</p>
      </div>

      {href && cta && (
        <a
          href={href}
          className="relative z-10 mt-4 inline-flex items-center gap-1.5 self-start text-[13px] font-bold text-[#2596be] underline-anim"
        >
          {cta}
          <svg
            className="transition-transform duration-300 group-hover:translate-x-1"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      )}
    </div>
  );
}