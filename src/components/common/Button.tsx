import React from "react";

type ButtonVariant = "primary" | "lightgray";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

/**
 * 공용 버튼 컴포넌트
 * @param children 버튼 내부에 표출할 children컴포넌트
 * @param variant 버튼 variant 정보. 현재는 primary와 lightgray로 구분중
 * @param className 버튼 custom className
 */
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
      "bg-palette-light-gray text-palette-black hover:bg-palette-gray";
  }

  return (
    <button className={`rounded-lg ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
