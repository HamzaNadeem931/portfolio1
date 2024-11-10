import Link from 'next/link'
import React from "react"

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">
        PORTFOLIO
        </Link>
        <div className="menu block md:w-auto" id="navbar">
            <ul className="flex gap-4 pr-52 justify-center text-center">
                <li>
                <Link href={""} className="flex py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-pink-800">Home</Link>
                </li>
                <li>
                    <Link href={"/Skill"} className="flex py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-pink-800">Skill</Link>
                </li>
                <li>
                <Link href={"/AboutSection"} className="flex py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-pink-800">About</Link>
                </li>
                <li>
                <Link href={"/"} className="flex py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-pink-800">Projects</Link>
                </li>
            </ul>
        </div>
        </div>
     </nav>
  )
}

export default Navbar