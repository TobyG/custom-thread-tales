
import { motion } from "framer-motion";
import { Shirt } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Custom Cap Embroidery",
    description: "Premium embroidered caps with your unique designs",
    image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346", // Baseball cap image
  },
  {
    icon: Shirt,
    title: "Golf Shirts",
    description: "Professional golf shirts with custom embroidery",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99", // New golf polo shirt image
  },
  {
    icon: Shirt,
    title: "T-Shirts",
    description: "High-quality branded t-shirts for any occasion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", // T-shirt image
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
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <service.icon className="w-12 h-12 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
