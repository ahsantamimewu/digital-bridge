import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Truck, 
  Brain, 
  ShoppingCart, 
  Cloud, 
  Phone, 
  GraduationCap,
  Users,
  BarChart3,
  Shield
} from "lucide-react";

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "Digital solutions for healthcare providers, patient management systems, telemedicine platforms, and medical data analytics.",
    technologies: ["HIPAA Compliance", "Electronic Health Records", "Telemedicine", "Medical Imaging"],
    projects: "15+ Projects"
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Supply chain optimization, fleet management, warehouse automation, and real-time tracking solutions.",
    technologies: ["IoT Integration", "Route Optimization", "Inventory Management", "Real-time Tracking"],
    projects: "12+ Projects"
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Machine learning models, natural language processing, computer vision, and AI-powered automation solutions.",
    technologies: ["Machine Learning", "NLP", "Computer Vision", "Deep Learning"],
    projects: "20+ Projects"
  },
  {
    icon: ShoppingCart,
    title: "Consumer Marketplace",
    description: "E-commerce platforms, marketplace solutions, payment gateways, and customer experience optimization.",
    technologies: ["E-commerce", "Payment Integration", "Mobile Commerce", "Analytics"],
    projects: "25+ Projects"
  },
  {
    icon: Cloud,
    title: "Software as a Service (SaaS)",
    description: "Cloud-based applications, subscription management, multi-tenant architectures, and scalable platforms.",
    technologies: ["Cloud Architecture", "Multi-tenancy", "API Development", "Scalability"],
    projects: "30+ Projects"
  },
  {
    icon: Phone,
    title: "Telecommunication",
    description: "Network management systems, communication platforms, billing solutions, and infrastructure optimization.",
    technologies: ["Network Management", "VoIP", "Billing Systems", "Infrastructure"],
    projects: "8+ Projects"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Learning management systems, educational platforms, student information systems, and online course delivery.",
    technologies: ["LMS", "Student Management", "Online Learning", "Assessment Tools"],
    projects: "18+ Projects"
  }
];

const stats = [
  { icon: Users, label: "Clients Served", value: "100+" },
  { icon: BarChart3, label: "Industries", value: "7+" },
  { icon: Shield, label: "Years Experience", value: "8+" }
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We've delivered innovative digital solutions across diverse sectors, 
            bringing deep industry expertise and cutting-edge technology to solve complex challenges.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-smooth border-border/50 hover:border-primary/20"
              >
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 mx-auto">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {industry.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {industry.projects}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join the companies that have already revolutionized their operations with our expertise. 
            Let's discuss how we can help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-glow transition-smooth"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-smooth"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}