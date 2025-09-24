import React from 'react'
import Logo from '../assets/logo.png'
import Button from '../Reusable/Button'
import Professional from '../assets/professional.png'
import Codephoto from '../assets/codephoto.png'
import { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';
import Contact from './Contact'


export default function Page() {
  const location = useLocation();
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [toggle, setToggle] = useState(false) 

  const showToggle = () => {
      setToggle((toggle) => !toggle)
  }

  useEffect(() => {
    if (location.hash === '#about') {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#services') {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#skills') {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#contact') {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);


  return (
    <>
    <div className='max-w-[1250px] mx-auto'>
    <header className=' max-h-[100px] fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 lg:px-12 shadow-2xl pt-4'>
        <main className='w-32 md:w-40'><img src={Logo} alt=""/>
        </main>
        <main className='hidden md:flex md:gap-10 md:items-center cursor-pointer'>
           <a href="#"> <nav className='text-red-600 hover:text-red-500'>Home</nav></a>
            <a href="#about"> <nav className='hover:text-gray-700'>About</nav></a>
            <a href="#services"> <nav className='hover:text-gray-700'>Services</nav></a>
            <a href="#skills"> <nav className='hover:text-gray-700'>Skills</nav></a>
            <a href="#contact"> <nav className='hover:text-gray-700'>Contact</nav></a>
            <Button 
            title="Download cv"
            bgcolor="red"
            textcolor="white"
            />
           </main>
           <main className='md:hidden'>
            {toggle ? (
              <RxCross1 size={35} onClick={showToggle}/>
            ) : (
              <RxHamburgerMenu size={35} onClick={showToggle}/>
            )}
           </main>
        </header>
           <section className='bg-gradient-to-br from-white via-gray-400 to-gray-100 flex flex-col md:flex-row justify-between items-center px-6 md:px-[50px] py-[60px] pt-[120px]'>
            <main className='md:w-[500px] w-full text-center md:text-left mb-10 md:mb:0'>
            <h3 className='font-bold text-2xl md:text-3xl'>Hello, I'm</h3>
            <h1 className='font-bold text-red-600 sm:text-4xl md:text-6xl pt-2'> Joy Yakubu</h1>
            <p className='font-bold text-lg md:text-2xl pt-2'>Software Developer from Nigeria</p>
            <p className=' pt-3 pb-4'> Turning ideas into interactive, scalable,
               and elegant digital experiences just with one line of code at a time.
            </p>
            <span className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
            <Button
            title="Free consultation"
            bgcolor="red"
            textcolor="white"
            />
            <a href="https://github.com/Joeyakid"><Button
            title="See my work"
            textcolor="black"
            borderColor="red"/></a>
            </span>
            </main>
            <main>
            <div className=' w-full md:max-w-[600px] max-w-[350px]'>
                <img src={Professional} alt="" />
            </div>
            </main>
            </section>
         
      <section ref={aboutRef} className='md:flex-row flex flex-col-reverse gap-[30px] justify-between items-center max-w-[1250px] mx-auto md:px-[50px] py-[60px]'>
        <main className='w-full md:max-w-[500px] max-w-[350px]'>
          <img src={Codephoto} alt="" />
        </main>
        <main className='md:w-3xl w-full text-center md:text-left'>
          <h1 className='font-bold text-3xl'>ABOUT</h1>
          <br />
          
          <hr className='w-[50px] mx-auto md:mx-0 my-4'/>
          <br />
          <p>Always experimenting. Always building. That's how she grows, one project at a time.
          </p>
          <br />
          <p>A software developer who believes good code should be as thoughtful as it is functional. 
            With hands-on experience building real-world applications,
             I’ve worked on everything from responsive product pages to dynamic forms that fetch and display data from external APIs.</p>
             <br />
             <p>During my immersive training at SAIL Innovation Lab, I didn’t just learn the tools — React, Tailwind CSS, Node.js, Git, Axios, Express, Typescript — I learned how to turn ideas into structured, collaborative, production-ready projects. 
              I've led file organization, debugged complex issues, and deployed live interfaces that users can interact with seamlessly.</p>
              <br />
              <p>Alongside that, I'm studying Computer Science at Ahmadu Bello University, 
                building a strong backbone in programming concepts, data structures, and systems thinking.</p>
                <br />
              <p>Think we could create something together? feel free to <a href="mailto:Yakjoy6@gmail.com" className='text-purple-600'>drop an email</a></p>  
        </main>
      </section>

      <section ref={servicesRef} className='flex flex-col gap-[40px] md:flex-row items-center md:gap-[60px] max-w-[1250px] mx-auto md:pl-[40px] bg-gradient-to-r from-rose-200 to-red-500 '>
        <main className='w-full md:h-[500px] md:w-[600px] text-center md-text-left pt-[30px]'>
          <h1 className='font-extrabold text-4xl md:text-5xl'>What we do</h1>
          <p className='pt-[20px] font-bold'>We turn ideas into beautiful, functional websites that speak clearly and work smoothly.
          From eye-catching designs to interactive features,
           we create online experiences that are fast, user-friendly, and built to make an impact.
           </p>
           <p className='font-bold mt-4'>It’s not just about putting something online — it’s about making it work, feel right, and stand out.
           <br />
           <br />
           <br /> 
           </p>
           <p className='font-bold mt-6'>Need something that’s both beautiful and practical? <a href="#contact" className='text-purple-600 hover:underline cursor-pointer'>Let’s build.</a></p>
           <br />
           <br />
            <Button
            title="Free consultation"
            bgcolor="red"
            textcolor="white"
            />
        </main>

        <main className='w-[500px] mobile:max-w-[350px] mobile:mx-auto'>
          <img src="./desktop.png" alt="" />
        </main>
      </section>

      <section ref={skillsRef} className='max-w-[1250px] mx-auto mt-[60px] md:mt-[100px] px-6'>
      <h1 className='font-bold text-3xl md:text-5xl text-center'>What I Bring to the Table</h1>
        <main className='grid grid-cols-3 sm-grid-cols-3 md:grid-cols-4 mt-10 lg:grid-cols-6 gap-[30px] md:gap-[70px]'>
          <div><img src="./js.png" alt="" />
          <h1 className='text-center'>JavaScript</h1>
          </div>
          <div className='text-center'><img src="./react.png" alt="" />
          <h1>React</h1>
          </div>
          <div><img src="./tailwindcss.png" alt="" />
          <h1 className='text-center'>Tailwind CSS</h1>
          </div>
          <div><img src="./nodeJs.png" alt="" />
          <h1 className='text-center'>Node.js</h1>
          </div>
          <div><img src="./git.png" alt="" />
          <h1 className='text-center'>Git</h1>
          </div>
          <div><img src="./html.png" alt="" />
          <h1 className='text-center'>HTML</h1>
          </div>
          <div><img src="./css.png" alt="" />
          <h1 className='text-center'>CSS</h1>
          </div>
          <div><img src="./typescript.png" alt="" />
          <h1 className='text-center'>TypeScript</h1>
          </div>
          <div><img src="./expressJs.png" alt="" />
          <h1 className='text-center'>Express</h1>
          </div>
          <div><img src="./wordpress.png" alt="" />
          <h1 className='text-center'>Wordpress</h1>
          </div>
          <div><img src="./java.png" alt="" />
          <h1 className='text-center'>Java</h1>
          </div>
          <div><img src="./figma.png" alt="" />
          <h1 className='text-center'>Figma</h1>
          </div>
          <div><img src="./mongoDb.png" alt="" />
          <h1 className='text-center'>MongoDB</h1>
          </div>
          <div><img src="./nextJs.png" alt="" />
          <h1 className='text-center'>NextJs</h1>
          </div>
        </main>
      </section>

      <section ref={contactRef}>
      <Contact/>
      </section>
          <div>
          {toggle && <Sidebar showToggle={showToggle}/>}
          </div>
        
      </div>
    </>
  )
}
