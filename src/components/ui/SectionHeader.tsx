import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  center = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        center && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-widest mb-3",
            light
              ? "text-[var(--color-fleet-orange-light)]"
              : "text-[var(--color-fleet-orange)]"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-[var(--color-fleet-dark)]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light
              ? "text-gray-300"
              : "text-[var(--color-text-secondary)]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
