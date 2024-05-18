"use client";

import React, { FC } from "react";
import { Button, ThemeButton } from "../Button/Button";
import classes from "./searchbutton.module.scss";
import { classNames } from "@/utils/helpers/classNames";
import { ThemeType } from "@/store/themeStore";
import { useTheme } from "@/utils/hooks/useTheme";

interface SearchButtonProps {
    searchHandler: () => void;
}
export const SearchButton: FC<SearchButtonProps> = (props) => {
    const { theme } = useTheme();
    const { searchHandler } = props;
    return (
        <Button
            onClick={searchHandler}
            className={classNames(classes.btn)}
            theme={ThemeButton.CLEAR}
        >
            <img
                className={classNames(classes.img)}
                src={`/glass_${theme}.svg`}
                alt='glass'
            />
        </Button>
    );
};
