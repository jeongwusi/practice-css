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
    <button
      className="2g-white rounded border-2 border-black p-1 text-black"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
