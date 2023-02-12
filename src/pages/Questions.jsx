import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

///////////// import custom components
import Answer from "../components/Answer";
import Button from "../components/Button";

/////////// start of main functional component
export default function Questions(props) {
  const [questionList, setQuestionList] = useState([]);
  const [questionObj, setQuestionObj] = useState({});
  const [questionIndex, setQuestionIndex] = useState(1);
  let navigate = useNavigate();

  ////////// mocking getting questions from backend on initial render.
  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await axios.get("/data.json");
        const data = res.data;

        setQuestionList(data);
      } catch (err) {
        alert("There was something wrong, please try again");
      }
    }

    getQuestions();
  }, []);

  ///////// getting new question every time the user clicks on next button
  useEffect(() => {
    if (questionIndex <= 5) {
      const newQuestion = questionList.find(
        (question) => question.id === questionIndex
      );

      setQuestionObj(newQuestion);
    } else {
      //////// navigating the user to either introvert page or extrovert page based on the selected answers
      const introvertAnswers = questionList.filter((question) => {
        return question.answers.find(
          (answer) => answer.selected && answer.status === "introvert"
        );
      });

      introvertAnswers.length > questionList.length / 2
        ? navigate("/introvert")
        : navigate("/extrovert");
    }
  }, [questionIndex, questionList]);

  ///////// function updates question list every time user clicks on any answer option.
  function selectAnswer(answerNumber) {
    if (questionIndex >= 1 && questionIndex <= 5) {
      const updatedQuestionList = questionList.map((question) => {
        if (question.id === questionIndex) {
          return {
            ...question,
            answers: question.answers.map((answer) =>
              answer.number === answerNumber
                ? { ...answer, selected: true }
                : { ...answer, selected: false }
            ),
          };
        } else {
          return question;
        }
      });

      setQuestionList(updatedQuestionList);
    }
  }

  ///////// JSX part
  return (
    <section className="main-section">
      <div className="container main-content">
        <h1>Are you an introvert or extrovert?</h1>
        <figure className="main-content__img">
          <img
            src="https://www.psychologies.co.uk/wp-content/uploads/sites/3/2018/05/introvert_or_extrovert-1-scaled.jpg?resize=2048,1280"
            alt="Girl hiding her face with a hat"
            loading="lazy"
          />
        </figure>

        <div className="questions-container">
          <h6 className="question-number">Question {questionIndex}/5</h6>
          <h3 className="question">{questionObj?.question}</h3>

          <ul className="answers-container">
            {questionObj?.answers?.map((answer, index) => (
              <Answer {...answer} selectAnswer={selectAnswer} key={index} />
            ))}
          </ul>

          <div className="question-btns">
            <Button
              btnName="Previous Question"
              handleClick={() => setQuestionIndex(questionIndex - 1)}
              disabled={questionIndex <= 1 ? true : false}
            />

            <Button
              btnName={questionIndex < 5 ? "Next Question" : "Finish the Test"}
              handleClick={() => setQuestionIndex(questionIndex + 1)}
              disabled={
                questionList[questionIndex - 1]?.answers?.find(
                  (answer) => answer.selected
                )
                  ? false
                  : true
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
