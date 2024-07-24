import React from 'react'


const dropdownFunc=()=>{
      
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

   
      mobileMenu.classList.toggle('hidden');
 
}

const Navbar = () => {
  return (
   <>
    <div class="fixed w-full px-2 z-10">
    <nav class="backdrop-blur mt-4 w-full max-w-4xl mx-auto rounded-full overflow-hidden">
      <div class="bg-slate-100 shadow  opacity-70">
        <div class="container px-2 flex items-center justify-between">
          <div class="flex flex-row">
            <img src="logo.png" class="w-12" alt="" />
           <div class="flex flex-col gap-0">
           <logo href="#" class="font-bold text-lg py-2 px-4">BookItNow</logo>
        
           </div>
          </div>

          <div class="hidden md:inline-block">
            <ul class="flex space-x-3">
              <a href="#events"
                class="hover:bg-slate-200 py-2 px-4 rounded-lg font-medium transition ease-in-out duration-[0.4s]">Events</a>
              <a href="#tickets"
                class="hover:bg-slate-200 py-2 px-4 rounded-lg font-medium transition ease-in-out duration-[0.4s]">Tickets</a>
              <a href="#faq"
                class="hover:bg-slate-200 py-2 px-4 rounded-lg font-medium transition ease-in-out duration-[0.4s]">FAQ</a>
            </ul>
          </div>
          <div class="hidden md:inline-block">
            <a href="#contact"
              class="bg-sky-700 hover:bg-sky-600 rounded-full text-white font-bold py-2 px-4  transition ease-in-out duration-[0.4s]">Contact</a>
          </div>



          <button onClick={dropdownFunc} class="md:hidden flex items-center px-3 py-2 rounded-full text-black  text-xl hover:text-gray-800"
            id="mobile-menu-toggle">
            <i class="fa-solid fa-bars"></i>
          </button>

        </div>
      </div>
    </nav>

   
    <div class="backdrop-blur hidden md:hidden w-full " id="mobile-menu">

      <ul class="opacity-70 bg-slate-100 flex mt-2 flex-col shadow-md rounded-3xl space-y-3 p-4">
        <a href="#events" class="hover:bg-slate-200 py-2 px-4 rounded-lg font-medium">Events</a>
        <a href="#tickets" class="hover:bg-slate-200 py-2 px-4 rounded-lg font-medium">Tickets</a>
        <a href="#faq" class="hover:bg-slate-200 py-2 px-4 rounded-lg font-medium">FAQ</a>
        <a href="#contact"
          class="bg-sky-700 hover:bg-sky-600 w-[110px] rounded-full text-white font-bold py-2 px-4 ">Contact</a>
      </ul>
    </div>

 
  </div>

   </>
  )
}

export default Navbar