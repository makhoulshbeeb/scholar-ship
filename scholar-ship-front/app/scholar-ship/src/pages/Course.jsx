import { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "../api/CoursesApi";
import { useGetLessonByIdQuery } from "../api/LessonsApi";
import LessonPlaylist from "../components/LessonPlaylist";


export default function Course(){
    const {id} = useParams();
    const {data:course} = useGetCourseByIdQuery({id: id});
    console.log(course)
    const [video, setVideo] = useState(0);
    useEffect(()=>{
        console.log(video);
    },[video])
    if(course) return(
        <div className="flex center">
            <VideoPlayer lesson={course[0].lessons[video]}></VideoPlayer>
            <LessonPlaylist lessons={course[0].lessons} onSelect={setVideo}></LessonPlaylist>
        </div>
    )
}