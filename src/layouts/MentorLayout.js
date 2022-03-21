import React from 'react'
import Footer from './Footer'
import MentorHeader from "./MentorHeader"

function MentorLayout({children}) {
  return (
    <>
     <div className='default-layout'>
       <header className='header'>
       <MentorHeader/>
       </header>

       <main className='main'>
        {children}
         </main>

         <footer className="footer mt-5">
        <Footer/>
      </footer>
     </div>
      
    </>
  )
}

export default MentorLayout
