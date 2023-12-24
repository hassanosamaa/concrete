
export default function Contenteng_1(props){
    return(
    < div className="content Flex">

        

        <div className="social Flex">
            <div className="lefts ">
                <div className="lefttop Flex">
                    <p>{props.nameEngineer}</p>
                </div>
                <div className="leftbot Flex">
                    <p>{props.univercity}</p>
                </div>
            </div>
            <div className="rights">
                 <img style={{width:"100%",height:"100%"}} src={props.authr_image}/>
            </div>
        </div>

        <div className="contentCourses Flex">

            <div className="boxcontent Flex">
                <p className="one box_shadow"></p>
                <p className="two box_shadow">{props.aboutEng}</p>
            </div>
            
            
           
        </div>


        </div>
    )
}