import React from 'react'
import Footer from './Footer'
import Header from './Header'

function DefaultLayout({children}) {
  return (
    <>
     <div className='default-layout'>
       <header className='header'>
       <Header/>
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

export default DefaultLayout
