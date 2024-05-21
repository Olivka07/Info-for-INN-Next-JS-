import React, { FC, Suspense } from "react";
import { Metadata } from "next";
import { getInfo } from "./api";
import { InfoWidget } from "@/components/ui/InfoWidget/InfoWidget";
import { WidgetSearch } from "@/components/ui/WidgetSearch/WidgetSearch";

interface AboutPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: AboutPageProps): Promise<Metadata> {
  try {
    const data = await getInfo(id);
    const desc =
      data.suggestions && data.suggestions.length > 0
        ? `Информация об организации ${data.suggestions[0].value} по введенному ИНН (${id})`
        : `Информации об организации с ИНН ${id} не найдено`;
    return {
      description: desc,
      title: `Об организации с ИНН ${id}`,
    };
  } catch (e) {
    throw e;
  }
}

const Page: FC<AboutPageProps> = async ({ params: { id } }) => {
  try {
    const data = await getInfo(id);
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className='center_horizontal'>
          <WidgetSearch />
        </div>
        {(data.suggestions && data.suggestions.length > 0 && (
          <InfoWidget data={data} />
        )) || (
          <p className='center_text'>{`Организации с ИНН ${id} не найдено`}</p>
        )}
      </Suspense>
    );
  } catch (e) {
    throw e;
  }
};

export default Page;
