"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return ( 
    <div id="About">
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
        width={800}
        height={500}
        src={require("../../../public/assets/picture/demo.jpg")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        About Me
      
      </h1>
      <p className="mb-5 leading-relaxed">
       I am a Student of BS-Cs Student in IQRA University and i am passaionate in Web Programming and desginer 
      </p>
      <p className="mb-5 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos sunt totam dolor nisi dolorem debitis, magni aliquid delectus. Tenetur sunt veritatis quae exercitationem itaque maxime, cumque aliquam mollitia rerum. I am a Student of BS-Cs Student in IQRA University and i am passaionate in Web Programming and desginer 
      </p>
      
      <div className="flex justify-center">
        <a target="_blank" href={"/assets/cv/myCv.pdf"}>
        <button className="inline-flex px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white border-0 focus:outline-none text-lg">
         View CV
        </button></a>
    
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default About;