import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { Transition } from "@headlessui/react";
import {useDarkMode } from '../App'

export default function Navbar() {
  const darkMode = useDarkMode((state) => state.darkMode);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className={!darkMode ? "bg-yellow-50 flex h-16 shadow-sm justify-between px-4 lg:px-16" : "bg-black-50 flex h-16 shadow-sm justify-between px-4 lg:px-16"}>
        <div className=" flex items-center h-full">
          <img className="h-16 my-auto" src="/logo.png" alt="logo" />
          <div>
            <h1 className="font-semibold text-yellow-400 text-lg">E-Mediate</h1>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <div>
            <a
              className="font-semibold mx-6 hover:text-yellow-400 text-gray-700"
              href="/"
            >
              HOME
            </a>
          </div>
          <div>
            <a
              className="font-semibold mx-6 hover:text-yellow-400 text-gray-700"
              href="/blog"
            >
              BLOG
            </a>
          </div>
          <div>
            <a
              className="font-semibold mx-6 hover:text-yellow-400 text-gray-700"
              href="/"
            >
              E-BOOK
            </a>
          </div>
        </div>
        <div className=" hidden md:flex items-center">
          <div>
            <button className="px-6 bg-yellow-400 mx-2 text-white py-2 font-semibold rounded-md">
              LOGIN
            </button>
          </div>
          <div>
            <button className="px-4 border mx-2 border-yellow-300  text-yellow-400 font-semibold py-2 rounded-md">
              SIGN UP
            </button>
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className={!isOpen ? "" : "hidden"}
          >
            <MenuIcon />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className={!isOpen ? "hidden" : ""}
          >
            <ClearIcon />
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transfrom"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transfrom"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className=" md:hidden shadow-sm">
          <div className="py-1 px-4" >
            <a
              className="font-semibold   hover:text-yellow-400 text-gray-700"
              href="/"
            >
              HOME
            </a>
          </div>
          <div className="py-1 px-4" >
            <a
              className="font-semibold   hover:text-yellow-400 text-gray-700"
              href="/"
            >
              BLOG
            </a>
          </div>
          <div className="py-1 px-4" >
            <a
              className="font-semibold   hover:text-yellow-400 text-gray-700"
              href="/"
            >
              E-BOOK
            </a>
          </div>
          <div className="py-1 px-2" >
        <button className="border border-yellow-400 hover:bg-yellow-400 px-5 py-2 bg-white text-yellow-400 rounded-md hover:text-white">
        <a
              className="font-semibold   "
              href="/"
            >
              LOGIN
            </a>
        </button>
          </div>
          <div className="py-1 px-2" >
          <button className=" px-4 py-2 hover:text-yellow-400  text-white border hover:border-yellow-400 rounded-md bg-yellow-400 hover:bg-white">
          <a
              className="font-semibold "
              href="/"
            >
              SIGN UP
            </a>
          </button>
          </div>
      
        </div>
      </Transition>
    </div>
  );
}
