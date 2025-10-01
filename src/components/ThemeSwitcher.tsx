import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DEFAULT_THEME, THEME_OPTIONS } from "../../config/theme.config";

const themes = Object.entries(THEME_OPTIONS).map(([value, config]) => ({
  name: config.name,
  value,
  class: config.class,
}));

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const root = document.documentElement;
    const theme = themes.find(t => t.value === currentTheme);
    if (theme) {
      // Remove all theme classes
      themes.forEach(t => root.classList.remove(t.class));
      // Add current theme class
      root.classList.add(theme.class);
    }
  }, [currentTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="secondary"
          size="icon"
          className="bg-glass/50 border-glass-border hover:bg-glass hover:border-primary/50 backdrop-blur-xl"
        >
          <Palette className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-card/95 backdrop-blur-xl border-glass-border"
      >
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setCurrentTheme(theme.value)}
            className="cursor-pointer hover:bg-primary/10"
          >
            <div className="flex items-center gap-3">
              <div className={`h-4 w-4 rounded-full ${theme.class}`} />
              <span>{theme.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}