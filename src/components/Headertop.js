
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Headertop(){


    const [x,y]=useState(true);
    const body=document.getElementById("body");
    function dark()
    {

       y((v)=>!v);
        
        body.classList.toggle("dark");
    }
    return(
        <div className="HeaderBoxtop Flex">
           
            <div className="change Flex"><a href="#"> <i  className={ x?" change2 fa-solid fa-moon fa-2xl":"change2 fa-solid fa-sun fa-2xl"}
             onClick={dark} > </i></a></div>


            

            <div className="logo Flex">
                <a href="#home">
                <img src={require("../logooo.png")}
                alt="logo"
                className="logoo "
                
                />
                </a>
            </div>
        </div>
    )
}