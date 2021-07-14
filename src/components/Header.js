export default function Header() {
  return (
    <div className="md:flex w-screen bg-yellow-50 md:h-screen px-16">
        <div className="md:w-1/2 md:hidden md:items-center">
        <div className='md:m-auto'>
          <img className="m-auto" src="ma.png" alt="marcus aurelius"></img>

          <h1 className="text-gray-500 my-16  text-center font-semibold">
            MARCUS AURELIUS
          </h1>
        </div>
      </div>
      <div className="md:w-1/2 md:h-full md:flex">
        <h1 className="md:pb-0 pb-16 text-center md:text-7xl sm:text-7xl  text-5xl lg:text-8xl text-gray-700 m-auto">
          "Do every act of your life as if it were your last"
        </h1>
      </div>
      <div className="md:w-1/2 hidden md:flex md:items-center">
        <div className='md:m-auto'>
          <img className="m-auto" src="ma.png" alt="marcus aurelius"></img>

          <h1 className="text-gray-500 my-4 md:my-16  text-center font-semibold">
            MARCUS AURELIUS
          </h1>
        </div>
      </div>
    </div>
  );
}
