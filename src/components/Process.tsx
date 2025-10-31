import { motion } from "framer-motion";
import { Container, Section, Card } from "@/components/primitives";
import { fx } from "@/lib/motion";
import { FileText, Hammer, Palette, CheckCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Дизайн и документация",
    description: "Аудит объекта, техзадание, планы, 3D-визуализации, смета с фиксированными сроками.",
    gradient: "from-blue-500 to-indigo-600",
    features: ["Техническое задание", "3D визуализация", "Фиксированная смета"]
  },
  {
    icon: Hammer,
    title: "Строительно-монтажный этап",
    description: "Черновые работы, инженерия, приёмка этапов технадзором и ежедневные отчёты в чат-боте.",
    gradient: "from-purple-500 to-pink-600",
    features: ["Ежедневные отчёты", "Технический надзор", "Фотофиксация работ"]
  },
  {
    icon: Palette,
    title: "Отделка и сдача",
    description: "Чистовая отделка, комплектация, финишный клининг, подготовка гарантийного пакета.",
    gradient: "from-orange-500 to-amber-600",
    features: ["Премиум материалы", "Клининг", "Гарантийный пакет"]
  }
];

export default function Process() {
  return (
    <Section id="process" className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <motion.div {...fx.fadeUp()} className="max-w-[72ch]">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-600">
            <TrendingUp className="h-4 w-4" />
            Процесс
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Три этапа, прозрачные контрольные точки.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Фиксируем ответственность на каждом шаге и сопровождаем объект до гарантии.
          </p>
        </motion.div>
        
        <div className="mt-16 space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              {...fx.fadeUp(index)}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group relative overflow-hidden border-2 border-transparent transition-all hover:border-brand-200 hover:shadow-xl">
                <div className="grid gap-8 md:grid-cols-[auto_1fr] lg:grid-cols-[200px_1fr_300px]">
                  {/* Number badge */}
                  <div className="flex items-start md:items-center">
                    <div className={`relative rounded-2xl bg-gradient-to-br ${step.gradient} p-6 w-24 h-24 flex items-center justify-center`}>
                      <step.icon className="h-12 w-12 text-white" />
                      <div className="absolute -top-2 -right-2 rounded-full bg-brand-600 text-white text-lg font-bold w-10 h-10 flex items-center justify-center border-4 border-white">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-base leading-relaxed text-muted">{step.description}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="flex items-center md:justify-end">
                    <div className="space-y-2">
                      {step.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm font-medium text-muted">
                          <CheckCircle className="h-4 w-4 text-brand-600 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
