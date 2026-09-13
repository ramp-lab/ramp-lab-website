"use client";

interface LogoProps {
  className?: string;
  /** "light" = for dark backgrounds, "dark" = for light backgrounds */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function RampLabLogo({
  className = "",
  variant = "light",
  size = "md",
}: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[#0a0a0a]";
  const accentColor = "#6ee7b7";

  const sizeMap = {
    sm: { mark: 24, text: "text-base",  gap: "gap-2"   },
    md: { mark: 30, text: "text-xl",    gap: "gap-2.5" },
    lg: { mark: 36, text: "text-2xl",   gap: "gap-3"   },
  };
  const s = sizeMap[size];

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      {/* Mark — RampLab brand image */}
      <img
        src="/images/ramp-lab-logo.png"
        alt="RampLab logo"
        width={s.mark}
        height={s.mark}
        className="shrink-0 object-contain"
        style={{ width: s.mark, height: s.mark }}
      />

      {/* Wordmark */}
      <span className={`${s.text} font-bold tracking-tight leading-none ${textColor}`}>
        Ramp<span style={{ color: accentColor }}>Lab</span>
      </span>
    </span>
  );
}
