
import { Layers, CheckCircle, ArrowRight, Rocket, RefreshCw, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Framework = () => {
  const migrations = [
    { from: "Angular.js", to: "React", popularity: "High", difficulty: "Medium" },
    { from: "Django", to: "FastAPI", popularity: "High", difficulty: "Low" },
    { from: "Vue 2", to: "Vue 3", popularity: "Medium", difficulty: "Low" },
    { from: "Express", to: "Fastify", popularity: "Medium", difficulty: "Low" },
    { from: "Rails", to: "Next.js", popularity: "Medium", difficulty: "High" },
    { from: "Laravel", to: "NestJS", popularity: "Low", difficulty: "Medium" },
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Modern Features",
      description: "Access the latest framework features, patterns, and best practices for better development experience."
    },
    {
      icon: Gauge,
      title: "Better Performance",
      description: "Leverage performance optimizations and modern architecture patterns for faster applications."
    },
    {
      icon: RefreshCw,
      title: "Active Ecosystem",
      description: "Benefit from active community support, regular updates, and extensive plugin ecosystems."
    }
  ];

  const challenges = [
    "Component Architecture Changes",
    "State Management Migration", 
    "Routing System Updates",
    "API Integration Patterns",
    "Testing Framework Adaptation",
    "Build Tool Configuration"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-purple-50/20 py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Layers className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Framework Modernization
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Upgrade your applications to modern frameworks while preserving functionality 
              and improving performance, maintainability, and developer experience.
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg"
            >
              Plan Your Modernization
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Modernize Your Framework?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay competitive with modern development practices and improved user experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-3xl font-bold mb-4">Popular Framework Migrations</h2>
            <p className="text-lg text-muted-foreground">
              We help you transition between all major web frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {migrations.map((migration, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-sm bg-background px-3 py-1 rounded">
                        {migration.from}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      <span className="font-mono text-sm bg-primary/10 text-primary px-3 py-1 rounded">
                        {migration.to}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Popularity:</span>
                      <span className={`font-medium ${
                        migration.popularity === 'High' ? 'text-green-600' :
                        migration.popularity === 'Medium' ? 'text-yellow-600' : 'text-blue-600'
                      }`}>
                        {migration.popularity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Difficulty:</span>
                      <span className={`font-medium ${
                        migration.difficulty === 'Low' ? 'text-green-600' :
                        migration.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {migration.difficulty}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Migration Challenges We Solve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experts handle the complex aspects of framework migration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-card rounded-lg border">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{challenge}</h3>
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

export default Framework;
