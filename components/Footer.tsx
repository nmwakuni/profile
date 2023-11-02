import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col w-100 bg-gray-800 opacity-80 py-18 justify-between items-center md:flex-row text-white">
      <div className="m-auto max-w-screen-xl grid md:grid-cols-2 gap-10">
        <div className="h-full max-w-full flex flex-col p-4">
          <div className="text-xl">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div className="flex mb-3">
              <p className="leading-7">Mombasa, Coast.</p>
              <p>Kenya</p>
            </div>
          </div>
          <div>
            <h4 className="pb-3 text-xl">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +254-736-808-925
            </h4>
          </div>
          <div>
            <h4 className="pb-3 text-xl">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              nmwakuni@gmail.com
            </h4>
          </div>
        </div>
        <div className="max-w-full h-full flex flex-col p-4">
          <h4 className="pb-3 text-2xl">About me.</h4>
          <p className="texl-2xl">
            My name is Nicholas Mwakuni, founder and CEO of TechNiQ Co. Ltd. My
            goal is to build highly interactive and responsive web applications.
          </p>
          <div className="mt-4 flex">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

