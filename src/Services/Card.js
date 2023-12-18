
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { data_card } from "./data";


export default function Card (props){

    const ref = useRef(null);

   useEffect(() => {
   

    const element = ref.current;

    element.addEventListener('click', (eo)=>{
        var id_value=element.getAttribute("id");
        data_card[0].ID=id_value;


    });

  }, []);
    
  

    return(
        <Link id={props.id} ref={ref} to={"/courses/content"} className="card" 
          >
            
            <img className="topcard" src={props.image}/>
            <div className="bottomcard Flex">
                <p className="title">{props.title}</p>
                <div className="hn Flex">
                    <p className="hours">{props.hours}</p>
                    <p className="nameEng">{props.nameEngineer}</p>
                </div>
                <div>
                    <p  className="price">{props.price}</p>
                </div>
            </div>
        </Link>
    )
}