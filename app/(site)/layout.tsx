import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanitty/sanity-utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en" className="bg-black min-h-screen mx-auto py-4">
      <body className="max-w-80 mx-auto">
        <Navbar />
        <main className="py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

