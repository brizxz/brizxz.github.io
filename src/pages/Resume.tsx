import { profile } from "../data/profile";
import { experiences } from "../data/experience";

export function Resume() {
  const work = experiences.filter((e) => e.type === "work");
  const education = experiences.filter((e) => e.type === "education");

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-slate-600 dark:text-slate-300">
            {profile.title} · {profile.location}
          </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
        >
          下載 PDF
        </a>
      </div>

      <ResumeSection title="工作經歷">
        {work.map((exp) => (
          <ResumeItem key={exp.id} {...exp} />
        ))}
      </ResumeSection>

      <ResumeSection title="學歷">
        {education.map((exp) => (
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
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 border-b border-slate-200 pb-2 text-xl font-bold dark:border-slate-700">
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
