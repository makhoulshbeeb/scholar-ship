import ReactPlayer from 'react-player/youtube'
import { useGetLessonByIdQuery } from '../api/LessonsApi'
import "./styles/VideoPlayer.css"

export default function VideoPlayer({lesson}){
    const {data} = useGetLessonByIdQuery({id: lesson});
    console.log(data)
    if(data) return(
        <div className='video-container'>
        <ReactPlayer url={data[0].video} controls={true} width={'100%'} height={"480px"}></ReactPlayer>
        <h1>{data[0].name}</h1>
        </div>
    )
}