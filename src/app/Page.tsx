import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Calculator from "@/components/Calculator";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { Container } from "@/components/primitives";

export default function Page() {
  return (
    <div className="bg-bg font-sans text-text antialiased">
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <Calculator />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <footer className="border-t border-border">
        <Container className="py-10 text-xs text-muted">
          © {new Date().getFullYear()} Forma Renovation
        </Container>
      </footer>
    </div>
  );
}
