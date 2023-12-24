
import { data_card } from "../Services/data";
import Contenteng_1 from "./Contenteng_1";


export default function Contenteng (){

    const datacontenteng=data_card.map((el,i)=>(
            <Contenteng_1
            authr_image={el.authr_image_}
            univercity={el.univercity_}
            aboutEng={el.aboutEng_}
            nameEngineer={el.nameEngineer_}/>
        )
             )

    
    return (
        <>
       { {datacontenteng}.datacontenteng[data_card[0].ID]}
        
        </>
    )

    
    
        
}