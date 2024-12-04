import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main>
      {/* <Image src={'https://s3-alpha-sig.figma.com/img/d341/a546/a56e9178e6655d97ac50eef6cbbc4c53?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LrkYDD1q~OBLm0b5S4ayXjYpo87-8vP~UcAOIp3xp8uAfCZ1unkLT9dcqi3g9Fj6UovqgEWT7crWW5GWiTbur2J6ZtU2PhZ7XM5b-xuUtckjNZ9ns5VnAFiKGbNzAqWiIDqTNJakc59etCaLbwXB-Ynq7HiUnuzochyQK8O2CU4nRjoKkmU8gox59SZjB2nDHNTOhVIkzM6ck9zQ3-YwDRxql2~tbdAhYG1ogije2~0if3Tlgzqt81Hx27anIfpix0bMT8Bv2s4QLERKnuU7UmrGipPX2zbhtESFBals5405~M6sE3axrB7HoDhL0d~kBshbXVKOa4~zShfnxknnMw__'} alt='as' layout='fill'  /> */}
      <div className='h-[638px] flex justify-evenly items-center flex-col bg-hero-section'>
        <h1 className='hero-text-gradient flex justify-center items-center flex-col font-sans text-8xl font-bold'>Digital Marketing<br /><span>Expertise.</span></h1>
        <Button text={"Send Email"} />
      </div>
      <div className='text-black px-20 mb-10 xl:px-80'>
        <div className='my-10'>
          <h1 className='text-3xl font-sans font-semibold'>Get in touch</h1>
          <p className='text-[#727581]'>Ready to help your company scale faster? Have a nice chat with us</p>
        </div>
        <form action="">
          <div className='grid grid-cols-2 grid-rows-2 gap-8'>
            <div className='flex gap-y-6 flex-col'>
              <label className='font-sans font-semibold' htmlFor="">First Name</label>
              <input placeholder='Type here' className='w-[436px] h-[60px] rounded-xl border p-4' />
            </div>
            <div className='flex gap-y-6 flex-col'>
              <label className='font-sans font-semibold' htmlFor="">Last Name</label>
              <input placeholder='Type here' className='w-[436px] h-[60px] rounded-xl border p-4' />
            </div>
            <div className='flex gap-y-6 flex-col'>
              <label className='font-sans font-semibold' htmlFor="">Email</label>
              <input placeholder='Type here' className='w-[436px] h-[60px] rounded-xl border p-4' />
            </div>
            <div className='flex gap-y-6 flex-col'>
              <label className='font-sans font-semibold' htmlFor="">Phone Number</label>
              <input placeholder='Type here' className='w-[436px] h-[60px] rounded-xl border p-4' />
            </div>
          </div>
          <div className='flex flex-col my-8 gap-y-6'>
            <label className='font-sans font-semibold' htmlFor="">Write your message</label>
            <textarea type="text" className='w-full h-[60px] rounded-xl border p-4 py-40 overflow-y-hidden' placeholder='Leave us a message' />
          </div>
          <button type='submit' className="bg-gradient-to-r from-[#EFE3B3] to-[#86D2FC] text-black font-medium px-6 py-2 rounded-full shadow-md hover:scale-105 transition relative overflow-hidden"><span className="inline-block transition-transform duration-300 transform hover:translate-y-1">Send Messages</span></button>
          {/* <Button type='submit' text={"Send Messages"} /> */}
        </form>
      </div>
    </main>
  )
}

export default page
