"use client";
import React, { ChangeEvent, FC, useState } from "react";
import { Search } from "@/components/ui/Search/Search";
import classes from "./widgetsearch.module.scss";
import { classNames } from "@/utils/helpers/classNames";
import { SearchButton } from "../SearchButton/SearchButton";

interface WidgetSearchProps {
  className?: string;
}
export const WidgetSearch: FC<WidgetSearchProps> = ({ className }) => {
  const [searchValue, setSearchValue] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div
      className={classNames(classes.widget_container, {}, [className ?? ""])}
    >
      <Search value={searchValue} onChange={changeHandler} />
      <SearchButton searchValue={searchValue} />
    </div>
  );
};
