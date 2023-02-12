import axios from "axios";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Questions from "../pages/Questions";

// vi.mock('axios');

const questionList = [
  {
    id: 1,
    question: "What is your favorite color?",
    answers: [
      { number: "A", answer: "Red", status: "introvert", selected: false },
      { number: "B", answer: "Blue", status: "extrovert", selected: false },
    ],
  },
  {
    id: 2,
    question: "Do you prefer large gatherings or small get-togethers?",
    answers: [
      {
        number: "A",
        answer: "Large gatherings",
        status: "extrovert",
        selected: false,
      },
      {
        number: "B",
        answer: "Small get-togethers",
        status: "introvert",
        selected: false,
      },
    ],
  },
];

describe("Question Component", async () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Questions />
      </MemoryRouter>
    );
  });

  // afterEach(() => {
  //   () => mockInstance();
  // });

  // test("fetch data", async () => {
  //   const res = await axios.get("../../public/data.json");
  // });

  test("render the headline", () => {
    expect(
      screen.getByText("Are you an introvert or extrovert?")
    ).toBeInTheDocument();
  });

  test("render the previous button text", () => {
    expect(
      screen.getByRole("button", { name: "Previous Question" })
    ).toBeInTheDocument();
  });

  test("render the next button text", () => {
    expect(
      screen.getByRole("button", { name: "Next Question" })
    ).toBeInTheDocument();
  });
});
