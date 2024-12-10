import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";


function AboutUs() {
  return (
    <section className="bg-black px-4 md:px-[100px] lg:px-[120px] xl:px-[150px] py-[40px] flex flex-col lg:flex-row justify-between items-center gap-10">
      {/* Heading Section */}
      <div className="w-full lg:w-1/2">
        <div className="text-white space-y-6">
          <h1 className="text-[12px] md:text-[18px] lg:text-[32px] xl:text-[38px] font-normal text-[#FF9F0D] font-greatVibes">
            About Us
          </h1>
          <h2 className="text-[12px] md:text-[18px] lg:text-[28px] xl:text-[48px] font-bold whitespace-nowrap lg:whitespace-normal">
            <span className="text-[#FF9F0D]">We</span> Create the Best Foody Product
          </h2>
          <p className="text-[08px] md:text-[12px] lg:text-[14px] xl:text-[18px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
            sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
            consequat.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start text-[08px] md:text-[10px] lg:text-[12px] xl:text-[18px] font-normal">
                <FaCheck className="mr-[10px]" />
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-start text-[08px] md:text-[10px] lg:text-[12px] xl:text-[18px] font-normal">
                <FaCheck className="mr-[10px]"/>
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="flex items-start text-[08px] md:text-[10px] lg:text-[12px] xl:text-[18px] font-normal">
                <FaCheck className="mr-[10px]" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <div className="flex flex-col items-center md:items-start mt-6">
            <button className="bg-[#FF9F0D] text-white w-[120px] h-[40px]  md:w-[160px] md:h-[40px] rounded-[40px] hover:bg-yellow-800 text-lg md:text-xl transition-all">
              See More
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 items-center lg:items-start">
        <Image
          src="/about/about1.png"
          alt="About1"
          width={760}
          height={330}
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 w-full">
          <Image
            src="/about/about2.png"
            alt="About2"
            width={332}
            height={194}
            className="w-full lg:w-[48%] h-auto object-cover rounded-lg"
          />
          <Image
            src="/about/about3.png"
            alt="About3"
            width={332}
            height={194}
            className="w-full lg:w-[48%] h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
