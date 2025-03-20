import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message in the database
      const message = await storage.saveContactMessage(validatedData);
      
      // In a production app, you would send an email notification
      // Using nodemailer (already a dependency)
      try {
        // Example of how you would set this up (with environment variables)
        // Not actually sending emails in this demo
        /*
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.example.com",
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER || "user@example.com",
            pass: process.env.SMTP_PASS || "password",
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_FROM || '"Contact Form" <no-reply@example.com>',
          to: process.env.EMAIL_TO || "recipient@example.com",
          subject: `New Contact Form Message: ${validatedData.subject}`,
          text: `
            Name: ${validatedData.name}
            Email: ${validatedData.email}
            
            Message:
            ${validatedData.message}
          `,
          html: `
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
        });
        */
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Continue with the response, as we still saved the message
      }
      
      // Return success
      res.status(201).json({ 
        success: true, 
        message: "Contact message received successfully" 
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false, 
          errors: error.errors 
        });
      }
      
      // Handle other errors
      console.error('Error saving contact message:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to process your message" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
