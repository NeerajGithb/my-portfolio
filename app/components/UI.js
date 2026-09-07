import Link from "next/link";

/**
 * Technical Button Component
 * Variants: primary, secondary, outline, ghost
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  external = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950 shadow-sm border border-neutral-900",
    secondary:
      "bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-100 hover:border-neutral-400 active:bg-neutral-200 shadow-sm",
    outline:
      "bg-transparent text-neutral-800 border border-neutral-300 hover:bg-neutral-100 active:bg-neutral-200",
    brand:
      "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-sm border border-brand-700",
    ghost:
      "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-sm gap-1.5",
    md: "px-4 py-2 text-sm rounded-sm gap-2",
    lg: "px-5 py-2.5 text-base rounded-sm gap-2.5",
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

/**
 * Technical Card Component
 */
export function Card({
  children,
  className = "",
  hover = false,
  bordered = true,
  ...props
}) {
  const baseStyles = "bg-white rounded-sm";
  const borderStyles = bordered ? "border border-neutral-200" : "";
  const hoverStyles = hover
    ? "transition-all duration-200 hover:border-neutral-300 hover:shadow-card hover:-translate-y-0.5"
    : "";

  return (
    <div className={`${baseStyles} ${borderStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}

/**
 * Technology Pill / Chip
 */
export function TechPill({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-neutral-100 text-neutral-700 border-neutral-200",
    brand: "bg-brand-50 text-brand-700 border-brand-200 font-medium",
    emerald: "bg-emerald-50 text-emerald-800 border-emerald-200",
    mono: "bg-neutral-50 text-neutral-800 border-neutral-200 font-mono text-[11px]",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs rounded-sm border ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * Metric Badge for Traction / Performance
 */
export function MetricBadge({ label, value, subtext, className = "" }) {
  return (
    <div className={`p-4 bg-white border border-neutral-200 rounded-sm ${className}`}>
      <div className="font-mono text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
        {value}
      </div>
      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mt-1">
        {label}
      </div>
      {subtext && (
        <div className="text-xs text-neutral-600 mt-0.5">{subtext}</div>
      )}
    </div>
  );
}

/**
 * Section Header
 */
export function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  className = "",
}) {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? "text-center" : ""} ${className}`}>
      {label && (
        <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 mb-2">
          {label}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-neutral-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/**
 * Section Container with consistent spacing
 */
export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      {children}
    </section>
  );
}

/**
 * Responsive Page Container
 */
export function Container({ children, className = "" }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
