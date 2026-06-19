import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">作品集</h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        以下是我做過的一些專案,點擊連結看原始碼或線上 Demo。
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
