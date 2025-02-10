
import { motion } from "framer-motion";
import { ShirtRound, Shirt, Pencil } from "lucide-react";

const services = [
  {
    icon: ShirtRound,
    title: "Custom Cap Embroidery",
    description: "Premium embroidered caps with your unique designs",
  },
  {
    icon: Shirt,
    title: "Golf Shirts",
    description: "Professional golf shirts with custom embroidery",
  },
  {
    icon: Shirt,
    title: "T-Shirts",
    description: "High-quality branded t-shirts for any occasion",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-4 bg-secondary text-secondary-foreground"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            Expert craftsmanship for your custom apparel needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-accent mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
