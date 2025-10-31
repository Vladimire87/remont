import { motion } from "framer-motion";
import { Container, Section, Card } from "@/components/primitives";
import { fx } from "@/lib/motion";
import { HelpCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Как фиксируете сроки и бюджет?",
    a: "Все этапы привязываем к календарю в договоре, ведём ежедневные отчёты и фотофиксацию. Любые изменения оформления согласуются допсоглашением до начала работ.",
    icon: CheckCircle2
  },
  {
    q: "Работаете с дизайнером клиента?",
    a: "Да. Подключаем вашего дизайнера на шеринги, предоставляем рабочие чертежи и спецификации. При необходимости возьмём авторский надзор на себя.",
    icon: CheckCircle2
  },
  {
    q: "Какая гарантия на работы?",
    a: "На инженерные решения и отделку действует гарантия 3 года. В течение срока бесплатно устраняем дефекты, которые попадают в гарантийный регламент.",
    icon: CheckCircle2
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="py-32 bg-gradient-to-b from-white to-slate-50">
      <Container>
        <motion.div {...fx.fadeUp()} className="max-w-[72ch]">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-600">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Ответы на ключевые вопросы клиентов.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Не нашли ответ — напишите менеджеру, он подключит нужного эксперта в течение часа.
          </p>
        </motion.div>
        
        <div className="mt-16 space-y-4">
          {faqs.map((item, index) => (
            <motion.div 
              key={item.q} 
              {...fx.fadeUp(index)}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="cursor-pointer"
            >
              <Card className="group relative overflow-hidden border-2 border-transparent transition-all hover:border-brand-200 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="rounded-xl bg-brand-100 p-3">
                      <item.icon className="h-5 w-5 text-brand-600" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-bold">{item.q}</h3>
                    <motion.p
                      initial={false}
                      animate={{
                        maxHeight: openIndex === index ? "500px" : "0",
                        opacity: openIndex === index ? 1 : 0,
                        marginTop: openIndex === index ? "12px" : "0"
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-base leading-relaxed text-muted overflow-hidden"
                    >
                      {item.a}
                    </motion.p>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <div className="rounded-full bg-brand-100 p-1.5">
                      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
