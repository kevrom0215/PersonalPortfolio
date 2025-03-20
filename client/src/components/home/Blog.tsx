import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  url: string;
  index: number;
  inView: boolean;
}

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn strategies for building maintainable and scalable React applications with proper architecture and code organization.",
    date: "May 15, 2023",
    category: "React",
    imageUrl: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    id: 2,
    title: "Modern CSS Techniques for Better UIs",
    excerpt: "Explore advanced CSS techniques like CSS Grid, Custom Properties, and container queries to build responsive interfaces.",
    date: "April 28, 2023",
    category: "CSS",
    imageUrl: "https://images.unsplash.com/photo-1603185430065-fca0c7df1def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    id: 3,
    title: "Integrating AI Tools into Dev Workflows",
    excerpt: "Discover how AI-powered tools can enhance productivity and code quality in modern software development.",
    date: "April 10, 2023",
    category: "AI",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    url: "#",
  }
];

const categoryColors: Record<string, string> = {
  "React": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "CSS": "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
  "AI": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
};

function BlogPost({ title, excerpt, date, category, imageUrl, url, index, inView }: BlogPostProps) {
  const delay = index * 100;
  
  return (
    <div 
      className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-700 delay-${delay} ${
        inView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      } hover:-translate-y-2`}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <div className="flex items-center mb-3 justify-between">
          <Badge className={categoryColors[category] || "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"}>
            {category}
          </Badge>
          <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {excerpt}
        </p>
        
        <a 
          href={url} 
          className="text-primary hover:text-blue-700 flex items-center transition-colors"
        >
          <span>Read Article</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function Blog() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#8B5CF6]">Latest Articles</span>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          I write about web development, software engineering practices, and technology trends. Check out my latest articles below.
        </p>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              imageUrl={post.imageUrl}
              url={post.url}
              index={index}
              inView={inView}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button onClick={() => {
            // In a real app, this would navigate to the blog page
            alert("This would navigate to a full blog page");
          }}>
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
