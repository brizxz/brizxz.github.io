import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group border-t border-stone-200 py-8 transition-colors dark:border-stone-800">
      <div className="grid gap-3 sm:grid-cols-12 sm:gap-8">
        {/* 左欄:編號與語言 / stars */}
        <div className="sm:col-span-3">
          {typeof index === "number" && (
            <div className="font-mono text-xs text-stone-400 dark:text-stone-600">
              {String(index + 1).padStart(2, "0")}
            </div>
          )}
          <div className="mt-1 font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
            {project.language}
            {typeof project.stars === "number" && project.stars > 0 && (
              <span> · ★ {project.stars}</span>
            )}
          </div>
        </div>

        {/* 右欄:標題、描述、技術、連結 */}
        <div className="sm:col-span-9">
          <h3 className="font-display text-2xl leading-snug">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="transition-colors group-hover:text-accent dark:group-hover:text-accent-dark"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>

          <p className="mt-2 max-w-2xl leading-relaxed text-stone-600 dark:text-stone-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-stone-500 dark:text-stone-500">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="mt-4 flex gap-6 font-mono text-xs">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-stone-700 dark:text-stone-300"
              >
                GitHub
                <span aria-hidden="true"> ↗</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-stone-700 dark:text-stone-300"
              >
                Demo
                <span aria-hidden="true"> ↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
