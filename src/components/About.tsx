import React from 'react';
import { Target, Users, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We help businesses automate repetitive tasks to focus on what matters most - growth and innovation.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our certified N8N specialists have years of experience building complex automation workflows.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of automation trends to deliver cutting-edge solutions for your business needs.'
    },
    {
      icon: Zap,
      title: 'Fast Results',
      description: 'See immediate improvements in efficiency with our rapid deployment and optimization strategies.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">AfterRender</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about helping businesses unlock their potential through intelligent automation. 
            Our team specializes in N8N workflow automation to streamline operations and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Transforming Businesses Through <span className="gradient-text">Smart Automation</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At AfterRender, we believe that every business deserves to operate at peak efficiency. 
              That's why we've dedicated ourselves to mastering N8N automation technology, creating 
              custom workflows that eliminate manual processes and reduce operational overhead.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From small startups to enterprise companies, we've helped hundreds of organizations 
              save thousands of hours through intelligent automation solutions that scale with their growth.
            </p>
          </div>
          <div className="relative">
            <div className="card-glass p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Efficiency Increase</span>
                  <span className="text-2xl font-bold gradient-text">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-[85%]"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Time Saved</span>
                  <span className="text-2xl font-bold gradient-text">40hrs/week</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-[90%]"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Cost Reduction</span>
                  <span className="text-2xl font-bold gradient-text">60%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card-glass text-center group">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;