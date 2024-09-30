import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaBehance, FaDribbble, FaGithub } from 'react-icons/fa'

// E63929
// C44BF1

const Hero = () => {
  return (
    <div className='max-w-[1440px] mx-auto h-[90vh] flex px-[8vw] items-center justify-center'>
      <div className='flex-1 flex space-x-14 justify-center items-center'>
        {/* Social Media Icons */}
        <div className='flex flex-col items-center'>
          <div className='h-32 w-[2px] bg-gradient-to-b from-[#E63929] to-[#C44BF1] rounded-full'></div>
          <svg width="0" height="0">
            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#E63929" offset="40%" />
              <stop stopColor="#C44BF1" offset="100%" />
            </linearGradient>
          </svg>
          <div className='my-10 space-y-6 flex flex-col items-center'>
            <CiLinkedin size={40} style={{ fill: "url(#blue-gradient)" }} />
            <FaDribbble size={32} style={{ fill: "url(#blue-gradient)" }} />
            <FaBehance size={30} style={{ fill: "url(#blue-gradient)" }} />
            <FaGithub size={30} style={{ fill: "url(#blue-gradient)" }}/>
          </div>
          <div className='h-32 w-[2px] bg-gradient-to-b from-[#E63929] to-[#C44BF1] rounded-full'></div>
        </div>
        {/* Social Media Icons */}

        {/* Title and Description and CTA */}
        <div className=''>
          <p className='text-[4vw] leading-[5vw]'>👋 Hello, I&apos;m <span className='bg-gradient-to-r text-transparent from-[#E63929] to-[#C44BF1] bg-clip-text'>Yididiya Kebede, a </span><span className='text-[4vw] bg-gradient-to-r text-transparent from-[#E63929] to-[#C44BF1] bg-clip-text font-bold py-0 leading-tight mb-4'>UI/UX Designer.</span></p>
          <p className='font-light w-[95%] leading-7'>Innovative UI/UX Designer with a strong background in user research, wireframing, prototyping, and usability testing. Proficient in Figma, Adobe XD, and Sketch, with a proven track record of enhancing user engagement and satisfaction through intuitive, user-centric designs.</p>
          <div className='flex space-x-3 mt-6'>
            <button className='bg-gradient-to-r from-[#E63929] to-[#C44BF1] rounded-full py-3 px-6 text-lg'>Let's Connect</button>
            <button className='bg-[#C44BF1] rounded-full py-3 px-6 text-lg'>Check My Works</button>
          </div>
        </div>
        {/* Title and Description */}

      </div>
      <div className='flex-1'>

      </div>
    </div>
  )
}

export default Hero