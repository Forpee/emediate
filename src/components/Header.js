export default function Header() {
  return (
    <div className="flex w-screen bg-yellow-50 h-screen">
      <div className="w-1/2 h-full flex">
      <h1 className="text-center text-8xl text-gray-700 m-auto">
          "Do every act of your life as if it were your last"
        </h1>
      </div>
      <div>
        <img src="ma.png" alt="marcus aurelius"></img>
     
        <h1 className="text-gray-500 text-center font-semibold">MARCUS AURELIUS</h1>
      </div>
    </div>
  );
}
