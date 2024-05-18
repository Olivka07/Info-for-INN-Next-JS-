"use client";
import React, { FC } from "react";
import { Modal } from "../Modal/Modal";
import { Button, ThemeButton } from "../Button/Button";
import { OrganizationType } from "@/types/organization";
import { useModal } from "@/utils/hooks/useModal";
import { classNames } from "@/utils/helpers/classNames";
import { ButtonConfirm } from "../ButtonConfirm/ButtonConfirm";
import classes from "./widgetaddress.module.scss";
import Link from "next/link";

interface WidgetAddressProps {
  address: OrganizationType["data"]["address"];
}
export const WidgetAddress: FC<WidgetAddressProps> = ({ address }) => {
  const { changeVisible, visible } = useModal();
  const goTo = () => {
    changeVisible();
  };
  return (
    <>
      <Modal onClose={changeVisible} visible={visible}>
        <div>Вы действительно хотите перейти на внешний ресурс?</div>
        <div className={classNames(classes.btns)}>
          <Button
            className={classNames(classes.btn_cancel)}
            onClick={changeVisible}
            theme={ThemeButton.CLEAR}
          >
            Отказаться
          </Button>
          <ButtonConfirm onClick={goTo}>
            <Link
              target='_blank'
              href={`https://yandex.ru/maps/?ll=${address.data.geo_lon},${address.data.geo_lat}&z=18`}
            >
              Перейти
            </Link>
          </ButtonConfirm>
        </div>
      </Modal>
      <Button
        className={classNames(classes.address_btn)}
        theme={ThemeButton.CLEAR}
        onClick={changeVisible}
      >
        Адрес: {address.value}
      </Button>
    </>
  );
};
