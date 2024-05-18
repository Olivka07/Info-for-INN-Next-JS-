"use client";

import { classNames } from "@/utils/helpers/classNames";
import { useTheme } from "@/utils/hooks/useTheme";
import React, { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    const { theme } = useTheme();
    return <div className={classNames(`app ${theme}`)}>{children}</div>;
};

export default MainLayout;
