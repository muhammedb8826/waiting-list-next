"use client";
import Image from "next/image";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import zagoalLogo from "./Circle Logo.png";
import videoBackgroundImage from "./pexels-pixabay-38271.jpg";

const Home = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${email} submitted successfully!`);
  };

  return (
    <main className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 flex w-full dark:bg-gray-800 h-3/4 md:h-2/3"></div>
      <div className="container relative px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="max-w-4xl mx-auto mt-1 mb-6 text-3xl font-extrabold dark:text-gray-300 sm:text-4xl lg:text-5xl ">
            <span className="text-[#7c0c00]">Zagoal</span> Life is here.
          </h1>
          <p className="mb-12 text-lg font-medium leading-8 text-gray-500 dark:text-gray-400">
            free and flexible lifestyle planner why search when you know what
            you want
          </p>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-wrap justify-center mb-20">
              <input
                type="email"
                onChange={handleChange}
                name="email"
                required
                className="w-full py-3 pl-4 mb-2 text-sm text-gray-900 rounded dark:placeholder-gray-300 dark:text-gray-300 dark:bg-gray-700 md:mb-0 md:w-1/2 border"
                placeholder="Type your e-mail"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-semibold text-white bg-red-600 rounded md:w-auto md:ml-2 hover:bg-red-700"
              >
                Get early access
              </button>
            </div>
          </form>
          <div className="relative">
            <Image
              className="relative z-50 block object-cover w-full shadow-lg h-96 lg:h-4/6 rounded-2xl"
              src={videoBackgroundImage}
              alt="video image"
            />
            <div className="absolute z-50 left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]">
              <a href="#" className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-20 h-20 bi bi-play-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
