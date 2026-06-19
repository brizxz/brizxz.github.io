import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景漸層光暈 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/4 h-72 w-72 animate-float rounded-full bg-blue-400/30 blur-3xl dark:bg-blue-600/20" />
        <div className="absolute top-10 right-1/4 h-72 w-72 animate-float rounded-full bg-violet-400/30 blur-3xl [animation-delay:1.5s] dark:bg-violet-600/20" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 animate-float rounded-full bg-cyan-400/20 blur-3xl [animation-delay:3s] dark:bg-cyan-600/20" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-20 sm:py-28">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-sm text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {profile.location} · 開放合作與機會
        </span>

        <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 [animation-delay:0.05s] dark:text-blue-400">
          {profile.title}
        </p>

        <h1 className="animate-fade-up text-5xl font-extrabold tracking-tight [animation-delay:0.1s] sm:text-7xl">
          <span className="text-gradient">{profile.name}</span>
        </h1>

        <p className="animate-fade-up max-w-2xl text-lg leading-relaxed text-slate-600 [animation-delay:0.15s] dark:text-slate-300 sm:text-xl">
          {profile.tagline}
        </p>

        <div className="animate-fade-up flex flex-wrap gap-3 [animation-delay:0.2s]">
          <a
            href="/resume.pdf"
            download
            className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-600/20 transition-transform hover:-translate-y-0.5"
          >
            下載 PDF 履歷
          </a>
          <Link
            to="/projects"
            className="rounded-xl border border-slate-300 bg-white/60 px-5 py-2.5 font-medium backdrop-blur transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:bg-slate-800"
          >
            看我的作品 →
          </Link>
        </div>

        <div className="animate-fade-up flex items-center gap-4 pt-2 text-sm [animation-delay:0.25s]">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            GitHub
          </a>
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              LinkedIn
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
