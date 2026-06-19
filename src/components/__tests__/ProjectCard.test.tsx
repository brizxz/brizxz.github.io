import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "../ProjectCard";
import type { Project } from "../../data/projects";

const project: Project = {
  id: "demo",
  title: "測試專案",
  description: "這是一個測試用的專案描述。",
  tags: ["React", "TypeScript"],
  github: "https://github.com/yourname/demo",
  demo: "https://example.com/demo",
  image: "https://placehold.co/600x400",
};

describe("ProjectCard", () => {
  it("renders the title and description", () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByText("測試專案")).toBeInTheDocument();
    expect(screen.getByText("這是一個測試用的專案描述。")).toBeInTheDocument();
  });

  it("renders all tags", () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders GitHub and Demo links with correct hrefs", () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      project.github
    );
    expect(screen.getByRole("link", { name: "Demo" })).toHaveAttribute(
      "href",
      project.demo
    );
  });

  it("does not render Demo link when demo is absent", () => {
    const withoutDemo: Project = { ...project, demo: undefined };
    render(<ProjectCard project={withoutDemo} />);
    expect(
      screen.queryByRole("link", { name: "Demo" })
    ).not.toBeInTheDocument();
  });
});
