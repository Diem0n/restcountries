import React from "react";
import Card from "../card/Card";
const Cardlist = ({countries , theme}) => {
    return(
        <>
            {countries.map((country , i) =>
             
            <Card id={country.name} theme={theme} key={country.name + i}
             name={country.name}
             population = {country.population}
             region={country.region} 
             capital={country.capital} 
             svg ={country.flags.png} /> )
            }

        </>
        
    )
}
export default Cardlist;