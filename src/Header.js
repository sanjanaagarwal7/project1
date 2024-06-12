import React from 'react';
import "./Header.css";

import Homepage from "./Homepage";
import Form from "./Form";
import {Routes,Route,Link} from "react-router-dom";
function Header(){
    var url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vsRr6NGdZxBWI2M8SVGdfpsEzvyir7tPog&s";
    return(
        <>
        <div class="header">
        <img src={url} height="75px" alt="yes"></img>
        <div className="container">
         <input type="Search" placeholder="search" id="bar"></input>
         <button type="submit"><img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" height="12px"/></button>
        </div>
        <nav>
        <Link to="/" id="link">Home</Link>
        <Link to="/form"  id="link">Reservations</Link>
        </nav>
        </div>
        <Routes className="routes">
            <Route path="/" element={<Homepage />}/>
            <Route path="/form" element={<Form />}/>
        </Routes>
        </>
    )
}

export default Header;