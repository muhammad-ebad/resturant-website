import React from 'react';
import Image from 'next/image';

const Whyus = () => {
  return (
    <div className="pt-20 bg-black sm:flex sm:justify-center  text-white relative overflow-hidden">  {/* Corrected */}
      <div className="container mx-auto px-2 h-full">
        <div className="grid md:grid-cols-2 sm:flex-col gap-8 items-center h-full py-12">
          <div className="relative">
            <div className="relative w-full aspect-square">
              <Image
                src="/whyus/1.png"
                alt="Why Choose Us"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
         
          <div className="space-y-6 mx-auto">
            <p className="text-orange-500 font-script text-2xl">Why Choose us</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-orange-500">Ex</span>tra ordinary taste and Experienced
              <br />
              foody <span>product</span>
            </h1>
            <p className="text-gray-400 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
            <Image
              src="/whyus/2.png"
              alt="Why Choose Us"
              height={250}
              width={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
