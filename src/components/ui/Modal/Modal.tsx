import { classNames } from "@/utils/helpers/classNames";
import React, { FC, MouseEvent, PropsWithChildren } from "react";
import classes from "./modal.module.scss";

interface ModalProps extends PropsWithChildren {
  visible: boolean;
  onClose: () => void;
}
export const Modal: FC<ModalProps> = ({ children, visible, onClose }) => {
  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {visible && (
        <div onClick={onClose} className={classNames(classes.modal_bg)}>
          <div
            onClick={clickHandler}
            className={classNames(classes.modal_content)}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
