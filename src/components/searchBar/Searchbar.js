import React from 'react'
import './Searchbar.css'
const Searchbar = ({onSearchChange , theme}) => {
    return (
        <div className="searchbar">
        <input onChange={(e)=> onSearchChange(e)} type="text" className={
            theme === 'light' ?
            'searchfield-light searchfield light' :
            'searchfield-dark searchfield dark'
            }
            placeholder="Search for a country" />
        </div>
    )
}
export default Searchbar;