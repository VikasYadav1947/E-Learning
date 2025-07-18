import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'


const Hero = () => {
  return (
    <div className='flex flex-col items-centre justify-centre w-full md:pt-36 pt-20
    px-7 md:px-0  space-y-7 text-centre bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>
        Transform your career with flexible and
      <span className='text-blue-600'>interactive online learning.</span> 
      <img src={assets.sketch} alt="sketch" className='md:block hidden absoulate -bottom-7 right=0' /></h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Take control of your education
         with our dynamic learning platform. Discover expert-led courses designed to help you grow and succeed.</p>


         <p className='md:hidden text-gray-500 max-w-sm mx-auto '> 
         Learn from industry professionals and gain valuable skills. Our user-friendly platform makes education accessible anytime, anywhere.
         </p>

         <SearchBar/> 
    </div>
  )
}

export default Hero
