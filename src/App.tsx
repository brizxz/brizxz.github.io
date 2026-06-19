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

        <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
