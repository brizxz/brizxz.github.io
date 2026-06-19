import type { ReactNode } from "react";
import { profile } from "../data/profile";
import { experiences } from "../data/experience";

export function Resume() {
  const work = experiences.filter((e) => e.type === "work");
  const education = experiences.filter((e) => e.type === "education");
  const projectExp = experiences.filter((e) => e.type === "project");

  return (
    <section className="mx-auto max-w-3xl animate-fade-up px-6 py-20">
      {/* 抬頭 */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 pb-6 dark:border-stone-800">
        <div>
          <h1 className="font-display text-4xl font-normal tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-stone-500">
            {profile.title} · {profile.location}
          </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="link-underline font-mono text-sm"
        >
          下載 PDF ↓
        </a>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-stone-500">
        <a
          href={`mailto:${profile.email}`}
          className="link-underline hover:text-stone-900 dark:hover:text-stone-100"
        >
          {profile.email}
        </a>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          className="link-underline hover:text-stone-900 dark:hover:text-stone-100"
        >
          {profile.social.github.replace("https://", "")}
        </a>
      </div>

      <ResumeSection title="簡介">
        <p className="leading-relaxed text-stone-700 dark:text-stone-300">
          {profile.about}
        </p>
      </ResumeSection>

      <ResumeSection title="學歷">
        {education.map((exp) => (
          <ResumeItem key={exp.id} {...exp} />
        ))}
      </ResumeSection>

      {work.length > 0 && (
        <ResumeSection title="工作經歷">
          {work.map((exp) => (
            <ResumeItem key={exp.id} {...exp} />
          ))}
        </ResumeSection>
      )}

      <ResumeSection title="專案經歷">
        {projectExp.map((exp) => (
          <ResumeItem key={exp.id} {...exp} />
        ))}
      </ResumeSection>

      <ResumeSection title="技能">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-stone-600 dark:text-stone-400">
          {profile.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </ResumeSection>
    </section>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-12 sm:gap-8">
      <h2 className="eyebrow sm:col-span-3 sm:pt-1">{title}</h2>
      <div className="space-y-6 sm:col-span-9">{children}</div>
    </div>
  );
}

function ResumeItem({
  role,
  organization,
  period,
  description,
}: {
  role: string;
  organization: string;
  period: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-lg">{role}</h3>
        <span className="font-mono text-xs text-stone-500">{period}</span>
      </div>
      <div className="mt-0.5 font-mono text-xs uppercase tracking-wider text-stone-500">
        {organization}
      </div>
      <p className="mt-2 leading-relaxed text-stone-600 dark:text-stone-400">
        {description}
      </p>
    </div>
  );
}
