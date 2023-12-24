import Card from "../Services/Card"
import { data_card } from "../Services/data"

export default function Myservices(){

    const datacard=data_card.map((el,i)=>(
        <Card
        key={i}
        id={el.id_}
        image={el.image_} 
        title={el.title_}
        hours={el.hours_}
        nameEngineer={el.nameEngineer_}
        price={el.price_}/>
    ))
    const w=300*datacard.length;
    return(
        <>
        <p className="courses_top  Flex">الكورسات</p>
        <div className="myser">
            <div className="cardmy" style={{width:`${w}px`}}>
            {datacard}
            </div>
           
    

        </div>
        </>
    )
}