import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Main from './Main';
const Header = () => {
    const [togle, setTogle] = useState(false)
    const handleClick = () => {
        setTogle(!togle)
    }
    return (
        <>
            <div    
            className='w-full h-20 flex justify-between items-center px-4 '>
                <h1 className='text-xl md:text-2xl font-bold z-50'>
                    Noman <span className='text-[#900002]'>Shabeer</span>
                </h1>
                <div className='hidden md:flex gap-5 md:gap-10'>
                    <NavLink to={"/"} className='font-semibold hover:text-[#900002]/80 md:text-xl z-50'>Home</NavLink>
                    <NavLink to={"/about"} className='font-semibold hover:text-[#900002]/80 md:text-xl z-50'>About</NavLink>
                    <NavLink to={"/contact"} className='font-semibold hover:text-[#900002]/80 md:text-xl z-50'>Contact</NavLink>
                    <NavLink to={"/skills"} className='font-semibold hover:text-[#900002]/80 md:text-xl z-50'>Skills</NavLink>
                </div>
                <div className='flex  md:hidden manget-target'>
                    {
                        togle ? (
                            <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </div>
            </div>
            {togle && (
                <div className='flex flex-col   items-center  py-30 text-[18px] md:hidden'>
                    <NavLink to="/" className='font-semibold hover:text-[#900002]/80 mb-7'>Home</NavLink>
                    <NavLink to="/about" className='font-semibold hover:text-[#900002]/80 mb-7'>About</NavLink>
                    <NavLink className='font-semibold hover:text-[#900002]/80 mb-8' >Contact</NavLink>
                    <NavLink className='font-semibold hover:text-[#900002]/80 text-sm'>Skills</NavLink>
                </div>
            )}
            <Main />

        </>
    )
}

export default Header