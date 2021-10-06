<<<<<<< HEAD
export default function Ebook() {
  return (
    <div className="w-screen md:flex bg-yellow-50">
      <div className="md:w-1/2 pl-4 pr-4 md:pl-32 my-auto">
        <p className=" py-8 text-4xl font-semibold md:text-left text-center text-blue-300">Free E-book </p>
        <h1 className="md:w-1/2 text-2xl font-sans md:text-left text-center text-gray-700 pb-8">
          This e-book will show you all the latest science as to where
          motivation comes from, and how it can be aquired and maintained
        </h1>
        <div className='md:text-left text-center'>
          <button className="bg-blue-300 rounded text-xl  text-white px-4 py-2">
=======
import { useDarkMode } from "../App";
export default function Ebook() {
  const darkMode = useDarkMode((state) => state.darkMode);
  return (
    <div className={!darkMode ? "w-screen md:flex bg-yellow-50 text-gray-700" : "w-screen md:flex bg-black-50 text-gray-300" }>
      <div className="md:w-1/2 pl-4 pr-4 md:pl-32 my-auto">
        <p className=" py-8 text-4xl font-semibold md:text-left text-center text-yellow-400">
          Free E-book{" "}
        </p>
        <h1 className="md:w-1/2 text-2xl font-sans md:text-left text-center  pb-8">
          This e-book will show you all the latest science as to where
          motivation comes from, and how it can be aquired and maintained
        </h1>
        <div className="md:text-left text-center">
          <button className="bg-yellow-400 rounded text-xl  text-white px-4 py-2">
>>>>>>> blog
            Download
          </button>
        </div>
      </div>

      <div className="md:w-1/2">
<<<<<<< HEAD
        <img className=" p-16 md:ml-32 ml-0 md:w-1/2 " src="cover.png" alt=""></img>
=======
        <img
          className=" p-16 md:ml-32 ml-0 md:w-1/2 "
          src="Discipline.png"
          alt=""
        ></img>
>>>>>>> blog
      </div>
    </div>
  );
}
