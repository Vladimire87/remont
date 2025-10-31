import { motion } from "framer-motion";
import { Container, Section, Card } from "@/components/primitives";
import { fx } from "@/lib/motion";
import { Wrench, FileCheck, Palette, TrendingUp, Zap, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Wrench,
    title: "Инженерные работы",
    text: "Монтаж инженерии без скрытых узлов и с полной фотофиксацией.",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Разводка коммуникаций", "Системы отопления", "Электрика"]
  },
  {
    icon: FileCheck,
    title: "Дизайн и смета",
    text: "Визуализации, ведомости отделки, точные графики и прозрачные сметы.",
    gradient: "from-purple-500 to-pink-500",
    features: ["3D визуализация", "Технические чертежи", "Детальная смета"]
  },
  {
    icon: Palette,
    title: "Чистовая отделка",
    text: "Финишные покрытия и комплектация объектных материалов под ключ.",
    gradient: "from-orange-500 to-amber-500",
    features: ["Материалы премиум", "Контроль качества", "Клининг"]
  }
];

export default function Services() {
  return (
    <Section id="services" className="py-32 bg-gradient-to-b from-bg to-slate-50">
      <Container>
        <div className="max-w-[72ch]">
          <motion.span {...fx.fadeUp()} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-600">
            <Zap className="h-4 w-4" />
            Формула сервиса
          </motion.span>
          <motion.h2 {...fx.fadeUp(1)} className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Команда, которая закрывает весь цикл ремонта бизнес-класса.
          </motion.h2>
          <motion.p {...fx.fadeUp(2)} className="mt-6 text-base leading-relaxed text-muted">
            От проектирования до сдачи объекта с гарантией три года и SLA на коммуникации.
          </motion.p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text, gradient, features }, index) => (
            <motion.div 
              key={title} 
              {...fx.fadeUp(index)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group relative h-full overflow-hidden border-2 border-transparent bg-white p-8 transition-all hover:border-brand-200 hover:shadow-xl">
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />
                
                {/* Icon with gradient */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`} />
                  <div className={`relative rounded-2xl bg-gradient-to-br ${gradient} p-4 w-14 h-14 flex items-center justify-center`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-sm leading-relaxed text-muted mb-6">{text}</p>
                
                {/* Features */}
                <div className="space-y-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Hover badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4"
                >
                  <ShieldCheck className="h-5 w-5 text-brand-600" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <motion.div 
          {...fx.fadeUp(4)}
          className="mt-20 rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-12 shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-brand-600" />
                <span className="text-sm font-bold text-brand-600 uppercase tracking-wider">Преимущество</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Полный цикл работ без переплат</h3>
              <p className="text-muted">От дизайна до финального клининга — одна команда, один договор</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600">15+</div>
                <div className="text-xs text-muted">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600">3 года</div>
                <div className="text-xs text-muted">Гарантия</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
