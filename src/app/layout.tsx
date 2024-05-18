import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/index.scss";
import MainLayout from "@/components/layouts/MainLayout/MainLayout";
import { Header } from "@/components/ui/Header/Header";
import { ThemeProvider } from "@/components/ui/ThemeProvider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='author'
          content='Alexander Pituishov: uchenik.ikt@yandex.ru'
        />
      </head>
      <body>
        <ThemeProvider>
          <MainLayout>
            <Header />
            <main>{children}</main>
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
