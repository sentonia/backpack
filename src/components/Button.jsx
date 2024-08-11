import PropTypes from "prop-types";

export default function Button({ variant, label, onClick, ...props }) {
  return (
    <button
      className={`btn ${variant === "secondary" ? "btn--secondary" : ""}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}

// Add 'variant' to the props validation
Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
