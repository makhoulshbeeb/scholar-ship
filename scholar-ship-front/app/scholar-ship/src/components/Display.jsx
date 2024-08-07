import { useEffect, useState } from "react";
import DisplayPanel from './DisplayPanel';
import './styles/Display.css';
import { useGetAllCoursesQuery } from "../api/CoursesApi";



export default function Display({ displayTitle}) {
    const {data:courses} = useGetAllCoursesQuery();
    
    if (courses) {
        return (
            <div className="display">
                <h2>{displayTitle}</h2>
                <div className="scroll-display">
                    {courses.map(course => {
                        return (
                            <DisplayPanel course={course} key={course.id}></DisplayPanel>
                        )
                    }

                    )}
                </div>
            </div>
        );
    }
}