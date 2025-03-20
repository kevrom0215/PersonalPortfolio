import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function About() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#8B5CF6]">About Me</span>
            <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
          </h2>
          
          <div 
            ref={ref} 
            className={`transform transition-all duration-700 ${
              inView 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I'm a passionate software engineer with 5+ years of experience specializing in frontend development and modern JavaScript frameworks. My journey in tech started when I built my first website at 16, and I've been hooked ever since.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Currently, I work at <span className="text-primary font-medium">TechCorp</span> where I lead development on user-facing applications that serve millions of users. I focus on creating accessible, performant, and visually appealing web experiences.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              When I'm not coding, you'll find me hiking, reading sci-fi novels, or experimenting with new technologies in my home lab. I'm always eager to learn and share knowledge with the community through my blog and open-source contributions.
            </p>
          </div>
          
          <div 
            className={`mt-10 flex justify-center transform transition-all duration-700 delay-300 ${
              inView 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <a 
              href="/john-doe-resume.pdf" 
              className="flex items-center text-primary hover:text-blue-700 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                // In a real app, this would download the resume
                alert("Resume download would start here");
              }}
            >
              <span className="mr-2">Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
