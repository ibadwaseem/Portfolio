import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";

import { RiFacebookFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return ( 
    <div className="bg-white">
        <footer className="text-gray-20 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image
             src={require("../../../public/assets/picture/logo.png")}
              alt="Dan Musaa"
              width={100}
              height={100}
              className="w-[50px]"
            />
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        
        <span className="ml-3 text-xl">Dan Musaa</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 —Dan Musaa <br /> Developed by Syed Muhammad Ibad
       
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     
        <Link  target="_blank"
        
        href={""}className="text-gray-500">
          {/* <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg> */}<RiFacebookFill className="text-2xl hover:text-[#ff4949]" />
        </Link>
       
       
        <Link
        target="_blank" href={"https://www.linkedin.com/in/syed-muhammad-ibad-56a28a293/"}className="ml-3 text-gray-500">
          {/* <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg> */}<BsLinkedin className="text-2xl hover:text-[#395dff]" />
        </Link>


        <Link target="_blank"  href={"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"}className="ml-3 text-gray-500">
        
        <SiGmail className="text-2xl hover:text-[#cf6767]" />

        </Link>

        <Link   target="_blank" href={"https://github.com/ibadwaseem"}className="ml-3 text-gray-500"
       >
        <FaGithub className="text-2xl hover:text-[#000000]" />
        </Link>

        
      </span>
    </div>
  </footer>
  </div>
  );
};

export default Footer;