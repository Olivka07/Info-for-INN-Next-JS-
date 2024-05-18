"use client";
import { ThemeContext, ThemeEnum } from "@/utils/context/ThemeContext";
import { FC, PropsWithChildren, useEffect, useMemo, useState } from "react";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeEnum | null>(ThemeEnum.LIGHT);

    const toggleTheme = (newTheme: ThemeEnum) => {
        setTheme(newTheme);
    };

    useEffect(() => {
        const th = localStorage.getItem("theme");
        if (th === ThemeEnum.DARK || th === ThemeEnum.LIGHT) setTheme(th);
        else {
            localStorage.setItem("theme", ThemeEnum.LIGHT);
            setTheme(ThemeEnum.LIGHT);
        }
    }, []);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
