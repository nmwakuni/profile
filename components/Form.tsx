import React from "react";

const Form = () => {
  return (
    <div className="text-gray-200 mb-2">
      <div className="">
        <form className="flex flex-col py-16 px-4 m-auto max-w-screen-sm">
          <label>Name</label>
          <input
            type="text"
            className="mb-4 py-2.5 px-4.5 bg-gray-500 bg-opacity-20 border border-gray-200 text-xl"
          ></input>
          <label>Phone Number</label>
          <input
            type="text"
            className="mb-4 py-2.5 px-4.5 bg-gray-500 bg-opacity-20 border border-gray-200 text-xl"
          ></input>
          <label>Email</label>
          <input
            type="email"
            className="mb-4 py-2.5 px-4.5 bg-gray-500 border bg-opacity-20 border-gray-200 text-xl"
          ></input>
          <label>Subject</label>
          <input
            type="text"
            className="mb-4 py-2.5 px-4.5 bg-gray-500 border bg-opacity-20 border-gray-200 text-xl"
          ></input>
          <label>Message</label>
          <textarea
            rows={6}
            placeholder="Type your message here"
            className="mb-4 py-2.5 px-4.5 bg-gray-500 border bg-opacity-20 border-gray-200 text-xl"
          />
          <button className="bg-yellow-500 text-black text-xl border border-gray-500 my-6 font-bold py-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

