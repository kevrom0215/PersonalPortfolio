import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FaGithub, FaLinkedin, FaTwitter, FaDev } from "react-icons/fa";

// Form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { toast } = useToast();
  const { ref: formRef, inView: formInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { ref: infoRef, inView: infoInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    mutate(data);
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#8B5CF6]">Get In Touch</span>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div 
            ref={infoRef} 
            className={`bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 transition-all duration-700 ${
              infoInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">Email</h4>
                  <a href="mailto:john.doe@example.com" className="text-primary hover:text-blue-700 transition-colors">john.doe@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</h4>
                  <a href="tel:+11234567890" className="text-primary hover:text-blue-700 transition-colors">+1 (123) 456-7890</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">San Francisco, California</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="https://dev.to" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Dev.to"
                >
                  <FaDev />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            ref={formRef} 
            className={`bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 transition-all duration-700 ${
              formInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Your name" 
                          className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          placeholder="Your email" 
                          className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Subject of your message" 
                          className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Your message" 
                          rows={5} 
                          className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : (
                    <>
                      <span>Send Message</span>
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
