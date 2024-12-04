"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-950 body-font bg-gray-100 ">
        {/* bg-fixed bg-cover bg-center custom-image */}
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> 
            {/* <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'> */}
              Hello ,I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Web Developer", 
                    "UI/UX Designer",
                    "BS-CS Student", 
                    "",

                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px]h-[2px] bg-blue-700"></div>
            <p className="mb-8 leading-relaxed">
            {/* <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'> */}
              I am Student of BS-Cs in Iqra University
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
               {/* <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"> */} 
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me
              Contact 
              </button></Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-{15rem}"
              alt="hero"
              width={500}
              height={500}
              src={require("../../../public/assets/picture/demo.jpg")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
