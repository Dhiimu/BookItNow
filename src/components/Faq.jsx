import React, { useEffect, useState } from 'react'


const answerFunc = (index) => {


    let section = document.getElementsByClassName('section-main')[index]
    const icon = section.querySelector('i.fa-solid')
    icon.classList.toggle('fa-plus')
    icon.classList.toggle('fa-minus')

    section.nextElementSibling.classList.toggle('hidden')

}

const Faq = () => {

    const [faqData, setFaqData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("data/faqJSON.json")
            .then(response => response.json())
            .then(data => {
                setFaqData(data.faq)
                setLoading(false)
            })
    }, [])

    if (loading) return <h2>Loading...</h2>

    console.log(faqData)

    return (
        <>
            <section id='faq'>
            <div class="bg-slate-300">
                <div class="py-12">
                    <h1 class="text-4xl font-bold w-1/5 border-b-2 mx-auto border-sky-700 text-center p-2">FAQ's</h1>


                    <div class="flex flex-col m-auto px-8 container gap-5 mt-10 w-full md:w-1/2">

                        {faqData.map((data, index) => (
                            <div class="w-full max-w-4xl shadow-lg bg-slate-200 py-2 px-3 rounded-xl mx-auto">
                                <div onClick={() => answerFunc(index)} class="relative flex gap-9 items-center  text-2xl text-black  cursor-pointer section-main">
                                    <i class="absolute start-3 top-[2px] fa-solid fa-plus text-sky-700 text-lg"></i>
                                    <h3 class="text-xl font-medium ml-10 ">{data.heading}</h3>
                                </div>

                                <div class="hidden text-gray-700 text-md ml-10 m-4 border-l-2 border-sky-700 section-sub">
                                    <p class="text-gray-900 mb-4 ml-5 text-justify">
                                        {data.subHeading}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            </section>

        </>
    )
}

export default Faq