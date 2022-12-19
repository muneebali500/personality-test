export default function Answer({ number, answer, selected, handleClick }) {
  return (
    <li
      className="answer-wrapper"
      style={{ border: `${selected ? "2px solid red" : "none"}` }}
      onClick={() => handleClick(number)}
    >
      <span className="answer-number">{number}</span>
      <span className="answer">{answer}</span>
    </li>
  );
}
