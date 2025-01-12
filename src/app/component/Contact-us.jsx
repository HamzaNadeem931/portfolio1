import React from 'react'

const Contact_us = () => {
  return (
    <div>
        <section class="text-white body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-5xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
          <label for="name" class="leading-7 text-sm text-white">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-10 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
           
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
          <label for="email" class="leading-7 text-sm text-white">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-10 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-white">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-10 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-gradient-to-br from-blue-800 via-purple-600 to-pink-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SUBMIT</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contact_us