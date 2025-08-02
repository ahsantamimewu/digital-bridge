import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export const ProjectCard = ({ title, description, tags, image }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-card transition-smooth border-border/50 hover:border-primary/20">
      <div className="aspect-video bg-gradient-subtle relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-primary">
            <div className="text-white text-lg font-semibold opacity-80">
              {title.split(' ').map(word => word[0]).join('').toUpperCase()}
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};