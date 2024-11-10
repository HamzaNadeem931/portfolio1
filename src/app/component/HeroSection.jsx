"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
const HeroSection = () => {
  return (
    <section>
      <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="col-span-7  place-self-center text-center py- px-20 sm:text-left">
      <h1 class="text-white pt-6 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
      <span  class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Hello, I am {" "}
      </span>
      <br></br>
      <TypeAnimation
       sequence={[
        "Muhammad Hamza",
        1000,
        "Web Developer",
        1000,
        "Mobile Developer",
        1000,
        "UI/UX Designer",
        1000,
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
      </h1>
      <p className="text-white text-base sm:text-2xl mb-6 lg:text-xl">
      Welcome to my portfolio —  I am excited to share my work with you!
      </p>
      <div><br/>
        <botton className="px-6 py-3 w-full sm:w-fit bg-gradient-to-br from-blue-800 via-purple-600 to-pink-600 rounded-full mr-4 text-white border border-black font-bold  hover:text-slate-900">Hire Me</botton>
        <botton className="px-6 py-3 w-full sm:w-fit bg-gradient-to-br from-blue-800 via-purple-600 to-pink-600 rounded-full mr-4 text-white border border-black font-bold hover:text-slate-900">
        Downlaod CV
          </botton>
      </div>
      </div>
      <div className="col-span-5 place-self-center  lg:mt-0">
        <div className="  border-purple-600 bf-[#181818] w-[400px] h-[250px] relative">
          <Image 
          className='rounded-full shadow-[0_0_30px_theme("colors.purple.700")] p-4'
          src="/images/profie.png"
          alt='profile picture'
          width={400}
          height={400}
          />
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection