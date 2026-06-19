import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const accentGradients: Record<NonNullable<Project["accent"]>, string> = {
  violet: "from-violet-500 to-fuchsia-500",
  blue: "from-blue-500 to-indigo-500",
  emerald: "from-emerald-500 to-teal-500",
  amber: "from-amber-500 to-orange-500",
  rose: "from-rose-500 to-pink-500",
  cyan: "from-cyan-500 to-sky-500",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const gradient = accentGradients[project.accent ?? "blue"];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      {/* 漸層封面 */}
      <div
        className={`relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${gradient}`}
      >
        <span className="text-5xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
          {project.emoji ?? "📦"}
        </span>
        {project.language && (
          <span className="absolute bottom-3 left-3 rounded-full bg-black/25 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur">
            {project.language}
          </span>
        )}
        {typeof project.stars === "number" && project.stars > 0 && (
          <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/25 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur">
            ★ {project.stars}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 pt-2 text-sm font-medium">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 transition-colors hover:text-blue-500 hover:underline dark:text-blue-400"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 transition-colors hover:text-blue-500 hover:underline dark:text-blue-400"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
