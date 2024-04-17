import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaBehance, FaDribbble, FaGithub } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='max-w-[1440px] mx-auto h-[90vh] flex px-[9vw] items-center justify-center'>
        <div className='flex-1 flex space-x-14 justify-center items-center'>
            <div className='flex flex-col items-center'>
                <div className='h-24 border-r-2 border-[#92FE00]'></div>
                <div className='my-10 space-y-6 flex flex-col items-center'>
                    <CiLinkedin size={35} color='#92FE00'/>
                    <FaDribbble size={25} color='#92FE00' />
                    <FaBehance size={25} color='#92FE00' />
                    <FaGithub size={25} color='#92FE00' />
                </div>
                <div className='h-24 border-r-2 border-[#92FE00]'></div>
            </div>
            <div className=''>
            <p className='text-[2.8vw]'>👋 Hello, I&apos;m <span className='text-[#92FE00]'>Yididiya Kebede</span></p>
            <p className='text-[5.3vw] text-[#92FE00] font-bold py-0 leading-tight mb-4'>UI/UX Designer</p>
            <p className='font-light w-[95%] leading-7'>I’m Iryna, a UI/UX Designer based in Chicago, IL, originally from Ukraine. My background in education and social work, along with living in different countries, fuels my love for understanding diverse perspectives. Transitioning to UI/UX design just felt right—I’ve always put users first. My intuitive designs aim for seamless interactions. I’m all about collaboration, working with cross-functional teams to innovate solutions for positive change</p>
            </div>  
        </div>
        <div className='flex-1'>

        </div>
    </div>
  )
}

export default Hero