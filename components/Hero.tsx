import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" h-full w-full relative">
      <div className="w-full h-screen relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black after:opacity-30">
        <Image
          src="/bg2.jpg"
          width={450}
          height={450}
          alt=""
          className="w-full h-full bg-cover bg-center object-cover"
        />
      </div>
      <div className="text-white text-center top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="pt-2 pb-6 px-0 text-5xl"> React/Next.js Developer</h1>
        <div className="">
          <Link href="/projectspage">
            <button className="bg-yellow-500 hover:bg-orange-300 text-black border border-white mr-1 font-bold py-2 px-4 object-contain">
              {" "}
              PROJECTS
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-white hover:bg-gray-500 bg-gray-600 font-bold py-2 px-4 border border-white ml-1">
              {" "}
              CONTACT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

