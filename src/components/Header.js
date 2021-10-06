import React from "react";
import {useDarkMode } from '../App'
export default function Header() {
  const darkMode = useDarkMode((state) => state.darkMode);


  return (
<<<<<<< HEAD
    <div className="md:flex w-screen bg-yellow-50 md:h-screen px-16">
        <div className="md:w-1/2 md:hidden md:items-center">
        <div className='md:m-auto'>
          <img className="m-auto" src="ma.png" alt="marcus aurelius"></img>

          <h1 className="text-gray-500 my-16  text-center font-semibold">
=======
    <div className={!darkMode ? "md:flex w-screen text-gray-500 bg-yellow-50 md:h-screen px-16" : "md:flex w-screen text-gray-300 bg-black-50 md:h-screen px-16"}>
 
      <div className="md:w-1/2 md:hidden md:items-center">
        <div className="md:m-auto">
          <img className="m-auto" src="ma.png" alt="marcus aurelius"></img>

          <h1 className=" my-16  text-center font-semibold">
>>>>>>> blog
            MARCUS AURELIUS
          </h1>
        </div>
      </div>
      <div className="md:w-1/2 md:h-full md:flex">
<<<<<<< HEAD
        <h1 className="md:pb-0 pb-16 text-center md:text-7xl sm:text-7xl  text-5xl lg:text-8xl text-gray-700 m-auto">
=======
        <h1 className="md:pb-0 pb-16 text-center md:text-7xl sm:text-7xl  text-5xl lg:text-8xl  m-auto">
>>>>>>> blog
          "Do every act of your life as if it were your last"
        </h1>
      </div>
      <div className="md:w-1/2 hidden md:flex md:items-center">
<<<<<<< HEAD
        <div className='md:m-auto'>
          <img className="m-auto" src="ma.png" alt="marcus aurelius"></img>

          <h1 className="text-gray-500 my-4 md:my-16  text-center font-semibold">
=======
        <div className="md:m-auto">
          <img className="m-auto" src="ma.png" alt="marcus aurelius"></img>

          <h1 className="my-4 md:my-16  text-center font-semibold">
>>>>>>> blog
            MARCUS AURELIUS
          </h1>
        </div>
      </div>
    </div>
  );
}
