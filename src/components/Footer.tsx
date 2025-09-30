import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
             
                     <img className='h-5 w-40' src="image.png" alt="" />

            </div>
            <p className="text-muted-foreground">
              Transforming businesses through intelligent N8N automation workflows. 
              Save time, reduce costs, and scale efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('#home')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#integrations')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Integrations
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Lead Automation</li>
              <li>Data Synchronization</li>
              <li>Communication Workflows</li>
              <li>Scheduling Automation</li>
              <li>Document Processing</li>
              <li>Analytics & Reporting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">contact@afterrender.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+92 323 5100033</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Karachi , RJ Mall Gate No 3</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-glass-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 AfterRender. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;