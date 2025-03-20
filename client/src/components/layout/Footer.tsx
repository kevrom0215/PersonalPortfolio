import { Link } from "wouter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-primary">John</span>
              <span className="text-white">Doe</span>
            </Link>
            <p className="text-gray-400 mt-2">Software Engineer & Web Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors" 
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">&copy; {currentYear} John Doe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
