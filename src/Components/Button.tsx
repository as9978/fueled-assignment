import "../styles/Button.css";
import { Plus } from "./Icons";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "glass" | "ghost";
  fullWidth?: boolean;
  haveIcon?: boolean;
}

export const Button = ({
  variant = "primary",
  fullWidth,
  haveIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`button ${variant} ${fullWidth && "fullwidth"}`}
      {...props}
    >
      {haveIcon && <Plus />}
      {props.children}
    </button>
  );
};
