"use client"

import Image from "next/image";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import zagoalLogo from "./Circle Logo.png";

const Home = ()=> {

  const [email, setEmail] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setEmail(e.target.value)
  }
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(`${email} submitted successfully!`);
};

  return (
    <main className="">
       <section className="container flex flex-col items-center justify-center h-screen gap-8">
      <div className="max-w-sm flex items-center justify-center flex-col">
        <Image
          className="rounded-full w-24 h-24 mb-4"
          src={zagoalLogo}
          alt="zagoal-logo"
        />
        <h1 className="text-3xl font-bold text-[#7c0c00]">
          Zagoal
          <span className="ms-2 text-black text-lg font-normal">
            free and flexible lifestyle planner why search when you know what
            you want
          </span>
        </h1>
      </div>
      <form action="" onSubmit={handleSubmit} className="w-full">
        <div className="sm:flex items-center justify-between md:w-[75%] lg:w-1/2 mx-auto p-4 gap-1">
        <div className="flex-1">
          <input
          onChange={handleChange}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#D3D3D3] focus:border-[#D3D3D3] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email address"
            required
          />
        </div>
        <div className="w-[30%] max-sm:w-full max-sm:mt-4">
        <button
            type="submit"
            className="w-full bg-[#F4F4F4] hover:bg-[#D3D3D3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-[#D3D3D3]"
        >
            Get early access
        </button>
        </div>
        </div>
      </form>
      <div>
        <a href="#" className="flex items-center gap-4">Watch the video <span className="p-4 rounded-full border border-black"><FaAngleRight /></span> </a>
        </div>
    </section>
    </main>
  );
}

export default Home;