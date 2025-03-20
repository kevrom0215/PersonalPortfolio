import { CodeBlock } from "@/components/ui/code-block";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const sampleCode = `// Custom React Hook for handling theme switching
import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      return savedTheme 
        ? savedTheme 
        : prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};

export default useTheme;`;

export function CodeSnippet() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#8B5CF6]">Code Sample</span>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
        </h2>
        
        <div 
          ref={ref} 
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <CodeBlock code={sampleCode} language="JavaScript" />
        </div>
      </div>
    </section>
  );
}
