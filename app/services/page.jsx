import WhatWeAreOffering from '@/components/WhatWeAreOffering'
import {Check, MoveRight, MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const data = [
    {
      title: 'Website Development',
      paragraph: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers."
    },
    {
      title: 'App Development',
      paragraph: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers."
    },
    {
      title: 'Desktop App Development',
      paragraph: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers."
    },
    {
      title: 'ChatBots Development',
      paragraph: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers."
    }
  ]
  const checkpoints = [
    'When clients connect with us, we aim to gain in-depth knowledge about the project.',
    'We gain clarity about the project needs, requirements, and expectations for outstanding project delivery.',
    'We collect all the required information to deliver what the client deserves.'
  ]
  const overview = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/82c3/ac9c/820011eb355408d4516f6f8d782a4734?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b7WE-bgG-QIO8LLo7hB407rXTNvolG3XCSbRMCK3L3Is~~B~4pWIlbTfY3DhiVPJvUTjVY2HdjRnvGGNjrHr7crtzvFk~4viRDj~IbQetp78pIh090VeYXBk~8AsSayp6XVz2NTmlj70HBd4o9-sugtvcAp82QWKvLJcHGQ7JPzHUCxZ-2b6nJx~lMjwK5V5bKgUosY4OO5LPus9k~BKVSnTweNIg7nUovpg6EtDhj0tklV8h2oW31svEe3pDzw4F1ylAkcE-KRguP4HFbdVI-9QXnYBeQVyKb3wa3f5b7x8ChBZH7ubuJMdLiBeI~90wzjan5ew9dUScYU-wJ699A__',
      title: 'Requirements Analysis',
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/4081/37a7/62d7dbeac59b73dbe7f6098d5e41983c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BuJcgkvMC~tQyDwKYgachiT2SpepVA23b9D4DIKYya9MOXvY9duS4ZsO2f90~9teIhda8c~mttATlslGC1PLFjw37Ww~O4ld3Hcn1zAQjVrTvFSYIZezfuc0barAuOmuWzaRRhsD0oe6XWoAjqo4YC52yTbd~vD7UMYb6anFcf6MQtQak7kT~DZJuWGU-q6NMwKqAt7~XiKybAHbml2uD0faCpqHDP3gH0IUWXDK4pShF5UaNyHelPHsk-~aNwZrmxW72NJ85EJIFQRIN05bDB-4rUS9mX6IEUP6OmuFDifjwLQr8~5y7jsfF59HUvQAlH~L0IWi1LhSaW9mOLLK2g__',
      title: 'Create Prototypes',
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/5435/9f57/2c66bee6f569ff007351a63eb761adc4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p16eyXe2Ucq56jF31Kv2Fe-~lfr-zYJwCuEVFagCaUjl5mLd0-D9aT2V7OoslbF4kJhVY46XYGtNAiJeT2tfnXNPnupdbkSqpoxhh089xMfilZ4pIDFfDRrQZ2oYPmGYG-XEnD5z~-8yo2w-FSvOoOaBz9-ZE9GK8~6Wgq-FmPWIt1aumOmeFL9Y0V2S-3nWBA6XdeeeXiiBj1NmBlwAt53lTtf8tLlH0xW7HRCwu-5h2K0JlQxLnQEzBuzaAPNdwiEmtDzjy494sfHGRfx6FM6NAvcEJn06vC1IQNgydHGwJ4DDPrPcay9ajRQBa3AE44fFGsBN7ooBJeApdvGJ9A__',
      title: 'Design',
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/bb4d/a679/9e1c6b6537242f9e545c6ad49110f000?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f~sMKmE7BqZg3VcQjZurJavjPQJaJLiXx8SHbIez~5QNEvFToHo6BD2b0-zld6buuH07J~aMuaD9wcwxrWr1HDFFQDrqVosn-p-kOWBdmmBwWYMc3fJtKbgZOw2b579DUsls7DNiTtKbEoOpxhNrme4kAeoe7w3bQfq7CTgAwZp~NwSYi6anh6IcDgs2H9zfuUvoSAizNUfNSSdVsBK0iEeqa8T2WoS~i5VdKftNVmeXfXr0KS7C1eLG-gSr4nE4lIMN3vqlp3bpXBSJrQJ5RmojPd-luC06vJdEt8LEmNa4knlWiPzmMrXw8O8lBgZmZiHz-z8d8yvhlQiCb6r0Fw__',
      title: 'Coding/Implementation',
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/cde3/fe87/a8e2ba9f91269c8a2d8379ddd24d4745?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V3RcZT-VUX-N1ORAJi8Ab-QHmj3saQXqfINSY313e0kofttf-ZqlzymM30zgzVqJaZFWNZCTjhq8VpiE91dTF5euTc-NKkSlSo~eaJ~vD9frNX7zUzrW9ULePNrhezgMFehjvLa2IJoENt8z-2jISACAocFWqNs1-xKbU0g6gM1JyCS9uIgKa9yC3zn4EIuZez9oAhi5yUW7PuBuHU1czHetVmgzc2GeDukudvp8Kts32bS3I7SNknL5uNJZ6KUE1XGWwzvZYX-~BLv6c8R4q6VNaj7lkItb9VOyCtJX~D-UGHQyRWlckdNKORi7ff2cLVHxO6ye6PIP-e9j8NAJcw__',
      title: 'Testing',
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/9600/75c8/85d48e24c4d1a73a8140a8aa7162077c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XWfqJL81UjgCY2FIRIBS3VNq2kQPdiU6IXHg2CloSYzAZCf7hnerU4gXoOpn5MQGE1~OGC0fD5LPqr14Ugu~PEAa35z6BLZI7ch3IRIkr7NVJUWWVbnjZCwqmB1dJihWgar5QQCm154cKkWO1iPnaHN-t1OpN1IY606X~GkaaPrDfqtAGU4N8xep-5b~v3ktG5Q-iYD7JdnIQ~zmpCm~HJVmt7-kVgx6lYnvXQURwxJPkLcDG5PVMyzdt~Cx-hlHq1dtlqSpcbV6wKCOf~LOR13L~EGJHXJT293~03hbocsUKxFbpZg8IWQdRY5S8~RpzDsB6K54mXlQlXUbD9OU8Q__',
      title: 'Release the Final',
    }
  ]
  return (
    <main>
      <div className='h-[543px] relative bg-hero-section rounded-br-[222.83px] flex justify-evenly flex-col items-center'>
        <div className="bg-[#86d2fc33] h-[35%] absolute w-[20%] blur-[80px] -bottom-10 -right-10"></div>
        <div className="bg-[#db76ad33] h-[35%] absolute w-[20%] blur-[80px] -bottom-10 -left-10"></div>
        <h1 className='text-white text-6xl font-sans hero-text-gradient py-2 font-bold'><span>&quot;</span>Turning Visions into Reality<span>&quot;</span></h1>
        <p className='flex text-white justify-center items-center flex-col'>Our journey from beginnings to breakthroughs has been fueled by innovation, dedication,<br />
        <span>and an unyielding commitment to excellence</span></p>
      </div>
      <div className='pl-1 flex-col flex justify-center items-center pt-20 gap-y-20'>
        <Image src={'https://s3-alpha-sig.figma.com/img/3de2/afb3/df11736f8f11db260640ff44a978353f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mbTogP8d9~qTdQy0tbPpEF3x3IZP5-gJpQDaR-TnqKsg~VK86XpLoAqJ7I9ce7pNh6CZMfIXFQjcuLAt0d5AsTspLW7~L-0dWkoCIlq2nV57jEQ8QW5ZSckvX2aXM2arAsUYnuKAwcsFkq0GPaJj-nEvDGMxJHEmVuFqlJ~aneKru8nPdcMQQ7srElO2siQYnUUETPu0u9IeBACb4U5Nz9OQFDivJMTbZSQSrc-Kd5Ud1Wzl0IRhUkIyL8LZJUzqr7bGVNGpvDlRIabnyIXqiZUEH4geQdGOzUEkmYmGW5Tq2SySckZfZc7bjI3cKMJhSZm1mqne1RT~NLCHdqb7Yg__'} alt='as' width={700} height={470} />
        <div className='bg-hero-section relative rounded-l-[150px] h-full w-full text-white flex justify-evenly flex-col items-center'>
          
          <WhatWeAreOffering />
        </div>
        <div className='font-sans w-full px-8'>
          <h1 className='text-3xl font-semibold'>We Create Next-big for You</h1>
          <p>Forgebyte aims to solve different problems and paint a bright future for businesses taking the best route. We shape the best system addressing emerging business drivers, using extensive experience, local knowledge, and a great approach - the most crucial aspects of all projects. Forgebyte works differently, and this is what helps us build the best solution for you and for you.</p>
        </div>
      </div>
      <div className='h-[666px] flex justify-evenly items-center flex-col text-white font-sans bg-black'>
        <h1 className='text-3xl font-semibold'>The Operational Blueprint of Forgebyte: A Detailed Overview.</h1>
        <div>
          <div className='flex gap-x-8'>
            {overview.map((item, index)=>(
              <div key={index} className='flex justify-center items-center flex-col'>
                <div className='bg-white w-fit rounded-full p-6'>
                  <Image src={item.image}  alt='as' width={70} height={70} />
                </div>
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-white p-4 space-y-4 text-[#333333] w-4/5 min-h-[272px]'>
          <h1 className='text-2xl font-sans font-semibold'>Requirements Analysis</h1>
          <p>Forgbyte always welcomes your ideas and helps shape them into a real product. Once we receive your interest in our organization, our team members first interact with you to understand the project requirements and aspirations. Further, we create proposals after asking some questions.</p>
          {checkpoints.map((item,index)=>(
            <div key={index} className='flex gap-x-2'>
              <Check color='white' className='bg-black rounded-full p-1' />
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center py-20 text-black items-center w-full gap-x-20'>
        <h3 className='text-xl'>Heard<br />Enough? <span className='text-xl'>&#x2192;</span></h3>
        <Link href={'/contact'} className='text-8xl font-sans contact-text-gradient'>Contact Us</Link>
        <div className='bg-gradient-to-b from-[#5030e5] to-[#8cd3f8] w-20 h-20 rounded-full flex justify-center items-center'><MoveRight size={14} className='' /></div>
      </div>
    </main>
  )
}

export default page
