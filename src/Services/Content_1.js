import ReactPlayer from "react-player";

export default function Content_1(props){
    return(
    < div className="content Flex">

        <div className="video">
            <ReactPlayer url={props.video}
            autoPlay
            controls/>
        </div>

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
                <img src={props.authr_image}/>
            </div>
        </div>

        <div className="contentCourses Flex">

            <div className="boxcontent Flex">
                <p className="one box_shadow"></p>
                <p className="two box_shadow">{props.aboutCourse}</p>
            </div>
            <div className="boxcontent Flex">
                <p className="one box_shadow"></p>
                <p className="two box_shadow">{props.whoCourse}</p>
            </div>
            <div className="boxcontent Flex">
                <p className="one box_shadow"></p>
                <p className="two box_shadow">{props.howCourse}</p>
            </div>
            <div className="boxcontent Flex">
                <p className="one box_shadow"></p>
                <p className="two box_shadow">{props.projectsCourse}</p>
            </div>
            <div className="boxcontent Flex box_shadow">
                <p className="one box_shadow"></p>
                <p className="two box_shadow">{props.learnCourse}</p>
            </div>
            
           
        </div>


        </div>
    )
}