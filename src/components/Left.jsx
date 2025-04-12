import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Left = () => {
    return (
        <div className='headingone container mx-auto  px-10  z-40'>
            <TypeAnimation
                sequence={[
                    "I'am Noman Shabeer",
                    1000,
                    ' Full Stack Developer',
                    1000,
                ]}
                wrapper="span"
                speed={20}
                style={{color:"white",fontSize: '30px', display: 'inline-block', marginTop: '20px', }}
                repeat={Infinity}
            />
            <div
                className='text-white heading flex flex-wrap gap-4 md:gap-6 !text-[38px] md:text-6xl lg:text-10xl  font-bold tracking-tight'>
                <h1 className=''>Frontend</h1>
                <h1 className=''>Web</h1>
                <h1 className=''>Developer</h1>
            </div>
            
        </div>

    )
}

export default Left