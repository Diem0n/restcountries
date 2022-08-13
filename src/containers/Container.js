import React from "react";
import './container.css';
import Cardlist from "../components/cardList/Cardlist";

const Container = ({countries}) => {
    return(
        <>
            <div className="container">
                <Cardlist countries={countries}/>
            </div>
        </>
        
    )
}
export default Container;