
import { Link } from 'react-router-dom';
import { Code, Layers, Database, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Codebase Migration",
      description: "Transitioning from one programming language to another with precision and efficiency.",
      examples: ["PHP to Go", "Python 2 to 3", "Java to Kotlin", "JavaScript to TypeScript"],
      href: "/codebase",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Layers,
      title: "Framework Modernization",
      description: "Moving from older frameworks to modern alternatives while preserving functionality.",
      examples: ["Angular.js to React", "Django to FastAPI", "Vue 2 to Vue 3", "Express to Fastify"],
      href: "/framework",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Database,
      title: "Database & Cloud Migration",
      description: "Seamlessly shifting your data and infrastructure without disrupting operations.",
      examples: ["MySQL to PostgreSQL", "On-premise to AWS", "MongoDB Atlas", "Redis Clustering"],
      href: "/database",
      gradient: "from-green-600 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Migration Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We cover the full spectrum of modernization to help your business evolve
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-foreground">Popular Migrations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.examples.map((example, exampleIndex) => (
                      <span 
                        key={exampleIndex}
                        className="text-xs px-2 py-1 bg-accent rounded-md text-accent-foreground"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  asChild 
                  variant="ghost" 
                  className="w-full mt-6 group-hover:bg-accent/50 transition-colors"
                >
                  <Link to={service.href} className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
