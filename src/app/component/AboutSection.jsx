import react from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white ">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-6 px-36 xl:gap-16 sm:py-16">
        <Image 
          src="/images/about1.jpg"
          alt='profile picture'
          width={500}
          height={700}
          />
            <div>
                <h2 className="text-4xl  text-left font-bold mb-4">About Me</h2>
                <p>Hello! I am HAMZA NADEEM, a dedicated web developer or front-end designer with a passion for creating beautiful, functional, and user-centered digital experiences. My journey in web development, design has been fueled by a love for problem-solving and a commitment to continuous learning. With expertise in HTML, CSS, JavaScript, React, I enjoy building projects that not only look great but also deliver seamless interactions and performance.</p>
                <div className="flex flex-row mt-8">
                    <span className="mr-3 font-semibold hover:text-orange-400">Skill</span>
                    <span className="mr-3 font-semibold hover:text-orange-400">Education</span>
                    <span className="mr-3 font-semibold hover:text-orange-400">Experience</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection