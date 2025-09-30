import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Automate Your Business with N8N</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your Business with
              <span className="block gradient-text">Smart Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AfterRender helps you automate workflows, save time, and scale efficiently using powerful N8N automation solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={scrollToContact}
              className="btn-hero group"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-glass-border text-foreground hover:glass"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="card-glass text-center">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-muted-foreground">Workflows Automated</div>
            </div>
            <div className="card-glass text-center">
              <div className="text-3xl font-bold gradient-text">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="card-glass text-center">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-muted-foreground">Automation Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;