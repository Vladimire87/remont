import { motion } from "framer-motion";
import { Container, Section, Card, Button } from "@/components/primitives";
import { fx } from "@/lib/motion";

export default function Calculator() {
  return (
    <Section id="calculator" className="py-24">
      <Container>
        <motion.div {...fx.fadeUp()} className="max-w-[72ch]">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">Расчёт сметы</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Получите ориентировочную смету за 1 минуту.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Введите параметры помещения — мы мгновенно пришлём расчёт и предложим экспертную консультацию.
          </p>
        </motion.div>
        <motion.div {...fx.scaleIn} className="mt-12">
          <Card className="space-y-6">
            <form className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs font-medium text-zinc-700">
                Тип объекта
                <select className="rounded-xl border border-border px-3 py-2 text-sm outline-none focus-visible:focus-ring">
                  <option>Квартира</option>
                  <option>Апартаменты</option>
                  <option>Коммерция</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-xs font-medium text-zinc-700">
                Площадь, м²
                <input
                  type="number"
                  min={1}
                  placeholder="86"
                  className="rounded-xl border border-border px-3 py-2 text-sm outline-none focus-visible:focus-ring"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs font-medium text-zinc-700 sm:col-span-2">
                Степень готовности
                <textarea
                  rows={3}
                  placeholder="Черновая отделка, разводка коммуникаций есть"
                  className="rounded-xl border border-border px-3 py-2 text-sm outline-none focus-visible:focus-ring"
                />
              </label>
              <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
                <Button type="submit">Рассчитать смету</Button>
                <Button type="button" variant="outline">
                  Скачать шаблон чек-листа
                </Button>
              </div>
            </form>
            <p className="text-xs text-muted">
              Отправляя форму, вы соглашаетесь на обработку персональных данных и подтверждаете, что ознакомлены с
              политикой конфиденциальности.
            </p>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
