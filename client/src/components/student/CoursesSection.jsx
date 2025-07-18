import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {
  const {allCourses } = useContext(AppContext)


  return (
    <div className='py-16 md:px-40 px-8'> 
      <h2 className='text-3xl font-medium text-gray-800 text-center'> Learn from the  best </h2>
      <p className='text-sm md:text-base text-gray-500 mt-3 text-center'> Enhance your skills and expand your knowledge with our expertly designed courses. 
        Whether you're a beginner looking <br />to build a strong foundation or a professional seeking advanced training,
         we have something for everyone.</p>

         <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>

          {allCourses.slice(0,4).map((course,index)=><CourseCard key={index} course={course}/>)}
         </div>


         <Link to={'/course-list'} onClick={()=> scrollTo(0,0)}
          className='text-gray-500 border  border-gray-500/30 px-10 py-3 rounded '> Show all Courses </Link>
    </div>
  )
}

export default CoursesSection
