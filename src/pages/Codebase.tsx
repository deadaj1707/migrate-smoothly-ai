
import { Code, CheckCircle, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Codebase = () => {
  const migrations = [
    { from: "PHP", to: "Go", complexity: "High", timeline: "8-12 weeks" },
    { from: "Python 2", to: "Python 3", complexity: "Medium", timeline: "4-6 weeks" },
    { from: "Java", to: "Kotlin", complexity: "Medium", timeline: "6-8 weeks" },
    { from: "JavaScript", to: "TypeScript", complexity: "Low", timeline: "2-4 weeks" },
    { from: "Ruby", to: "Go", complexity: "High", timeline: "10-14 weeks" },
    { from: "C#", to: "Java", complexity: "High", timeline: "12-16 weeks" },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Performance Boost",
      description: "Experience significant performance improvements with modern language features and optimizations."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Benefit from the latest security features and patches in modern programming languages."
    },
    {
      icon: Clock,
      title: "Future-Proof",
      description: "Ensure long-term maintainability with languages that have active development and community support."
    }
  ];

  const process = [
    "Code Analysis & Mapping",
    "Dependency Assessment", 
    "Automated Translation",
    "Testing & Validation",
    "Performance Optimization",
    "Deployment & Monitoring"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-blue-50/20 py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Codebase Migration Services
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Seamlessly transition your entire codebase from one programming language to another 
              with our AI-powered migration tools and expert guidance.
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg"
            >
              Start Migration Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Migrate Your Codebase?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern languages offer better performance, security, and developer experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Migrations */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Popular Migration Paths</h2>
            <p className="text-lg text-muted-foreground">
              We support migrations between all major programming languages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {migrations.map((migration, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-sm bg-background px-2 py-1 rounded">
                        {migration.from}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                        {migration.to}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Complexity:</span>
                      <span className={`font-medium ${
                        migration.complexity === 'Low' ? 'text-green-600' :
                        migration.complexity === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {migration.complexity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{migration.timeline}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Migration Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring zero data loss and minimal downtime
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-card rounded-lg border">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Codebase;
