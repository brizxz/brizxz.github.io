import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { profile } from "../data/profile";

export function Projects() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="animate-fade-up flex items-baseline justify-between border-b border-stone-200 pb-4 dark:border-stone-800">
        <span className="eyebrow">Selected work</span>
        <span className="eyebrow">{projects.length} projects</span>
      </div>

      <h1 className="animate-fade-up mt-8 font-display text-4xl font-normal tracking-tight sm:text-5xl">
        作品集
      </h1>
      <p className="animate-fade-up mt-4 max-w-xl leading-relaxed text-stone-600 [animation-delay:0.06s] dark:text-stone-400">
        橫跨 AI / ML、系統程式與自動化的專案。更多收錄在我的{" "}
        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          className="link-underline text-stone-900 dark:text-stone-100"
        >
          GitHub
        </a>
        。
      </p>

      <div className="animate-fade-up mt-12 [animation-delay:0.1s]">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
        <div className="border-t border-stone-200 dark:border-stone-800" />
      </div>
    </section>
  );
}
