import React  from "react";
import "./Card.css";

const cardcliked = (id) => {
    console.log(id);
}
const Card = ({theme, id, name ,population , region , capital , svg}) => {
    const Na = 'N/A';

    return (
        <div onClick={()=>{console.log(id)}} className={
            theme === 'light' ?
            'card-light card' :
            'card-dark card '
        }>
        <div className="card-image" >
            <img className="flag" src={svg} alt={name} />
        </div>
        <div className="card-content">
            <h3 className="card-title">{
                name? name : Na}</h3>
            <p className="card-attr"><span>Population: </span>{
                population? population : Na}</p>
            <p className="card-attr"><span>Region: </span> {
                region? region : Na}</p>
            <p className="card-attr"><span>Capital: </span>{ 
                capital ? capital : Na
            }</p>

        </div>
        </div>
    );  
}

export default Card;