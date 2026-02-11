import Link from "next/link";

/**
 * Professional Button Component
 * Variants: primary, secondary, outline
 */
export function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    className = "",
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-neutral-900 text-white hover:bg-neutral-800",
        secondary: "bg-white text-neutral-900 border border-neutral-900 hover:bg-neutral-50",
        outline: "bg-transparent text-neutral-900 border border-neutral-300 hover:bg-neutral-50",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm rounded-sm",
        md: "px-5 py-2.5 text-sm rounded-sm",
        lg: "px-6 py-3 text-base rounded-sm",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
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
 * Professional Card Component
 */
export function Card({ children, className = "", hover = false }) {
    const baseStyles = "bg-white rounded-sm border border-neutral-200";
    const hoverStyles = hover ? "hover:shadow-md transition-shadow" : "";

    return (
        <div className={`${baseStyles} ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
}

/**
 * Section Container with consistent spacing
 */
export function Section({ children, className = "" }) {
    return (
        <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
            {children}
        </section>
    );
}

/**
 * Container with max-width and padding
 */
export function Container({ children, className = "" }) {
    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
}
