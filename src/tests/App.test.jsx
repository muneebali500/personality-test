import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "../App";

describe("App component", () => {
  test("renders the Home component at the root path", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() =>
      screen.getByText("Are you more of an introvert or extrovert?")
    );
    expect(
      screen.getByText("Are you more of an introvert or extrovert?")
    ).toBeInTheDocument();
  });

  test("renders the question component when navigates to question path", async () => {
    render(
      <MemoryRouter initialEntries={["/question/1"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText("Are you an introvert or extrovert?"));
    expect(
      screen.getByText("Are you an introvert or extrovert?")
    ).toBeInTheDocument();
  });

  test("renders introvert result component when navigates to introvert path", async () => {
    render(
      <MemoryRouter initialEntries={["/introvert"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText("You are more of an Introvert"));
    expect(
      screen.getByText("You are more of an Introvert")
    ).toBeInTheDocument();
  });

  test("renders extrovert result component when navigates to extrovert path", async () => {
    render(
      <MemoryRouter initialEntries={["/extrovert"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText("You are more of an Extrovert"));
    expect(
      screen.getByText("You are more of an Extrovert")
    ).toBeInTheDocument();
  });

  test("renders page not found component when navigates to unknown path", async () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText("Page 404. Not Found"));
    expect(screen.getByText("Page 404. Not Found")).toBeInTheDocument();
  });
});
