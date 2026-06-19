import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { profile } from "../data/profile";

export function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <div className="animate-fade-up">
        <h1 className="text-4xl font-extrabold tracking-tight">
          <span className="text-gradient">作品集</span>
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          橫跨 AI/ML、系統程式與自動化的專案。點卡片連結看原始碼,更多收錄在我的{" "}
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            GitHub
          </a>
          。
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="animate-fade-up"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
