import React from 'react'

export default function Sidebar({ showToggle }) {
  return (
    <nav
      className="fixed top-0 left-0 w-90 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6
                 transform transition-transform duration-300 tablet:hidden mobile:max-w-[300px] mx-auto "
    >
      <a href="#" onClick={showToggle} className="hover:text-blue-600">Home</a>
      <a href="#about" onClick={showToggle} className="hover:text-blue-600">About</a>
      <a href="#services" onClick={showToggle} className="hover:text-blue-600">Services</a>
      <a href="#skills" onClick={showToggle} className="hover:text-blue-600">Skills</a>
      <a href="#contact" onClick={showToggle} className="hover:text-blue-600">Contact</a>
    </nav>
    
  );
}

// export default function Sidebar ({showToggle}) {
//   return (
//     <div>
//       <header>
//         <main>
//         <a href="#"><nav>Home</nav></a>
//             <a href="#about"> <nav>About</nav></a>
//             <a href="#services"> <nav>Services</nav></a>
//             <a href="#skills"> <nav>Skills</nav></a>
//             <a href="#contact"> <nav>Contact</nav></a>
//         </main>
//       </header>
//     </div>
//   )
// }
