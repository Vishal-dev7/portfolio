import React from 'react'
import Navbar from '../comps/navbar'
const Contact = () => {
  function wtsp() {
  alert("wait");

  let number = "+919342236148";
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let msg = document.getElementById('msg').value.trim();

  // Encode message properly
  let text = `Hi dude, I'm ${name}   Contact me: ${email}  ${msg}`;
  let url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank').focus();
}

  return (
    <div id="contact">
         <section class="pt-7 pb-8  flex  bg-[url(./img/gray.avif)] overflow-hidden">
          <div class="container p-0 pb-5 pt-5 shadow-2xl mx-auto rounded-3xl backdrop-blur-3xl"> 
          <h1 class="text-center font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl">Get in touch today</h1>
          <form action="" class="grid grid-cols-2  place-items-center ">
            <h4 class="mt-4 md:mt-8 xl:mt-10 -ml-12 sm:ml-0 font-semibold md:text-2xl">Name</h4>
            <div className="border shadow-2xl hover:shadow-purple-600 sm:h-8 lg:h-10 xl:h-12  mt-4 md:mt-8 xl:mt-10 border-black w-[100%] rounded-2xl sm:-ml-20 lg:-ml-40 "><input type="text" id='name' maxLength={20} required placeholder='name..' class="ml-2 focus-within:outline-none mt-1 md:mt-1.5 lg:mt-2 caret-black  cursor-pointer  text-white w-[98%]"/></div>
            <h4  class="mt-4 md:mt-8 xl:mt-10 -ml-12 sm:ml-0 font-semibold md:text-2xl ">email</h4>
            <div className="border shadow-2xl hover:shadow-purple-600 sm:h-8 lg:h-10 xl:h-12  mt-4 md:mt-8 xl:mt-10 border-black w-[100%] rounded-2xl sm:-ml-20 lg:-ml-40 "><input type="mail" id='email' maxLength={20} required  placeholder='@...'class="ml-2 focus-within:outline-none mt-1 md:mt-1.5  lg:mt-2 caret-black cursor-pointer text-white  w-[98%]"/></div>
            <h4  class="mt-4 md:mt-8 xl:mt-10 font-semibold md:text-2xl">Leave me a message</h4>
              
           <div  class="border rounded-2xl mr-1 sm:  md:mt-8 xl:mt-10 sm:-ml-13 lg:-ml-40 border-black mt-4 sm:w-sm md:w-sm lg:w-md xl:w-xl  caret-black cursor-pointer"><textarea name="" id="msg" placeholder='Type something ...' maxLength={250} aria-expanded class="w-[98%] ml-2 focus-within:outline-none mt-1 text-white cursor-pointer "></textarea></div>
          
          </form>
          <div className="flex"> 
           <button class="bg-gradient-to-r from-purple-600 to-red-500 border px-7  text-white py-2 rounded-2xl  shadow-gray-700 shadow-md mx-auto mt-3 border-none 2xl:px-10 2xl:py-5 2xl:text-2xl transition-transform duration-300 hover: scale-105 justify-center" onClick={wtsp} >connect</button>
        </div> 
         </div>
         </section>
{/* contact links */}
        <section id="contact" className="pt-10 pb-16 bg-[url('./img/gray.avif')] bg-cover bg-center">
  <div className="container mx-auto px-4 backdrop-blur-md rounded-3xl shadow-2xl bg-black/30">
    <h1 className="text-center text-white font-semibold text-2xl sm:text-3xl lg:text-4xl py-8">Contact Me</h1>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 pb-10">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/vishal-ravichandran232005" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center bg-gray-900 border border-white rounded-full p-6 hover:scale-105 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mb-3" viewBox="0 0 128 128">
            <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"/>
            <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/>
          </svg>
          <h3 className="text-white text-lg font-medium">LinkedIn</h3>
        </div>
      </a>

      {/* GitHub */}
      <a href="https://github.com/Vishal-dev7" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center bg-gray-900 border border-white rounded-full p-6 hover:scale-105 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mb-3" viewBox="0 0 128 128">
            <path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
          </svg>
          <h3 className="text-white text-lg font-medium">GitHub</h3>
        </div>
      </a>

      {/* Email */}
      <a href="mailto:vishalravichandran37@gmail.com">
        <div className="flex flex-col items-center bg-gray-900 border border-white rounded-full p-6 hover:scale-105 transition-transform duration-300 ">
          <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-16 sm:h-16 mb-3" xmlns="http://www.w3.org/2000/svg">
            <path fill="#d85040" d="M95.861 24.752c0-7.801-8.824-12.254-15.003-7.579l-5.844 4.427-25.014 18.935-25.014-18.948-5.831-4.415c-6.192-4.675-15.016-.221-15.016 7.579v53.654c0 3.49 2.799 6.316 6.257 6.316h14.59v-35.773l25.014 18.935 25.014-18.935v35.773h14.59c3.457 0 6.257-2.826 6.257-6.316V24.752z"/>
          </svg>
          <h3 className="text-white text-lg font-medium">Email</h3>
        </div>
      </a>
    </div>
  </div>
</section>

        </div>
        
  )
}

export default Contact