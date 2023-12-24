import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){


    
    return(
        <div className="HeaderBox Flex">
           
            


            <ul className="nav Flex" >
                <li> <Link to={"/tpics"} className="Link ">مقالات هندسية </Link></li>
                <li> <Link to={"/engineers"} className="Link">المحاضرين</Link></li>
                <li> <Link to={"/courses"} className="Link">الكورسات </Link></li>
                <li> <Link to={"/"} className="Link active">الرئيسية </Link></li>

            </ul>

            
        </div>
    )
}