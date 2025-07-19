import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'
import {useAuth,useUser} from "@clerk/clerk-react"
 export const AppContext = createContext();

 export const AppContextProvider = (props)=>{

    const currency =import.meta.env.VITE_CURRENCY
    const navigate =useNavigate()

    const{getToken} = useAuth()
    const {user} = useUser()



    const [allCourses,setAllCourses] = useState([])
    const [isEducator ,setIsEducator] = useState(true)
    const [enrolledCourses,setEnrolledCourses] = useState([])

    // fetch all courses 
    const fetchAllCourses = async()=>{
        setAllCourses(dummyCourses)
    }

    // function to calculate average rating of course
    // const calculateRating=(course)=>{
    //     if(course.courseRating.length === 0){
    //         return 0;
    //     }
    //     let totalRating = 0
    //     course.courseRating.forEach(rating => {
    //         totalRating+= rating.rating
    //     })
    //     return totalRating / course.courseRating.length
    // }

    // function to claculte chapter time 
    const calculateChapterTime= (chapter)=>{
        let time =0;
       chapter.chapterContent.map((lecture)=>time+= lecture.lectureDuration)
       return humanizeDuration(time*60*1000,{units:["h","m"]})

    }

    // function to calculate course duration 
    const calculateCourseDuration=(course)=>{
        let time =0;
        course.courseContent.map((chapter)=> chapter.chapterContent.map((lecture)=>
            time+= lecture.lectureDuration
        ))
        return humanizeDuration(time*60*1000,{units:["h","m"]})

    }
    // calculate the total number of lecture in the course 
    const calculateNoOfLectures= (course)=>{
        let totalLecture=0;
        course.courseContent.forEach(chapter=>{
            if(Array.isArray(chapter.chapterContent)){
                totalLecture += chapter.chapterContent.length
            }
        });
        return totalLecture;


    }
    // fetch user enrooled course 
    const fetchUserEnrolledCourses = async()=>{
        setEnrolledCourses(dummyCourses)
    }


    useEffect(()=>{
        fetchAllCourses()
        fetchUserEnrolledCourses()
    },[])

    const logToken = async()=>{
        console.log(await getToken());
    }

    useEffect(()=>{
        if(user){
            logToken()

        }
    },[user])

    const value={
        currency,allCourses,navigate,isEducator,setIsEducator,calculateNoOfLectures,
        calculateCourseDuration,calculateChapterTime,enrolledCourses,fetchUserEnrolledCourses


    }





    return (
        <AppContext.Provider value={value}> 
            {props.children}
        </AppContext.Provider>
    )

 }