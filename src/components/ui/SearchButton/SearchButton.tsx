"use client";

import React, { FC } from "react";
import { Button, ThemeButton } from "../Button/Button";
import classes from "./searchbutton.module.scss";
import { classNames } from "@/utils/helpers/classNames";
import { useTheme } from "@/utils/hooks/useTheme";
import Link from "next/link";

interface SearchButtonProps {
  searchValue: string;
}
export const SearchButton: FC<SearchButtonProps> = (props) => {
  const { theme } = useTheme();
  const { searchValue } = props;
  return (
    <Button
      onClick={() => {}}
      className={classNames(classes.btn)}
      theme={ThemeButton.CLEAR}
    >
      <Link href={`/info/${searchValue}`}>
        <img
          className={classNames(classes.img)}
          src={`/glass_${theme}.svg`}
          alt='glass'
        />
      </Link>
    </Button>
  );
};
