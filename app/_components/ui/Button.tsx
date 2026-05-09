// components/ui/button/Button.tsx
import React from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium cursor-pointer active:scale-95 transition-colors duration-200 disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed disabled:shadow-none";

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
const variants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-neutral-300 hover:bg-neutral-400",
  outline: "border border-neutral-300 hover:bg-neutral-100",
  ghost: "hover:bg-neutral-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
};
