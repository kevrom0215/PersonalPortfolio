import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

type ProjectCategory = "all" | "frontend" | "fullstack" | "mobile";

interface ProjectProps {
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "all">;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  index: number;
  inView: boolean;
}

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A complete e-commerce solution with product catalog, user authentication, and payment processing integration.",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Dashboard UI Kit",
    description: "A comprehensive UI kit for data-rich dashboards with customizable components and dark mode support.",
    category: "frontend",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Fitness Tracker App",
    description: "A cross-platform mobile app for tracking workouts, nutrition, and health metrics with detailed analytics.",
    category: "mobile",
    technologies: ["React Native", "Redux", "Firebase", "Health APIs"],
    imageUrl: "https://images.unsplash.com/photo-1604772659841-a1612f9ed4d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Task Management System",
    description: "A collaborative task management tool with real-time updates, file sharing, and team workspaces.",
    category: "fullstack",
    technologies: ["Next.js", "Express", "PostgreSQL", "Socket.io"],
    imageUrl: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Interactive Data Visualization",
    description: "A collection of interactive data visualizations for financial and statistical analysis.",
    category: "frontend",
    technologies: ["Vue.js", "D3.js", "Canvas", "WebGL"],
    imageUrl: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "AR Navigation App",
    description: "A mobile app using augmented reality to provide intuitive navigation and location-based information.",
    category: "mobile",
    technologies: ["Flutter", "ARKit", "ARCore", "Maps API"],
    imageUrl: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    demoUrl: "#",
    githubUrl: "#",
  }
];

function Project({ title, description, category, technologies, imageUrl, demoUrl, githubUrl, index, inView }: ProjectProps) {
  const delay = index * 100;
  
  const categoryColors = {
    frontend: "bg-blue-500",
    fullstack: "bg-primary",
    mobile: "bg-green-500"
  };
  
  const categoryLabels = {
    frontend: "Frontend",
    fullstack: "Full Stack",
    mobile: "Mobile"
  };
  
  return (
    <div 
      className={`bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-700 delay-${delay} ${
        inView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      } hover:-translate-y-2`}
      data-category={category}
    >
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-0 right-0 p-2 ${categoryColors[category]} text-white text-xs font-medium rounded-bl-lg`}>
          {categoryLabels[category]}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="skill" className="py-1 px-2 rounded">{tech}</Badge>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a 
            href={demoUrl} 
            className="text-primary hover:text-blue-700 flex items-center transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Demo</span>
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
          <a 
            href={githubUrl} 
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary flex items-center transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-1 h-4 w-4" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#8B5CF6]">Featured Projects</span>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is a unique challenge that I tackled with passion and technical expertise.
        </p>
        
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex space-x-2" id="project-filters">
            {(["all", "frontend", "fullstack", "mobile"] as ProjectCategory[]).map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={`capitalize ${activeFilter !== category ? "text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600" : ""}`}
              >
                {category === "all" ? "All" : category}
              </Button>
            ))}
          </div>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Project 
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category as Exclude<ProjectCategory, "all">}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              index={index}
              inView={inView}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button onClick={() => {
            // In a real app, this would navigate to a dedicated projects page
            alert("This would navigate to a full projects page");
          }}>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
