import React from "react";

export default function Questions() {
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
          <h6 className="question-number">Question 1/5</h6>
          <h3 className="question">
            You're planning a night out. Which option sounds more fun?
          </h3>

          <ul className="answers-container">
            <li className="answer-wrapper">
              <span className="answer-number">A</span>
              <span className="answer">
                Dinner with your best friend — just the two of you — and sharing
                what's on your mind
              </span>
            </li>
            <li className="answer-wrapper">
              <span className="answer-number">B</span>
              <span className="answer">
                Going out with a group of friends. The more people, the more
                energy you feel
              </span>
            </li>
          </ul>

          <div className="question-btns">
            <button className="prev-btn">Previous Question</button>
            <button className="next-btn">Next Question</button>
          </div>
        </div>
      </div>
    </section>
  );
}
