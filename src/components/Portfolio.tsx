import { motion } from "framer-motion";
import { Container, Section, Card, Button } from "@/components/primitives";
import { fx } from "@/lib/motion";
import { Camera, ArrowRight, Clock, Square, Award } from "lucide-react";
import { useState } from "react";

const base = import.meta.env.BASE_URL;

const projects = [
  {
    name: "ЖК «Лицеист»",
    area: "112 м²",
    duration: "10 недель",
    type: "Премиум",
    image: `${base}images/portfolio-1.jpg`,
    gradient: "from-blue-600 to-purple-600"
  },
  {
    name: "БЦ «Арт Плей»",
    area: "86 м²",
    duration: "8 недель",
    type: "Коммерция",
    image: `${base}images/portfolio-2.jpg`,
    gradient: "from-green-600 to-teal-600"
  },
  {
    name: "ЖК «Симфония»",
    area: "134 м²",
    duration: "12 недель",
    type: "Премиум",
    image: `${base}images/portfolio-3.jpg`,
    gradient: "from-orange-600 to-red-600"
  }
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Section id="portfolio" className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div {...fx.fadeUp()}>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-600">
              <Award className="h-4 w-4" />
              Портфолио
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">От бизнес-центров до премиальных ЖК.</h2>
            <p className="mt-4 text-base text-muted">Посмотрите на результат нашей работы</p>
          </motion.div>
          <motion.div {...fx.fadeUp(1)}>
            <Button variant="outline" className="group">
              <Camera className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Смотреть все объекты
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div 
              key={project.name} 
              {...fx.fadeUp(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="group"
            >
              <Card className="relative overflow-hidden border-2 border-transparent bg-white p-0 transition-all hover:border-brand-200 hover:shadow-2xl">
                {/* Image container with gradient overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-80`}
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white">
                      {project.type}
                    </span>
                  </div>
                  
                  {/* Hover content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hovered === index ? 1 : 0,
                      y: hovered === index ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <Button variant="ghost" className="w-full border-2 border-white/30 bg-white/20 backdrop-blur-md text-white hover:bg-white/30">
                      Открыть проект
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
                
                {/* Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1.5 text-sm text-muted">
                        <Square className="h-4 w-4" />
                        {project.area}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted">
                        <Clock className="h-4 w-4" />
                        {project.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${project.gradient}`} />
                    <span className="text-xs font-medium text-muted">Премиум отделка</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
