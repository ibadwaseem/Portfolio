import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Project from "./component/project";
import Skills from "./component/skills";
import About from "./component/about";

export default function Home() {
  return (
    
   <div>
   
   <main className='flex min-h-screen flex-col bg-black  '>
   <Hero/> 
   <About/>
   <Project /> 
    <Skills /> 
   <Contact /> 
   </main>
   </div>
  );
}
