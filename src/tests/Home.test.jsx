// import { render, screen, fireEvent } from "@testing-library/react";
// import { renderComponent } from "./render";
// import { Link, MemoryRouter, useHref } from "react-router-dom";

// import Home from "../pages/Home";

// describe("tests for home page", () => {
//   beforeEach(() => {
//     render(renderComponent("", <Home />));
//   });

//   test("render headline", () => {
//     const headline = screen.findByText(
//       "Are you more of an introvert or extrovert?"
//     );
//     expect(headline).toBeTruthy();
//   });

//   test("render link text", () => {
//     const startLink = screen.findByRole("link", { name: "Start" });
//     expect(startLink).toBeTruthy();
//   });

//   test("navigates to the correct route when clicked", async () => {
//     render(
//       <MemoryRouter>
//         <Link to="/question/1">Start</Link>
//       </MemoryRouter>
//     );

//     const linkTexts = await screen.findAllByText("Start");
//     fireEvent.click(linkTexts[0]);
//     expect(window.location.pathname).toBe("/question/1");
//   });
// });

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("Home", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  test("should render the extrovert-introvert headline", () => {
    expect(
      screen.getByText("Are you more of an introvert or extrovert?")
    ).toBeInTheDocument();
  });

  test("should render the introvert-extrovert image", () => {
    expect(
      screen.getByAltText("Girl hiding her face with a hat")
    ).toBeInTheDocument();
  });

  test("should render the introvert-extrovert caption", () => {
    expect(
      screen.getByText(
        "Introverts gain energy being alone. Extroverts crave people and activity."
      )
    ).toBeInTheDocument();
  });

  test("should render start button and navigate to /question/1 when clicked", () => {
    const startBtn = screen.getByText("Start");
    expect(startBtn).toBeInTheDocument();
    expect(startBtn.closest("a")).toHaveAttribute("href", "/question/1");
  });
});
