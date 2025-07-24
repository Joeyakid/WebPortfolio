import React from 'react'
import Button from '../Reusable/Button'
import pics from '../assets/pics.png'
import profile from '../assets/profile.png'
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function Page() {
  const location = useLocation();
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

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
    <header className='bg-blue-500 max-h-[100px] fixed top-0 left-0 w-full z-50 max-w-[1250px] mx-auto flex justify-between items-center ml-[50px]   px-[50px] shadow-2xl pt-4'>
        <main className='w-40 '><img src=" /logo.png" alt=""/>
        </main>
        <main className='flex gap-10 items-center cursor-pointer'>
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
        </header>
           <section className='bg-blue-700 h-screen pt-50 flex justify-between items-center max-w-[1250px] mx-auto px-[50px] py-[60px]'>
            <main className='w-[500px]'>
            <h3 className='font-bold text-3xl text-white'>Hello, I'm</h3>
            <h1 className='font-bold text-6xl text-white pt-1.5'> Joy Yakubu</h1>
            <p className='font-bold text-2xl text-white pt-2'>Software Developer from Nigeria</p>
            <p className=' text-white pt-3 pb-4'> Turning ideas into interactive, scalable,
               and elegant digital experiences just with one line of code at a time.
            </p>
            <span className='flex gap-4'>
            <Button
            title="Free consultation"
            bgcolor="red"
            textcolor="white"
            />
            <a href="https://github.com/Joeyakid"><Button
            title="See my work"
            textcolor="white"
            borderColor="red"/></a>
            </span>
            </main>
            <main>
            <div className='w-[400px]'>
                <img src={pics} alt="" />
            </div>
            </main>
            </section>
         
      <section ref={aboutRef} className='h-screen flex gap-[50px] justify-between items-center max-w-[1250px] mx-auto px-[50px] py-[60px]'>
        <main className='w-[700px]'>
          <img src={profile} alt="" />
        </main>
        <main className='w-3xl'>
          <h1 className='font-bold text-3xl'>ABOUT</h1>
          <br />
          
          <hr className='w-[50px]'/>
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
              <p>Think we could create something together? feel free to <a href="" className='text-purple-600'>drop an email</a></p>  
        </main>
      </section>

      <section ref={servicesRef} className='flex gap-[60px] h-screen items-center max-w-[1250px] mx-auto pl-[40px] bg-gradient-to-br from-indigo-600 via-yellow-500 to-pink-400'>
        <main className='w-[600px]'>
          <h1 className='font-extrabold text-5xl'>What we do</h1>
          <p className='pt-[20px] font-bold'>We turn ideas into beautiful, functional websites that speak clearly and work smoothly.
          From eye-catching designs to interactive features,
           we create online experiences that are fast, user-friendly, and built to make an impact.
           </p>
           <p className='font-bold'>It’s not just about putting something online — it’s about making it work, feel right, and stand out.
           <br />
           <br />
           <br /> 
           </p>
           <p className='font-bold'>Need something that’s both beautiful and practical? <a href="#contact" className='text-purple-600 hover:text-purple-500 cursor-pointer'>Let’s build.</a></p>
           <br />
           <br />
            <Button
            title="Free consultation"
            bgcolor="red"
            textcolor="white"
            />
        </main>

        <main className='w-[500px]'>
          <img src="./desktop.png" alt="" />
        </main>
      </section>

      <section ref={skillsRef} className='h-screen max-w-[1250px] mx-auto mt-[100px]'>
      <h1 className='font-bold text-5xl text-center'>What I Bring to the Table</h1>
        <main className='grid grid-cols-6 gap-[70px]'>
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

    </>
  )
}
