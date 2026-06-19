import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { ProjectCard } from "../components/ProjectCard";
import { profile } from "../data/profile";
import { experiences } from "../data/experience";
import { projects } from "../data/projects";

const typeLabel: Record<string, string> = {
  work: "Work",
  education: "Education",
  project: "Project",
};

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-stone-200 pb-4 dark:border-stone-800">
      <span className="font-mono text-xs text-accent dark:text-accent-dark">
        {num}
      </span>
      <h2 className="font-display text-2xl font-normal tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      {/* 關於我 / 技能 */}
      <Reveal as="section" id="about" className="mx-auto max-w-4xl px-6 py-16">
        <SectionHead num="01" title="關於" />
        <div className="grid gap-10 sm:grid-cols-12">
          <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300 sm:col-span-8">
            {profile.about}
          </p>
          <div className="sm:col-span-4">
            <div className="eyebrow mb-4">Skills</div>
            <ul className="space-y-2 font-mono text-sm text-stone-600 dark:text-stone-400">
              {profile.skills.map((skill) => (
                <li
                  key={skill}
                  className="border-b border-stone-100 pb-2 dark:border-stone-900"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* 經歷與專案時間軸 */}
      <Reveal
        as="section"
        id="experience"
        className="mx-auto max-w-4xl px-6 py-16"
      >
        <SectionHead num="02" title="經歷" />
        <div>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="grid gap-2 border-t border-stone-200 py-7 dark:border-stone-800 sm:grid-cols-12 sm:gap-8"
            >
              <div className="sm:col-span-3">
                <div className="font-mono text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500">
                  {typeLabel[exp.type]}
                </div>
                <div className="mt-1 font-mono text-sm text-stone-600 dark:text-stone-400">
                  {exp.period}
                </div>
              </div>
              <div className="sm:col-span-9">
                <h3 className="font-display text-xl leading-snug">
                  {exp.role}
                </h3>
                <div className="mt-0.5 font-mono text-xs uppercase tracking-wider text-stone-500">
                  {exp.organization}
                </div>
                <p className="mt-2 max-w-2xl leading-relaxed text-stone-600 dark:text-stone-400">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-stone-200 dark:border-stone-800" />
        </div>
      </Reveal>

      {/* 精選作品 */}
      <Reveal as="section" className="mx-auto max-w-4xl px-6 py-16">
        <SectionHead num="03" title="精選作品" />
        <div>
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          <div className="border-t border-stone-200 dark:border-stone-800" />
        </div>
        <Link
          to="/projects"
          className="link-underline mt-8 inline-block font-mono text-sm font-medium"
        >
          所有作品 →
        </Link>
      </Reveal>

      {/* 聯絡 */}
      <Reveal
        as="section"
        id="contact"
        className="mx-auto max-w-4xl px-6 py-20"
      >
        <SectionHead num="04" title="聯絡" />
        <p className="font-display text-3xl font-normal leading-snug tracking-tight sm:text-4xl">
          對合作、實習或交流有興趣?
          <br />
          <a
            href={`mailto:${profile.email}`}
            className="italic text-accent underline-offset-4 hover:underline dark:text-accent-dark"
          >
            寄信給我
          </a>{" "}
          聊聊。
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-stone-600 dark:text-stone-400">
          <a href={`mailto:${profile.email}`} className="link-underline">
            {profile.email}
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="link-underline"
          >
            {profile.social.github.replace("https://", "")}
          </a>
        </div>
      </Reveal>
    </>
  );
}
