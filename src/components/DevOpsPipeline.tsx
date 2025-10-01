import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const pipelineStages = [
  { id: 1, name: "Code", icon: "💻" },
  { id: 2, name: "Build", icon: "🔨" },
  { id: 3, name: "Test", icon: "🧪" },
  { id: 4, name: "Deploy", icon: "🚀" },
  { id: 5, name: "Monitor", icon: "📊" },
];

export function DevOpsPipeline() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % pipelineStages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        {pipelineStages.map((stage, index) => (
          <div key={stage.id} className="flex items-center">
            <div
              className={cn(
                "relative flex h-16 w-16 items-center justify-center rounded-full",
                "border-2 transition-all duration-500",
                activeStage === index
                  ? "border-primary bg-primary/20 shadow-glow scale-110"
                  : "border-glass-border bg-glass/30"
              )}
            >
              <span className="text-2xl">{stage.icon}</span>
              {activeStage === index && (
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
              )}
            </div>
            {index < pipelineStages.length - 1 && (
              <div className="relative w-full lg:w-32 xl:w-48 h-0.5 mx-2">
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
        {pipelineStages.map((stage, index) => (
          <div
            key={stage.id}
            className={cn(
              "text-center transition-all duration-500",
              activeStage === index
                ? "text-primary font-semibold"
                : "text-muted-foreground"
            )}
          >
            <p className="text-sm">{stage.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}