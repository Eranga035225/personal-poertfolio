import { motion } from "framer-motion";
import { Code, Cloud, Smartphone, Brain, Cpu } from "lucide-react";


const services = [
    {
    icon: Cloud,
    title: "DevOps Engineer",
    description:
      "Designing cloud infrastructure on AWS, Azure, and GCP with CI/CD pipelines and containerized deployments.",
    gradient: "from-accent to-primary",
  },
  //SRE
  {
    icon: Cloud,
    title: "Site Reliability Engineer",
    description:
      "Ensuring high availability and performance of applications through monitoring, automation, and incident response.",
    gradient: "from-primary to-accent",
  },
    {
    icon: Cloud,
    title: "AWS Certified Cloud Practitioner",
    description:
      "Proficient in AWS cloud services, architecture, and best practices for designing secure and scalable solutions.",
    gradient: "from-accent to-primary",
  },
    {
    icon: Cloud,
    title: "Aviatrix Certified Multicloud Network Associate",
    description:
      "Expertise in multicloud networking, security, and automation across AWS, Azure, and GCP environments.",
    gradient: "from-primary to-accent",
  },

  {
    icon: Code,
    title: "Full Stack Developer",
    description:
      "Building responsive, scalable web applications using modern technologies like React, Node.js, and TypeScript.",
    gradient: "from-primary to-accent",
  },
  //Aws ccp


  {
    icon: Smartphone,
    title: "Mobile App Developer",
    description:
      "Creating cross-platform mobile experiences with Flutter and React Native that feel native on every device.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Brain,
    title: "AI & ML Researcher",
    description:
      "Implementing machine learning models and AI-driven features to solve complex business problems.",
    gradient: "from-accent to-primary",
  },
  //IOT explorere



{
  icon: Cpu,
  title: "IoT Explorer",
  description:
    "Designing and implementing IoT solutions for smart devices, sensors, and connected systems.",
  gradient: "from-accent to-primary",
}



  

];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a range of professional services to help bring your ideas to life
            with cutting-edge technology and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10`} />
                </div>

                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
