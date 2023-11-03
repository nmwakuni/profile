import React from "react";
import Link from "next/link";
import { getPages } from "@/sanitty/sanity-utils";
import { useState } from "react";
import Image from "next/image";

const Navbar = async () => {
  const pages = await getPages();
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between w-full">
      <div>
        <Link href="/" className="text-gray-200 text-4xl font-bold">
          Portfolio
        </Link>
      </div>
      <div className="flex items-center gap-5 text-xl hover:text-gray-300 font-bold text-gray-200">
        <Link href="/">Home</Link>
        <Link href="/projectspage">Projects</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
};

export default Navbar;

