import Card from "./Card";
import { data_card } from "./data";


export default function Services(){

    const datacard=data_card.map((el,i)=>(
        <Card 
        key={i}
        id={el.id_}
        image={el.image_} 
        title={el.title_}
        hours={el.hours_}
        nameEngineer={el.nameEngineer_}
        price={el.price_}/>
    ))

    return(

        
        <div className="courses Flex">
            <div className="back2"></div>

            <div className="courses_top">
                <h1>Course</h1>
            </div>
            <div className="courses_bottom">
                {datacard}
            
            </div>
        </div>
        
    )
}
    
        
    
