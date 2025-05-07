
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "أحمد محمد",
    role: "المدير التنفيذي",
    image: "ahmed"
  },
  {
    name: "سارة خالد",
    role: "مدير التطوير",
    image: "sara"
  },
  {
    name: "محمد علي",
    role: "مهندس برمجيات",
    image: "mohamed"
  },
  {
    name: "نورا أحمد",
    role: "مصممة واجهات",
    image: "nora"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">فريقنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نفتخر بفريقنا المتميز من الخبراء والمتخصصين في مختلف مجالات التقنية
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="team-card text-center"
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="mb-4 mx-auto w-32 h-32 overflow-hidden rounded-full border-4 border-primary/20">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${member.image}`} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-3">
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
