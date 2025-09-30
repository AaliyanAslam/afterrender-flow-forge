import React from 'react';
import { CheckCircle } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    {
      name: 'Google Sheets',
      description: 'Spreadsheet automation',
      logo: '🔗',
      category: 'Productivity'
    },
    {
      name: 'Slack',
      description: 'Team communication',
      logo: '💬',
      category: 'Communication'
    },
    {
      name: 'Notion',
      description: 'Workspace organization',
      logo: '📝',
      category: 'Productivity'
    },
    {
      name: 'WhatsApp',
      description: 'Messaging automation',
      logo: '📱',
      category: 'Communication'
    },
    {
      name: 'HubSpot',
      description: 'CRM integration',
      logo: '🎯',
      category: 'CRM'
    },
    {
      name: 'Salesforce',
      description: 'Sales automation',
      logo: '☁️',
      category: 'CRM'
    },
    {
      name: 'Stripe',
      description: 'Payment processing',
      logo: '💳',
      category: 'Finance'
    },
    {
      name: 'PayPal',
      description: 'Payment gateway',
      logo: '💰',
      category: 'Finance'
    },
    {
      name: 'Mailchimp',
      description: 'Email marketing',
      logo: '📧',
      category: 'Marketing'
    },
    {
      name: 'Discord',
      description: 'Community management',
      logo: '🎮',
      category: 'Communication'
    },
    {
      name: 'Telegram',
      description: 'Bot automation',
      logo: '✈️',
      category: 'Communication'
    },
    {
      name: 'Zapier',
      description: 'Workflow integration',
      logo: '⚡',
      category: 'Automation'
    },
    {
      name: 'Airtable',
      description: 'Database management',
      logo: '🗂️',
      category: 'Productivity'
    },
    {
      name: 'Trello',
      description: 'Project management',
      logo: '📋',
      category: 'Productivity'
    },
    {
      name: 'GitHub',
      description: 'Code repository',
      logo: '🐙',
      category: 'Development'
    },
    {
      name: 'WordPress',
      description: 'Content management',
      logo: '🌐',
      category: 'Website'
    }
  ];

  const categories = ['All', 'Productivity', 'Communication', 'CRM', 'Finance', 'Marketing', 'Automation', 'Development', 'Website'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredIntegrations = selectedCategory === 'All' 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory);

  return (
    <section id="integrations" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Integrations</span> We Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect your favorite tools and platforms with powerful N8N automation workflows. 
            We support hundreds of integrations to streamline your business processes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground'
                  : 'glass hover:bg-muted/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {filteredIntegrations.map((integration, index) => (
            <div key={index} className="card-glass text-center group hover:glow">
              <div className="text-3xl mb-3">{integration.logo}</div>
              <h3 className="font-semibold text-sm mb-1">{integration.name}</h3>
              <p className="text-xs text-muted-foreground">{integration.description}</p>
              <div className="mt-2">
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground">
                  {integration.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card-glass text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Seamless Connection</h3>
            <p className="text-muted-foreground">
              Connect any platform with N8N's powerful API integrations and custom webhooks.
            </p>
          </div>
          <div className="card-glass text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Sync</h3>
            <p className="text-muted-foreground">
              Keep your data synchronized across all platforms with instant updates and notifications.
            </p>
          </div>
          <div className="card-glass text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Workflows</h3>
            <p className="text-muted-foreground">
              Design complex automation workflows that perfectly match your business processes.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see your platform? We can integrate with any service that has an API.
          </p>
          <button className="text-primary hover:text-primary-glow transition-colors duration-200 font-semibold">
            Request Custom Integration →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;