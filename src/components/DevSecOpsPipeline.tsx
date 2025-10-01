import { Shield, Code, Lock, Scan, AlertTriangle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const securityStages = [
  { 
    icon: Code, 
    name: "Secure Code", 
    description: "SAST & Code Review",
    color: "primary"
  },
  { 
    icon: Shield, 
    name: "Dependency Scan", 
    description: "SCA & License Check",
    color: "accent"
  },
  { 
    icon: Scan, 
    name: "Container Security", 
    description: "Image Scanning",
    color: "primary"
  },
  { 
    icon: Lock, 
    name: "DAST", 
    description: "Dynamic Testing",
    color: "accent"
  },
  { 
    icon: AlertTriangle, 
    name: "Compliance", 
    description: "Policy Validation",
    color: "primary"
  },
  { 
    icon: CheckCircle, 
    name: "Deploy Secure", 
    description: "Secured Release",
    color: "accent"
  },
];

export function DevSecOpsPipeline() {
  return (
    <div className="relative">
      {/* Connection line */}
      <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-accent -translate-y-1/2 hidden md:block" />
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {securityStages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <Card
              key={stage.name}
              className="relative bg-glass/50 border-glass-border hover:bg-glass hover:border-primary/50 backdrop-blur-xl p-4 text-center group transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Pulse effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className={`rounded-full p-3 bg-${stage.color}/10 border border-${stage.color}/20 group-hover:border-${stage.color}/50 transition-all duration-300`}>
                  <Icon className={`h-6 w-6 text-${stage.color} group-hover:text-${stage.color}-glow transition-colors`} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{stage.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{stage.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}