"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Award,
  Code,
  Brain,
  Database,
  Cloud,
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  School,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const skills = {
    Programming: ["Java", "C++", "Python", "JavaScript", "TypeScript"],
    "AI/ML": ["Machine Learning", "Deep Learning", "NLP", "RAG", "Fine Tuning", "Gen AI"],
    "Web Development": ["React.js", "Node.js", "Express.js", "FastAPI", "Flask", "WebSocket"],
    Databases: ["MongoDB", "SQL", "FAISS", "SQLite"],
    "DevOps & Cloud": ["Git", "Docker", "Jenkins", "GitHub Actions", "AWS"],
  }

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      major: "AI/ML Major",
      institution: "Keshav Memorial Institute of Technology (KMIT), Hyderabad",
      duration: "Oct 2022 – Jul 2026 (Expected)",
      grade: "CGPA: 8.6/10.0",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "Intermediate (Class XII)",
      major: "MPC Stream",
      institution: "Sri Chaitanya Junior College",
      duration: "2020 – 2022",
      grade: "985/1000 (98.5%) in IPE Board Exams",
      icon: <School className="h-6 w-6" />,
    },
    {
      degree: "Secondary (Class X)",
      major: "SSC",
      institution: "Sri Chaitanya School",
      duration: "2019 – 2020",
      grade: "10.0 CGPA",
      icon: <School className="h-6 w-6" />,
    },
  ]

  // Reordered projects with Medical Chatbot in second position
  const projects = [
    {
      title: "Exoplanet Exploration and Learning App",
      description:
        "Designed and developed a gamified 2D educational app to make exoplanetary science engaging for students and enthusiasts. The app immerses users in an interactive mission-based storyline where players explore exoplanets to rescue a virtual friend, blending fun with scientific learning.",
      keyFeatures: [
        "RAG-Powered Learning: Integrated Retrieval-Augmented Generation to create personalized quizzes tailored to a player's in-game journey.",
        "Predictive Planet Builder: Implemented a Random Forest model to predict exoplanet classifications using 10 scientific parameters in a 'build-your-planet' module.",
        "Real-Time Feedback: Offered scientific insights on how planetary features influence classifications, encouraging curiosity-driven exploration.",
      ],
      tech: ["Flutter", "SQLite", "FastAPI", "LLM", "RAG", "Machine Learning"],
      github: "https://github.com/Amulya-sg/Cosmic-Quest-Chronicles-of-Exploration-",
      demo: "https://youtu.be/6Aak5CJKcW8?si=D35HSV2CIav051Wr",
      impact:
        "Tested by ~20 educators and praised for making STEM concepts accessible. Aligns with NASA's Chronicles of Exoplanet Exploration challenge.",
      duration: "3 Weeks",
    },
    {
      title: "AI-Powered Medical Chatbot",
      description:
        "Built a conversational medical assistant chatbot capable of answering general health-related questions. It combines retrieval-augmented generation with domain-focused LLM fine-tuning for accurate and reliable responses.",
      keyFeatures: [
        "Scalable Knowledge Base: FAISS-powered vector search over 100k+ curated medical FAQs.",
        "Contextual Responses: Fine-tuned LLM to ensure clarity, trustworthiness, and minimal hallucination.",
        "User-Centric Experience: Delivered instant, conversational answers for basic healthcare guidance.",
      ],
      tech: ["LLM", "FAISS DB", "RAG", "Python", "NLP"],
      github: "https://github.com/Amulya-sg/Medical-Chat-Bot",
      demo: "https://drive.google.com/file/d/1Z1NC7y2f-UOyQLEvP6oiMn2TPAmkD9Y5/view?usp=sharing",
      impact:
        "70% of judges rated it 'highly helpful' during a tech expo for bridging AI and accessible healthcare information.",
      duration: "1 Month",
    },
    {
      title: "Interactive Quiz Generator – QuizCraft",
      description:
        "Developed QuizCraft, an intelligent quiz generator that creates customized, topic-specific quizzes from user-provided inputs. It enhances self-paced learning through generative AI and intelligent information retrieval.",
      keyFeatures: [
        "RAG Pipeline with FAISS: Employed FAISS vector search for fast and context-aware question retrieval.",
        "Fallback Knowledge Sourcing: Integrated web scraping modules to enrich content, boosting topic coverage by 20%.",
        "High-Performance Backend: Optimized using FastAPI and modular architecture, reducing quiz generation latency.",
      ],
      tech: ["MERN Stack", "FastAPI", "LLM", "RAG", "FAISS", "Web Scraping"],
      github: "https://github.com/Amulya-sg/QuizCraft",
      impact: "30% improvement in question relevance and generation time compared to baseline quiz tools.",
      duration: "3 Months",
    },
    {
      title: "Voice Agent for Business Assistance",
      description:
        "Developed a voice-driven AI assistant to automate business-to-customer interactions, capable of answering FAQs and logging call data to external tools like Google Sheets or Notion.",
      keyFeatures: [
        "Real-Time Voice Interface: Integrated Vapi.ai for natural voice conversations with real-time speech-to-text and text-to-speech.",
        "Smart Webhook Routing: Designed FastAPI backend for seamless call flow management and response logging.",
        "Cloud-Connected Workflows: Automated customer data storage and feedback collection for operational efficiency.",
      ],
      tech: ["Vapi.ai", "FastAPI", "Flask", "Ngrok", "Google Sheets", "Notion"],
      github: "https://github.com/Amulya-sg/VOICE-AGENT",
      impact:
        "Streamlined routine customer interactions, reducing manual effort and enabling scalable voice-based automation.",
      duration: "1 Day (Hackathon)",
    },
    {
      title: "Cognitive Retraining System for Autism Screening",
      description:
        "Developed a home-based cognitive assessment and retraining platform for parents to screen early signs of autism in children. The platform also includes games and exercises aimed at improving cognitive skills.",
      keyFeatures: [
        "Autism Screening Model: Deployed a machine learning model to predict autism likelihood from parent questionnaire data.",
        "Cognitive Games Suite: Built interactive attention, reflex, and coordination games for skill improvement.",
        "Secure User Portal: Enabled profiles, progress tracking, and document uploads for better usability.",
      ],
      tech: ["MERN Stack", "Machine Learning", "User Authentication", "File Upload"],
      github: "https://github.com/Amulya-sg/Home-Based-Cognitive-Retraining",
      impact: "Provided accessible early-stage autism screening tool, empowering parents with actionable insights.",
      duration: "2 Months",
    },
  ]

  const achievements = [
    {
      title: "NASA Space Apps Challenge",
      description:
        "Global Nominee & People's Choice - Selected as one of 230 People's Choice awardees and among 900 global nominees from 12,000+ teams worldwide",
      year: "2024",
      icon: <Award className="h-6 w-6" />,
      link: "https://www.spaceappschallenge.org/",
    },
    {
      title: "Utkrishti Puraskar",
      description: "Academic award from KMIT for outstanding performance",
      year: "2025",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Top Performer SIH",
      description: "KMIT Internal Hackathon for Smart India Hackathon",
      year: "2023",
      icon: <Code className="h-6 w-6" />,
    },
  ]

  const certifications = [
    {
      title: "Python Programming Certification",
      issuer: "Infosys",
      description: "Python for beginners certification",
      year: "2023",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Gold Medal - INTSO Math Olympiad",
      issuer: "INTSO",
      description: "Awarded for excellence in Mathematics Olympiad",
      year: "2023",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-cyan-900/30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              Amulya Setti Guthi
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Achievements", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-900/30"
          >
            <div className="px-4 py-2 space-y-2">
              {["Home", "About", "Projects", "Achievements", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      {/* <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI & Full-Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Computer Science student specializing in AI/ML and web development. Building innovative solutions that
              bridge technology and real-world challenges.
            </p> */}
             <section
  id="home"
  className="min-h-screen flex items-center justify-center relative overflow-hidden"
>
  <motion.div style={{ y }} className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
  </motion.div>

  {/* Main Content */}
  <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center px-6 md:px-16 max-w-6xl mx-auto">
    {/* Profile Picture */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-8 md:mb-0 flex-shrink-0"
    >
      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
        <img
          src="/profile-picture.jpg"
          alt="Amulya Setti Guthi"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

    {/* Text Content */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center md:text-left max-w-2xl md:pl-28 flex flex-col"
    >
      {/* <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        AI & Full-Stack Developer
      </h1> */}
      <div className="flex items-center justify-center md:justify-start mb-6">
    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
      AI & Full-Stack Developer
    </h1>
  </div>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
        Computer Science student specializing in AI/ML and web development.
        Building innovative solutions that bridge technology and real-world
        challenges.
      </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-900/30"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Amulya-sg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://linkedin.com/in/amulya-setti-guthi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              {/* <a
                href="mailto:amulyasettiguthi@gmail.com?subject=Hello%20Amulya&body=Hi%20Amulya,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                title="Send Email"
              >
                <Mail className="h-8 w-8" />
              </a> */}
               <a
  href="mailto:amulyasettiguthi@gmail.com?subject=Hello%20Amulya&body=Hi%20Amulya,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
  onClick={(e) => {
    // Timeout to check if mailto didn't trigger
    setTimeout(() => {
      if (!document.hasFocus()) return; // Email client opened successfully
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=amulyasettiguthi@gmail.com&su=Hello%20Amulya&body=Hi%20Amulya,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
        "_blank"
      );
    }, 500);
  }}
  className="text-gray-400 hover:text-cyan-400 transition-colors"
  title="Send Email"
>
  <Mail className="h-8 w-8" />
</a>
              <a
                href="tel:+917989647700"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                title="Call Phone"
              >
                <Phone className="h-8 w-8" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Computer Science student at KMIT, Hyderabad, with a strong focus on AI/ML and full-stack
              development. Currently maintaining a CGPA of 8.6/10.0, I love creating user-centered applications that
              solve real-world problems.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Education</h3>
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/80 backdrop-blur-sm border-cyan-900/30 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-900/30 rounded-lg text-cyan-400">{edu.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-100 mb-1">{edu.degree}</CardTitle>
                        {edu.major && <p className="text-cyan-400 font-medium mb-2">{edu.major}</p>}
                        <p className="text-gray-300 mb-1">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <span className="text-sm text-gray-400">{edu.duration}</span>
                          <Badge className="bg-green-900/30 text-green-400 border-green-900/50 w-fit">
                            {edu.grade}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}

              <Card className="bg-gray-800/80 backdrop-blur-sm border-cyan-900/30 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-100 flex items-center gap-2">
                    <Brain className="h-6 w-6 text-cyan-400" />
                    Key Coursework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Natural Language Processing",
                      "Database Management",
                      "Software Engineering",
                      "Computer Networks",
                    ].map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="bg-cyan-900/30 text-cyan-300 border-cyan-900/50"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Technical Skills</h3>
              {Object.entries(skills).map(([category, skillList]) => (
                <Card
                  key={category}
                  className="bg-gray-800/80 backdrop-blur-sm border-cyan-900/30 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-gray-100 flex items-center gap-2">
                      {category === "Programming" && <Code className="h-5 w-5 text-green-400" />}
                      {category === "AI/ML" && <Brain className="h-5 w-5 text-purple-400" />}
                      {category === "Web Development" && <ExternalLink className="h-5 w-5 text-cyan-400" />}
                      {category === "Databases" && <Database className="h-5 w-5 text-yellow-400" />}
                      {category === "DevOps & Cloud" && <Cloud className="h-5 w-5 text-orange-400" />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative solutions combining AI/ML with practical applications
            </p>
            <div className="flex justify-center mt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-900/30"
              >
                <a
                  href="https://drive.google.com/file/d/1T14FusBHx5YFASOkVCvvH9h2LexpW589/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/80 backdrop-blur-sm border-cyan-900/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <CardTitle className="text-2xl text-gray-100 mb-2">{project.title}</CardTitle>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400 bg-purple-900/20">
                          {project.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-100 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="text-gray-300 leading-relaxed flex items-start gap-2">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-100 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} className="bg-cyan-900/30 text-cyan-300 border-cyan-900/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-900/20 border border-green-900/30 p-4 rounded-lg">
                      <p className="text-green-400 text-sm font-medium">
                        <strong>Impact:</strong> {project.impact}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button
                        asChild
                        variant="outline"
                        className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900 bg-transparent shadow-sm"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      {project.demo && (
                        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white shadow-sm">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognition for innovation and excellence in technology
            </p>
          </motion.div>

          {/* Achievements */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Awards & Recognition</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800/80 backdrop-blur-sm border-cyan-900/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-yellow-900/30 rounded-lg text-yellow-400">{achievement.icon}</div>
                        <Badge className="bg-yellow-900/30 text-yellow-400 border-yellow-900/50">
                          {achievement.year}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-gray-100">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed mb-4">{achievement.description}</p>
                      {achievement.link && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 bg-transparent"
                        >
                          <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Learn More
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800/80 backdrop-blur-sm border-cyan-900/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-cyan-900/30 rounded-lg text-cyan-400">{cert.icon}</div>
                        <Badge className="bg-cyan-900/30 text-cyan-400 border-cyan-900/50">{cert.year}</Badge>
                      </div>
                      <CardTitle className="text-xl text-gray-100">{cert.title}</CardTitle>
                      <CardDescription className="text-purple-400 font-medium">{cert.issuer}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
<Card className="bg-gray-800/80 backdrop-blur-sm border-cyan-900/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-100 text-center">Leadership & Engagement</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-100">Rotaract Club & CSI Member</h3>
                  <p className="text-gray-300">Engaged in community initiatives and technical knowledge-sharing</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100">T-Hub × Mercedes-Benz Bootcamp Developer</h3>
                  <p className="text-gray-300">
                    Contributing to sustainability solutions in a 150-participant bootcamp (2024-Present)
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/80 backdrop-blur-sm border-cyan-900/30 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-100 text-center">Get In Touch</CardTitle>
                <CardDescription className="text-gray-300 text-center">
                  Feel free to reach out for collaborations, opportunities, or just to say hello!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-900/30 rounded-lg">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-100 font-medium">Email</p>
                    <a href="mailto:amulyasettiguthi@gmail.com" className="text-cyan-400 hover:underline">
                      amulyasettiguthi@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-900/30 rounded-lg">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-100 font-medium">Phone</p>
                    <a href="tel:+917989647700" className="text-green-400 hover:underline">
                      +91 7989647700
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-700/50 rounded-lg">
                    <Github className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-gray-100 font-medium">GitHub</p>
                    <a
                      href="https://github.com/Amulya-sg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:underline"
                    >
                      github.com/Amulya-sg
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-900/30 rounded-lg">
                    <Linkedin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-100 font-medium">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/amulya-setti-guthi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      linkedin.com/in/amulya-setti-guthi
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-900/30 bg-gray-900/80">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Amulya Setti Guthi. Built with Next.js and passion for innovation.</p>
        </div>
      </footer>
    </div>
  )
}
