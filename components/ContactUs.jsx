"use client";
import { useState } from "react";

export default function ContactUs() {
  const [captcha, setCaptcha] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  const [isHuman, setIsHuman] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 p-8 md:p-16">
      {/* Left container */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
        <p className="text-gray-700 mb-4">
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <div className="text-gray-800">
          <p className="mb-2">Contact@GreatStack.dev</p>
          <p className="mb-2">+1 123-456-7890</p>
          <p>77 Massachusetts Ave, Cambridge, MA 02139, United States</p>
        </div>
      </div>

      {/* Right container (Form) */}
      <div className="w-full md:w-1/2 p-6 ">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              className="block text-gray-700  text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-[#EBECFE] focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone No
            </label>
            <input
              type="text"
              id="phone"
              className="w-full p-3 border border-gray-300 bg-[#EBECFE] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Phone No"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg bg-[#EBECFE] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Enter Your Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 bg-[#EBECFE] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          {/* Captcha Field */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="humanCaptcha"
              className="mr-2 w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
              checked={isHuman}
              onChange={(e) => setIsHuman(e.target.checked)}
              required
            />
            <label
              htmlFor="humanCaptcha"
              className="text-gray-700 text-sm font-bold"
            >
              I am Human
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
