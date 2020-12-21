import React from "react";
import Search from "./Search";
import Details from "./Details";
import "../styles/Rightnav.css";

function Rightnav(props) {
  return (
    <div className="rightnav">
      <Search changeCity={props.changeCity} />
      <Details details={props.details} />
    </div>
  );
}

export default Rightnav;
