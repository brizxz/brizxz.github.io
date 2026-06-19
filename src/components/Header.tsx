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
  { to: "/projects", label: "作品集" },
  { to: "/resume", label: "履歷" },
];

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/70 backdrop-blur-lg dark:border-slate-800/70 dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-sm font-bold text-white shadow-sm transition-transform group-hover:scale-105">
            {profile.name.charAt(0).toUpperCase()}
          </span>
          <span className="text-lg font-bold tracking-tight">
            {profile.name}
          </span>
        </NavLink>

        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors sm:px-3 sm:text-base ${
                  isActive
                    ? "bg-slate-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
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
