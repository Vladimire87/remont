import { motion } from "framer-motion";
import { Container, Section, Card, Button } from "@/components/primitives";
import { fx } from "@/lib/motion";
import { Phone, Mail, MapPin, MessageCircle, Download, Send, CheckCircle } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (495) 123-45-67",
    href: "tel:+74951234567"
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@forma-renovation.ru",
    href: "mailto:hello@forma-renovation.ru"
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Москва, ул. Арбат, д. 15",
    href: "#"
  }
];

export default function Contact() {
  return (
    <Section id="contact" className="py-32 bg-gradient-to-br from-brand-50 to-white">
      <Container>
        <motion.div {...fx.fadeUp()} className="max-w-[72ch] mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-600">
            <MessageCircle className="h-4 w-4" />
            Контакты
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Назначим аудит объекта и представим команду в течение одного дня.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Оставьте контакты — менеджер проекта перезвонит и расскажет, как организуем ремонт без задержек по
            срокам.
          </p>
        </motion.div>
        
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Contact Info */}
          <motion.div {...fx.fadeUp()} className="space-y-4">
            <Card className="border-2 border-brand-100 bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="group flex items-start gap-4 rounded-xl border-2 border-transparent bg-brand-50/50 p-4 transition-all hover:border-brand-200 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex-shrink-0 rounded-xl bg-brand-600 p-3 group-hover:scale-110 transition-transform">
                      <contact.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted mb-1">{contact.label}</div>
                      <div className="text-base font-medium">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
            
            {/* Additional info */}
            <Card className="border-2 border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-brand-600/10 p-2">
                  <CheckCircle className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Рабочие часы</h4>
                  <p className="text-sm text-muted">Пн-Вс: 9:00 - 21:00</p>
                </div>
              </div>
            </Card>
          </motion.div>
          
          {/* Form */}
          <motion.div {...fx.scaleIn}>
            <Card className="border-2 border-brand-100 bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Заполните форму</h3>
              <form className="space-y-5">
                <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                  Имя
                  <input
                    type="text"
                    placeholder="Александр"
                    className="rounded-xl border-2 border-border px-4 py-3 text-base outline-none transition-colors focus-visible:border-brand-600 focus-visible:focus-ring hover:border-brand-200"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                  Телефон
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="rounded-xl border-2 border-border px-4 py-3 text-base outline-none transition-colors focus-visible:border-brand-600 focus-visible:focus-ring hover:border-brand-200"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                  Комментарий
                  <textarea
                    rows={4}
                    placeholder="Опишите объект и желаемые сроки"
                    className="rounded-xl border-2 border-border px-4 py-3 text-base outline-none transition-colors focus-visible:border-brand-600 focus-visible:focus-ring hover:border-brand-200 resize-none"
                  />
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" className="group bg-brand-600 hover:bg-brand-700 text-white shadow-lg">
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Назначить звонок
                  </Button>
                  <Button type="button" variant="outline" className="group">
                    <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                    Скачать презентацию
                  </Button>
                </div>
              </form>
              <p className="mt-6 text-xs text-muted">
                Обработку персональных данных выполняем согласно ФЗ-152. Для аудита объекта потребуется доступ в
                рабочие зоны.
              </p>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
