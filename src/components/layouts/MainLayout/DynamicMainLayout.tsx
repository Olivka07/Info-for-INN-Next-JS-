import React, { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

const DynamicMainLayout = dynamic(() => import("./MainLayout"), {
    loading: () => <p>Loading..</p>,
    ssr: false,
});
export default function Home({ children }: PropsWithChildren) {
    return <DynamicMainLayout>{children}</DynamicMainLayout>;
}
