import { useGetLessonByIdQuery } from "../api/LessonsApi"
import "./styles/Lesson.css"

export default function Lesson({lesson_id, onSelect}){
    const {data} = useGetLessonByIdQuery({id:lesson_id});
    if(data){
        const lesson=data[0];
        return(
            <div className="lesson-item" onClick={()=>{onSelect(lesson.order - 1)}}>
                <img src={lesson.thumbnail} alt={lesson.name} />
                <div className="lesson-info">
                    <h4>{lesson.name}</h4>
                    <p>{lesson.time}</p>
                </div>
            </div>
        )
    }
}