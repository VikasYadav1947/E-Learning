import Course from "../models/Course.js";
import mongoose from "mongoose";


// Get All Courses
export const getAllCourse = async(req,res)=>{
    try {
        const courses = await Course.find({isPublished:true}).select
        (['-courseContent','-enrolledStudents']).populate({path:'educator'})

        res.json({success:true, courses})
    } catch (error) {
        res.json({success:false, message:error.message})  
    }
}

//Get courses by id 
// file ke top me add karna mat bhoolna

export const getCourseId = async(req,res)=>{
    const {id} = req.params 
    try {
        // Step 1: agar 'all' hai to sab courses bhej de
        if (id === "all") {
            const allCourses = await Course.find({ isPublished: true });
            return res.json({ success: true, courseData: allCourses });
        }

        // Step 2: ID valid hai ya nahi check kar
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.json({ success: false, message: "Invalid Course ID" });
        }

        // Step 3: Course find kar by id
        const courseData = await Course.findById(id).populate({path:'educator'})
        if (!courseData) {
            return res.json({ success: false, message: "Course not found" });
        }

        // Step 4: Locked lectures ke urls blank kar de
        courseData.courseContent.forEach(chapter => {
            chapter.chapterContent.forEach(lecture => {
                if (!lecture.isPreviewFree) {
                    lecture.lectureUrl = "";
                }
            });
        });

        res.json({ success: true, courseData });

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Purchase course 
