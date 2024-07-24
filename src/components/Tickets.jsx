import React from 'react'

const Tickets = () => {
    return (
        <>
            <section id="tickets">
                <div class="bg-slate-200">
                    <div class=" container mx-auto ">
                        <h2 class="text-5xl font-bold mb-2 text-center pt-20 pb-3">Ticket Deals</h2>
                        <hr class=" border-[1.5px] border-slate-500 w-1/6 mx-auto  mb-10 " />

                        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-10 pb-20 px-16">

                            <div class="rounded-2xl w-full mx-auto overflow-hidden flex flex-col shadow-lg text-left ">
                                <div class="bg-sky-700 flex flex-col p-6 gap-1">
                                    <h3 class="text-2xl font-bold text-white  ">Bronze</h3>
                                    <p class="text-md text-white ">$4.99/month</p>
                                </div>
                                <div class="bg-white flex flex-col gap-8 pt-2 p-6">
                                    <p class=" text-gray-900 text-semibold ">VIP treatment at events.</p>
                                    <button
                                        class="bg-sky-700 text-white  font-bold py-2 px-4 rounded-full hover:bg-sky-500 focus:outline-none focus-shadow-outline">
                                        Get Tickets
                                    </button>
                                </div>
                            </div>
                            <div class="rounded-2xl w-full mx-auto overflow-hidden flex flex-col gap-0 shadow-lg text-left ">
                                <div class="bg-sky-700 flex flex-col p-6 gap-1">
                                    <h3 class="text-2xl font-bold text-white  ">Silver</h3>
                                    <p class="text-md text-white ">$4.99/month</p>
                                </div>
                                <div class="bg-white flex flex-col gap-8 pt-2 p-6">
                                    <p class=" text-gray-900 text-semibold ">VIP treatment at events.</p>
                                    <button
                                        class="bg-sky-700 text-white  font-bold py-2 px-4 rounded-full hover:bg-sky-500 focus:outline-none focus-shadow-outline">
                                        Get Tickets
                                    </button>
                                </div>
                            </div>
                            <div class="rounded-2xl w-full mx-auto overflow-hidden flex flex-col gap-0 shadow-lg text-left ">
                                <div class="bg-sky-700 flex flex-col p-6 gap-1">
                                    <h3 class="text-2xl font-bold text-white  ">Gold</h3>
                                    <p class="text-md text-white ">$4.99/month</p>
                                </div>
                                <div class="bg-white flex flex-col gap-8 pt-2 p-6">
                                    <p class=" text-gray-900 text-semibold ">VIP treatment at events.</p>
                                    <button
                                        class="bg-sky-700 text-white  font-bold py-2 px-4 rounded-full hover:bg-sky-500 focus:outline-none focus-shadow-outline">
                                        Get Tickets
                                    </button>
                                </div>
                            </div>
                            <div class="rounded-2xl w-full mx-auto overflow-hidden flex flex-col gap-0 shadow-lg text-left ">
                                <div class="bg-sky-700 flex flex-col p-6 gap-1">
                                    <h3 class="text-2xl font-bold text-white  ">Platinum</h3>
                                    <p class="text-md text-white ">$4.99/month</p>
                                </div>
                                <div class="bg-white flex flex-col gap-8 pt-2 p-6">
                                    <p class=" text-gray-900 text-semibold ">VIP treatment at events.</p>
                                    <button
                                        class="bg-sky-700 text-white  font-bold py-2 px-4 rounded-full hover:bg-sky-500 focus:outline-none focus-shadow-outline">
                                        Get Tickets
                                    </button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}

export default Tickets