import "./button.css";

function Button({ title, className="btn", onClick, type = "button", disabled }) {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;