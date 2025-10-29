import { motion } from "framer-motion";
import { Container, Section, Card, Button } from "@/components/primitives";
import { fx } from "@/lib/motion";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <motion.div {...fx.fadeUp()} className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">Контакты</span>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Назначим аудит объекта и представим команду в течение одного дня.
            </h2>
            <p className="max-w-[60ch] text-sm leading-relaxed text-muted">
              Оставьте контакты — менеджер проекта перезвонит и расскажет, как организуем ремонт без задержек по
              срокам.
            </p>
            <Card className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium text-text">
                <Phone className="h-5 w-5 text-brand-600" />
                +7 (495) 123-45-67
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-text">
                <Mail className="h-5 w-5 text-brand-600" />
                hello@forma-renovation.ru
              </div>
            </Card>
          </motion.div>
          <motion.div {...fx.scaleIn}>
            <Card className="space-y-5">
              <form className="space-y-5">
                <label className="flex flex-col gap-2 text-xs font-medium text-zinc-700">
                  Имя
                  <input
                    type="text"
                    placeholder="Александр"
                  className="rounded-xl border border-border px-3 py-2 text-sm outline-none focus-visible:focus-ring"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-medium text-zinc-700">
                  Телефон
                  <input
                    type="tel"
                    placeholder="+7"
                  className="rounded-xl border border-border px-3 py-2 text-sm outline-none focus-visible:focus-ring"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-medium text-zinc-700">
                  Комментарий
                  <textarea
                    rows={3}
                    placeholder="Опишите объект и желаемые сроки"
                    className="rounded-xl border border-border px-3 py-2 text-sm outline-none focus-visible:focus-ring"
                  />
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit">Назначить звонок</Button>
                  <Button type="button" variant="outline">
                    Скачать презентацию
                  </Button>
                </div>
              </form>
              <p className="text-xs text-muted">
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
