import React from "react";
import { ToggleTheme } from "../ToggleTheme/ToggleTheme";
import classes from "./header.module.scss";
import { classNames } from "@/utils/helpers/classNames";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";
import Link from "next/link";

export const Header = () => {
    return (
        <header className={classNames(classes.header)}>
            <div className={classNames(classes.header_logo)}>
                <HeaderLogo />
            </div>
            <div className={classNames(classes.btns)}>
                <Link href={"/"}>Главная</Link>
                <ToggleTheme />
            </div>
        </header>
    );
};
