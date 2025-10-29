import { motion } from "framer-motion";
import { Container, Section, Card, Button } from "@/components/primitives";
import { fx } from "@/lib/motion";
import { Camera, ArrowRight } from "lucide-react";

const base = import.meta.env.BASE_URL;

const projects = [
  {
    name: "ЖК «Лицеист» · 112 м²",
    duration: "10 недель",
    image: `${base}images/portfolio-1.jpg`
  },
  {
    name: "БЦ «Арт Плей» · 86 м²",
    duration: "8 недель",
    image: `${base}images/portfolio-2.jpg`
  },
  {
    name: "ЖК «Симфония» · 134 м²",
    duration: "12 недель",
    image: `${base}images/portfolio-3.jpg`
  }
];

export default function Portfolio() {
  return (
    <Section id="portfolio" className="bg-surface py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div {...fx.fadeUp()}>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">Портфолио</span>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">От бизнес-центров до премиальных ЖК.</h2>
          </motion.div>
          <motion.div {...fx.fadeUp(1)}>
            <Button variant="outline">
              <Camera className="h-4 w-4" />
              Смотреть все объекты
            </Button>
          </motion.div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div key={project.name} {...fx.fadeUp(index)}>
              <Card className="overflow-hidden p-0">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="space-y-2 p-6">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm font-medium text-muted">{project.duration}</p>
                  <Button variant="ghost" className="mt-2 justify-start px-0 text-sm font-semibold">
                    Подробнее
                    <ArrowRight className="h-4 w-4" />
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
