import React from 'react'

function Herosection() {
  return (
  <>
   <section class=" bg-slate-200 py-20">
    <div class="container mx-auto text-center  ">
      <div class="mx-10">
        <h1 class="text-2xl md:text-4xl font-bold mb-4">Discover [City Name]'s Vibrant Events Scene</h1>
        <p class="text-lg mb-6">Explore upcoming events and secure your tickets today</p>
      </div>
      <div class="flex justify-center gap-4">
        <button class="bg-sky-700 hover:bg-sky-600 w-[120px] rounded-full text-white font-bold py-2 px-4 ">Get
          Tickets</button>
      </div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mx-8 justify-center mt-4 ">
      <div class="flex flex-col gap-4">
        <img src="https://exploreecology.org/wp-content/uploads/2024/06/solstice-float-building-flyer-2024-8.5-x-11-1.png" alt="Image 1"
          class="h-60 w-80 place-self-center object-cover rounded-3xl  transition ease-in-out duration-[0.4s] hover:-translate-y-2 shadow-lg"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRojCwzx-Tkpafah2APUBvXwiFAtq1mQrtow&s" alt="Image 2"
          class="h-40 w-80  hidden sm:inline-block place-self-center object-cover rounded-3xl transition ease-in-out duration-[0.4s] hover:-translate-y-2 shadow-lg"/>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tsia8ZgU5RHEUxhzifTmEGdnym3ihLgKWw&s" alt="Image 3"
        class="w-70 h-80 hidden  md:inline-block place-self-center object-cover rounded-3xl transition ease-in-out duration-[0.4s] hover:-translate-y-2 shadow-lg mt-20"/>
      <img src="https://dynamic.brandcrowd.com/template/preview/design/9a2f35ee-d41d-4240-8b8c-6f872179a8eb?v=4&designTemplateVersion=4&size=design-preview-tall-2x" alt="Image 4"
        class="w-70 h-60 hidden sm:inline-block place-self-stretch object-cover rounded-3xl transition ease-in-out duration-[0.4s] hover:-translate-y-2 shadow-lg mt-40"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAl1asUJHMe0bFu4PdextWpmaHxz_56bcXe9dUZXBFy0dD533JHsFX1T8byj9x2pqZdXg&usqp=CAU" alt="Image 5"
        class="w-70 h-80 hidden md:inline-block  place-self-center object-cover rounded-3xl transition ease-in-out duration-[0.4s] hover:-translate-y-2 shadow-lg mt-20"/>
      <div class="flex flex-col gap-4  ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXEdHUUxoddhfkM-mLWqbJ0qNTwWyjE-naw&s" alt="Image 1"
          class="h-60 w-80 place-self-center object-cover rounded-3xl transition ease-in-out duration-[0.4s] hover:-translate-y-2 shadow-lg"/>
        <img src="https://dynamic.brandcrowd.com/template/preview/design/72f9c643-6ee1-48f6-ba5a-97d0020c42e5?v=4&designTemplateVersion=2&size=design-preview-tall-2x" alt="Image 2"
          class="h-40 w-80 hidden sm:inline-block place-self-center object-cover rounded-3xl transition ease-in-out duration-[0.4s] hover:-translate-y-2 shadow-lg"/>
      </div>
    </div>
    


  </section>
  </>
  )
}

export default Herosection