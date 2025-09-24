import React from 'react'
import { useState } from 'react' 

const Contact = () => {
   const [yourName, setYourName] = useState("");
   const [yourEmail, setYourEmail] = useState("");
   const [yourMessage, setyourmessage] = useState("");

   const [storage, setStorage] = useState([]);
   
   const submitData = (e) =>{
      e.preventDefault();
      setStorage ([...storage, {yourName, yourEmail, yourMessage}]);

      setYourName("");
      setYourEmail("");
      setyourmessage("");
   }

  return (
    <div className='relative sm:h-[50vh] md:h-[100vh]'>
        <video autoPlay loop muted playsInline className='absolute left-0 top-0 object-cover w-full h-full'>
         <source src='./earth.mp4' type='video/mp4'/>
        </video>
        <div className='absolute inset-0 bg-white/10'></div>
        <section className='relative mx-[40px]'>
        <h4 className='font-bold text-xl md-text-2xl  text-white'>Don't be a stranger just say hello!</h4>
        <h1 className='font-extrabold text-3xl md:text-5xl text-white'>Contact me</h1>
        <p className='text-white md:w-3xl w-full'>Average response time is within 24 hours, <br /> Don't think you would send an email
            without no response.... I'm here to help!
        </p>
           <form action="https://formspree.io/f/xpwyzpry" method="POST" onSubmit={submitData} className='flex flex-col space-y-4 gap-[30px] px-[20px] md:px-[50px]'>
            <main className='pt-4'>
            <h4 className='text-white'>Name</h4>
            <input className='border-2 text-white border-gray-400 text-center rounded-2xl placeholder-gray-700 ' type="text" placeholder='Enter your good name' value={yourName} onChange={(e) => {
                setYourName(e.target.value)
            }}/>
            </main>
            <main>
            <h4 className='text-white'>Email</h4>
            <input className='border-2 text-white border-gray-400 placeholder-gray-700 text-center rounded-2xl' type="email" placeholder='Enter your email' value={yourEmail} onChange={(e) => {
                setYourEmail(e.target.value)
            }}/>
            </main>
            <main>
            <h4 className='text-white'>Message</h4>
            <textarea className='border-2 text-white border-gray-400 rounded-xl placeholder-gray-700' cols="30" rows="10" value={yourMessage} onChange={(e) =>{
                setyourmessage(e.target.value)
            }}></textarea>
            </main>
            <button className='bg-red-600 hover:bg-red-500 mx-auto text-white rounded-full px-[20px] py-[10px]' type='submit'>Submit</button>
           </form>
        </section>
    </div>
  )
}

export default Contact