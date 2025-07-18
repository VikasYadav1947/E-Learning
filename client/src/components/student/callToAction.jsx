import React from 'react'
import { assets } from '../../assets/assets'

const callToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 '>
      <h1> learn anything, anytime,anywhere</h1>
      <p>From onboarding students to managing course content, everything
         is centralized and hassle-free. Highly recommend it to other institutes!"</p>
         <div className='flex items-center font-medium  gap-6 mt-4'>
          <button className='px-10 py-3 rounded-md text-white bg-blue-600'>Get started</button>
          <button className='flex'>Learn more <img src={assets.arrow_icon} alt="arrow_icon" /></button>
         </div>
    </div>

  )
}

export default callToAction
