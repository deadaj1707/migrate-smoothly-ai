
import { Database, CheckCircle, ArrowRight, Cloud, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DatabasePage = () => {
  const migrations = [
    { from: "MySQL", to: "PostgreSQL", type: "Database", complexity: "Medium" },
    { from: "On-Premise", to: "AWS RDS", type: "Cloud", complexity: "High" },
    { from: "MongoDB", to: "MongoDB Atlas", type: "Cloud", complexity: "Low" },
    { from: "Redis", to: "Redis Cluster", type: "Scaling", complexity: "Medium" },
    { from: "Oracle", to: "PostgreSQL", type: "Database", complexity: "High" },
    { from: "SQL Server", to: "AWS Aurora", type: "Cloud", complexity: "Medium" },
  ];

  const benefits = [
    {
      icon: Cloud,
      title: "Cloud Scalability",
      description: "Leverage cloud infrastructure for automatic scaling, global distribution, and high availability."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Benefit from enterprise-grade security features, encryption, and compliance certifications."
    },
    {
      icon: Zap,
      title: "Improved Performance",
      description: "Experience faster query execution, optimized storage, and better resource utilization."
    }
  ];

  const services = [
    "Database Schema Migration",
    "Data Transfer & Validation", 
    "Cloud Infrastructure Setup",
    "Performance Optimization",
    "Security Configuration",
    "Monitoring & Alerting"
  ];

  const cloudProviders = [
    { name: "AWS", services: ["RDS", "DynamoDB", "Aurora", "DocumentDB"] },
    { name: "Google Cloud", services: ["Cloud SQL", "Firestore", "BigQuery", "Spanner"] },
    { name: "Azure", services: ["SQL Database", "Cosmos DB", "MySQL", "PostgreSQL"] },
    { name: "MongoDB Atlas", services: ["Managed MongoDB", "Search", "Analytics", "Realm"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-green-50/20 py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Database className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Database & Cloud Migration
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Seamlessly migrate your data and infrastructure to modern cloud platforms 
              without disrupting operations or compromising data integrity.
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-6 text-lg"
            >
              Start Infrastructure Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Benefits of Cloud Migration</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your data infrastructure for the modern era
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
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
              We support migrations across all major database and cloud platforms
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
                      <span className="text-muted-foreground">Type:</span>
                      <span className="font-medium text-green-600">
                        {migration.type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Complexity:</span>
                      <span className={`font-medium ${
                        migration.complexity === 'Low' ? 'text-green-600' :
                        migration.complexity === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {migration.complexity}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Supported Cloud Platforms</h2>
            <p className="text-lg text-muted-foreground">
              We work with all major cloud providers and managed services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {cloudProviders.map((provider, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center">{provider.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {provider.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Migration Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end support for your database and infrastructure migration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-card rounded-lg border">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold">{service}</h3>
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

export default DatabasePage;
