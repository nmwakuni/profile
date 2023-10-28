import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center md:flex-row">
      <div>
        <p className="text-gray-200 text-md font-bold">
          Mobile Phone: +254 738-808-825
        </p>
      </div>
      <div>
        <p className="text-gray-200 text-md font-bold">
          Email: nmwakuni@gmail.com
        </p>
      </div>
      <div>
        <p className="text-gray-200 text-md font-bold">
          Postal Address: 33-80119, Vipingo, Kenya
        </p>
      </div>
    </footer>
  );
};

export default Footer;

