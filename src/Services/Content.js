import Content_1 from "./Content_1";
import { data_card } from "./data";


export default function Content (){

    const datacontent=data_card.map((el,i)=>(
            <Content_1 video={el.video_}
            authr_image={el.authr_image_}
            nameEngineer={el.nameEngineer_}
            univercity={el.univercity_}
            aboutCourse={el.aboutCourse_}
            whoCourse={el.whoCourse_}
            learnCourse={el.learnCourse_}
            topicCoursename1={el.topicCoursename_.top1}
            topicCoursename2={el.topicCoursename_.top2}
            topicCoursename3={el.topicCoursename_.top3}
            topicCoursename4={el.topicCoursename_.top4}
            topicCoursename5={el.topicCoursename_.top5}
            topicCoursename6={el.topicCoursename_.top6}
            topicCoursename7={el.topicCoursename_.top7}
            topicCourse1={el.topicCourse_.top1}
            topicCourse2={el.topicCourse_.top2}
            topicCourse3={el.topicCourse_.top3}
            topicCourse4={el.topicCourse_.top4}
            topicCourse5={el.topicCourse_.top5}
            topicCourse6={el.topicCourse_.top6}
            topicCourse7={el.topicCourse_.top7}
            />
        )
             )

    
    return (
        <>
       { {datacontent}.datacontent[data_card[0].ID]}
        
        </>
    )

    
    
        
}