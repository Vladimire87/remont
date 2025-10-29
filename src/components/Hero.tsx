import { motion } from "framer-motion";
import { Calculator as CalculatorIcon, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { Container, Section, Button, Card } from "@/components/primitives";
import { fx } from "@/lib/motion";

export default function Hero() {
  return (
    <Section id="top" className="relative flex min-h-[720px] flex-col justify-center overflow-hidden bg-bg pb-28 pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/35 to-transparent" />
        <div className="absolute inset-0 [background:radial-gradient(1200px_520px_at_12%_-12%,rgba(245,158,11,0.22),transparent),radial-gradient(900px_520px_at_108%_-8%,rgba(245,158,11,0.16),transparent)]" />
      </div>
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...fx.fadeUp()}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-medium text-muted shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-brand-600" />
              Ремонт под ключ • Бизнес/Премиум
            </span>
            <h1 className="mt-4 max-w-[22ch] text-4xl font-semibold tracking-tight text-text sm:text-6xl">
              Безупречные узлы. Срок по договору. Гарантия 3 года.
            </h1>
            <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-muted">
              Инженерия, отделка и дизайн с прозрачной сметой и ежедневными отчётами.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button>
                <CalculatorIcon className="h-4 w-4" />
                Рассчитать
              </Button>
              <Button variant="ghost">
                <ArrowRight className="h-4 w-4" />
                Портфолио
              </Button>
            </div>
          </motion.div>

          <motion.div {...fx.scaleIn} className="relative">
            <Card className="border-border/80 overflow-hidden border bg-white/90 p-0 shadow-lg backdrop-blur">
              <div className="relative aspect-[4/3] bg-[url('/images/hero-card.jpg')] bg-cover bg-center" />
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-text shadow-sm backdrop-blur">
                <ShieldCheck className="h-4 w-4 text-brand-600" /> ЖК «Набережный», 86 м², 8 недель
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
