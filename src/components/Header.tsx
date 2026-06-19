import { NavLink } from "react-router-dom";
import { profile } from "../data/profile";
import { ThemeToggle } from "./ThemeToggle";
import type { Theme } from "../hooks/useTheme";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const navItems = [
  { to: "/", label: "首頁" },
  { to: "/projects", label: "作品" },
  { to: "/resume", label: "履歷" },
];

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/85 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-950/85">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="font-mono text-sm font-medium tracking-tight"
        >
          {profile.name}
          <span className="text-accent dark:text-accent-dark">.</span>
        </NavLink>

        <div className="flex items-center gap-5 sm:gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-stone-900 dark:text-stone-100"
                    : "text-stone-400 hover:text-stone-900 dark:text-stone-500 dark:hover:text-stone-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  );
}
