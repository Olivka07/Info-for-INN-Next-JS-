"use client";
import React, { ButtonHTMLAttributes, FC } from "react";
import classes from "./button.module.scss";
import { classNames } from "@/utils/helpers/classNames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={classNames(classes.button, {}, [
        className ?? "",
        classes[theme],
      ])}
    >
      {children}
    </button>
  );
};
