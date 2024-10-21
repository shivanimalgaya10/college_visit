import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import NavLinks from './NavLinks'
import Button from './Button'

const Navbarr = () => {
    const[open,setOpen]=useState(false)
  return (
    <nav className='bg-yellow-50'>
         <div className='flex items-center font-medium justify-around '>
            <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
                {/* <img src="" alt=""  className='md:cursor-pointer h-9'/> */}
              
                <h2 className='text-3xl'>College<span className='text-orange-600 '>Visit</span></h2>
               <div className='text-3xl md:hidden' onClick={()=>setOpen(!open)}>
               <ion-icon name={`${open ?"close":"menu"}`} ></ion-icon>
               </div>
            </div>


          <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2 ">
          <input
            type="text"
            placeholder="search college here..."
            className="w-full p-0 m-0 outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-orange-600 flex items-center justify-center rounded-r-full">
          <ion-icon name="search-outline"></ion-icon>
          </div>
          </div>
           

       
        
          <ul className='md:flex hidden uppercase items-center gap-8 '>
                <li>
                <Link to="/" className='py-7 px-3 inline-block'>Home</Link>
                </li>
                <NavLinks/>
            </ul>   
        
            
          
            <div className='md:block hidden'>
                <Button/>
            </div>

            {/* mobile nav */}
            <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
                duration-500 ${open? "left-0":"left-[-100%]"}`}>
                <li>
                <Link to="/home" className='py-7 px-3 inline-block'>Home</Link>
                </li>
                <NavLinks/>
            <div className='py-5'>
                <Link to={'/Login'} className='bg-primary px-6 py-2 text-white rounded-full'>Get Started</Link>
            </div>
            </ul>
         

         </div>
     </nav>
  )
}

export default Navbarr
