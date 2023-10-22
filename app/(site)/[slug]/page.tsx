import { getPage } from "@/sanitty/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className=" w-full">
      <h1 className="bg-gradient-to-r text-gray-200 from-orange-300 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg drop-shadow font-extrabold">
        {page.title}
      </h1>
      <div className="text-md w-full bg-gray-600 bg-opacity-70 px-8 py-8 text-white mt-5">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}

export const revalidate = 60;

