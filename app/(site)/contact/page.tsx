import Form from "@/components/Form";

const contact = () => {
  return (
    <div>
      <div className="w-full h-screen bg-opacity-10 bg-black relative before:content-[''] before:bg-[url(/contact.jpg)] before:bg-cover before:bg-center before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-1">
        <div className="w-full h-full flex opacity-95 flex-col justify-center items-center">
          <h1 className="text-2xl text-white font-bold py-10">Get In Touch</h1>
          <p className="text-center justify-center items-center text-white font-bold px-20 text-xl">
            Let&apos;s have a chat!
          </p>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default contact;

