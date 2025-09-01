import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Palette } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: string) => {
    // Remove all theme classes
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-gradient');
    // Add the new theme class
    document.body.classList.add(`theme-${newTheme}`);
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
  };

  const cycleTheme = () => {
    const themes = ['light', 'dark', 'gradient'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      case 'gradient':
        return <Palette className="w-4 h-4" />;
      default:
        return <Sun className="w-4 h-4" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'gradient':
        return 'Gradient';
      default:
        return 'Light';
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={cycleTheme}
      className="hover:bg-card/80 transition-all duration-300"
      title={`Current theme: ${getThemeLabel()}. Click to change.`}
    >
      {getThemeIcon()}
      <span className="ml-2 hidden sm:inline">{getThemeLabel()}</span>
    </Button>
  );
};

export default ThemeToggle;