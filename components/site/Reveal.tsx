"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** transition delay in ms (stagger) */
  delay?: number;
  as?: "div" | "section" | "li" | "span";
  id?: string;
}

/**
 * Subtle scroll reveal. Respects prefers-reduced-motion via CSS.
 * Content is visible by default; the hidden state is applied only
 * once the observer is attached, so no-JS still shows everything.
 */
export function Reveal({ children, className, delay = 0, as = "div", id }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      id={id}
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", !visible && "reveal-hidden", className)}
    >
      {children}
    </Tag>
  );
}
