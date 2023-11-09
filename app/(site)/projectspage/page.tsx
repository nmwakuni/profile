import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/sanitty/sanity-utils";
import PricingCard from "@/components/pricingCard";

const projectspaje = async () => {
  const projects = await getProjects();
  return (
    <div className="h-full w-full">
      <div className="w-full h-screen bg-opacity-30 mb-5 bg-black relative before:content-[''] before:bg-bg-img-4 before:bg-cover before:bg-no-repeat before:bg-center before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-1">
        <div className="text-white w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-2xl font-bold text-center px-10">
            Please see my rate cards and check out some of my recent works by
            visiting the links below;
          </p>
        </div>
      </div>

      <div className="mt-15 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <div className="mt-20">
        <PricingCard />
      </div>
    </div>
  );
};

export default projectspaje;

export const revalidate = 60;

//before:content-[''] before:bg-[url(/bg4.jpg)] before:bg-cover before:bg-center before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-1//

