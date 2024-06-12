import React from "react";
import {useState} from "react";

import "./Form.css";
function Form(){
    const[date,setDate]=useState("");
    const [time,setTime]=useState("17:00");
    const[guests,setGuests]=useState(1);
    const[occasion,setOccasion]=useState("Birthday")
    function handleSubmit(e){
        e.preventDefault();
        setDate("");
        setTime("17:00");
        setGuests(1);
        setOccasion("Birthday");
    }
    return(
        <>
        <div id="heading">
        <h1>Booking Form</h1>
        </div>
        <div className="bookingForm">
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">
            Date: 
            </label> 
            <input type="date" id="res-date" value={date} onChange={(e)=>{
                setDate(e.target.value);
            }}></input>
             <label htmlFor="res-time">Time</label>
             <select id="res-time" value={time} onChange={(e)=>{
                setTime(e.target.value);
             }}>
             <option>17:00</option>
             <option>18:00</option>
             <option>19:00</option>
             <option>20:00</option>
             <option>21:00</option>
             <option>22:00</option>
             </select>
             <label htmlFor="guests">Number of guests:</label>
             <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=>{setGuests(e.target.value)}}></input>
             <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e)=>{setOccasion(e.target.value)}}>
             <option>Birthday</option>
             <option>Anniversary</option>
             </select>
             <button type="submit" id="click">Submit</button>
        </form>
        </div>
        </>
    )
}

export default Form;