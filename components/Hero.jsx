"use client";

import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='mt-16 h-[400px] '>
                <div className=' h-96 w-full flex items-center justify-center'>
                    <div className='text-black h-96 w-1/2 flex-col items-center justify-center '>
                        <h1 className='font-extrabold text-7xl'>Digital Marketing</h1> 
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, cumque! Aperiam aut, velit dolore exercitationem quis suscipit ducimus sapiente reiciendis.</p>
                    </div>

                </div>
                <div className='bg-yellow-200 h-20 flex items-center justify-center'>
                    <button className='bg-black text-white'>explorer</button>
                </div>

            </div>  
        </>
    )
}

export default Hero
