
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-primary text-primary-foreground px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bayandiswa Enterprises
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-accent">
          Crafting Custom Designs That Stand Out
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Specializing in premium embroidery for caps, golf shirts & t-shirts in
          Hammarsdale
        </p>
      </motion.div>
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};
