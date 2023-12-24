import { Link } from "react-router-dom";
import { data_card } from "../Services/data";
import Engsocial from "./Engsocial";

export default function Eng(){

        const data_engsocial=data_card.map((el,i)=>(
            <Engsocial 
            key={i}
            id={el.id_}
            image={el.image_}
            nameEngineer={el.nameEngineer_}
            univercity={el.univercity_}/>
            
        ))
    return(
        
            <div className="eng Flex">
                <div className="back3"></div>
                <div className="engtop Flex ">
                    <p >المحاضرون</p>
                </div>
                <div className="engbottom Flex">
                    {data_engsocial}
                </div>


            </div>
        
    )
}