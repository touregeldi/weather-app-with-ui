import React, { useState } from "react";
import "../styles/Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.changeCity(value);
    setValue('')
  };


  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="searchinput">
          <div className="inputdiv">
            <input
              className="input-location"
              type="search"
              placeholder="Location"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="buttondiv">
            <button value="Sumbit" className="button" type="submit">
              <SearchIcon className="Icon" style={{ fontSize: 40 }} />
            </button>
          </div>
        </div>
      </form>

      <div className="hint">
        <div className="bir columndar">
          <div className="firsthint">
            <button className="word-btn" onClick={(e)=>props.changeCity('Birmingham')}>Birmingham</button>
          </div>

          <div className="firsthint">
            <button className="word-btn" onClick={(e)=>props.changeCity('Atyrau')}>Atyrau</button>
          </div>

          <div className="firsthint">
           <button className="word-btn" onClick={(e)=>props.changeCity('Manhester')}>Manchester</button>
          </div>

          <div className="firsthint">
            <button className="word-btn" onClick={(e)=>props.changeCity('Nur-Sultan')}>Nur-Sultan</button>
          </div>
        </div>

        <div className="eki columndar">
        <div className="firsthint">
          <button className="word-btn" onClick={(e)=>props.changeCity('Almaty')}>Almaty</button>
        </div>

        <div className="firsthint">
        <button className="word-btn" onClick={(e)=>props.changeCity('New-York')}>New-York</button>
        </div>

        <div className="firsthint">
        <button className="word-btn" onClick={(e)=>props.changeCity('London')}>London</button>
        </div>

        <div className="firsthint">
        <button className="word-btn" onClick={(e)=>props.changeCity('Rome')}>Rome</button>
        </div>
        </div>
        <div className="ush columndar">
        <div className="firsthint">
          <button className="word-btn" onClick={(e)=>props.changeCity('Paris')}>Paris</button>
        </div>

        <div className="firsthint">
        <button className="word-btn" onClick={(e)=>props.changeCity('Madrid')}>Madrid</button>
        </div>

        <div className="firsthint">
        <button className="word-btn" onClick={(e)=>props.changeCity('Barcelona')}>Barcelona</button>
        </div>

        <div className="firsthint">
        <button className="word-btn" onClick={(e)=>props.changeCity('Satbayev')}>Satbayev</button>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Search;
