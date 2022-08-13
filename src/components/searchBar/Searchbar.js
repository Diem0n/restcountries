import React from 'react'
import './Searchbar.css'
const Searchbar = ({onSearchChange}) => {
    return (
        <div className="searchbar">
        <input onChange={(e)=> onSearchChange(e)} type="text" placeholder="Search for a country" />
        </div>
    )
}
export default Searchbar;