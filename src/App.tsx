import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
import { useTheme } from "./hooks/useTheme";
import { profile } from "./data/profile";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col">
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <footer className="mt-8 border-t border-stone-200 dark:border-stone-800">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-6 py-8 font-mono text-xs text-stone-400 dark:text-stone-600">
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
            <span>Built with React · TypeScript · Vite</span>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
