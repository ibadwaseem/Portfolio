import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBeer } from 'react-icons/fa';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { GoDesktopDownload } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="bg-gray-50 z-50 sticky top-0" >
      <header className="text-gray-300 body-font bg-black">
        <div className="container mx-10 flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <Image
              src={require("../../../public/assets/picture/logo.png")}
              alt="Dan Musaa"
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl text-white">Dan Musa </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-yellow-500">
              Home
            </Link>
            <Link href={"#About"} className="mr-5 hover:text-yellow-600">
              About
            </Link>
            <Link href={"#Skills"} className="mr-5 hover:text-yellow-600">
              Skills
            </Link>
            <Link href={"#Project"} className="mr-5 hover:text-yellow-600">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-yellow-600">
              Contact
            </Link>
            {/* <Link href={"#"} className="mr-5 hover:text-gray-900">Projects</Link> */}
          </nav>
          
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px- focus:outline-none hover:bg-gray-200 rounded text-base mt-3 md:mt-0">
          <a href="/assets/cv/myCv.pdf"> Download Cv 
            <GoDesktopDownload className="text-xl ml-2" />
            {/* <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg> */}
           </a>
          </button>
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
