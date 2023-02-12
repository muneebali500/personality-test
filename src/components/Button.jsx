export default function Button({ handleClick, btnName, disabled }) {
  return (
    <button onClick={handleClick} disabled={disabled}>
      {btnName}
    </button>
  );
}
