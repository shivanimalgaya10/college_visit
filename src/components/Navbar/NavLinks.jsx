import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { links } from './Mylinks'

const NavLinks = () => {
  const[heading,setHeading]=useState("") 

  useEffect(() => {
    // Set the default heading to the first sublink's head name of the first link when the component mounts
    if (links.length > 0 && links[0].sublinks.length > 0) {
      setHeading(links[0].sublinks[0].Head); // Set to the first sublink's head
    }
  }, []);

 
  return (
    <>
    {links.map((link, index)=>(
            <div  key={index}>
                <div className='px-3  text-left md:cursor-pointer group relative'>
                    <h1 className='py-7' onClick={()=>setHeading(link.name)}>{link.name}</h1>
                     {link.submenu && (
                        <div>
                      <div className='absolute left-1/2 transform -translate-x-1/2 top-20 hidden group-hover:block hover:block z-50'>
              <div className='py-3'>
               <div className='w-4 h-4 left-1/2 transform -translate-x-1/2 absolute mt-1 bg-slate-100 rotate-45'></div>
              </div>
              <div className='bg-orange-100 rounded p-6 w-[800px] max-w-full flex'>
                {/* Left Side for Sublink Head */}
                <div className=' bg-orange-200   w-1/3 border-r border-orange-600 pr-4'>
                    {link.sublinks.map((sublink, subIndex) => (
                        <h1 
                            key={subIndex} 
                            className='text-sm font-semibold cursor-pointer py-2 px-3 border-b border-orange-300 hover:bg-orange-300 ' 
                            onClick={() => setHeading(sublink.Head)} // Set heading to selected sublink Head
                        >
                            {sublink.Head}
                        </h1>
                    ))}
                </div>
                
                {/* Right Side for the Content Based on Selected Sublink */}
                <div className='  bg-gray-50 w-3/4 pl-4'>
                    {link.sublinks.map((sublink, subIndex) => (
                        heading === sublink.Head && (
                            <div key={subIndex}>
                                {sublink.sublink.map((slink, linkIndex) => (
                                    <li key={linkIndex} className='text-sm text-gray-600 my-2.5'>
                                        <Link to={slink.link} className='hover:text-primary'>{slink.name}</Link>
                                    </li>
                                ))}
                            </div>
                        )
                    ))}
                </div>
            </div>
</div>

                    </div>
                    )}
                </div>

                {/* mobile menus */}

                <div className={`
                  ${heading === link.name ? 'md:hidden':'hidden'}`}>
                  {
                    link.sublinks.map((slinks)=>(
                      <div>
                        <div>
                          <h1 className='py-4 pl-7 font-semibold md:pr-0 pr-5'>{slinks.Head}</h1>
                          <div>
                            {slinks.sublink.map(slink=>(
                              <li className='py-3 pl-14'>
                                <Link to={slink.link}>{slink.name}</Link>
                              </li>
                            ))}
                          </div>
                        </div>
                     </div>
                    ))
                  }
                </div>
            </div>
        ))}
       </>
  )
}

export default NavLinks
