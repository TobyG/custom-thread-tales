
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Event Organizer",
    content:
      "The quality of their embroidery work is exceptional. Our team uniforms looked absolutely perfect!",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "Professional service from start to finish. The custom caps they made for our brand exceeded expectations.",
  },
  {
    name: "Emily Williams",
    role: "Sports Club Manager",
    content:
      "Reliable, fast, and great attention to detail. Our golf shirts looked amazing!",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="py-20 px-4 bg-secondary text-secondary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            What our satisfied customers say about us
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center px-8"
            >
              <p className="text-xl mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>
              <h3 className="font-semibold text-lg">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </motion.div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-accent transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
