import Eng from "../Eng/Eng";
import Services from "../Services/Services";

export default function Home(){
    return(
        <>
        <div id="home" className="App">
        <div  className=" Home Flex">

            <div className="back"></div>
            

            <div className="right Flex">
                <p className="top">CONCRETE</p>
                <p className="bottom">DESIGN & TRAINING</p>
                <p className="pra1">نقدم لك مجموعة متنوعة من أقوى كورسات الهندسة المدنية والمعمارية
يمكنك الاشتراك خلال دقائق من أي مكان بالعالم</p>
                <p className="pra2">والحصول على فيديوهات مسجلة تستطيع مشاهدتها في أي وقت
على اللاب توب أو تطبيق الهاتف بدون الحاجة لإنترنت</p>

                <div className="icons">
                <a href="https://www.facebook.com/CivilCoursesEngineering"><i className="fa fa-brands fa-facebook fa-2xl"></i></a>
                <a href="https://wa.me/message/HKKYFIBQALB3N1"><i className="wat fa-brands fa-whatsapp fa-2xl"></i></a>
                <a href="https://t.me/Concrete_Academy"><i className=" tel fa-brands fa-telegram fa-2xl"></i></a>
                </div>
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

        </div>
        <Services/>
        <Eng/>
        </>    

    )
}