import { motion } from "framer-motion";
import { Container, Section, Card } from "@/components/primitives";
import { fx } from "@/lib/motion";

const faqs = [
  {
    q: "Как фиксируете сроки и бюджет?",
    a: "Все этапы привязываем к календарю в договоре, ведём ежедневные отчёты и фотофиксацию. Любые изменения оформления согласуются допсоглашением до начала работ."
  },
  {
    q: "Работаете с дизайнером клиента?",
    a: "Да. Подключаем вашего дизайнера на шеринги, предоставляем рабочие чертежи и спецификации. При необходимости возьмём авторский надзор на себя."
  },
  {
    q: "Какая гарантия на работы?",
    a: "На инженерные решения и отделку действует гарантия 3 года. В течение срока бесплатно устраняем дефекты, которые попадают в гарантийный регламент."
  }
];

export default function FAQ() {
  return (
    <Section id="faq" className="bg-surface py-24">
      <Container>
        <motion.div {...fx.fadeUp()} className="max-w-[72ch]">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">FAQ</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ответы на ключевые вопросы клиентов.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Не нашли ответ — напишите менеджеру, он подключит нужного эксперта в течение часа.
          </p>
        </motion.div>
        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => (
            <motion.div key={item.q} {...fx.fadeUp(index)}>
              <Card className="space-y-3">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.a}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
