import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import TestimonialSection from '../../components/student/TestimonialSection'
import Footer from '../../components/student/Footer'








function Home() {
  return (
    <div className='flex flex-col  items-center space-y-7 text-centre'>
      <Hero />
      <Companies />
      <CoursesSection/>
      <TestimonialSection/>
      <callToAction/>
      <Footer/>
     
      
    </div>
  )
}

export default Home
