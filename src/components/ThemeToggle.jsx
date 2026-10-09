import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, onToggleTheme }) {
  const Icon = theme === 'dark' ? Sun : Moon;
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      className="theme-float-toggle"
      onClick={onToggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <Icon size={16} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
