import { useParams } from "react-router-dom";
import { useGetCourseBySearchQuery } from "../api/CoursesApi";
// import ScriptList from "../components/ScriptList";


export default function Search(){
    const {search} = useParams();
    var {data, isLoading, isSucces, isError, error} = useGetCourseBySearchQuery({search});
    console.log(search)
    return(
        <center>

        </center>
    )
}