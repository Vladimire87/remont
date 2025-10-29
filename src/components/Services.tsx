import { motion } from "framer-motion";
import { Container, Section, Card } from "@/components/primitives";
import { fx } from "@/lib/motion";
import { Hammer, Ruler, Paintbrush } from "lucide-react";

const items = [
  {
    icon: Hammer,
    title: "Инженерные работы",
    text: "Монтаж инженерии без скрытых узлов и с полной фотофиксацией."
  },
  {
    icon: Ruler,
    title: "Дизайн и смета",
    text: "Визуализации, ведомости отделки, точные графики и прозрачные сметы."
  },
  {
    icon: Paintbrush,
    title: "Чистовая отделка",
    text: "Финишные покрытия и комплектация объектных материалов под ключ."
  }
];

export default function Services() {
  return (
    <Section id="services" className="py-24">
      <Container>
        <div className="max-w-[72ch]">
          <motion.span {...fx.fadeUp()} className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Формула сервиса
          </motion.span>
          <motion.h2 {...fx.fadeUp(1)} className="mt-3 text-3xl font-semibold leading-[var(--leading-tight)] sm:text-4xl">
            Команда, которая закрывает весь цикл ремонта бизнес-класса.
          </motion.h2>
          <motion.p {...fx.fadeUp(2)} className="mt-4 text-sm leading-relaxed text-muted">
            От проектирования до сдачи объекта с гарантией три года и SLA на коммуникации.
          </motion.p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, index) => (
            <motion.div key={title} {...fx.fadeUp(index)}>
              <Card className="h-full space-y-3">
                <Icon className="h-5 w-5 text-brand-600" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
