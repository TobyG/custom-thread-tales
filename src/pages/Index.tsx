
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="bg-primary">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
