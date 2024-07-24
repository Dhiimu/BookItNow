import React from 'react'

const Getintouch = () => {
  return (
<>

<section id="contact"><div class="contact-bg  py-12 px-8 md:py-16 md:px-12 lg:py-20 lg:px-16 xl:py-24 xl:px-20 ">
    <div class="max-w-4xl m-auto">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-3 md:text-4xl lg:text-5xl xl:text-6xl ">Get in Touch Now!</h2>
        <hr class=" border-[1.5px] border-slate-500 w-1/6 mx-auto mb-10 "/>
      </div>
      <form class="flex flex-col gap-4 lg:flex-wrap  ">
        <div class="flex flex-col lg:flex-row gap-4">
          <div class="w-full lg:w-1/2">
            <input type="text" placeholder="Name"
              class="w-full px-4 py-2 rounded-3xl border border-gray-400 hover:border-sky-700 focus:outline-none focus:border-sky-700 ease-in-out"/>
          </div>
          <div class="w-full lg:w-1/2 ">
            <input type="email" placeholder="Email"
              class="w-full px-4 py-2 rounded-3xl border border-gray-400 hover:border-sky-700  focus:outline-none focus:border-sky-700 ease-in-out"/>
          </div>
        </div>
        <div class="flex flex-col gap-4 lg:mt-0">
          <div class="w-full">
            <input type="tel" placeholder="Phone"
              class="w-full px-4 py-2 rounded-3xl border border-gray-400 hover:border-sky-700 focus:outline-none focus:border-sky-700 ease-in-out"/>
          </div>
          <div class="w-full">
            <textarea placeholder="Message"
              class="w-full px-4 py-2 rounded-3xl hover:outline-blue border border-gray-400 hover:border-sky-700 focus:outline-none focus:border-sky-700 resize-none h-24 md:h-32 lg:h-32  ease-in-out"></textarea>
          </div>
        </div>
        <button type="submit"
          class="bg-sky-700 self-center hover:bg-sky-600 mt-2 rounded-full w-40 md:w-48 lg:w-56 xl:w-64 text-white font-bold py-2 px-4 ">Send
          Message</button>
      </form>
    </div>
  </div></section>
</>
  )
}

export default Getintouch