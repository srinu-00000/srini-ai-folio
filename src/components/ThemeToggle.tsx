import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Palette } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark'); // Default to dark theme

  useEffect(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: string) => {
    // Remove theme classes
    document.body.classList.remove('theme-light', 'theme-dark');
    // Add the new theme class
    document.body.classList.add(`theme-${newTheme}`);
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const getThemeIcon = () => {
    return theme === 'light' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />;
  };

  const getThemeLabel = () => {
    return theme === 'light' ? 'Light' : 'Dark';
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="glass-button transition-all duration-300"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {getThemeIcon()}
      <span className="ml-2 hidden sm:inline">{getThemeLabel()}</span>
    </Button>
  );
};

export default ThemeToggle;