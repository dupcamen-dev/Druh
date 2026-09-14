import type { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<"span"> {
  /** How many times the gradient stretches beyond its container */
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#ebe859",
  colorTo = "#59eb59",
  ...props
}: AnimatedGradientTextProps) {
  return (
    <span
      style={
        {
          backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorTo}, ${colorFrom})`,
          backgroundSize: `${speed * 300}% 100%`,
          "--duration": `${3 / speed}s`,
        } as CSSProperties
      }
      className={cn("animated-gradient-text", className)}
      {...props}
    >
      {children}
    </span>
  );
}