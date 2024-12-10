import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export default function Blogpage() {
  return (
    <div className='min-h-screen'>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-6 p-8 ">
        {/* Left Side - Multiple Images with Content */}
        <div className="flex-1 flex flex-col gap-8 m-10">
          {[
            {
              src: "/blog/b1.png", // Replace with your image path
              title: "10 Reasons To Do A Digital Detox Challenge",
              description: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
            },
            {
              src: "/blog/b2.png", // Replace with your image path
              title: "Traditional Soft Pretzels with Sweet Beer Cheese",
              description: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
            },
            {
              src: "/blog/b3.png", // Replace with your image path
              title: "Egg Burger",
              description: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
            },
            {
              src: "/blog/b4.png", // Replace with your image path
              title: "Pizza toast",
              description: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Image */}
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={item.src}
                  alt={`Image ${index}`}
                  width={871}
                  height={520}
                />
              </div>
              {/* Content */}
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
                <p className="text-gray-600">{item.description}</p>
                <Link href="/blog/blog-details">
                  <button className="mt-4 px-4 py-2 flex items-center justify-center gap-2 text-orange-500 border border-orange-500 rounded hover:bg-orange-100 transition-colors">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Long Sidebar Image */}
        <div className="flex-1">
          <div className="w-3/4 h-full m-10 bg-white rounded-lg overflow-hidden">
            <Image
              src="/blog/Sidebar.png" // Replace with your sidebar image path
              alt="Sidebar Image"
              className="w-full h-[calc(80%-1rem)]"
              width={424}
              height={1401}
            />
          </div>
        </div>
      </div>

    
    </div>
  )
}
