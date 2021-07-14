import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { Transition } from "@headlessui/react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='z-20'>
      <div className="bg-yellow-50 flex h-16 shadow-lg justify-between z-20 px-4 lg:px-16">
        <div className=" flex items-center h-full">
       <a className='flex items-center h-full' href='/'>
       <img className="h-16 my-auto" src="/logo.png" alt="logo" />
          <div>
            <h1 className="font-semibold text-yellow-400 text-lg">E-Mediate</h1>
          </div>
       </a>
        </div>
        <div className="hidden md:flex items-center">
          <div>
            <a
              className="font-semibold  mx-6 hover:text-yellow-400 text-gray-700"
              href="/"
            >
              HOME
            </a>
          </div>
          <div>
            <a
              className="font-semibold mx-6 hover:text-yellow-400 text-gray-700"
              href="/"
            >
              ABOUT
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
        <div className=" md:hidden shadow-sm bg-yellow-50 border border-t-0 border-l-0 border-r-0 border-yellow-300" >
          <div className="py-1 px-4">
            <a
              className="font-semibold   hover:text-yellow-400 text-gray-700"
              href="/"
            >
              HOME
            </a>
          </div>
          <div className="py-1 px-4">
            <a
              className="font-semibold   hover:text-yellow-400 text-gray-700"
              href="/"
            >
              BLOG
            </a>
          </div>
          <div className="py-1 px-4">
            <a
              className="font-semibold   hover:text-yellow-400 text-gray-700"
              href="/"
            >
              E-BOOK
            </a>
          </div>
        </div>
      </Transition>
    </div>
  );
}
