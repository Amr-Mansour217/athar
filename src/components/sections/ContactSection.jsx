import React from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنتواصل معك قريباً",
      duration: 5000,
    });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/966508449114", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك التقنية
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
                <CardDescription>
                  املأ النموذج التالي وسنتواصل معك في أقرب وقت ممكن
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        الاسم
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 py-6">
                    إرسال
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">معلومات التواصل</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-medium">العنوان</h4>
                    <p className="text-gray-600">
                      <a href="https://maps.app.goo.gl/tzDk1X2XHyhX9ZKa8" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        مكة المكرمة - النسيم شارع فاطمة الزهراء 24245
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-medium">البريد الإلكتروني</h4>
                    <p className="text-gray-600">info@athrmarefa.sa</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-medium">الهاتف</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600">للتواصل: 966545491293+</p>
                      <p className="text-gray-600">واتساب: 966508449114+</p>
                      <Button 
                        onClick={handleWhatsAppClick}
                        className="bg-green-500 hover:bg-green-600 text-white w-full"
                      >
                        تواصل معنا عبر واتساب
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://i.imgur.com/kDBrhjZ.png" 
                  alt="خريطة لموقع الشركة في مكة المكرمة" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-lg shadow-md max-w-sm w-full text-center">
                    <h4 className="text-lg font-medium mb-2">موقع الشركة</h4>
                    <p className="mb-3 text-gray-600">مكة المكرمة - النسيم شارع فاطمة الزهراء 24245</p>
                    <p className="mb-3 text-gray-600 text-sm">21°26'47.8"N 39°51'23.8"E</p>
                    <a 
                      href="https://maps.app.goo.gl/tzDk1X2XHyhX9ZKa8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded-md inline-block hover:bg-primary/90 transition-colors"
                    >
                      فتح في خرائط جوجل
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
