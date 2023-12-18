
export default function Engsocial (props){

    return(
        <div className="eng_so Flex">
            <div className="eng_imag box_shadow">
                <img src={props.image}/>
            </div>
            <div className="eng_par Flex">
                <p className="eng_1">{props.nameEngineer}</p>
                <p className="eng_2">{props.univercity}</p>
            </div>
        </div>
    )
}