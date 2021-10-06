import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import BookIcon from "@material-ui/icons/Book";
import {useDarkMode } from '../Store'
export default function Footer() {
  const darkMode = useDarkMode((state) => state.darkMode);
  return (
    <footer className={!darkMode ? " bg-yellow-50 overflow-hidden pt-16" : " bg-black-50 overflow-hidden pt-16 text-gray-300" }>
      <div className="w-screen sm:flex justify-evenly">
        <div className=" sm:w-1/4">
          <hr className="border-1 border-yellow-400"></hr>
        </div>
        <div>
          <img src="logo.png" className="mx-auto" alt="logo"></img>
        </div>
        <div className="sm:w-1/4">
          <hr className="border-1 border-yellow-400"></hr>
        </div>
      </div>
      <div className="sm:flex justify-evenly pt-10">
        <div>
          <ul className="text-center">
            <a href="/">
              <li> HOME</li>
            </a>
            <a href="/project-principles">
              <li>ABOUT</li>
            </a>
            <a href="/gallery">
              <li>EBOOK</li>
            </a>
          </ul>
        </div>
        <div className="flex justify-evenly sm:py-0 py-10">
          <BookIcon />
          <InstagramIcon  className="mx-4"/>
          <EmailIcon />
        </div>
        <div>
          <ul className="text-center">
            <a href="/contact-us">
              <li> HOME </li>
            </a>
            <a href="/cv">
              <li>ABOUT</li>
            </a>
            <a href="/about">
              <li>E-BOOK</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="pt-32 mb-3">
        <p className="text-center"> © 2021 | MAINTAINED BY KG PRODUCTIONS</p>
      </div>
    </footer>
  );
}
