import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
      <div>
        <Navbar /> 
    <main className="w-full flex justify-center items-center bg-black relative">
      {/* Background Image */}
      <Image
        src="/hero/heroimage.png"
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-10"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-20 z-10"></div>

      <div className="relative w-full max-w-screen-xl h-[500px] flex flex-col md:flex-row justify-center items-center overflow-hidden px-4">
        {/* Content */}
        <div className="relative z-20 sm:w-full md:w-[50%] text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <h3 className="text-primary font-sans text-lg sm:text-xl md:text-2xl">It&apos;s Quick & Amusing</h3>

          <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mt-2 flex flex-col sm:flex-row items-center sm:justify-start">
            <p><span className="text-primary">The </span> Art of Speed </p>
          </h1>
          <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl pt-4">
            Food Quality
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start pt-5 pb-4 gap-4">
            <p className="text-white text-sm sm:text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              facere voluptatum tempore massa conque.
            </p>
          </div>
          <button className="bg-primary sm:px-3 w-[120px] h-[40px] md:w-[160px] md:h-[40px] md:px-7 sm:text-sm py-2 text-gray-900 rounded-full">
            See Menu
          </button>
        </div>

        {/* Image Container */}
        <div className="relative sm:w-full md:w-[30%] lg:w-[30%] flex justify-center items-center mt-6 md:mt-0">
          {/* Leaves Image */}
          <Image
            src="/hero/heroimage2.png"
            alt="Leaves"
            width={636.58}
            height={382.84}
            className="absolute z-0 w-[180px] sm:w-[220px] md:w-[250px] h-auto -rotate-[2deg] left-1/4 transform md:left-1/3"
          />
          {/* Plate Image */}
          <Image
            src="/hero/heroimage.png"
            alt="Plate"
            width={624.15}
            height={633.51}
            className="relative z-10 w-[220px] sm:w-[260px] md:w-[300px] h-auto shadow-md"
          />
        </div>
      </div>

    </main>
    </div>
  );
}
