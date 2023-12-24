import Eng from "../Eng/Eng";
import Services from "../Services/Services";
import Myeng from "./Myeng";
import Myservices from "./Myservices";

export default function Home(){
    return(
        <div className="APPhome">
        <div id="home" className=" Home Flex">

            <div className="back"></div>
            

            <div className="right Flex">
                <p className="top">CONCRETE</p>
                <p className="bottom">DESIGN & TRAINING</p>
                <p className="pra1">نقدم لك مجموعة متنوعة من أقوى كورسات الهندسة المدنية والمعمارية
يمكنك الاشتراك خلال دقائق من أي مكان بالعالم</p>
                <p className="pra2">والحصول على فيديوهات مسجلة تستطيع مشاهدتها في أي وقت
على اللاب توب أو تطبيق الهاتف بدون الحاجة لإنترنت</p>

                <a href="#footer"><button >اشترك الان</button></a>
            </div>
            

            <div className="left ">

                <div className="leftimg1">
                    <div className="leftimgs1"></div>
                    <div className="leftimgsc1"></div>

                </div>
                <div className="leftimg">
                    <div className="leftimgs"></div>
                    <div className="leftimgsc"></div>
                </div>
            
                
            </div>
            
        

        
        
        </div>


        <Myservices/>
        <Myeng/>  
        </div>    

    )
}