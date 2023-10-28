import { getProjects } from "@/sanitty/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <div>
        <h1 className="text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-blue-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Greetings!
          </span>
        </h1>
      </div>
      <div>
        <p className="mt-3 text-xl text-gray-300">
          Welcome to my page. I am former Banker who is passionate about
          Programming and Web Development. Kindly check out my projects below;
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-8 mt-8">
        <div className="">
          <Image
            src="/nick.jpg"
            alt="nick"
            width={700}
            height={500}
            className="object-contain shadow-2xl border border-gray-500 w-full"
          />
        </div>
        <div className="text-xl bg-gray-600 bg-opacity-70">
          <p className="text-left px-5 content-center mt-5 text-gray-100">
            Dedicated and highly motivated, I am seeking a challenging position
            in a organization that thrives for personal and organizational
            development. I bring exceptional work ethic while maximizing my
            skills to the fullest. My eagerness to learn and broaden my skills
            each day makes me a great fit for any dynamic organization. For more
            information regarding my qualifications, feel free to reach out on
            phone or email, details below.
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

