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
        <div className="text-xl bg-gray-800 bg-opacity-80">
          <p className="px-5 text-justify mx-8 my-8 text-gray-200">
            I pride myself in doing the utmost best for my customers. It always
            gives me joy to see the smiles on my clients after delivering on
            their assignments and more. I'd like to believe that the more effort
            i put in building applications, the more I learn and broaden my
            knowledge about Web Development. Let's build websites together!!
          </p>
        </div>
      </div>
      <h2 className="mt-10 font-bold text-gray-200 text-3xl">My Projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 text-2xl font-extrabold  text-orange-300">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const revalidate = 60;

//bg-gradient-to-r from-blue-400 via-red-500 to-purple-600 bg-clip-text text-transparent"//

