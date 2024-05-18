"use client";

import React from "react";
import { Button, ThemeButton } from "../Button/Button";
import classes from "./toggletheme.module.scss";
import { classNames } from "@/utils/helpers/classNames";
import { useTheme } from "@/utils/hooks/useTheme";
import { ThemeEnum } from "@/utils/context/ThemeContext";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  const toggle = () => {
    if (theme === ThemeEnum.LIGHT) toggleTheme(ThemeEnum.DARK);
    else toggleTheme(ThemeEnum.LIGHT);
  };
  return (
    <Button
      className={classNames(classes.btn)}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      <img
        className={classNames(classes.img)}
        src={`/${
          theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK
        }.svg`}
        alt={"Переключатель темы"}
      />
    </Button>
  );
};
