import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { MemoryRouter } from "react-router-dom";

describe("<Header />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  test("should render the logo", () => {
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  test("should render the correct number of links", () => {
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
  });

  test("should render the correct link text", () => {
    const links = screen.getAllByRole("link");
    expect(links[1]).toHaveTextContent("Career");
    expect(links[2]).toHaveTextContent("Directory");
    expect(links[3]).toHaveTextContent("Blogs");
  });
});
