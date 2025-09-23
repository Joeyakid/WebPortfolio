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
    <div className='relative'>
        <video src="">

        </video>
        
        <section className='relative mx-[40px]'>
        <h4 className='font-bold text-xl md-text-2xl'>Don't be a stranger just say hello!</h4>
        <h1 className='font-extrabold text-3xl md:text-5xl'>Contact me</h1>
        <p>Average response time is within 24 hours, Don't think you would send an email
            without no response.... I'm here to help!
        </p>
           <form action="https://formspree.io/f/xpwyzpry" method="POST" onSubmit={submitData} className='flex flex-col gap-[30px] px-[20px] md:px-[50px]'>
            <main>
            <h4>Name</h4>
            <input className='border-2 text-center rounded-2xl' type="text" placeholder='Enter your good name' value={yourName} onChange={(e) => {
                setYourName(e.target.value)
            }}/>
            </main>
            <main>
            <h4>Email</h4>
            <input className='border-2 text-center rounded-2xl' type="email" placeholder='Enter your email' value={yourEmail} onChange={(e) => {
                setYourEmail(e.target.value)
            }}/>
            </main>
            <main>
            <h4>Message</h4>
            <textarea className='border-2 rounded-xl' cols="30" rows="10" value={yourMessage} onChange={(e) =>{
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