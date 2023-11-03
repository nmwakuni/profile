import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanitty/sanity-utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Roboto,
  Manrope,
  Raleway,
  Tangerine,
  Montserrat,
  Josefin_Sans,
  Sofia_Sans,
  Varela_Round,
} from "@next/font/google";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
});

const varela = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "React and Next.js Developer",
  description:
    "Build highly interactive and responsive websites with React and Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-black bg-opacity-90 min-h-screen mx-auto py-4 {`${josefin.variable} font-wdc`}"
    >
      <body className="max-w-80 mx-auto {`${josefin.variable} font-wdc`}">
        <Navbar />
        <main className="py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

