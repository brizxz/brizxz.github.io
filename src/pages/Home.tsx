import { Hero } from "../components/Hero";
import { profile } from "../data/profile";
import { experiences } from "../data/experience";

export function Home() {
  return (
    <>
      <Hero />

      {/* 關於我 */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-bold">關於我</h2>
        <p className="max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300">
          {profile.about}
        </p>

        <h3 className="mb-3 mt-8 text-lg font-semibold">技能</h3>
        <ul className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* 經歷時間軸 */}
      <section id="experience" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold">經歷</h2>
        <ol className="relative border-l border-slate-200 dark:border-slate-700">
          {experiences.map((exp) => (
            <li key={exp.id} className="mb-8 ml-6">
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-600" />
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {exp.period}
              </p>
              <h3 className="text-lg font-semibold">
                {exp.role}
                <span className="font-normal text-slate-500 dark:text-slate-400">
                  {" · "}
                  {exp.organization}
                </span>
              </h3>
              <p className="mt-1 text-slate-600 dark:text-slate-300">
                {exp.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 聯絡方式 */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-bold">聯絡方式</h2>
        <div className="flex flex-wrap gap-4 text-blue-600 dark:text-blue-400">
          <a href={`mailto:${profile.email}`} className="hover:underline">
            {profile.email}
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
