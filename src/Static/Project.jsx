import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const projects = [
    {
        title: "ZyraHr Website",
        description: "ZyraHr built with react, typescript, tailwindcss for front end and nodeJs, expressJs, mongoDB for backend",
        link: "https://zyrahr.netlify.app/",
        image: "./zyra.png"
    },
    {
        title: "PiggyVestReplica",
        description: "PiggyVestReplica built with react, typescript, tailwindcss for front end",
        link: "https://piggy-vest-replica-owjg.vercel.app/",
        image: "./piggyVest.png"
    },
    {
        title: "Moove",
        description: "Moove Replica built with html, javascript and css",
        link: "https://moove-ass-proj.vercel.app/",
        image: "./moove.png"
    },
    {
        title: "Portfolio Website",
        description: "Built with react, javascript, tailwindcss for front end and nodeJs, expressJs, nodemailer for backend",
        link: "https://web-portfolio-eta-two.vercel.app/",
        image: "./portweb.png"
    }
]

export default function Project () {
    const repeatProject = [...projects, ...projects]

  return (
    <section className='bg-gray-500 text-white py-10 px-6'>
        <h2 className='font-bold text-3xl md:text-5xl mb-7 text-center'>Projects done</h2>
        <div className='flex gap-9 md:w-[2600px] w-[2000px] flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap'>
            {repeatProject.map((project, index) => (
            <div key={index} className='bg-gray-700 shadow-lg overflow-hidden rounded-2xl '>
                <img src={project.image} alt={project.title} className='w-full object-cover' />
                <div className='p-4'>
                    <h3 className='text-xl font-semibold'>{project.title}</h3>
                    <p className='text-gray-200'>{project.description}</p>
                    <a href={project.link} target='_blank' rel="noreferrer" className='text-red-500 hover:underline'> <span className='flex items-center gap-2'>View Project <FaArrowRight /> </span> </a>
                </div>
            </div>
            ))}

        </div>

        <a href="https://github.com/Joeyakid?tab=repositories" className='hover:text-red-700'><span className='flex items-center gap-2 mt-8'>See more <FaArrowRight /></span></a>
    </section>
  )
}
