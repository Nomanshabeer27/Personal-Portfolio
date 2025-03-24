/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Feature from './Feature'
import { motion } from "motion/react"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Main = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    })
    useEffect(() => {
        const handleMousemove = (e) => {
            const { clientX, clientY } = e;
            gsap.to("#curser", {
                left: clientX - 20 / 2,
                top: clientY - 20 / 2,
                duration: 0.5,
                delay: 0.1,
                ease: "power3.out",
            });
        };
        window.addEventListener("mousemove", handleMousemove)
        return () => {
            window.removeEventListener("mousemove", handleMousemove);
        };
    }, [])
    const variants = {
        default: {
            x: position.x - 16,
            y: position.y - 16,
        }
    }
    return (
        <>
            <motion.div variants={variants} id="curser" className="pointer-events-none w-[25px] h-[25px] bg-gray-300 absolute top-0 left-0 rounded-full z-0"></motion.div>
            <div className='w-full px-30 py-50 z-40'>
                <motion.h1
                    animate={{
                        x: [0, 20, 0],
                        transition: {
                            duration: 2,
                            staggerChildren: 0.5,
                            scale: 2,
                            timing: [0.5, 1, 0.5],
                            repeat: Infinity,
                            repeatType: "reverse",
                        },
                    }}
                    className='text-[35px] md:text-[35px]'>Noman Shabeer</motion.h1>
                <div onMouseEnter={() =>
                    gsap.to("#curser", {
                        scale: 3,
                        duration: 2,
                        ease: "power3.out",
                    })
                }
                    onMouseLeave={() =>
                        gsap.to("#curser", {
                            scale: 1.5,
                            duration: 2,
                            ease: "power3.out",
                        })
                    }
                    className=' heading flex flex-wrap gap-4 md:gap-6 text-6xl md:text-6xl lg:text-10xl font-bold tracking-tight '>
                    <h1 className='hover:text-black z-50'>Frontend</h1>
                    <h1 className='hover:text-black z-50'>Web</h1>
                    <h1 className='hover:text-black z-50'>Developer</h1>
                </div>
            </div>
            <p className='select'>
                A frontend web developer is responsible for creating the visual components and user interface (UI) of a website or web application. They work with technologies like HTML, CSS, and JavaScript to design and implement the layout, structure, and interactive elements that users interact with.
            </p>
            <Feature />
        </>
    )
}

export default Main;