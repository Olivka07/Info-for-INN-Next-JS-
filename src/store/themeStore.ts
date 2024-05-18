"use client";

import { createEvent, createStore } from "effector";

export enum ThemeType {
  LIGHT = "light",
  DARK = "dark",
}

const initialTheme = ThemeType.LIGHT;

export const changeTheme = createEvent<ThemeType>("Change theme");

export const $theme = createStore<ThemeType>(initialTheme).on(
  changeTheme,
  (_, newTheme) => {
    localStorage.setItem("theme", newTheme);
    return newTheme;
  }
);
