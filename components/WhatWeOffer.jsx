import Image from "next/image";

const WhatWeOffer = () => {
  return (
    <main className="my-16 flex flex-col justify-center items-center">
      <div className="space-y-1 items-center  flex flex-col py-4">
        <h6 className="text-[#212EA0] text-sm font-bold">OUR PROGRAM</h6>
        <h3 className="text-3xl font-sans font-bold pb-14"> What We Offer</h3>
      </div>
      <div className="flex space-x-8">
        {/* img1 */}
        <div className="relative w-[320px] h-[300px] rounded-lg overflow-hidden group">
          <Image
            src="/wwo1.jpg"
            alt="wwo1"
            width={250}
            height={250}
            className="rounded-lg size-[320px]"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#212EA0] opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
            <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              Graduation Degree
            </span>
          </div>
        </div>

        {/* img2 */}
        <div className="relative w-[320px] h-[300px] rounded-lg overflow-hidden group ">
          <Image
            src="/ww02.jpg"
            alt="wwo2"
            width={250}
            height={250}
            className="size-[320px] rounded-lg "
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#212EA0] opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
            <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              Masters Degree
            </span>
          </div>
        </div>

        {/* img3 */}
        <div className="relative w-[320px] h-[300px] rounded-lg overflow-hidden group">
          <Image
            src="/wwo3.jpg"
            alt="wwo2"
            width={250}
            height={250}
            className="size-[320px] rounded-lg"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#212EA0] opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
            <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              Post Graduation
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhatWeOffer;
