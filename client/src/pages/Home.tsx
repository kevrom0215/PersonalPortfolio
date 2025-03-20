import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Skills } from "@/components/home/Skills";
import { Projects } from "@/components/home/Projects";
import { Blog } from "@/components/home/Blog";
import { CodeSnippet } from "@/components/home/CodeSnippet";
import { Contact } from "@/components/home/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scroll to element if URL has hash on load
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <CodeSnippet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
