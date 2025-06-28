import React from "react";

type ButtonVariant = "primary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

// 공용 버튼 컴포넌트
export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  let variantClass = "";

  if (variant === "primary") {
    variantClass = "bg-palette-primary text-white hover:bg-blue-600";
  } else {
    variantClass =
      "bg-palette-gray text-palette-black hover:bg-palette-lightGray";
  }

  return (
    <button className={`rounded-lg ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
