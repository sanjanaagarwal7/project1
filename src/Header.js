import React from 'react';
import "./Header.css";
function Header(){
    var url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vsRr6NGdZxBWI2M8SVGdfpsEzvyir7tPog&s";
    return(
        <>
        <img src={url} height="75px"></img>
        <div className="container">
         <input type="Search" placeholder="search" id="bar"></input>
         <button type="submit"><img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" height="12px"/></button>
        </div>
        </>
    )
}

export default Header;