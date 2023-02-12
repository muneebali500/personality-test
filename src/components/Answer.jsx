export default function Answer({ number, answer, selected, selectAnswer }) {
  return (
    <li
      className="answer-wrapper"
      style={{ border: `${selected ? "2px solid red" : "none"}` }}
      onClick={() => selectAnswer(number)}
    >
      <span className="answer-number">{number}</span>
      <span className="answer">{answer}</span>
    </li>
  );
}
