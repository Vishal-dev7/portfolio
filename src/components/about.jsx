import React from 'react'
import Navbar from '../comps/navbar'
import aboutimg from '../img/about.png';
import heroImage from "../img/hero.jpg";
const About = () => {
  return (
    <div id="about">
         
        <section class="overflow-hidden">
          <div>
            <h1 class="text-center font-semibold text-2xl sm:text-3xl xl:text-5xl mt-5">About me</h1>
            <div class="flex">
              <div class="w-full sm:w-1/2 text-center justify-items-center my-auto">
              <h4 class="text-left sm:text-xl md:text-2xl lg:text-3xl text-xs md:pl-5">I am currently pursuing a Bachelor of Computer Applications (BCA) at SASTRA deemed to be university,with focused interest in frontend developement.I am passionate about creating responsie ,user-centric web interfaces that align with modern standards.</h4>
              </div>
              <div class="sm:w-1/2 hidden sm:block   justify-items-center">
              <img src={heroImage} alt="" class= " size-90"/>
              </div>
            </div>
          </div>
        </section>
        </div>
  )
}

export default About