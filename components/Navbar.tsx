import React from "react";
import Link from "next/link";
import { getPages } from "@/sanitty/sanity-utils";

const Navbar = async () => {
  const pages = await getPages();
  return (
    <header className="flex items-center justify-between py-5">
      <Link href="/" className="text-orange-300 text-4xl font-bold">
        Nicholas Mwakuni
      </Link>
      <div className="flex items-center gap-5 text-sm font-bold text-orange-300">
        {pages.map((page) => (
          <Link
            key={page._id}
            href={`/${page.slug}`}
            className="hover:underline"
          >
            {page.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;

