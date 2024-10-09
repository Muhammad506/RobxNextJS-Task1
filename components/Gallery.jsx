import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";

const Gallery = () => {
  return (
    <main className="my-16 flex flex-col justify-center items-center">
      <div className="space-y-1 items-center  flex flex-col py-4">
        <h6 className="text-[#212EA0]  font-semibold text-lg ">Gallery</h6>
        <h3 className="text-3xl font-sans font-bold pb-14"> Campus Photos</h3>
      </div>
      <div className="flex space-x-8 -z-50">
        {/* img1 */}
        <div className="relative w-[230px] h-[300px] rounded-lg overflow-hidden group">
          <Image
            src="/Gallery1.jpg"
            alt="wwo1"
            width={230}
            height={300}
            className="rounded-lg size-[320px]"
          />
        </div>

        {/* img2 */}
        <div className="relative w-[230px] h-[300px] rounded-lg overflow-hidden group ">
          <Image
            src="/Gallery2.jpg"
            alt="wwo2"
            width={230}
            height={250}
            className="size-[320px] rounded-lg "
          />
        </div>

        {/* img3 */}
        <div className="relative w-[230px] h-[300px] rounded-lg overflow-hidden group">
          <Image
            src="/Gallery3.jpg"
            alt="wwo2"
            width={230}
            height={250}
            className="size-[320px] rounded-lg"
          />
        </div>

        {/* img4 */}
        <div className="relative w-[230px] h-[300px] rounded-lg overflow-hidden group">
          <Image
            src="/Gallery4.jpg"
            alt="wwo2"
            width={230}
            height={250}
            className="size-[320px] rounded-lg"
          />
        </div>
      </div>
      <div>
        <button className="flex border text-white bg-[#212EA0] my-8 py-3 px-6 rounded-3xl">
          See more here
          <HiArrowLongRight className=" size-6 ml-2" />
        </button>
      </div>
    </main>
  );
};

export default Gallery;
