import { Code, Server, Wrench, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const frontendSkills = [
  { name: "React", value: 95 },
  { name: "TypeScript", value: 90 },
  { name: "Next.js", value: 85 },
  { name: "CSS/SCSS", value: 92 }
];

const backendSkills = [
  { name: "Node.js", value: 88 },
  { name: "Express", value: 85 },
  { name: "GraphQL", value: 80 },
  { name: "MongoDB", value: 75 }
];

const devopsSkills = [
  { name: "Git/GitHub", value: 92 },
  { name: "Docker", value: 78 },
  { name: "CI/CD", value: 82 },
  { name: "AWS", value: 75 }
];

const softSkills = [
  "Team Leadership",
  "Problem Solving",
  "Communication",
  "Time Management",
  "Mentoring",
  "Adaptability"
];

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; value: number }> | string[];
  colorClass: string;
  delay: number;
  inView: boolean;
}

function SkillCard({ title, icon, skills, colorClass, delay, inView }: SkillCardProps) {
  const isProgressType = typeof skills[0] !== 'string';
  
  return (
    <div 
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transition-all duration-700 delay-${delay} ${
        inView 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-10 scale-95"
      } hover:scale-105`}
    >
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center mr-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {isProgressType ? (
          (skills as Array<{ name: string; value: number }>).map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                <span className="text-gray-700 dark:text-gray-300">{skill.value}%</span>
              </div>
              <Progress value={skill.value} barColor={colorClass.includes('blue') ? 'bg-primary' : colorClass.includes('green') ? 'bg-[#10B981]' : 'bg-[#8B5CF6]'} />
            </div>
          ))
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {(skills as string[]).map((skill) => (
              <div key={skill} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-center">
                <span className="text-gray-800 dark:text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Skills() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#8B5CF6]">Skills & Expertise</span>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
        </h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <SkillCard 
            title="Frontend Development" 
            icon={<Code className="text-primary text-xl" />} 
            skills={frontendSkills} 
            colorClass="bg-blue-100 dark:bg-blue-900"
            delay={100}
            inView={inView}
          />
          
          <SkillCard 
            title="Backend Development" 
            icon={<Server className="text-[#10B981] text-xl" />} 
            skills={backendSkills} 
            colorClass="bg-green-100 dark:bg-green-900"
            delay={200}
            inView={inView}
          />
          
          <SkillCard 
            title="DevOps & Tools" 
            icon={<Wrench className="text-[#8B5CF6] text-xl" />} 
            skills={devopsSkills} 
            colorClass="bg-purple-100 dark:bg-purple-900"
            delay={300}
            inView={inView}
          />
          
          <SkillCard 
            title="Soft Skills" 
            icon={<Users className="text-yellow-500 text-xl" />} 
            skills={softSkills} 
            colorClass="bg-yellow-100 dark:bg-yellow-900"
            delay={400}
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
}
