import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import ThemeContextProvider from '@/context/theme-context';
import { i18n } from "@/config/i18n.config";

const font = Nunito({ subsets: ["latin"] });

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({lang}));

  return languages
}

export const metadata: Metadata = {
  title: "Techonogy",
  description: "Web site development by next",
};

export default function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode,
  params: {
    lang: "en-US" | "pt-BR"
  }
}>) {
  return (
    <html lang={params.lang}>
      <body className={`${font.className} dark:bg-[#000] dark:text-white bg-[#FFFAE6]`}>
        <ThemeContextProvider>
          <Header params={params}/>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
