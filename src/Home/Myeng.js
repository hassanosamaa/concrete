import Engsocial from "../Eng/Engsocial";
import { data_card } from "../Services/data";

export default function Myeng(){

    const data_engsocial=data_card.map((el,i)=>(
        <Engsocial
        key={i}
        id={el.id_}
         image={el.image_}
        nameEngineer={el.nameEngineer_}
        univercity={el.univercity_}/>
    ))
    const w=200*data_engsocial.length;
    return(
        <>
        <p className="courses_top  Flex">المحاضرين</p>

        <div className="myeng">
            <div className="engmy" style={{width:`${w}px`}}>
            {data_engsocial}
            </div>
           
    

        </div>
        </>
    )
}