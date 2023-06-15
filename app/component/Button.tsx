"use client";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` 
    text-center 
    rounded 
    border-[#162A41]
    border-2
    w-full
    px-[35px]
    py-[20px]
    ${outline ? "bg-white" : "bg-[#162A41]"}
    ${outline ? "text-[#162A41]" : "text-white"}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
