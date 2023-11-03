import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col h-full border rounded-2xl border-gray-800 overflow-hidden w-100 bg-black bg-opacity-40 justify-between items-center md:flex-row text-white">
      <div className=" max-container relative flex w-full py-6 flex-col-reverse justify-between  overflow-hidden bg-pattern bg-cover bg-center bg-no-repeat px-6 text-white lg:flex-row sm:gap-12 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xlgrid md:grid-cols-2 gap-10">
        <div className=" flex justify-center items-center flex-col p-4">
          <div className="text-xl flex">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div className="flex mb-3">
              <p className="leading-7">Mombasa, Coast, Kenya</p>
            </div>
          </div>
          <div className="flex">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div className="text-xl pb-3">
              <p>+254-736-808-925</p>
            </div>
          </div>
          <div className="flex">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div className="text-xl pb-3">
              <p>nmwakuni@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col p-4">
            <div className="mt-4 flex">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
                className="cursor-pointer"
              />
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
                className="cursor-pointer"
              />
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image src="/phone.jpg" alt="phones" width={550} height={300} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

