"use client";
import { OrganizationType, StatusOrganization } from "@/types/organization";
import React, { FC } from "react";
import { Organization } from "../Organization/Organization";
import classes from "./infowidget.module.scss";
import { classNames } from "@/utils/helpers/classNames";

interface InfoWidgetProps {
  data: any;
}
export const InfoWidget: FC<InfoWidgetProps> = ({ data }) => {
  const organizations: OrganizationType[] = data.suggestions;
  return (
    <ul className={classNames(classes.list)}>
      {organizations.map((el) => (
        <Organization key={el.value} el={el} />
      ))}
    </ul>
  );
};
