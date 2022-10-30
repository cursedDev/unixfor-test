export const Button = ({ onClick, label, className }) => {
  return (
    <button
      className={`border-2 px-4 py-2 border-black w-fit ${className || ""}`}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};
