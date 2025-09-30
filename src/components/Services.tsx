import React from 'react';
import { 
  Workflow, 
  Database, 
  MessageSquare, 
  Calendar, 
  FileText, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: 'Lead Automation',
      description: 'Automatically capture, qualify, and nurture leads from multiple sources into your CRM.',
      features: ['Lead scoring automation', 'Multi-channel integration', 'Follow-up sequences'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Data Synchronization',
      description: 'Keep your data consistent across all platforms with real-time sync workflows.',
      features: ['Real-time sync', 'Error handling', 'Data validation'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Communication Workflows',
      description: 'Automate customer communications across email, SMS, and messaging platforms.',
      features: ['Multi-channel messaging', 'Personalized content', 'Response tracking'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Calendar,
      title: 'Scheduling Automation',
      description: 'Streamline appointment booking, reminders, and calendar management.',
      features: ['Smart scheduling', 'Automated reminders', 'Calendar sync'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'Automate document creation, processing, and distribution workflows.',
      features: ['Template automation', 'Digital signatures', 'File organization'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Generate automated reports and dashboards from your business data.',
      features: ['Custom dashboards', 'Automated reporting', 'Data visualization'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive N8N automation solutions tailored to your business needs. 
            From simple workflows to complex enterprise integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-glass group hover:glow">
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${service.color}`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                className="w-full bg-transparent border-glass-border hover:glass group-hover:border-primary/50"
                onClick={scrollToContact}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        <div className="card-glass text-center p-8">
          <h3 className="text-2xl font-bold mb-4">
            Need a <span className="gradient-text">Custom Solution</span>?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business is unique. We'll work with you to design and implement 
            custom N8N workflows that perfectly fit your specific requirements.
          </p>
          <Button 
            onClick={scrollToContact}
            className="btn-hero"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;