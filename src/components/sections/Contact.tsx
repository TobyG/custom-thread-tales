
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg opacity-80">Get in touch for your custom needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Phone className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a
              href="tel:0630582409"
              className="text-lg opacity-80 hover:text-accent transition-colors"
            >
              063 058 2409
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Mail className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:xolarney@gmail.com"
              className="text-lg opacity-80 hover:text-accent transition-colors"
            >
              xolarney@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <MapPin className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-lg opacity-80">Hammarsdale</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
