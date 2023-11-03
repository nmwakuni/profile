import React from "react";

const about = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-screen bg-opacity-60 mb-5 bg-black relative before:content-[''] before:bg-bg-img-1 before:bg-cover before:bg-no-repeat before:bg-center before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-1">
        <div className="w-full h-full flex opacity-95 flex-col justify-center items-center">
          <h1 className="text-2xl text-white font-bold py-10">What I do!</h1>
          <p className="text-center justify-center items-center text-white font-bold px-10 md:px-20 text-xl">
            My goal is to build Web Applications while utilizing the latest
            technologies in the industry. The websites I build are Single Page
            Applications for quick loading time and seamless user experience,
            using frameworks such as React, Next.js and Vue.js. All my projects
            are highly responsive meaning the user interface is not compromized
            whether one is using a phone, tablet or PC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;

