import { motion, AnimatePresence } from "framer-motion";
import { Container, Section, Card, Button } from "@/components/primitives";
import { fx } from "@/lib/motion";
import { Calculator as CalculatorIcon, Zap, Download, CheckCircle, Coins, TrendingUp, Home, Building2 } from "lucide-react";
import { useState, useEffect } from "react";

type PropertyType = "Квартира" | "Апартаменты" | "Коммерция";
type FinishLevel = "Без ремонта" | "Черновая отделка" | "Чистовая" | "Элитная отделка";

const BASE_PRICES = {
  "Квартира": { min: 12900, max: 18500 },
  "Апартаменты": { min: 14000, max: 20000 },
  "Коммерция": { min: 15000, max: 25000 }
};

const FINISH_MULTIPLIERS = {
  "Без ремонта": { min: 1.0, max: 1.0 },
  "Черновая отделка": { min: 0.5, max: 0.7 },
  "Чистовая": { min: 0.8, max: 0.9 },
  "Элитная отделка": { min: 1.1, max: 1.3 }
};

const ROOM_COSTS = {
  1: 150000,
  2: 200000,
  3: 250000,
  4: 300000,
  5: 350000,
  "6+": 400000
};

export default function Calculator() {
  const [propertyType, setPropertyType] = useState<PropertyType>("Квартира");
  const [area, setArea] = useState("");
  const [finishLevel, setFinishLevel] = useState<FinishLevel>("Черновая отделка");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("1");
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  useEffect(() => {
    const calculatePrice = () => {
      const areaNum = parseFloat(area);
      if (!areaNum || areaNum < 1) return null;

      const base = BASE_PRICES[propertyType];
      const multiplier = FINISH_MULTIPLIERS[finishLevel];
      
      let minPrice = base.min * areaNum * multiplier.min;
      let maxPrice = base.max * areaNum * multiplier.max;

      // Add room cost
      const roomsNum = parseInt(rooms);
      if (roomsNum > 0) {
        const roomMultiplier = roomsNum >= 6 ? ROOM_COSTS["6+"] : ROOM_COSTS[roomsNum as keyof typeof ROOM_COSTS] || 0;
        minPrice += roomMultiplier;
        maxPrice += roomMultiplier;
      }

      // Add bathroom cost
      const bathroomNum = parseInt(bathrooms);
      if (bathroomNum > 1) {
        const bathroomCost = (bathroomNum - 1) * 80000;
        minPrice += bathroomCost;
        maxPrice += bathroomCost;
      }

      return { min: Math.round(minPrice), max: Math.round(maxPrice) };
    };

    if (area) {
      const price = calculatePrice();
      setResult(price);
    }
  }, [propertyType, area, finishLevel, rooms, bathrooms]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const calculatePrice = () => {
      const areaNum = parseFloat(area);
      if (!areaNum || areaNum < 1) return null;

      const base = BASE_PRICES[propertyType];
      const multiplier = FINISH_MULTIPLIERS[finishLevel];
      
      let minPrice = base.min * areaNum * multiplier.min;
      let maxPrice = base.max * areaNum * multiplier.max;

      // Add room cost
      const roomsNum = parseInt(rooms);
      if (roomsNum > 0) {
        const roomMultiplier = roomsNum >= 6 ? ROOM_COSTS["6+"] : ROOM_COSTS[roomsNum as keyof typeof ROOM_COSTS] || 0;
        minPrice += roomMultiplier;
        maxPrice += roomMultiplier;
      }

      // Add bathroom cost
      const bathroomNum = parseInt(bathrooms);
      if (bathroomNum > 1) {
        const bathroomCost = (bathroomNum - 1) * 80000;
        minPrice += bathroomCost;
        maxPrice += bathroomCost;
      }

      return { min: Math.round(minPrice), max: Math.round(maxPrice) };
    };

    const price = calculatePrice();
    if (price) {
      setResult(price);
    }
  };

  const formatPrice = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

  const PropertyIcon = propertyType === "Коммерция" ? Building2 : Home;

  return (
    <Section id="calculator" className="py-32 bg-gradient-to-b from-white to-brand-50/30">
      <Container>
        <motion.div {...fx.fadeUp()} className="max-w-[72ch]">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-600">
            <CalculatorIcon className="h-4 w-4" />
            Расчёт сметы
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Получите ориентировочную смету за 1 минуту.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Введите параметры помещения — мы мгновенно пришлём расчёт и предложим экспертную консультацию.
          </p>
        </motion.div>
        
        <motion.div {...fx.scaleIn} className="mt-16">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* Form */}
            <Card className="border-2 border-brand-100 bg-white p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                    Тип объекта
                    <select 
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value as PropertyType)}
                      className="mt-1 rounded-xl border-2 border-border px-4 py-3 text-sm outline-none transition-colors focus-visible:border-brand-600 focus-visible:focus-ring hover:border-brand-200"
                    >
                      <option>Квартира</option>
                      <option>Апартаменты</option>
                      <option>Коммерция</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                    Площадь, м²
                    <input
                      type="number"
                      min={1}
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder="86"
                      className="mt-1 rounded-xl border-2 border-border px-4 py-3 text-sm outline-none transition-colors focus-visible:border-brand-600 focus-visible:focus-ring hover:border-brand-200"
                    />
                  </label>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                    Количество комнат
                    <input
                      type="number"
                      min={1}
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      placeholder="3"
                      className="mt-1 rounded-xl border-2 border-border px-4 py-3 text-sm outline-none transition-colors focus-visible:border-brand-600 focus-visible:focus-ring hover:border-brand-200"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                    Количество санузлов
                    <input
                      type="number"
                      min={1}
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                      placeholder="1"
                      className="mt-1 rounded-xl border-2 border-border px-4 py-3 text-sm outline-none transition-colors focus-visible:border-brand-600 focus-visible:focus-ring hover:border-brand-200"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                  Степень готовности
                  <select 
                    value={finishLevel}
                    onChange={(e) => setFinishLevel(e.target.value as FinishLevel)}
                    className="mt-1 rounded-xl border-2 border-border px-4 py-3 text-sm outline-none transition-colors focus-visible:border-brand-600 focus-visible:focus-ring hover:border-brand-200"
                  >
                    <option>Без ремонта</option>
                    <option>Черновая отделка</option>
                    <option>Чистовая</option>
                    <option>Элитная отделка</option>
                  </select>
                </label>

                <AnimatePresence>
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100/50 border-2 border-brand-200 p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="rounded-xl bg-brand-600 p-2">
                          <PropertyIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-brand-600 uppercase">Расчётная стоимость</div>
                          <div className="text-xs text-muted">{propertyType} • {area} м²</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-muted mb-1">От</div>
                          <div className="text-2xl font-bold text-brand-600">{formatPrice(result.min)} ₽</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted mb-1">До</div>
                          <div className="text-2xl font-bold text-brand-700">{formatPrice(result.max)} ₽</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-brand-200 flex items-center gap-2 text-xs text-muted">
                        <Coins className="h-4 w-4" />
                        Средняя стоимость: {formatPrice(Math.round((result.min + result.max) / 2))} ₽
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" className="group bg-brand-600 hover:bg-brand-700 text-white shadow-lg">
                    <Zap className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Рассчитать смету
                  </Button>
                  <Button type="button" variant="outline" className="group">
                    <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                    Скачать шаблон
                  </Button>
                </div>

                <p className="text-xs text-muted">
                  Отправляя форму, вы соглашаетесь на обработку персональных данных и подтверждаете, что ознакомлены с
                  политикой конфиденциальности.
                </p>
              </form>
            </Card>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                { icon: CheckCircle, title: "Быстрый ответ", text: "В течение часа", gradient: "from-blue-500 to-cyan-500" },
                { icon: CheckCircle, title: "Детальная смета", text: "Без скрытых платежей", gradient: "from-purple-500 to-pink-500" },
                { icon: CheckCircle, title: "Экспертная консультация", text: "От профильного менеджера", gradient: "from-orange-500 to-amber-500" }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  {...fx.fadeUp(index)}
                  className="rounded-2xl border border-brand-100 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${benefit.gradient} p-3`}>
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-zinc-900">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-muted">{benefit.text}</p>
                </motion.div>
              ))}

              {/* Info card */}
              <motion.div
                {...fx.fadeUp(3)}
                className="rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-xl bg-brand-600 p-2">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-zinc-900">Точность расчёта</h4>
                </div>
                <p className="text-sm text-muted">
                  Ориентировочная стоимость рассчитана на основе типовых объектов. 
                  Точная смета после выезда специалиста.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
