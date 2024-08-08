import Lesson from "./Lesson"
import "./styles/LessonPlaylist.css"

export default function LessonPlaylist({ lessons, onSelect }) {
    return (
        <div className="lesson-playlist">
            {lessons.map(lesson => {
                return (
                    <>
                        <Lesson lesson_id={lesson} onSelect={onSelect}></Lesson>
                        <hr></hr>
                    </>
                )
            })}
        </div>
    )
}