import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ThemeContextProvider from '@/context/theme-context';

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techonogy",
  description: "Web site development by next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${font.className} bg-[#FFFAE6]`}>
        <ThemeContextProvider>
          <Header />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
