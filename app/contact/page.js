"use client";
import { motion } from "framer-motion";
import React from "react";
const page = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
       className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-16 px-3 ">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="2xl:text-5xl text-4xl font-bold text-gray-800 tracking-wide mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600">
          Feel free to reach out for collaborations, inquiries, or just to say
          hello!
        </p>
      </div>
      <div className="max-w-4xl mx-auto ">
        {/*
        Contact Form 
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                rows="5"
                placeholder="Your Message"></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none">
              Send Message
            </button>
          </form>
        </div>
       */}
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Contact Details
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Email:</strong> neerajvishwakarma6484.com
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Phone:</strong> +91 0000000000
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Location:</strong> Delhi 110092
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Replace "#" with actual social media links */}
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                {/* Social media icons here */}
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                {/* Social media icons here */}
              </svg>
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
