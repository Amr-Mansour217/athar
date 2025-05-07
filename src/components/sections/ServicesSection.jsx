
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Globe, Shield, Database, BarChart } from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "تطوير البرمجيات",
    description: "نقدم خدمات تطوير برمجيات متكاملة بأحدث التقنيات والمعايير العالمية.",
    details: "نقدم حلولاً برمجية متكاملة تشمل تطوير التطبيقات المخصصة، أنظمة إدارة المحتوى، وحلول الأعمال المتكاملة. نستخدم أحدث التقنيات والمنهجيات لضمان جودة وكفاءة المنتج النهائي."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "تطبيقات الجوال",
    description: "تطوير تطبيقات جوال احترافية لنظامي iOS و Android بتجربة مستخدم مميزة.",
    details: "نطور تطبيقات جوال عالية الأداء لكل من iOS وAndroid، مع التركيز على تجربة المستخدم وسهولة الاستخدام. نقدم حلولاً متكاملة تشمل التصميم والتطوير والصيانة."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "تصميم المواقع",
    description: "تصميم مواقع إلكترونية عصرية وجذابة تعكس هوية علامتك التجارية.",
    details: "نصمم مواقع إلكترونية عصرية ومتجاوبة تعمل على جميع الأجهزة. نركز على تحسين تجربة المستخدم وتحقيق أهداف العمل من خلال تصميم جذاب وواجهة سهلة الاستخدام."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "الأمن السيبراني",
    description: "حماية بياناتك وأنظمتك من التهديدات الإلكترونية بأحدث تقنيات الأمان.",
    details: "نوفر حلول أمنية شاملة لحماية بياناتك وأنظمتك من التهديدات الإلكترونية. خدماتنا تشمل تقييم المخاطر، اختبار الاختراق، وتنفيذ استراتيجيات الأمن السيبراني."
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "إدارة البيانات",
    description: "حلول متكاملة لإدارة وتحليل البيانات الضخمة واستخراج الرؤى القيمة منها.",
    details: "نقدم حلولاً متكاملة لإدارة وتحليل البيانات الضخمة، مع التركيز على استخراج رؤى قيمة تساعد في اتخاذ القرارات. نستخدم أحدث التقنيات في تحليل البيانات والذكاء الاصطناعي."
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "التحول الرقمي",
    description: "مساعدة الشركات على التحول الرقمي وتطوير استراتيجيات رقمية فعالة.",
    details: "نساعد الشركات في رحلة التحول الرقمي من خلال تطوير وتنفيذ استراتيجيات رقمية شاملة. نركز على تحسين الكفاءة التشغيلية وتعزيز تجربة العملاء."
  }
];

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="service-card h-full border-none shadow-lg hover:shadow-xl">
      <CardHeader>
        <div className="mb-4">{service.icon}</div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          {isExpanded ? service.details : service.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="ghost" 
          className="text-primary hover:text-primary/80"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "عرض أقل" : "اقرأ المزيد"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات التقنية المتطورة لمساعدة عملائنا على تحقيق أهدافهم
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
