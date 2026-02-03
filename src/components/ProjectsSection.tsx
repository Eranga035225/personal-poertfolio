import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectCrystalBeauty from "@/assets/project-crystal-beauty.jpg";
import projectSekinExpress from "@/assets/project-sekin-express.jpg";
import projectExclusive from "@/assets/project-exclusive.jpg";
import projectMedilink from "@/assets/project-medilink.jpg";
import projectCinnamonAi from "@/assets/project-cinnamon-ai.jpg";
import projectAuraVoice from "@/assets/project-aura-voice.jpg";
import projectWeatherPrediction from "@/assets/project-weather-prediction.jpg";
import projectAnimalClassification from "@/assets/project-animal-classification.jpg";
import projectSkillFinder from "@/assets/project-skill-finder.jpg";
import projectTravelTales from "@/assets/project-travel-tales.jpg";
import projectWeatherApp from "@/assets/project-weather-app.jpg";
import projectAwsCicd from "@/assets/project-aws-cicd.jpg";
import projectDockerCicd from "@/assets/project-docker-cicd.jpg";
import projectNodejsAws from "@/assets/project-nodejs-aws.jpg";

const projects = [
  {
    title: "Crystal Beauty – MERN E-Commerce",
    description:
      "Full-stack MERN e-commerce platform for a cosmetics brand with product listings, shopping cart, secure JWT authentication, and role-based admin dashboard.",
    image: projectCrystalBeauty,
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://crystal-beauty.netlify.app/",
    githubUrl: "https://github.com/Eranga035225/cbc-frontend.git",
  },
  {
    title: "Sekin Express – Delivery System",
    description:
      "Complete delivery management system with real-time parcel tracking, role-based panels (Super Admin, Admin, Driver, User), and dynamic cost calculation.",
    image: projectSekinExpress,
    tags: ["Laravel", "PHP", "MySQL", "REST APIs", "Bootstrap"],
    liveUrl: "https://www.sekinexpress.com/",
    githubUrl: "https://github.com/Eranga035225/webSystem-for-a-delivery-service.git",
  },
  {
    title: "Exclusive – Secure E-Commerce",
    description:
      "Secure e-commerce web application with Stripe payments, product reviews, order management, and admin panel. Tested using SAST, DAST security techniques.",
    image: projectExclusive,
    tags: ["Laravel", "PHP", "Stripe", "MySQL", "Security Testing"],
    githubUrl: "https://github.com/Eranga035225/Secured-Ecommerce-system.git",
  },
  {
    title: "MediLink – E-Channeling System",
    description:
      "Healthcare e-channeling system with appointment booking, doctor channeling, Stripe payments, and automated receipt generation.",
    image: projectMedilink,
    tags: ["Laravel", "PHP", "Stripe", "MySQL", "MVC"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cinnamon Disease Classification",
    description:
      "Deep learning system using Transfer Learning with EfficientNetB0 for classifying cinnamon plant diseases with 94% accuracy.",
    image: projectCinnamonAi,
    tags: ["Python", "TensorFlow", "Deep Learning", "CNN", "Transfer Learning"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Aura Voice – Text-to-Speech NLP",
    description:
      "Multilingual Text-to-Speech application supporting English, Sinhala, Tamil, Hindi with modern UI and robust error handling.",
    image: projectAuraVoice,
    tags: ["Python", "NLP", "gTTS", "Tkinter", "Multilingual"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Smart Weather Prediction (ML)",
    description:
      "Weather prediction system using machine learning with data preprocessing, model training, and evaluation integrated into Django web app.",
    image: projectWeatherPrediction,
    tags: ["Python", "Django", "Scikit-learn", "Machine Learning"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Animal Classification (CNN)",
    description:
      "Animal classification system using Convolutional Neural Networks to identify and classify different animals from images.",
    image: projectAnimalClassification,
    tags: ["Python", "Deep Learning", "CNN", "TensorFlow/Keras"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Skill Finder – Mobile App",
    description:
      "Cross-platform mobile app enabling users to discover, hire, and communicate with service providers across various skill categories.",
    image: projectSkillFinder,
    tags: ["Flutter", "Firebase", "Dart", "Real-time DB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Travel Tales – Mobile App",
    description:
      "Mobile travel application allowing users to search and explore travel destinations with detailed location information and clean UI.",
    image: projectTravelTales,
    tags: ["Flutter", "Dart", "Firebase", "Mobile UI/UX"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather App – Mobile",
    description:
      "Mobile weather application providing real-time weather information with current conditions through a clean and user-friendly interface.",
    image: projectWeatherApp,
    tags: ["Flutter", "Dart", "REST APIs", "Mobile UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AWS CI/CD Pipeline",
    description:
      "Continuous integration and deployment pipeline for Java Maven applications using AWS CodePipeline, CodeBuild, and EC2/S3.",
    image: projectAwsCicd,
    tags: ["AWS", "Java", "Maven", "CI/CD", "CodePipeline"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Docker-based CI/CD Pipeline",
    description:
      "Docker-based CI/CD pipeline to containerize applications and automate build, test, and deployment stages with GitHub Actions.",
    image: projectDockerCicd,
    tags: ["Docker", "GitHub Actions", "CI/CD", "Containerization"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Node.js Backend on AWS",
    description:
      "Containerized Node.js backend deployed on AWS using Docker, ECR, and EC2 with secure environment configuration and MongoDB integration.",
    image: projectNodejsAws,
    tags: ["Node.js", "Docker", "AWS EC2", "AWS ECR", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

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
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing full-stack development, cloud architecture,
            mobile apps, and AI/ML solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
                    <Button
                      variant="hero"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="heroOutline"
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-3 py-1 bg-secondary/50 text-muted-foreground rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="text-center mt-12"
>
  <Button variant="heroOutline" size="lg" asChild>
    <a
      href="https://github.com/Eranga035225"
      target="_blank"
      rel="noopener noreferrer"
    >
      View All Projects
    </a>
  </Button>
</motion.div>

      </div>
    </section>
  );
};
