import { PropsWithChildren } from "react";

type ButtonProps = {
  type: "submit" | "button" | "reset";
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  type,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
