import { motion } from "framer-motion";
import { 
  SiReact, SiNodedotjs, SiFlutter, SiLaravel, SiPython,
  SiDocker, SiMongodb, SiMysql, SiTensorflow, SiGithub, SiGithubactions,
  SiJavascript, SiTypescript, SiPhp, SiDart, SiCplusplus,
  SiExpress, SiNextdotjs, SiTailwindcss, SiDjango, SiFirebase,
  SiLinux, SiJenkins, SiApachemaven, SiPostman, SiFigma,
  SiGit, SiKubernetes, SiKeras, SiNumpy, SiPandas, SiScikitlearn,
  SiOpencv, SiJupyter
} from "react-icons/si";
import { FaJava, FaAws, FaBrain } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "from-green-500 to-emerald-500" },
  { name: "Flutter", icon: SiFlutter, color: "from-sky-400 to-blue-600" },
  { name: "Laravel", icon: SiLaravel, color: "from-red-500 to-orange-500" },
  { name: "Python", icon: SiPython, color: "from-yellow-500 to-blue-500" },
  { name: "AWS", icon: FaAws, color: "from-orange-500 to-yellow-500" },
  { name: "Docker", icon: SiDocker, color: "from-blue-500 to-cyan-500" },
  { name: "MongoDB", icon: SiMongodb, color: "from-green-600 to-green-400" },
  { name: "MySQL", icon: SiMysql, color: "from-blue-700 to-indigo-600" },
  { name: "TensorFlow", icon: SiTensorflow, color: "from-orange-500 to-yellow-500" },
  { name: "Git/GitHub", icon: SiGithub, color: "from-gray-700 to-gray-500" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "from-blue-600 to-blue-400" },
  { name: "Express.js", icon: SiExpress, color: "from-gray-600 to-gray-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "from-gray-800 to-gray-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-cyan-500 to-teal-500" },
  { name: "Django", icon: SiDjango, color: "from-green-700 to-green-500" },
  { name: "Firebase", icon: SiFirebase, color: "from-yellow-500 to-orange-500" },
  { name: "Linux", icon: SiLinux, color: "from-yellow-600 to-yellow-400" },
  { name: "Jenkins", icon: SiJenkins, color: "from-red-600 to-red-400" },
  { name: "Maven", icon: SiApachemaven, color: "from-orange-600 to-red-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "from-blue-600 to-blue-400" },
  { name: "Keras", icon: SiKeras, color: "from-red-500 to-red-400" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "from-orange-500 to-blue-500" },
];

const programmingLanguages = [
  { name: "Java", icon: FaJava },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "PHP", icon: SiPhp },
  { name: "Dart", icon: SiDart },
  { name: "C", icon: TbBrandCpp },
  { name: "C++", icon: SiCplusplus },
];

const frameworks = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Flutter", icon: SiFlutter },
  { name: "Laravel", icon: SiLaravel },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Django", icon: SiDjango },
];

const devopsTools = [
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: FaAws },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Jenkins", icon: SiJenkins },
  { name: "Linux", icon: SiLinux },
  { name: "Maven", icon: SiApachemaven },
  { name: "Kubernetes", icon: SiKubernetes },
];

const databases = [
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
];

const tools = [
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: SiFigma },
  { name: "VS Code", icon: VscCode },
  { name: "IntelliJ IDEA", icon: SiIntellijidea },
];

const mlAiTools = [
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Keras", icon: SiKeras },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "NumPy", icon: SiNumpy },
  { name: "Pandas", icon: SiPandas },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Jupyter", icon: SiJupyter },
  { name: "CNN", icon: FaBrain },
  { name: "KNN", icon: FaBrain },
  { name: "Transfer Learning", icon: FaBrain },
  { name: "NLP", icon: FaBrain },
  { name: "Data Preprocessing", icon: SiPython },
  { name: "Model Training", icon: SiPython },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

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
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-10`} />
                </div>

                {/* Icon */}
                <motion.div
                  className="text-3xl mb-2 flex justify-center text-foreground group-hover:text-primary transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon />
                </motion.div>

                {/* Name */}
                <h3 className="text-xs font-medium group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6"
          >
            <h4 className="font-bold mb-4 text-primary">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((lang) => (
                <span key={lang.name} className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                  <lang.icon className="text-sm" />
                  {lang.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6"
          >
            <h4 className="font-bold mb-4 text-accent">Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((fw) => (
                <span key={fw.name} className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-full border border-accent/20">
                  <fw.icon className="text-sm" />
                  {fw.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* DevOps & Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6"
          >
            <h4 className="font-bold mb-4 text-primary">DevOps & Cloud</h4>
            <div className="flex flex-wrap gap-2">
              {devopsTools.map((tool) => (
                <span key={tool.name} className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                  <tool.icon className="text-sm" />
                  {tool.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6"
          >
            <h4 className="font-bold mb-4 text-accent">Databases</h4>
            <div className="flex flex-wrap gap-2">
              {databases.map((db) => (
                <span key={db.name} className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-full border border-accent/20">
                  <db.icon className="text-sm" />
                  {db.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6"
          >
            <h4 className="font-bold mb-4 text-primary">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool.name} className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                  <tool.icon className="text-sm" />
                  {tool.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ML & AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6"
          >
            <h4 className="font-bold mb-4 text-accent">Machine Learning & AI</h4>
            <div className="flex flex-wrap gap-2">
              {mlAiTools.map((tool) => (
                <span key={tool.name} className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-full border border-accent/20">
                  <tool.icon className="text-sm" />
                  {tool.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
