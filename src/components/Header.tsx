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
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="text-lg font-bold">
          {profile.name}
        </NavLink>

        <div className="flex items-center gap-1 sm:gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-md px-2 py-1 text-sm transition-colors sm:px-3 sm:text-base ${
                  isActive
                    ? "font-semibold text-blue-600 dark:text-blue-400"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
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
