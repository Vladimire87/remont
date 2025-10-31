import { motion } from "framer-motion";
import { Container, Button } from "@/components/primitives";
import { fx } from "@/lib/motion";
import { Phone, Mail, MapPin, MailCheck, Send, Building2, Wrench, Palette, Shield } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  services: [
    { label: "Инженерные работы", href: "#services" },
    { label: "Дизайн и смета", href: "#services" },
    { label: "Чистовая отделка", href: "#services" },
    { label: "Авторский надзор", href: "#services" }
  ],
  company: [
    { label: "О компании", href: "#about" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Отзывы клиентов", href: "#reviews" },
    { label: "Вакансии", href: "#careers" }
  ],
  resources: [
    { label: "Блог о ремонте", href: "#blog" },
    { label: "Полезные статьи", href: "#articles" },
    { label: "FAQ", href: "#faq" },
    { label: "Скачать каталог", href: "#catalog" }
  ]
};

const contactInfo = [
  { icon: Phone, label: "Телефон", value: "+7 (495) 123-45-67", href: "tel:+74951234567" },
  { icon: Mail, label: "Email", value: "hello@forma-renovation.ru", href: "mailto:hello@forma-renovation.ru" },
  { icon: MapPin, label: "Адрес", value: "Москва, ул. Арбат, д. 15", href: "#" }
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="border-t border-border bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <Container className="py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <motion.div {...fx.fadeUp()} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-brand-600 p-3">
                  <MailCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Подпишитесь на рассылку</h3>
              </div>
              <p className="text-slate-300 max-w-md">
                Получайте полезные советы по ремонту, эксклюзивные предложения и информацию о новых проектах прямо в почту.
              </p>
            </motion.div>

            <motion.div {...fx.fadeUp(1)}>
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email"
                    required
                    className="flex-1 rounded-xl border-2 border-slate-700 bg-slate-800 px-4 py-3 text-base text-white placeholder-slate-400 outline-none transition-colors focus-visible:border-brand-600 hover:border-slate-600"
                  />
                  <Button type="submit" className="group bg-brand-600 hover:bg-brand-700 text-white shadow-lg whitespace-nowrap">
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Подписаться
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 rounded-xl bg-brand-600/20 border-2 border-brand-600 px-6 py-4"
                >
                  <MailCheck className="h-6 w-6 text-brand-400" />
                  <div>
                    <div className="font-bold text-white">Спасибо за подписку!</div>
                    <div className="text-sm text-brand-300">Проверьте почту для подтверждения</div>
                  </div>
                </motion.div>
              )}
              <p className="mt-3 text-xs text-slate-400">
                Нажимая «Подписаться», вы соглашаетесь с политикой конфиденциальности
              </p>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-lg">
                FR
              </span>
              <div>
                <div className="text-lg font-bold">Forma Renovation</div>
                <div className="text-xs text-slate-400">Премиальная отделка</div>
              </div>
            </div>
            <p className="text-sm text-slate-300 max-w-md">
              Профессиональный ремонт и отделка под ключ. Более 100 успешных проектов в Москве и области.
            </p>
            
            {/* Services Icons */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="flex flex-col items-center gap-2 rounded-xl bg-slate-800/50 p-3">
                <Building2 className="h-5 w-5 text-brand-400" />
                <span className="text-xs text-slate-400">Дизайн</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl bg-slate-800/50 p-3">
                <Wrench className="h-5 w-5 text-brand-400" />
                <span className="text-xs text-slate-400">Монтаж</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl bg-slate-800/50 p-3">
                <Palette className="h-5 w-5 text-brand-400" />
                <span className="text-xs text-slate-400">Отделка</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <motion.div {...fx.fadeUp(2)}>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Shield className="h-4 w-4 text-brand-400" />
              Услуги
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div {...fx.fadeUp(3)}>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div {...fx.fadeUp(4)}>
            <h4 className="font-bold mb-4">Ресурсы</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid gap-6 md:grid-cols-3">
            {contactInfo.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="group flex items-center gap-3 rounded-xl bg-slate-800/50 p-4 transition-all hover:bg-slate-800 hover:shadow-lg"
              >
                <div className="rounded-lg bg-brand-600 p-2 group-hover:scale-110 transition-transform">
                  <contact.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">{contact.label}</div>
                  <div className="text-sm font-medium text-white">{contact.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs text-slate-400">
                © {new Date().getFullYear()} Forma Renovation. Все права защищены.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                ИНН: 1234567890 | ОГРН: 1234567890123
              </p>
            </div>
            <div className="flex items-center gap-6 text-xs">
              <a href="#privacy" className="text-slate-400 hover:text-brand-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#terms" className="text-slate-400 hover:text-brand-400 transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

