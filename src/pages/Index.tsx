import { DevOpsCard } from "@/components/DevOpsCard";
import { DevOpsPipeline } from "@/components/DevOpsPipeline";
import { DevSecOpsPipeline } from "@/components/DevSecOpsPipeline";
import { ToolsGrid } from "@/components/ToolsGrid";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Separator } from "@/components/ui/separator";
import cicdImage from "@/assets/cicd-pipeline.jpg";
import iacImage from "@/assets/infrastructure-code.jpg";
import securityImage from "@/assets/devsecops-security.jpg";
import containerImage from "@/assets/containerization.jpg";
import cloudImage from "@/assets/cloud-native.jpg";
import monitoringImage from "@/assets/monitoring.jpg";

const devOpsTopics = [
  {
    title: "CI/CD Pipeline",
    description: "Continuous Integration and Continuous Deployment automate the software delivery process, enabling rapid and reliable releases through automated testing, building, and deployment workflows.",
    image: cicdImage,
    tags: ["Automation", "Testing", "Deployment", "Integration"],
  },
  {
    title: "Infrastructure as Code",
    description: "Manage and provision infrastructure through declarative configuration files rather than manual processes, ensuring consistency, version control, and reproducibility across environments.",
    image: iacImage,
    tags: ["Terraform", "Ansible", "Configuration", "Automation"],
  },
  {
    title: "DevSecOps",
    description: "Integrate security practices within the DevOps process, implementing security controls, compliance monitoring, and vulnerability scanning throughout the development lifecycle.",
    image: securityImage,
    tags: ["Security", "Compliance", "SAST", "DAST", "Monitoring"],
  },
  {
    title: "Containerization",
    description: "Package applications and dependencies into containers for consistent deployment across different environments, using orchestration platforms for scaling and management.",
    image: containerImage,
    tags: ["Docker", "Kubernetes", "Microservices", "Orchestration"],
  },
  {
    title: "Cloud Native",
    description: "Build and run scalable applications in modern, dynamic environments using microservices, containers, service meshes, immutable infrastructure, and declarative APIs.",
    image: cloudImage,
    tags: ["Serverless", "Microservices", "Auto-scaling", "Multi-cloud"],
  },
  {
    title: "Monitoring & Observability",
    description: "Gain insights into system performance, track metrics, logs, and traces to ensure reliability, detect issues early, and optimize application performance.",
    image: monitoringImage,
    tags: ["Metrics", "Logging", "Tracing", "Alerting", "APM"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-theme-blue">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-glass-border/50 bg-background/80 backdrop-blur-xl">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                DevOps & DevSecOps Platform
              </h1>
              <p className="text-sm text-muted-foreground">Unified CI/CD & Security Automation Hub</p>
            </div>
            <ThemeSwitcher />
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-4 py-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in">
              DevOps Excellence Center
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Accelerate software delivery with modern DevOps practices, automation, and cloud-native technologies
            </p>
          </section>

          {/* Pipeline Visualization */}
          <section className="rounded-2xl border border-glass-border/50 bg-gradient-glass backdrop-blur-xl p-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="mb-6 text-2xl font-semibold text-center text-foreground">
              DevOps Pipeline Flow
            </h3>
            <DevOpsPipeline />
          </section>

          <Separator className="bg-glass-border" />

          {/* DevSecOps Pipeline */}
          <section className="rounded-2xl border border-glass-border/50 bg-gradient-glass backdrop-blur-xl p-8 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <h3 className="mb-6 text-2xl font-semibold text-center text-foreground">
              DevSecOps Security Pipeline
            </h3>
            <DevSecOpsPipeline />
          </section>

          <Separator className="bg-glass-border" />

          {/* DevOps Topics Grid */}
          <section className="space-y-6">
            <h3 className="text-3xl font-bold text-center text-foreground">
              Core DevOps Practices
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {devOpsTopics.map((topic, index) => (
                <DevOpsCard
                  key={topic.title}
                  {...topic}
                  delay={index * 100}
                />
              ))}
            </div>
          </section>

          <Separator className="bg-glass-border" />

          {/* Tools Ecosystem */}
          <section className="space-y-6">
            <h3 className="text-3xl font-bold text-center text-foreground">
              DevOps Tools Ecosystem
            </h3>
            <ToolsGrid />
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-16 border-t border-glass-border/50 bg-background/80 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
            <p>© 2025 <a href="https://www.linkedin.com/in/jh1337cse/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-glow transition-colors underline">https://www.linkedin.com/in/jh1337cse/</a>. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;