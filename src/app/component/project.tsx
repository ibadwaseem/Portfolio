"use client"
import Link from 'next/link'
import React from 'react'
import Image from "next/image";

const Project = () => {
  return (
   <div id='Project'>
    <section className="body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white lack">
   My Projects
      </h1>
       <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">      
This is the Projects which I've Created in many languages
            </p> 
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/picture/chic.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-800 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
              The Chic Lighthing
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Html Css ,Bootstraps
            </h1>
            <p className="leading-relaxed line-clamp-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <Link target='_blank' href={"#Projects"}>
            <p className="leading-relaxed text-blue-700 hover:underline">
             View Project
            </p></Link>
          </div>
        </div>
      </div>
       <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/picture/php.jpg")}
        
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
              The Medical Website
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              PHP
            </h1>
            <p className="leading-relaxed line-clamp-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
             <Link target='_blank' href={"#Projects"}>
            <p className="leading-relaxed text-blue-700 hover:underline">
             View Project
            </p></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
             src={require("../../../public/assets/picture/c.png")}
        
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
              Resturant Menu System
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
             C Language
            </h1>
            <p className="leading-relaxed line-clamp-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
           <Link target='_blank' href={"#Projects"}>
            <p className="leading-relaxed text-blue-700 hover:underline">
             View Project
            </p></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/picture/dotnet.jpg")}
        
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
              The Institute of Fine Arts
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
            DotNet
            </h1>
            <p className="leading-relaxed line-clamp-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
             <Link target="_blank" href={"#Projects"}>
            <p className="leading-relaxed text-blue-700 hover:underline">
             View Project
            </p></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
           src={require("../../../public/assets/picture/start.JPG.png")}
        
          />
         <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
              Resumer Builder
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
            TypeScript
            </h1>
            <p className="leading-relaxed line-clamp-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
           <Link target="_blank" href={"https://resumer-builder-wnu1.vercel.app/"}>
            <p className="leading-relaxed text-blue-700 hover:underline">
             View Project
            </p></Link>
          </div> 
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/picture/demo.jpg")}
        
          />
           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
              
              Portfollio Website
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Next.Js
            </h1>
            <p className="leading-relaxed line-clamp-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
             <Link target="_blank" href={"#Projects"}>
            <p className="leading-relaxed text-blue-700 hover:underline">
             View Project
            </p></Link>
          </div>
        </div>
      </div> 
    </div>
  </div>
</section>

   </div>
  )
}

export default Project