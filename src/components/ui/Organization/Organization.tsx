import { OrganizationType, StatusOrganization } from "@/types/organization";
import React, { FC } from "react";
import classes from "./organization.module.scss";
import { classNames } from "@/utils/helpers/classNames";
import { WidgetAddress } from "../WidgetAddress/WidgetAddress";

interface OrganizationProps {
  el: OrganizationType;
}
export const Organization: FC<OrganizationProps> = ({ el }) => {
  return (
    <li>
      <div className={classNames(classes.organization_container)}>
        <p>{`${el.value} ${
          el.data.branch_type === "MAIN" ? "(Головная организация)" : "(Филиал)"
        }`}</p>
        <WidgetAddress address={el.data.address} />
        {el.data.branch_type === "MAIN" && (
          <p>{`Количество филиалов: ${el.data.branch_count}`}</p>
        )}
        <p>{`ИНН: ${el.data.inn}`}</p>
        <p>{`КПП: ${el.data.kpp}`}</p>
        {el.data.management && (
          <>
            <p>{`Руководитель: ${el.data.management.name}`}</p>
            <p>{`Должность руководителя: ${el.data.management.post}`}</p>{" "}
          </>
        )}
        <p>
          Другие названия организации:{" "}
          {`${Object.values(el.data.name)
            .filter(Boolean)
            .map((n) => n)
            .reduce((a, b) => a + ", " + b)}`}
        </p>
        <p>{`ОГРН: ${el.data.ogrn}`}</p>
        <p>
          {el.data.ogrn_date &&
            `Дата выдачи ОГРН: ${new Date(
              el.data.ogrn_date
            ).toLocaleDateString()}`}
        </p>
        <p>{el.data.okato && `Код ОКАТО: ${el.data.okato}`}</p>
        <p>{el.data.oktmo && `Код ОКТМО: ${el.data.oktmo}`}</p>
        <p>{el.data.okpo && `Код ОКПО: ${el.data.okpo}`}</p>
        <p>{el.data.okogu && `Код ОКОГУ: ${el.data.okogu}`}</p>
        <p>{el.data.okfs && `Код ОКФС: ${el.data.okfs}`}</p>
        <p>{el.data.okved && `Код ОКВЭД: ${el.data.okved}`}</p>
        <p>
          {el.data.okved_type &&
            `Версия справочника ОКВЭД: ${el.data.okved_type}`}
        </p>
        <p>
          {el.data.opf &&
            `Организационно-правовая форма: код ОКОПФ - ${el.data.opf.code}, 
              полное название ОПФ - ${el.data.opf.full}, 
              короткое название ОПФ - ${el.data.opf.short}, 
              версия справочника ОКОПФ - ${el.data.opf.type}`}
        </p>
        <p>
          {el.data.state.actuality_date &&
            `Дата последних изменений: ${new Date(
              el.data.state.actuality_date
            ).toLocaleDateString()}`}
        </p>
        <p>
          {el.data.state.registration_date &&
            `Дата регистрации: ${new Date(
              el.data.state.registration_date
            ).toLocaleDateString()}`}
        </p>
        <p>
          {el.data.state.liquidation_date &&
            `Дата ликвидации: ${new Date(
              el.data.state.liquidation_date
            ).toLocaleDateString()}`}
        </p>
        <p>
          {el.data.okved &&
            `Статус организации: ${StatusOrganization[el.data.state.status]}`}
        </p>
        <p>{el.data.type && `Тип учредителя: ${el.data.type}`}</p>
      </div>
    </li>
  );
};
