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
                <img style={{width:"100%",height:"100%"}} src={props.authr_image}/>
            </div>
        </div>

        <div className="contentCourses Flex">

            <div className="boxcontent Flex">
                <p className="one  ">عن الدبلومة
</p>
                <p className="two ">{props.aboutCourse}</p>
            </div>
            <div className="boxcontent Flex">
                <p className="one "> لمن هذا الدبلومة ؟
</p>
                <p className="two ">{props.whoCourse}</p>
            </div>
            <div className="boxcontent Flex">
                <p className="one ">ماذا ستتعلم من هذا الدبلومة ؟</p>
                <p className="two ">{props.learnCourse}</p>
            </div>
            <div className="boxcontent Flex ">
                <p className="one ">محتوى الدبلومة</p>

                <p className="one_ ">{props.topicCoursename1}</p>
                <p className="two_ ">{props.topicCourse1}</p>


                <p className="one_ ">{props.topicCoursename2}</p>
                <p className="two_ ">{props.topicCourse2}</p>


                <p className="one_ ">{props.topicCoursename3}</p>
                <p className="two_ ">{props.topicCourse3}</p>


                <p className="one_ ">{props.topicCoursename4}</p>
                <p className="two_ ">{props.topicCourse4}</p>

<div className="eng">
                <p className="one_ "  style={{direction:"ltr" ,paddingBottom:"20px"}}>{props.topicCoursename5}</p>
                <code><pre className="two_ " style={{direction:"ltr",paddingBottom:"100px"}}>{props.topicCourse5}</pre></code>


                <p className="one_ "  style={{direction:"ltr" ,paddingBottom:"20px"}}>{props.topicCoursename6}</p>
                <code><pre className="two_ " style={{direction:"ltr",paddingBottom:"100px"}}>{props.topicCourse6}</pre></code>

                <p className="one_ "  style={{direction:"ltr",paddingBottom:"20px"}}>{props.topicCoursename7}</p>
                <code><pre className="two_ " style={{direction:"ltr",paddingBottom:"100px"}}>{props.topicCourse7}</pre></code>
</div>
            </div>
            
           
        </div>


        </div>
    )
}