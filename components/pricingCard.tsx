import Link from "next/link";
import React from "react";

const pricingCard = () => {
  return (
    <div className="w-full px-4 bg-black text-gray-200 py-24">
      <div className="m-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="text-center p-4 hover:bg-gray-800 border border-white">
          <h3 className="p-4 text-xl">- Basic -</h3>
          <span className="border border-b my-4 mx-auto block w-1/12"></span>
          <p className="py-2 text-3xl font-semibold p-4">KES 7,000</p>
          <p className="py-2">- 3 Days -</p>
          <p className="py-2">- 3 Pages -</p>
          <p className="py-2">- Responsive Design -</p>
          <p className="py-2">- SEO -</p>
          <p className="py-2">- Interactive -</p>
          <Link href="/contact">
            <button className="bg-yellow-500 hover:bg-orange-300 text-black border border-white my-6 font-bold py-2 px-4 object-contain">
              PURCHASE NOW
            </button>
          </Link>
        </div>

        <div className="text-center p-4 hover:bg-gray-800 border border-white">
          <h3 className="p-4 text-xl">- Premium -</h3>
          <span className="border border-b my-4 mx-auto block w-1/12"></span>
          <p className="py-2 text-3xl font-semibold p-4">KES 12,000</p>
          <p className="py-2">- 5 Days -</p>
          <p className="py-2">- 8 Pages -</p>
          <p className="py-2">- Responsive Design -</p>
          <p className="py-2">- Advanced SEO -</p>
          <p className="py-2">- Interactive -</p>
          <Link href="/contact">
            <button className="bg-yellow-500 hover:bg-orange-300 my-6 text-black border border-white mr-1 font-bold py-2 px-4 object-contain">
              PURCHASE NOW
            </button>
          </Link>
        </div>

        <div className="text-center hover:bg-gray-800 border border-white p-4">
          <h3 className="p-4 text-xl">- Business -</h3>
          <span className="border border-b my-4 mx-auto block w-1/12"></span>
          <p className="py-2 text-3xl font-semibold p-4">KES 20,000</p>
          <p className="py-2">- 7 Days -</p>
          <p className="py-2">- Unlimited Pages -</p>
          <p className="py-2">- Responsive Design -</p>
          <p className="py-2">- Advanced SEO -</p>
          <p className="py-2">- Highly Interactive -</p>
          <Link href="/contact">
            <button className="bg-yellow-500 hover:bg-orange-300 my-6 text-black border border-white mr-1 font-bold py-2 px-4 object-contain">
              PURCHASE NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default pricingCard;

