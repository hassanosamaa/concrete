import Content_1 from "./Content_1";
import { data_card } from "./data";


export default function Content (){

    const datacontent=data_card.map((el,i)=>(
            <Content_1 video={el.video_}
            authr_image={el.authr_image_}
            univercity={el.univercity_}
            aboutCourse={el.aboutCourse_}
            whoCourse={el.whoCourse_}
            howCourse_={el.howCourse_}
            projectsCourse={el.projectsCourse_}
            learnCourse={el.learnCourse_}
            nameEngineer={el.nameEngineer_}/>
        )
             )

    
    return (
        <>
       { {datacontent}.datacontent[data_card[0].ID]}
        
        </>
    )

    
    
        
}