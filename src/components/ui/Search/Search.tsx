"use client";
import { classNames } from "@/utils/helpers/classNames";
import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import classes from "./search.module.scss";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Search: FC<SearchProps> = (props) => {
    const { className, value, onChange, ...otherProps } = props;

    return (
        <input
            value={value}
            onChange={onChange}
            placeholder='Введите ИНН'
            className={classNames(classes.input, {}, [className ?? ""])}
            {...otherProps}
        />
    );
};
