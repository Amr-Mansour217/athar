
import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">خبراتنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نفتخر بفريقنا المتميز الذي تتجاوز خبرته 15 عاماً في مجال تقنية المعلومات والاتصالات، 
            حيث نجمع بين الخبرة العميقة والمعرفة التقنية المتقدمة لتقديم حلول مبتكرة تلبي احتياجات عملائنا.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
