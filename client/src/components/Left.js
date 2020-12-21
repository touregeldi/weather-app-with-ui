import React from "react";
import "../styles/Left.css";
import Icon from './Icon'





function Left(props) {
  
  return (
    <div className="left">
      <div className="first"></div>
      <div className="second"></div>
      <div className="information">
        <div className="degree">
          <h1>
            {props.temperature}
            <span>&#176;</span>
          </h1>
        </div>
        <div className="city">
          <h1>{props.city}</h1>
          <p>{props.time}</p>
        </div>
        <div className="weatherIcon">
          <div className="icon">
            <Icon description={props.description} is_day={props.is_day} backgroundChanger={props.backgroundChanger}/>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Left;
