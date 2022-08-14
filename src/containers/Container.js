import React from "react";
import './container.css';
import Cardlist from "../components/cardList/Cardlist";

const Container = ({countries, theme}) => {
    return(
        <>
            <div className="container">
                <Cardlist theme={theme} countries={countries}/>
            </div>
        </>
        
    )
}
export default Container;