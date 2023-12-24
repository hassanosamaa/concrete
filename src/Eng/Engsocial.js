import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { data_card } from "../Services/data";

export default function Engsocial (props){

    const ref = useRef(null);

    useEffect(() => {
    
 
     const elementeng = ref.current;
 
     elementeng.addEventListener('click', (eo)=>{
         var id_valueng=elementeng.getAttribute("id");
         console.log(id_valueng)

         data_card[0].ID=id_valueng;
 
 
     });
 
   }, []);
    return(
        <Link id={props.id} ref={ref} to={"/engineers/contenteng"} className="eng_so Flex">
            <div className="eng_imag box_shadow">
                <img src={props.image}/>
            </div>
            <div className="eng_par Flex">
                <p className="eng_1">{props.nameEngineer}</p>
                <p className="eng_2">{props.univercity}</p>
            </div>
        </Link>
    )
}