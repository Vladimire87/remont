import { motion } from "framer-motion";
import { Calculator as CalculatorIcon, Shield, Sparkles, ArrowRight, Star, Award, TrendingUp } from "lucide-react";
import { Container, Section, Button, Card } from "@/components/primitives";
import { fx } from "@/lib/motion";

const base = import.meta.env.BASE_URL;
const heroBackground = `${base}images/hero.jpg`;
const heroCardImage = `${base}images/hero-card.jpg`;

export default function Hero() {
  return (
    <Section id="top" className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pb-28 pt-40">
      {/* Animated background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBackground})` }} />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-transparent to-brand-600/10"
          animate={{
            background: [
              "radial-gradient(1200px 520px at 12% -12%, rgba(245,158,11,0.22), transparent)",
              "radial-gradient(1200px 520px at 20% 20%, rgba(245,158,11,0.18), transparent)",
              "radial-gradient(1200px 520px at 12% -12%, rgba(245,158,11,0.22), transparent)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Floating particles effect */}
      <motion.div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const initialX = Math.floor((i / 20) * 100);
          const initialY = (i * 37) % 100;
          const duration = 8 + (i % 5) * 2;
          const delay = i * 0.3;
          
          return (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-brand-400/30"
              initial={{
                x: `${initialX}%`,
                y: `${initialY}%`,
              }}
              animate={{
                y: [`${initialY}%`, `${(initialY + 80) % 100}%`],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "linear",
              }}
            />
          );
        })}
      </motion.div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...fx.fadeUp()}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-600/10 backdrop-blur-xl px-4 py-2 text-sm font-semibold text-white shadow-lg">
                <Sparkles className="h-4 w-4 animate-pulse text-brand-400" />
                Ремонт под ключ • Бизнес/Премиум
              </span>
            </motion.div>

            <motion.h1 
              {...fx.fadeUp(1)}
              className="mt-6 max-w-[26ch] bg-gradient-to-r from-white via-white to-brand-100 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent sm:text-7xl"
            >
              Премиальная отделка с гарантией результата
            </motion.h1>
            
            <motion.p 
              {...fx.fadeUp(2)}
              className="mt-6 max-w-[56ch] text-lg leading-relaxed text-slate-300"
            >
              Инженерные системы, дизайн-проект и чистая отделка от элитной команды специалистов. 
              Ежедневный контроль и прозрачная отчётность.
            </motion.p>

            {/* Stats */}
            <motion.div 
              {...fx.fadeUp(3)}
              className="mt-8 grid grid-cols-3 gap-3"
            >
              {[
                { icon: Star, label: "100+", sublabel: "Объектов" },
                { icon: Award, label: "3 года", sublabel: "Гарантия" },
                { icon: TrendingUp, label: "8–12", sublabel: "Недель" }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
                >
                  <div className="rounded-lg bg-brand-600/20 p-1.5">
                    <stat.icon className="h-4 w-4 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{stat.label}</div>
                    <div className="text-xs text-slate-400">{stat.sublabel}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              {...fx.fadeUp(4)}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button className="group bg-brand-600 hover:bg-brand-700 text-white shadow-xl shadow-brand-600/20 hover:shadow-2xl transition-all">
                <CalculatorIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Рассчитать стоимость
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm">
                <ArrowRight className="h-4 w-4" />
                Смотреть портфолио
              </Button>
            </motion.div>
          </motion.div>

          <motion.div {...fx.scaleIn} className="relative">
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 opacity-20 blur-2xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <Card className="border-border/80 overflow-hidden border bg-white/95 backdrop-blur-xl p-0 shadow-2xl">
              <div
                className="relative aspect-[4/3] bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url(${heroCardImage})` }}
              />
              <motion.div 
                className="absolute bottom-4 left-4 right-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-white/95 to-white/90 p-4 backdrop-blur-xl shadow-xl">
                  <div className="rounded-xl bg-brand-600/10 p-2">
                    <Shield className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-900">ЖК «Набережный»</div>
                    <div className="text-xs font-medium text-zinc-600">86 м² • 8 недель</div>
                  </div>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
