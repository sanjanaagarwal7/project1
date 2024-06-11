import React from "react";
import Header from "./Header";
import "./Homepage.css";
function Homepage(){
    return (
      
      <div className="main">
        <section className="body">
        <article>
        <h1>Little Lemon</h1>
        <p>A family owned Mediterranean restaurant</p>
        </article>
        </section>
        <section className="about">
            <article id="location">
                <h2>Location</h2>
                <p>1800 North Halsted Street
Chicago, IL
60614</p>
            </article>
            <article id="details">
                <h2>Details</h2>
                <p>The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
            </article>
            <article id="hours">
                <h2>Hours</h2>
                <p>Monday ~ Friday Lunch: 11am ~ 2:30pm Dinner: 5pm ~ 9:30pm
Saturday ~ Sunday Brunch: 9am ~ 2:30pm Dinner: 5pm ~ 9:30pm
Closed December 24, 25, and 26</p>
            </article>
        </section>
      </div>
      
  
    )
}

export default Homepage;