import { Container, Button } from "@/components/primitives";
import { cn } from "@/lib/cn";

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
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-white/80 backdrop-blur-md transition-colors",
        className
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
            FR
          </span>
          Forma Renovation
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-text">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden md:inline-flex">
            Заказать расчёт
          </Button>
          <Button className="md:hidden" aria-label="Открыть меню">
            Меню
          </Button>
        </div>
      </Container>
    </header>
  );
}
