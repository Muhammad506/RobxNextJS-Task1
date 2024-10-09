"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="">
      {/* Nav For Larger Screen */}
      <header
        className={`text-white fixed body-font  px-10 w-full z-50 ${
          isScrolled ? "bg-[#212EA0]" : "bg-transparent"
        } hidden custom:block transition-colors duration-300`}
      >
        <div className="container mx-auto px-5 py-3 flex items-center justify-between">
          <div className="w-1/3">
            <Image src="/logo.png" alt="logo" width={180} height={180} />
          </div>
          <div className="flex items-center space-x-4">
            <nav className="custom:ml-auto flex items-center text-base justify-between">
              <a className="mr-5 lg:mr-12 hover:text-gray-200">Home</a>
              <a className="mr-5 lg:mr-12 hover:text-gray-200">Program</a>
              <a className="mr-5 lg:mr-12 text-nowrap hover:text-gray-200">
                About us
              </a>
              <a className="mr-5 lg:mr-12 hover:text-gray-200">Campus</a>
              <a className="mr-5 lg:mr-12 hover:text-gray-200">Testimonials</a>
            </nav>
            <button className="inline-flex text-nowrap items-center bg-gray-100 text-black border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded-3xl text-base">
              Contact us
            </button>
          </div>
        </div>
      </header>

      {/* Nav For Smaller Screen */}
    </main>
  );
};

export default Navbar;
