import type { ReactNode } from "react";
import { profile } from "../data/profile";
import { experiences } from "../data/experience";

export function Resume() {
  const work = experiences.filter((e) => e.type === "work");
  const education = experiences.filter((e) => e.type === "education");
  const projectExp = experiences.filter((e) => e.type === "project");

  return (
    <section className="mx-auto max-w-3xl animate-fade-up px-4 py-14">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-300">
            {profile.title} · {profile.location}
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {profile.email}
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {profile.social.github.replace("https://", "")}
            </a>
          </div>
        </div>
        <a
          href="/resume.pdf"
          download
          className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-600/20 transition-transform hover:-translate-y-0.5"
        >
          下載 PDF
        </a>
      </div>

      <ResumeSection title="簡介">
        <p className="leading-relaxed text-slate-600 dark:text-slate-300">
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
        <ul className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {skill}
            </li>
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
    <div className="mb-8">
      <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
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
        <h3 className="font-semibold">
          {role}
          <span className="font-normal text-slate-500 dark:text-slate-400">
            {" · "}
            {organization}
          </span>
        </h3>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {period}
        </span>
      </div>
      <p className="mt-1 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
