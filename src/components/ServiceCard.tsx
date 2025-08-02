import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-smooth border-border/50 hover:border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-float">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};