import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import ProjectSaction from "./component/ProjectSaction";
import Skill from "./component/Skill";
import Contact_us from "./component/Contact-us";

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col con" >
      <Navbar />
      <div class="container mx-auto px-10 py-4">
      <div class="mt-20"><HeroSection /></div>
      <div class="mt-52"><AboutSection /></div>
      <div class="mt-28"><Skill /></div>
      <div class="mt-10"><ProjectSaction/></div>
      <div><Contact_us /></div>
      </div>
    </main>
    
  )
}