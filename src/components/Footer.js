export default function Footer(){
    return(
        <div id="footer" className="footer Flex box_shadow">
            
            <img src={require("../logooo.png")}className="back4"></img>
            <div className="icons">
                <a href="https://www.facebook.com/CivilCoursesEngineering"><i className="fa fa-brands fa-facebook fa-2xl"></i></a>
                <a href="https://wa.me/message/HKKYFIBQALB3N1"><i className="wat fa-brands fa-whatsapp fa-2xl"></i></a>
                <a href="https://t.me/Concrete_Academy"><i className=" tel fa-brands fa-telegram fa-2xl"></i></a>
                </div>

        </div>
    );
};