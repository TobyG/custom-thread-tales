
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Custom Cap Collection",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b", // Baseball cap collection
    category: "Caps",
  },
  {
    title: "Corporate Golf Shirts",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952", // New corporate golf shirt image
    category: "Golf Shirts",
  },
  {
    title: "Event T-Shirts",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68", // T-shirt collection
    category: "T-Shirts",
  },
];

export const Portfolio = () => {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Work</h2>
          <p className="text-lg opacity-80">
            A showcase of our craftsmanship and attention to detail
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-accent">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
