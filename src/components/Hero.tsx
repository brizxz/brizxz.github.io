import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 sm:pt-28">
      {/* 上排:身分標籤 + 所在地 */}
      <div className="animate-fade-in flex items-baseline justify-between border-b border-stone-200 pb-4 dark:border-stone-800">
        <span className="eyebrow">{profile.title}</span>
        <span className="eyebrow">{profile.location}</span>
      </div>

      {/* 大標:以一句話定位,襯線字 + 一抹斜體強調 */}
      <h1 className="animate-fade-up mt-10 font-display text-4xl font-normal leading-[1.12] tracking-tight sm:mt-14 sm:text-6xl">
        我是{" "}
        <span className="italic text-accent dark:text-accent-dark">
          {profile.name}
        </span>
        ,
        <br />
        用 AI、資料與系統程式
        <br />
        把想法做成 <span className="italic">能跑的東西</span>。
      </h1>

      {/* 簡介 */}
      <p className="animate-fade-up mt-8 max-w-xl text-base leading-relaxed text-stone-600 [animation-delay:0.08s] dark:text-stone-400">
        {profile.about}
      </p>

      {/* 連結列:純文字、hover 畫線,無按鈕漸層 */}
      <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-sm [animation-delay:0.16s]">
        <Link to="/projects" className="link-underline font-medium">
          作品集 →
        </Link>
        <a
          href="/resume.pdf"
          download
          className="link-underline text-stone-600 dark:text-stone-400"
        >
          下載 PDF 履歷
        </a>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          className="link-underline text-stone-600 dark:text-stone-400"
        >
          GitHub
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="link-underline text-stone-600 dark:text-stone-400"
        >
          Email
        </a>
      </div>
    </section>
  );
}
