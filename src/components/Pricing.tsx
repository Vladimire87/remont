import { motion } from "framer-motion";
import { Container, Section, Card, Button } from "@/components/primitives";
import { fx } from "@/lib/motion";
import { ShieldCheck, ClipboardCheck } from "lucide-react";

const tiers = [
  {
    name: "Комфорт",
    price: "от 12 900 ₽ / м²",
    description: "Черновые и чистовые работы, подбор материалов из утверждённого каталога.",
    perks: ["Отделка под ключ", "Смета за 48 часов", "10 выездов дизайнера"],
    featured: false
  },
  {
    name: "Премиум",
    price: "от 18 500 ₽ / м²",
    description: "Индивидуальные решения, усиленный технадзор и расширенная гарантия.",
    perks: ["Индивидуальные узлы", "Авторский надзор", "Гарантия 3 года"],
    featured: true
  },
  {
    name: "Коммерция",
    price: "по запросу",
    description: "Коммерческие помещения, соблюдение регламентов девелопера и ТБ.",
    perks: ["Работа в графике 24/7", "Организация подрядчиков", "Сервисное обслуживание"],
    featured: false
  }
];

export default function Pricing() {
  return (
    <Section id="pricing" className="py-24">
      <Container>
        <motion.div {...fx.fadeUp()} className="max-w-[72ch]">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">Стоимость</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Прозрачные пакеты под разные задачи.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Каждый пакет включает договор с фиксированными сроками и контроль качества от инженера проекта.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div key={tier.name} {...fx.fadeUp(index)}>
              <Card
                className={`h-full p-8 ${tier.featured ? "border-brand-500 shadow-lg" : ""}`}
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-600">
                  {tier.featured ? <ShieldCheck className="h-5 w-5" /> : <ClipboardCheck className="h-5 w-5" />}
                  {tier.name}
                </div>
                <p className="mt-4 text-3xl font-semibold">{tier.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{tier.description}</p>
                <ul className="mt-6 space-y-2 text-sm leading-relaxed text-text">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-sm">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-[11px] font-semibold text-brand-600">
                        •
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <Button variant={tier.featured ? "primary" : "outline"} className="mt-8 w-full">
                  Запросить смету
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
