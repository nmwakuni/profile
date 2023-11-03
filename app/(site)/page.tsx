import { getProjects } from "@/sanitty/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="flex md:flex-row flex-col gap-8 mt-8">
        <div className="">
          <Image
            src="/nick.jpg"
            alt="nick"
            width={700}
            height={500}
            className="rounded-full border border-gray-500 w-full"
          />
        </div>

        <div className="bg-green-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="text-2xl md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Need a website</strong> And Don&apos;t know where to start?
          </h2>
          <p className="text-xl xl:regular-20 mt-5 text-white">
            Stop worrying anymore! My name is Nicholas Mwakuni, I&apos;m a Web
            Developer. I pride myself in doing the utmost best for my customers.
            It always gives me joy to see the smiles on my clients after
            exceeding on their expectations. So don&apos;t hesitate to reach out
            and let&apos;s build websites together!!
          </p>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 60;

//bg-gradient-to-r from-blue-400 via-red-500 to-purple-600 bg-clip-text text-transparent"//

