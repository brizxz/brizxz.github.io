import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Hero } from "../Hero";
import { profile } from "../../data/profile";

describe("Hero", () => {
  it("renders the profile name and title", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    expect(screen.getByText(profile.name)).toBeInTheDocument();
    expect(screen.getByText(profile.title)).toBeInTheDocument();
  });

  it("renders a downloadable resume link", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: "下載 PDF 履歷" });
    expect(link).toHaveAttribute("href", "/resume.pdf");
  });
});
