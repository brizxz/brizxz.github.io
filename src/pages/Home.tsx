import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { profile } from "../data/profile";
import { experiences } from "../data/experience";

const typeLabel: Record<string, string> = {
  work: "工作",
  education: "學歷",
  project: "專案",
};

export function Home() {
  return (
    <>
      <Hero />

      {/* 關於我 */}
      <Reveal as="section" id="about" className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">關於我</h2>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {profile.about}
        </p>

        <h3 className="mb-3 mt-8 text-lg font-semibold">技能</h3>
        <ul className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 經歷時間軸 */}
      <Reveal
        as="section"
        id="experience"
        className="mx-auto max-w-5xl px-4 py-14"
      >
        <h2 className="mb-8 text-3xl font-bold tracking-tight">經歷與專案</h2>
        <ol className="relative ml-3 border-l-2 border-slate-200 dark:border-slate-800">
          {experiences.map((exp) => (
            <li key={exp.id} className="mb-10 ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-blue-600 to-violet-600 dark:border-slate-950" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  {typeLabel[exp.type]}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {exp.period}
                </span>
              </div>
              <h3 className="mt-1.5 text-lg font-semibold">
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
      </Reveal>

      {/* 聯絡方式 */}
      <Reveal
        as="section"
        id="contact"
        className="mx-auto max-w-5xl px-4 py-14"
      >
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 text-center shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight">一起做點東西?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-300">
            對合作、實習或交流有興趣,歡迎透過以下方式找我。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-600/20 transition-transform hover:-translate-y-0.5"
            >
              寄信給我
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 font-medium transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </>
  );
}
