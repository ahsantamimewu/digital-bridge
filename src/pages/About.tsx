import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { ArrowRight, Target, Users, Lightbulb, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Fast Delivery",
      description: "Rapid prototyping and agile development cycles to get your ideas to market quickly."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Embedded Team Support",
      description: "Seamlessly integrate our experts into your existing teams and workflows."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Long-term Partnerships",
      description: "Building lasting relationships with digital teams focused on sustainable growth."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Automation-first Thinking",
      description: "Intelligent process optimization to eliminate manual work and boost efficiency."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              About{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Digital Bridge
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up">
              A modern IT consulting company founded to help businesses scale smartly. 
              We build, embed, and automate.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Digital Bridge Limited was born from a simple observation: many businesses 
                  struggle to bridge the gap between innovative ideas and practical implementation. 
                  Traditional consulting often falls short of providing the hands-on, embedded 
                  support that modern teams need.
                </p>
                <p>
                  Based in Toronto, we've built our practice around three core principles: 
                  speed, integration, and automation. We don't just advise—we roll up our 
                  sleeves and become part of your team, working alongside you to build 
                  solutions that scale.
                </p>
                <p>
                  Our approach combines deep technical expertise with modern automation tools, 
                  helping businesses streamline operations while accelerating their digital 
                  transformation journey.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-hero rounded-2xl p-8 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl font-bold mb-4">5+</div>
                  <div className="text-xl">Years of Experience</div>
                  <div className="text-sm opacity-80 mt-2">Building digital solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our methodology is built on four core principles that drive 
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-card transition-smooth border-border/50 hover:border-primary/20 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:animate-float">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's explore how our embedded approach can accelerate your business goals 
            and streamline your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <NavLink to="/contact" className="group">
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <NavLink to="/services">Explore Services</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;