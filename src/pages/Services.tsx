import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight, Palette, Code, Users, Zap, Link, Database, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: "UI/UX Design & Prototyping",
      description: "Rapid product interface design with user-first thinking."
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Full-Stack Development",
      description: "Robust web apps built with modern frameworks and best practices."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Embedded Engineering Talent",
      description: "Augment your team with vetted, on-demand developers."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Process Automation (n8n, Zapier, AI)",
      description: "Automate manual operations and workflows using no-code tools and LLMs."
    },
    {
      icon: <Link className="w-6 h-6 text-white" />,
      title: "Internal Tools & API Integrations",
      description: "Custom tools and seamless system connections for internal efficiency."
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: "Data Engineering",
      description: "Build robust data pipelines, ETL processes, and data warehouses for scalable analytics."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Data Analytics & Intelligence",
      description: "Transform raw data into actionable insights through advanced analytics and visualization."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up">
              Comprehensive technology solutions designed to accelerate your business growth 
              through smart automation, expert development, and strategic partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in-up bg-card rounded-lg border p-6 hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach that ensures fast delivery and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Discovery", description: "Understanding your challenges and objectives" },
              { number: "02", title: "Strategy", description: "Crafting the optimal technical approach" },
              { number: "03", title: "Execution", description: "Building and iterating with your team" },
              { number: "04", title: "Optimization", description: "Continuous improvement and scaling" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss which services align best with your current needs and 
            long-term business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <NavLink to="/contact" className="group">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;