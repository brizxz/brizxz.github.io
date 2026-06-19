import type { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
}

/** 捲入畫面時淡入上滑的容器 */
export function Reveal({
  children,
  className = "",
  as = "div",
  id,
}: RevealProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  const Tag = as;
  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
