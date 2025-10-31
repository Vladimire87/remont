import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BaseProps = {
  className?: string;
  children: ReactNode;
};

export const Container = ({ className = "", children }: BaseProps) => (
  <div className={cn("mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8", className)}>{children}</div>
);

type SectionProps = BaseProps & { id?: string };
export const Section = ({ id, className = "", children }: SectionProps) => (
  <section id={id} className={cn("scroll-mt-24", className)}>
    {children}
  </section>
);

export const Card = ({ className = "", children }: BaseProps) => (
  <div className={cn("rounded-2xl border border-border bg-white p-6 shadow", className)}>{children}</div>
);

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" | "outline" };
export const Button = ({ className = "", variant = "primary", ...props }: BtnProps) => {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2";
  const variants = {
    primary: "bg-brand-600 text-white shadow-lg hover:bg-brand-700 hover:shadow-xl",
    ghost: "bg-white border border-border text-text hover:bg-surface hover:shadow-md",
    outline: "bg-transparent border border-border text-text hover:bg-white hover:shadow-md"
  } as const;
  return <button className={cn(base, variants[variant], className)} {...props} />;
};
