import { motion } from "framer-motion";
import { Container, Section, Card, Button } from "@/components/primitives";
import { fx } from "@/lib/motion";
import { ShieldCheck, ClipboardCheck, Award, CheckCircle2, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Комфорт",
    price: "от 12 900 ₽",
    unit: "/ м²",
    description: "Черновые и чистовые работы, подбор материалов из утверждённого каталога.",
    perks: ["Отделка под ключ", "Смета за 48 часов", "10 выездов дизайнера"],
    featured: false,
    gradient: "from-blue-500 to-indigo-600",
    icon: ClipboardCheck
  },
  {
    name: "Премиум",
    price: "от 18 500 ₽",
    unit: "/ м²",
    description: "Индивидуальные решения, усиленный технадзор и расширенная гарантия.",
    perks: ["Индивидуальные узлы", "Авторский надзор", "Гарантия 3 года"],
    featured: true,
    gradient: "from-brand-600 to-brand-700",
    icon: ShieldCheck
  },
  {
    name: "Коммерция",
    price: "по запросу",
    unit: "",
    description: "Коммерческие помещения, соблюдение регламентов девелопера и ТБ.",
    perks: ["Работа в графике 24/7", "Организация подрядчиков", "Сервисное обслуживание"],
    featured: false,
    gradient: "from-purple-500 to-pink-600",
    icon: Award
  }
];

export default function Pricing() {
  return (
    <Section id="pricing" className="py-32 bg-gradient-to-b from-brand-50/50 to-white">
      <Container>
        <motion.div {...fx.fadeUp()} className="max-w-[72ch]">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-600">
            <Sparkles className="h-4 w-4" />
            Стоимость
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Прозрачные пакеты под разные задачи.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Каждый пакет включает договор с фиксированными сроками и контроль качества от инженера проекта.
          </p>
        </motion.div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.name} 
              {...fx.fadeUp(index)}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={`relative h-full overflow-hidden border-2 p-8 transition-all ${
                  tier.featured 
                    ? "border-brand-500 shadow-2xl scale-105" 
                    : "border-transparent hover:border-brand-200 hover:shadow-xl"
                }`}
              >
                {/* Featured badge */}
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-brand-600 to-brand-700 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                    Популярный выбор
                  </div>
                )}

                {/* Gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 transition-opacity duration-300 hover:opacity-5`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tier.gradient} opacity-20 blur-xl`} />
                  <div className={`relative rounded-2xl bg-gradient-to-br ${tier.gradient} p-4 w-16 h-16 flex items-center justify-center`}>
                    <tier.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="relative">
                  <div className={`flex items-center gap-2 text-sm font-bold ${tier.featured ? "text-brand-600" : "text-zinc-700"}`}>
                    <tier.icon className="h-5 w-5" />
                    {tier.name}
                  </div>
                  
                  <div className="mt-6">
                    <div className="text-4xl font-bold">{tier.price}</div>
                    {tier.unit && <span className="text-sm font-medium text-muted">{tier.unit}</span>}
                  </div>
                  
                  <p className="mt-4 text-sm leading-relaxed text-muted">{tier.description}</p>
                  
                  <div className="mt-8 space-y-3">
                    {tier.perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-3 text-sm">
                        <div className="flex-shrink-0 rounded-full bg-brand-100 p-1">
                          <CheckCircle2 className="h-4 w-4 text-brand-600" />
                        </div>
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={tier.featured ? "primary" : "outline"} 
                    className={`mt-8 w-full group ${
                      tier.featured 
                        ? "bg-brand-600 hover:bg-brand-700 text-white shadow-lg" 
                        : "hover:bg-brand-50"
                    }`}
                  >
                    Запросить смету
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
