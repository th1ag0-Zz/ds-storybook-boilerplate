import colors from "../../styles/tokens/colors";

const Button = () => {
  return (
    <button type="button" className="text-text-primary">
      <p style={{ color: colors.primary[100] }}>Click me!</p>
    </button>
  );
};

export default Button;
