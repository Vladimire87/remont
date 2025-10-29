import { motion } from "framer-motion";
import { Container, Section } from "@/components/primitives";
import { fx } from "@/lib/motion";

const steps = [
  {
    title: "Дизайн и документация",
    description: "Аудит объекта, техзадание, планы, 3D-визуализации, смета с фиксированными сроками."
  },
  {
    title: "Строительно-монтажный этап",
    description: "Черновые работы, инженерия, приёмка этапов технадзором и ежедневные отчёты в чат-боте."
  },
  {
    title: "Отделка и сдача",
    description: "Чистовая отделка, комплектация, финишный клининг, подготовка гарантийного пакета."
  }
];

export default function Process() {
  return (
    <Section id="process" className="bg-surface py-24">
      <Container>
        <motion.div {...fx.fadeUp()} className="max-w-[72ch]">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">Процесс</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Три этапа, прозрачные контрольные точки.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Фиксируем ответственность на каждом шаге и сопровождаем объект до гарантии.
          </p>
        </motion.div>
        <div className="mt-12 divide-y divide-zinc-100 rounded-2xl border border-border bg-white">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              {...fx.fadeUp(index)}
              className="flex flex-col gap-4 px-6 py-8 md:flex-row md:items-start md:justify-between"
            >
              <div>
                <div className="text-sm font-semibold text-brand-600">0{index + 1}</div>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              </div>
              <p className="max-w-[48ch] text-sm leading-relaxed text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
