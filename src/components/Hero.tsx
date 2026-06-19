import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
        {profile.title}
      </p>
      <h1 className="text-4xl font-bold sm:text-6xl">{profile.name}</h1>
      <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
        {profile.tagline}
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="/resume.pdf"
          download
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
        >
          下載 PDF 履歷
        </a>
        <Link
          to="/projects"
          className="rounded-lg border border-slate-300 px-5 py-2.5 font-medium transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          看我的作品
        </Link>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg border border-slate-300 px-5 py-2.5 font-medium transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          聯絡我
        </a>
      </div>
    </section>
  );
}
