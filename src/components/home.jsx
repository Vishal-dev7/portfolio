import React from "react";
import Navbar from "../comps/navbar";
import Skills from "../comps/skills";
import heroImage from "../img/hero.jpg";
import vishal from "../img/vishal.jpg";
const Home = () => {
  return (
    <div id="home">
      <Navbar />
   <section class="grid grid-cols-1 sm:grid-cols-2 pt-3 pb-8   bg-center">
    <div class="my-8  pl-12 sm:pt-5 md:pt-15 md:pl-10 lg:pl-30 lg:pt-30 xl:pl-70">
      <h1 class="font-bold text-4xl md:text-5xl xl:text-6xl order-1">Vishal R.</h1>
      <h4 class="mt-4  sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">FRONTEND DEVELOPER | GRAPHIC DESIGNER</h4>
      <p class="mt-2">Turning ideas into beautiful, functional interfaces.
I specialize in building fast, responsive, and user-friendly web experiences.</p>
    <button class="bg-gradient-to-r from-purple-600 to-red-500 border px-11 mt-2 text-white py-2 rounded-tr-2xl rounded-bl-2xl shadow-gray-700 shadow-md 2xl:ml-12 2xl:mt-4 border-none  2xl:px-20 2xl:py-5 2xl:text-2xl 2xl:font-bold"><a href="heroImage.jpg" download>CV</a></button>
  
    </div>
    <div class='hidden sm:block  mt-2 sm:mr-5 sm:mt-20 bg-transparent z-0 place-items-center ' >
     <img src={vishal} alt="abcd" class="rounded-full w-[30%] shadow-2xl shadow-gray-800 my-20" />
    </div>
    
   </section>
   
  
    </div>
  );
}

export default Home;