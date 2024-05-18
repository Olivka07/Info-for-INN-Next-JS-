import React, { FC, PropsWithChildren } from "react";
import { Button, ThemeButton } from "../Button/Button";
import classes from "./buttonconfirm.module.scss";
import { classNames } from "@/utils/helpers/classNames";

interface ButtonConfirmProps extends PropsWithChildren {
  onClick: () => void;
}
export const ButtonConfirm: FC<ButtonConfirmProps> = ({
  onClick,
  children,
}) => {
  return (
    <Button
      onClick={onClick}
      className={classNames(classes.btn)}
      theme={ThemeButton.CLEAR}
    >
      {children}
    </Button>
  );
};
