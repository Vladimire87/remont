import { Container, Button } from "@/components/primitives";
import { cn } from "@/lib/cn";
import { CalculatorIcon } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#process", label: "Процесс" },
  { href: "#pricing", label: "Стоимость" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакты" }
];

type NavProps = {
  className?: string;
};

export default function Nav({ className = "" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-all duration-300",
        scrolled 
          ? "border-border/70 bg-white/95 backdrop-blur-xl shadow-sm" 
          : "border-transparent bg-white/80 backdrop-blur-md",
        className
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-bold tracking-tight text-lg hover:opacity-80 transition-opacity">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-lg shadow-brand-600/20">
            FR
          </span>
          <span className="hidden sm:inline">Forma Renovation</span>
        </a>
        <nav className="hidden items-center gap-2 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="px-3 py-2 rounded-lg transition-colors hover:bg-brand-50 hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden md:inline-flex">
            Заказать расчёт
          </Button>
          <Button className="group bg-brand-600 hover:bg-brand-700 text-white shadow-lg md:hidden" aria-label="Открыть меню">
            <CalculatorIcon className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </header>
  );
}
