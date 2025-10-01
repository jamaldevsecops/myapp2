import { useEffect, useState } from "react";
import { Shield, Code, Lock, Scan, AlertTriangle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const securityStages = [
  { 
    id: 1,
    icon: Code, 
    emoji: "🔒",
    name: "Secure Code", 
    description: "SAST & Code Review",
  },
  { 
    id: 2,
    icon: Shield, 
    emoji: "🛡️",
    name: "Dependency Scan", 
    description: "SCA & License Check",
  },
  { 
    id: 3,
    icon: Scan, 
    emoji: "📦",
    name: "Container Security", 
    description: "Image Scanning",
  },
  { 
    id: 4,
    icon: Lock, 
    emoji: "🔍",
    name: "DAST", 
    description: "Dynamic Testing",
  },
  { 
    id: 5,
    icon: AlertTriangle, 
    emoji: "⚠️",
    name: "Compliance", 
    description: "Policy Validation",
  },
  { 
    id: 6,
    icon: CheckCircle, 
    emoji: "✅",
    name: "Deploy Secure", 
    description: "Secured Release",
  },
];

export function DevSecOpsPipeline() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % securityStages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-between overflow-x-auto">
        {securityStages.map((stage, index) => (
          <div key={stage.id} className="flex items-center">
            <div
              className={cn(
                "relative flex h-16 w-16 items-center justify-center rounded-full",
                "border-2 transition-all duration-500 min-w-[4rem]",
                activeStage === index
                  ? "border-accent bg-accent/20 shadow-glow scale-110"
                  : "border-glass-border bg-glass/30"
              )}
            >
              <span className="text-2xl">{stage.emoji}</span>
              {activeStage === index && (
                <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
              )}
            </div>
            {index < securityStages.length - 1 && (
              <div className="relative w-full lg:w-20 xl:w-28 h-0.5 mx-2">
                <div className="absolute inset-0 bg-glass-border" />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-accent transition-all duration-1000",
                    activeStage > index ? "w-full" : "w-0"
                  )}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        {securityStages.map((stage, index) => (
          <div
            key={stage.id}
            className={cn(
              "text-center transition-all duration-500 min-w-[4rem]",
              activeStage === index
                ? "text-accent font-semibold"
                : "text-muted-foreground"
            )}
          >
            <p className="text-sm font-medium">{stage.name}</p>
            <p className="text-xs mt-1">{stage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}