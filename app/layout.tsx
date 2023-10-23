import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import bg from "../public/bg4.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-[url('../public/bg3.jpg')] bg-no-repeat bg-cover bg-opacity-40 bg-center"
    >
      <body
        className="{inter.className}
       max-w-80 mx-auto"
      >
        {children}
      </body>
    </html>
  );
}
