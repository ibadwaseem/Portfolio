import React from 'react'
import { AiOutlineDotNet } from 'react-icons/ai';
import { FaHtml5, FaPhp } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa6';
import { IoLogoHtml5 } from 'react-icons/io';
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <div id='Skills'>
    
  
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">
       Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-100">
       My Skills
      </h1>
    </div>
     <div className="flex flex-wrap -m-4 -mt-[4rem]">
      {/* My Skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
            <IoLogoHtml5 className='text-2xl font-bold ' />   
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              Html Css, Bootstrap
            </h2>
          </div>
          <div className="flex-grow">
        <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute  bg-yellow-500 h-1 rounded-xl w-[95%]' ></div> 
        </div>

       <p className=' font-bold text-yellow-500 text-right'>95%</p>
          </div>
        </div>
      </div>
     
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
            <FaPhp   className='text-2xl font-bold ' />   
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              PHP
            </h2>
          </div>
          <div className="flex-grow">
        <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
        <div className='absolute  bg-yellow-500 h-1 rounded-xl w-[50%]' ></div> 
        </div>
       
          </div>
          <p className=' font-bold text-yellow-500 text-right'>50%</p>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
            <AiOutlineDotNet className='text-2xl font-bold ' />   
            </div>
            <h2 className="text-gray-100 text-lg title-font font-medium">
              DotNet
            </h2>
          </div>
          <div className="flex-grow">
        <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
        <div className='absolute  bg-yellow-500 h-1 rounded-xl w-[60%]' ></div> 
        </div>
       
          </div>
          <p className=' font-bold text-yellow-500 text-right'>60%</p>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
            <SiTypescript  className='text-2xl font-bold ' />   
            </div>
            <h2 className="text-gray-100 text-lg title-font font-medium">
              TypeScript
            </h2>
          </div>
          <div className="flex-grow">
        <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
        <div className='absolute bg-yellow-500 h-1 rounded-xl w-[85%]' 
        
        ></div> 
        </div>
       
          </div>
          <p className=' font-bold text-yellow-500 text-right'>80%</p>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
            <IoLogoHtml5 className='text-2xl font-bold ' />   
            </div>
            <h2 className="text-gray-100 text-lg title-font font-medium">
             C Language
            </h2>
          </div>
          <div className="flex-grow">
        <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
        <div className='absolute  bg-yellow-500 h-1 rounded-xl w-[95%]' ></div> 
        </div>
       
          </div>
          <p className=' font-bold text-yellow-500 text-right'>95%</p>
        </div>
      </div>
      <div className="p-4  w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
            <FaJava  className='text-2xl font-bold ' />   
            </div>
            <h2 className="text-gray-100 text-lg title-font font-medium">
              Java Language
            </h2>
          </div>
          <div className="flex-grow">
        <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
        <div className='absolute  bg-yellow-500 h-1 rounded-xl w-[95%]' ></div> 
        </div>
       
          </div>
          <p className=' font-bold text-yellow-500 text-right'>95%</p>
        </div>
      </div>
      <div className="p-4  w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
            <SiNextdotjs   className='text-2xl font-bold ' />   
            </div>
            <h2 className="text-gray-100 text-lg title-font font-medium">
              Next.Js
            </h2>
          </div>
          <div className="flex-grow">
        <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
        <div className='absolute  bg-yellow-500 h-1 rounded-xl w-[50%]' ></div> 
        </div>
       
          </div>
          <p className=' font-bold text-yellow-500 text-right'>50%</p>
        </div>
      </div> 
   
    </div> 
  </div>
</section>



    </div>
  )
}

export default Skills;