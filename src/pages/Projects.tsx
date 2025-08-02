import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FinTech Startup UI/UX Design",
      description: "Designed a comprehensive digital banking platform with modern UI/UX patterns, including mobile-first design, accessibility features, and seamless user flows. The platform increased user engagement by 40% and reduced support tickets by 25%.",
      tags: ["Product", "UI/UX Design", "Mobile-First", "Accessibility"],
    },
    {
      title: "Operations Team Automation",
      description: "Built custom n8n workflows to automate invoice processing, customer onboarding, and inventory management. Reduced manual processing time by 75% and eliminated human errors in data entry across multiple systems.",
      tags: ["Automation", "n8n", "Process Optimization", "Integration"],
    },
    {
      title: "Scale-up Engineering Support",
      description: "Embedded senior full-stack developers into a growing startup's engineering team for 8 months. Helped scale their platform to handle 10x traffic growth while maintaining 99.9% uptime and implementing robust CI/CD practices.",
      tags: ["Team Augmentation", "Full-Stack", "DevOps", "Scaling"],
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
                Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up">
              Real solutions for real businesses. Here's how we've helped our clients 
              bridge their ideas with practical technology implementations.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Measurable Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our projects deliver tangible business outcomes that matter to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                75%
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                Time Savings
              </div>
              <div className="text-muted-foreground">
                Average reduction in manual processing time
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                40%
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                Engagement Boost
              </div>
              <div className="text-muted-foreground">
                Increase in user engagement through better UX
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                10x
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                Scale Growth
              </div>
              <div className="text-muted-foreground">
                Platform scaling capacity achieved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Want to See Detailed Case Studies?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch to learn more about our project methodology, technical approaches, 
            and the specific strategies we used to achieve these results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <NavLink to="/contact" className="group">
                Request Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <NavLink to="/services">Explore Our Services</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;