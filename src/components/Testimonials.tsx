import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      company: 'TechFlow Solutions',
      content: 'AfterRender transformed our lead management process. We now automatically capture and qualify leads from 5 different sources, saving us 20+ hours per week.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'GrowthHack Inc.',
      content: 'The WhatsApp automation they built for our customer service is incredible. Response times dropped from hours to minutes, and customer satisfaction increased by 40%.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Brand Boost Agency',
      content: 'Their Slack integration for project management notifications is a game-changer. Our team stays perfectly aligned without constant manual updates.',
      rating: 5,
      image: '👩‍🎨'
    },
    {
      name: 'David Park',
      role: 'CTO',
      company: 'DataSync Pro',
      content: 'AfterRender connected our entire tech stack seamlessly. Salesforce, HubSpot, and our custom CRM now work together like a single system.',
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: 'Lisa Thompson',
      role: 'Small Business Owner',
      company: 'Creative Studios',
      content: 'As a small business, automation seemed out of reach. AfterRender made it affordable and easy. Our invoicing and follow-ups are now completely automated.',
      rating: 5,
      image: '👩‍🎯'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses are saying about 
            our N8N automation solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="card-glass p-8 md:p-12 text-center relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-lg md:text-xl text-foreground mb-8 relative z-10">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="text-4xl">{testimonials[currentIndex].image}</div>
              <div className="text-left">
                <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                <div className="text-sm text-primary">{testimonials[currentIndex].company}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="hover:bg-muted/50"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="hover:bg-muted/50"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">85%</div>
            <div className="text-muted-foreground">Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;