import React from "react";
import "../styles/Details.css";

function Details(props) {
  
  return (
    <div className="details">
      <p className="weatherdetails">Weather Details</p>
      <div className="detailinf">
        <div className="infff cloudy">
          <div>
            <p>Cloudy</p>
          </div>
          <div className="numbers">
            <p>{props.details.cloudy}%</p>
          </div>
        </div>
        <div className="infff humidity">
          <div>
            <p>Humidity</p>
          </div>
          <div className="numbers">
            <p>{props.details.humidity}%</p>
          </div>
        </div>
        <div className="infff cloudy">
          <div>
            <p>Wind</p>
          </div>
          <div className="numbers">
            <p>{props.details.wind}km/h</p>
          </div>
        </div>
        <div className="infff cloudy">
          <div>
            <p>Precipitation</p>
          </div>
          <div className="numbers">
            <p>{props.details.rain}mm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
