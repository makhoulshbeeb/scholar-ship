import './styles/DisplayPanel.css'

export default function DisplayPanel({ course, setCourseId }) {
    return (

        <div onClick={() => { setCourseId(course.id) }} className="panel" style={{ backgroundImage: `url(${course['image_url']})` }}>
            <img src="${courses[i]['thumbnail']}" />
            <div className="course-panel-row">
                <span>{course['name']}</span>
            </div>
            <div className="course-panel-row">
                <span>{course['lessons'].length}</span>
                <span>{course['time']}</span>
            </div>
        </div>

    );
}
