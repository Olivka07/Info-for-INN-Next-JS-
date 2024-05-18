"use client";

import React, { FC } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}
const error: FC<ErrorPageProps> = ({ error }) => {
  console.log(error);
  return <p className='center_text'>Что-то пошло не так</p>;
};

export default error;
