import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  className,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      {...buttonProps}
      className={twMerge(
        styles["btn"],
        "text-white rounded-xl px-5 text-xl py-3",
        className
      )}
    >
      {children}
    </button>
  );
}
