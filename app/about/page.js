"use client";

import Image from "next/image"

const Page = () => {
  const data = [
    {
      number: '150+',
      text: 'Project Completed'
    },
    {
      number: '150+',
      text: 'World wide client'
    },
    {
      number: '150+',
      text: 'Awards Received'
    },
    {
      number: '150+',
      text: 'Client Satisfaction'
    }
  ]

  const values = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/2029/f2dd/0e47e1fc47b098d7ce32d83c66ee7631?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OlhH1roLqlaYuOZ9hCxzpxXcxiyx36RKl~~bdiomlFe-jgQIi~6XP2k6ypkj3NfDkNhqrr1JRS8kfnbbmIIPJPBwa2RKmhTGvYXhDw9MDvcF7GRxSeTyS~CDv1rdVfm0ZNoVqgf4sqJs07By9VXLsLuGzWQxrb8X3B4XZWSWAZrUZXxdKqRMCF3zWNGb9SXN4u7A5Sz~BXpM9P5I9n7QyC-4eo96d0k0n-MF8aQUOyybHWzQrxwEch99HqdBdR5~SMqLan-Ck2qEakgpVLei8JnNW603zCA4zxpUNDqaeouKq5joNeffG9J8sJTtiB4AJAOqDRkaLctAxiUkTZ5lSw__',
      name: 'Transparency',
      description: 'We believe a client has the right to be informed of project progress and Forgebyte ensures 100% transparency'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/dad6/50ac/5e5103f69884009d31d4c9ac0c46974b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TzlvYFm--dZEBpXznxPvjIrd~TArUp9Fg~CwEqxUj~D61bJNRvSYjw~9qcq8J4xq94qzD65o8zmKH~LTkfRnn5GjfE5wlFgUb4uhGnr9VElzmaI-bZyHFJp051wIzrcY85djik3VDE06iN1FUhtMBpBzZUG9wDGqGu4LyzFE8KaNULC8NC0XRO8GNegmSfBo31UJZ0h55oDmsEUZYrOKkbez1x8eGVbvkbs6cDtrS4WAWricU8ctLnw8m41KTw~8nAsaMriVJ8Illcg7zc4NPy~hrg4pJPyz302Sp-87euegaw-W5fNDvkNfyhKSKNKDpBtBoTc8ggWWxBHDkNFVtw__',
      name: 'Get Things Done',
      description: 'We empower our clients, putting the right amount of work and effort into the project. We get the things done. '
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/33e6/f0b7/2f76aeb0d2c4d61208460d2f4ef39986?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mBf9T2jOutFiid6JOxvI4r7z49SAFSg4IAOs2uPyTK2esLaWxx0iehZD1qfdurb9~AW6WrmFyg-18Ql85uOTz2RVJLFAKDuuIIIJ4ssDUHzFNTIgWYm1R5hRxxHFE6xfTggWsxmecYHCiMevuIW~fuy2Rxzfx0f0DOcRggntAJ02ybTY4t7R1Tmq2oSqvp1elxQZVDjfjwh9vKV-jZ5pK0einxxkwdsvFT2nuVtdH4PyDdJO5qxBbyD2efz7ECp5mMQkpGiTPztLssuwwXTUeiLSwNCV8C-NE4dAcUOWiwUgeHokTkmCYGFVHzC5ETPI8eE7sysrIHU3eaumZ8YE-Q__',
      name: 'Transparency',
      description: 'Forgebyte ensures quality project delivery. We use rising technologies to help you stay ahead of game.'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/e15a/47ae/6dc8b66b0006884bc148c53d51826718?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D3k~fPH1PjCWZm9KsdlppoLwkSP93GHN1tWkDdiI4gEdNk-xTLFlLxdTkybOCCrGFBfU3SHUZUt-ooZutxmovbhaqLT-85nfLcnnZdvmhV25OVCe275HpywkJgyD5cnneTMyN1PHomnSQuVhqxgJNlar63lhcKe4oS~20nyzFp1M5DuTqBMdUzGWeT3rc1tWmGYzlJRqhKJqwXdLk61iccF6tW830KOvuhEN-OpHLoJI04DBS9aAB~3n9U43RzBKwr55xKOVCLdTjLclKZhWQGlyXtA2hhkwCwxvg-zdUUSmCw5F2j-Ttts7w0f~~QSHsEGiOVskTpxdlK8bC-rtSg__',
      name: 'Stay Positive',
      description: 'Obstacles hinder the development journey. But westay positive and always find a way to resolve the issue.'
    },
  ]
  return (
    <main>
      <div className="bg-hero-section relative flex flex-col gap-y-10 justify-center items-center h-[500px] rounded-br-[250px] py-10">
        <h1 className="flex items-center flex-col justify-center text-8xl font-bold font-sans leading-[116.18px] hero-text-gradient">Journey of Innovation<div>and excellence</div></h1>
        <p className="flex items-center justify-center flex-col font-sans text-xl">From humble beginnings to industry leadership, we have continuously<br /><span>
          pushed boundaries to deliver innovative solutions</span></p>
        <div className="bg-[#86d2fc33] h-[35%] absolute w-[20%] blur-[80px] -bottom-10 -right-10"></div>
      </div>
      <div className="text-black flex flex-col justify-start py-10 items-center px-4">
        <p className="text-[rgba(0,0,0,0.5)]">Our Success</p>
        <h1 className="flex items-center flex-col justify-center text-8xl font-bold font-sans leading-[116.18px]">The ultimate of our<br /><span>success over the years</span></h1>
        <div className="flex justify-evenly mt-16 w-full px-8 items-center mb-8">
          {data.map((item, index) => (
            <div key={index} className="h-[160px] w-[284px] bg-[rgba(244,244,248,1)] rounded-3xl flex flex-col justify-evenly py-5 items-center">
              <div className="text-6xl font-bold">{item.number}</div>
              <div className="text-xl">{item.text}</div>
            </div>
          ))}
        </div>
        <div className="w-full h-[547px] relative">
          <div className="w-full h-full rounded-3xl absolute bg-about-section opacity-30"></div>
          <div className="flex gap-y-4 px-16 py-4 items-center flex-col text-black">
            <p className="font-semibold text-2xl text-[rgba(0,0,0,0.5)]">Who We Are</p>
            <h1 className="font-bold text-5xl mb-8">About our Company</h1>
            <h4 className="text-2xl">At Forgebyte, we ensure work quality, build a long-term relationship with clients and add more people to our list of happy customers.<br />
              This has always been our main goal.<br />
              In order to achieve this goal, we have managed to provide high-end web, mobile apps, software, and other digital solution development services.<br />
              We build products using the latest technologies that also leave<br />
              an impression on the user and keep up their interests.<br />
              Being on the market since 2023, we have gained trust and respect from our clients by providing them unmatchable support and an incredible user experience focused on quality and performance.</h4>
          </div>
        </div>
        <div className="bg-[#141220] relative h-[544px] w-full mt-10 rounded-tr-[100px] rounded-bl-[100px] flex flex-col items-center">
          <div className="bg-[#86d2fc33] h-[50%] absolute w-[25%] blur-[100px] -top-20 left-[37.5%]"></div>
          <h1 className="text-white font-semibold text-3xl font-sans mt-5">Our Values</h1>
          <div className="flex justify-evenly w-full h-full items-center">
            {values.map((value, index) => (
              <div key={index} className="w-72 h-72 bg-white rounded-3xl flex justify-evenly p-4 items-center flex-col">
                <Image src={value.image} alt="as" height={80} width={80} />
                <h1 className="text-xl font-medium">{value.name}</h1>
                <p className="font-medium text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-y-10 items-center flex-col">
        <h1 className="text-black text-7xl font-bold font-sans">Together we combine<br />outstanding team</h1>
        <div className="flex justify-evenly items-center w-full mb-10">
          <div className="">
            <Image src={'https://s3-alpha-sig.figma.com/img/63c2/6ee5/a3c0d035abaab3b4c0d2718d59b1eb3a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6piK-isJ~lBJUc2HAj2pfQtZp9berzYbFpnpqajOhvuKfGVuCvhYJJvfbtIR~eczzWKhntkr7VlXLqGpR4O4DeMCJUIUf9df1SdmZyDWEsKf0zLK5ixEAk6IZRmXr5G3EBMBijQ4ulFErfreefpaEXYZ1Ca8gHXLBO9aCG3e7aPxWiOyy7qvX~rHS2HWgX9gCli5QKSN1LYIyzaGuPJSuwSZSksPfYTBUd2NC6XB6RdO86h519KbmD2vp4HmlGKhH6UskGITHAZqVrLKD5sFEbWzJjILHRHqfWIhuxgIu8piS-9xDamGiCRP4OJFgKfYQOu7vpWcCcaR2rLz8vnfg__'} alt="as" height={200} width={200} className="rounded-3xl" />
            <h2 className="text-xl font-bold text-black">ABC</h2>
            <p className="text-gray-500">job</p>
          </div><div className="">
            <Image src={'https://s3-alpha-sig.figma.com/img/63c2/6ee5/a3c0d035abaab3b4c0d2718d59b1eb3a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6piK-isJ~lBJUc2HAj2pfQtZp9berzYbFpnpqajOhvuKfGVuCvhYJJvfbtIR~eczzWKhntkr7VlXLqGpR4O4DeMCJUIUf9df1SdmZyDWEsKf0zLK5ixEAk6IZRmXr5G3EBMBijQ4ulFErfreefpaEXYZ1Ca8gHXLBO9aCG3e7aPxWiOyy7qvX~rHS2HWgX9gCli5QKSN1LYIyzaGuPJSuwSZSksPfYTBUd2NC6XB6RdO86h519KbmD2vp4HmlGKhH6UskGITHAZqVrLKD5sFEbWzJjILHRHqfWIhuxgIu8piS-9xDamGiCRP4OJFgKfYQOu7vpWcCcaR2rLz8vnfg__'} alt="as" height={200} width={200} className="rounded-3xl" />
            <h2 className="text-xl font-bold text-black">ABC</h2>
            <p className="text-gray-500">job</p>
          </div><div className="">
            <Image src={'https://s3-alpha-sig.figma.com/img/63c2/6ee5/a3c0d035abaab3b4c0d2718d59b1eb3a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6piK-isJ~lBJUc2HAj2pfQtZp9berzYbFpnpqajOhvuKfGVuCvhYJJvfbtIR~eczzWKhntkr7VlXLqGpR4O4DeMCJUIUf9df1SdmZyDWEsKf0zLK5ixEAk6IZRmXr5G3EBMBijQ4ulFErfreefpaEXYZ1Ca8gHXLBO9aCG3e7aPxWiOyy7qvX~rHS2HWgX9gCli5QKSN1LYIyzaGuPJSuwSZSksPfYTBUd2NC6XB6RdO86h519KbmD2vp4HmlGKhH6UskGITHAZqVrLKD5sFEbWzJjILHRHqfWIhuxgIu8piS-9xDamGiCRP4OJFgKfYQOu7vpWcCcaR2rLz8vnfg__'} alt="as" height={200} width={200} className="rounded-3xl" />
            <h2 className="text-xl font-bold text-black">ABC</h2>
            <p className="text-gray-500">job</p>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Page