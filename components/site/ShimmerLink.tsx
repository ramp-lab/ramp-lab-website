import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Link version of Magic UI's ShimmerButton (components/ui/shimmer-button.tsx).
 * Same spark + highlight layers, rendered as a Next.js <Link> so navigation
 * CTAs stay real anchors instead of <button> inside <a>.
 */
export function ShimmerLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": "#a7f3d0",
          "--radius": "999px",
          "--speed": "3s",
          "--cut": "0.06em",
          "--bg": "linear-gradient(100deg, #0f3d2e, #0b3440)",
        } as CSSProperties
      }
      className={cn(
        "group relative z-0 inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap border border-white/10 px-7 py-3.5 text-base font-medium text-white [background:var(--bg)] [border-radius:var(--radius)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className
      )}
    >
      <span aria-hidden="true" className="@container-[size] absolute inset-0 -z-30 overflow-visible blur-[2px]">
        <span className="animate-shimmer-slide absolute inset-0 aspect-[1] h-[100cqh] rounded-none [mask:none]">
          <span className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </span>
      </span>
      {children}
      <span
        aria-hidden="true"
        className="absolute inset-0 size-full rounded-full shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]"
      />
      <span aria-hidden="true" className="absolute inset-(--cut) -z-20 [background:var(--bg)] [border-radius:var(--radius)]" />
    </Link>
  );
}
