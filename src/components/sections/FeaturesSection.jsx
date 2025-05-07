import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "فريق متخصص",
    description: "نمتلك فريقاً من الخبراء المتخصصين في مختلف مجالات التقنية."
  },
  {
    title: "تقنيات حديثة",
    description: "نستخدم أحدث التقنيات والأدوات لتقديم حلول متطورة وفعالة."
  },
  {
    title: "دعم مستمر",
    description: "نقدم دعماً فنياً على مدار الساعة لضمان استمرارية أعمالك."
  },
  {
    title: "حلول مخصصة",
    description: "نطور حلولاً مخصصة تناسب احتياجات عملك الفريدة."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="صورة توضيحية لمميزات الشركة" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover" 
            />
          </motion.div>
          
          <div className="lg:w-1/2 lg:pr-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختار شركة أثر المعرفة؟</h2>
              <p className="text-xl text-gray-600">
                نحن نسعى دائماً لتقديم أفضل الحلول التقنية التي تساعد عملائنا على تحقيق النجاح والتميز
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="feature-card bg-gray-50 p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
