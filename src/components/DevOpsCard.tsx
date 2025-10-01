import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DevOpsCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  delay?: number;
}

export function DevOpsCard({ title, description, image, tags, delay = 0 }: DevOpsCardProps) {
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden",
        "border-glass-border/50 bg-gradient-glass backdrop-blur-xl",
        "hover:border-primary/50 hover:shadow-glow",
        "transition-all duration-500 animate-fade-in",
        "hover:scale-[1.02] hover:-translate-y-1"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        </div>
      )}
      <CardHeader className={cn("relative", image && "pb-2")}>
        <CardTitle className="text-xl font-bold text-foreground">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}