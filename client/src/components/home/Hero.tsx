import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { TypingAnimation } from "@/components/ui/typing-animation";
import Kenneth from "../../assets/IMG_4053.jpg";

export function Hero() {
  const roles = [
    "Software Engineer",
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm Kenneth Araga
              <br />
              <span className="text-primary">
                <TypingAnimation
                  text={roles}
                  typingSpeed={100}
                  backspaceSpeed={100}
                  delayAfterText={2000}
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
              I build exceptional and accessible digital experiences for the
              web.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get in touch <FaArrowRight className="ml-2" />
              </Button>
              {/* <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white dark:text-white"
                onClick={() => {
                  const projectsSection = document.querySelector('#projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View my work
              </Button> */}
            </div>

            <div className="flex mt-10 space-x-4">
              <a
                href="https://github.com/kevrom0215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/kenneth-araga-81a4261b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#10B981] rounded-lg opacity-20"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[#8B5CF6] rounded-lg opacity-20"></div>
              <div className="rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <div className="relative">
                  <svg
                    className="w-full h-auto"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="500" height="500" fill="black" />
                    <path
                      d="M250,60 C147.16,60 60,147.16 60,250 C60,352.84 147.16,440 250,440 C352.84,440 440,352.84 440,250 C440,147.16 352.84,60 250,60 Z"
                      fill="#4F46E5"
                    />
                    <path
                      d="M200,290 C200,262.4 222.4,240 250,240 C277.6,240 300,262.4 300,290 C300,317.6 277.6,340 250,340 C222.4,340 200,317.6 200,290 Z"
                      fill="#312E81"
                    />
                  </svg>
                  <img
                    src={Kenneth}
                    alt="profile-pic"
                    style={{objectFit:"cover"}}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
