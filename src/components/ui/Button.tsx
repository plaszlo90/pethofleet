import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-[var(--color-fleet-orange)] hover:bg-[var(--color-fleet-orange-dark)] text-white focus-visible:ring-[var(--color-fleet-orange)]":
            variant === "primary",
          "border-2 border-[var(--color-fleet-dark)] text-[var(--color-fleet-dark)] hover:bg-[var(--color-fleet-dark)] hover:text-white":
            variant === "outline",
          "text-[var(--color-fleet-dark)] hover:bg-[var(--color-fleet-gray)]":
            variant === "ghost",
        },
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
