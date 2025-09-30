import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about your N8N automation services.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Get Started</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with smart automation? 
            Contact us today for a free consultation and custom workflow design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-glass">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-muted/50 border-glass-border focus:border-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-muted/50 border-glass-border focus:border-primary"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-muted/50 border-glass-border focus:border-primary"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your project *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-muted/50 border-glass-border focus:border-primary resize-none"
                  placeholder="Describe the automation challenges you're facing and what you'd like to achieve..."
                />
              </div>
              <Button type="submit" className="btn-hero w-full">
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-glass">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">hello@afterrender.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">San Francisco, CA</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-muted-foreground">Mon-Fri 9AM-6PM PST</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-glass text-center">
              <div className="mb-4">
                <MessageCircle className="w-12 h-12 text-green-500 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick WhatsApp Chat</h3>
              <p className="text-muted-foreground mb-4">
                Get instant answers to your automation questions
              </p>
              <Button 
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white w-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            <div className="card-glass text-center">
              <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Schedule a 30-minute call to discuss your automation needs
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;