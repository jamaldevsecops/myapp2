import { Badge } from "@/components/ui/badge";

const devOpsTools = [
  { category: "CI/CD", tools: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD"] },
  { category: "Containers", tools: ["Docker", "Kubernetes", "Helm", "Rancher", "OpenShift"] },
  { category: "IaC", tools: ["Terraform", "Ansible", "Pulumi", "CloudFormation", "Chef"] },
  { category: "Monitoring", tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"] },
  { category: "Cloud", tools: ["AWS", "Azure", "GCP", "DigitalOcean", "Linode"] },
  { category: "Security", tools: ["Vault", "SonarQube", "Snyk", "Aqua Security", "Twistlock"] },
];

export function ToolsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {devOpsTools.map((category, index) => (
        <div
          key={category.category}
          className="rounded-xl border border-glass-border/50 bg-gradient-glass backdrop-blur-xl p-4 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <h3 className="mb-3 text-lg font-semibold text-primary">
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.tools.map((tool) => (
              <Badge
                key={tool}
                variant="secondary"
                className="bg-secondary/50 text-foreground border-glass-border hover:bg-primary/20 hover:border-primary/50 transition-all"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}