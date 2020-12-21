import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Left from "./components/Left";
import Rightnav from "./components/Rightnav";
import date from "date-and-time";
import rainy from './img/rainy.jpg'
import clearnight from './img/clearnight.jpeg'
import mist from './img/mist.jpeg'
import overcast from './img/overcast.jpeg'
import partlycloudyday from './img/partlycloudyday.jpg'
import partlycloudynight from './img/partlycloudynight.jpeg'
import snow from './img/snow.jpg'
import sunny from './img/sunny.jpg'


function App() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState({
    cloudy: "",
    humidity: "",
    wind: "",
    rain: "",
  });
  const [description, setDescription] = useState('')
  const [day, setDay] = useState('')
  const [img, setImg] = useState({
    rainy:'background-image img',
    clearnight:'background-image img',
    overcast:'background-image img',
    sunny:'background-image img',
    partlycloudyday:'background-image img',
    partlycloudynight:'background-image img',
    snow:'background-image img',
    mist:'background-image img',
  })

  const fetchData = async (value) => {
    await axios("/weather?address=" + value).then((resp) => {

      if(resp.data.error){
        alert('Not found')
      }else{
        console.log(resp);
        const temperature = resp.data.forecast.body.current.temperature;
        const location = resp.data.location.split(", ")[0];


        const timeNow = resp.data.forecast.body.location.localtime;
        const year = timeNow.split(" ")[0].split("-")[0];
        const month = timeNow.split(" ")[0].split("-")[1];
        const day = timeNow.split(" ")[0].split("-")[2];
        const hour = timeNow.split(" ")[1].split(":")[0];
        const minute = timeNow.split(" ")[1].split(":")[1];
        const now = new Date(year, month - 1, day, hour, minute);
        const timeFormated = date.format(now, "HH:mm-dddd,D MMM' YY");


        const humidity = resp.data.forecast.body.current.humidity;
        const cloudy = resp.data.forecast.body.current.cloudcover;
        const wind = resp.data.forecast.body.current.wind_speed;
        const rain = resp.data.forecast.body.current.precip;
        const desc = resp.data.forecast.body.current.weather_descriptions[0]
        const isDay = resp.data.forecast.body.current.is_day;


        
        setDetails({
          cloudy,
          humidity,
          wind,
          rain,
        });
        setCity(location);
        setTemperature(temperature);
        setTime(timeFormated);
        setDescription(desc)
        setDay(isDay)
        setImg({
          rainy:`background-image img ${(desc.includes('Rain') || desc.includes('Drizzle')) ? 'active' : ''}`,
          clearnight:`background-image img ${(desc.includes('Clear') && isDay==='no')? 'active' : ''}`,
          overcast:`background-image img ${(desc.includes('Overcast'))? 'active' : ''}`,
          sunny:`background-image img ${((desc.includes('Clear') && isDay==='yes')|| desc.includes('Sunny'))? 'active' : ''}`,
          partlycloudyday:`background-image img ${(desc.includes('Partly cloudy') && isDay==='yes')? 'active' : ''}`,
          partlycloudynight:`background-image img ${(desc.includes('Partly cloudy') && isDay==='no')? 'active' : ''}`,
          snow:`background-image img ${(desc.includes('Snow'))? 'active' : ''}`,
          mist:`background-image img ${(desc.includes('Mist') || desc.includes('Fog') || desc.includes('Haze')) ? 'active' : ''}`,
        })
    }
    });
  };


  useEffect(() => {
    fetchData('Nur-Sultan')
  }, [])
  return (
    <div className="App" >
      <div id="bg">
        <img  className={img.rainy} src={rainy} alt=""></img>
        <img  className={img.clearnight} src={clearnight} alt=""></img>
        <img  className={img.overcast} src={overcast} alt=""></img>
        <img  className={img.sunny} src={sunny} alt=""></img>
        <img  className={img.partlycloudyday} src={partlycloudyday} alt=""></img>
        <img  className={img.partlycloudynight} src={partlycloudynight} alt=""></img>
        <img  className={img.snow} src={snow} alt=""></img>
        <img  className={img.mist} src={mist} alt=""></img>
      </div>
      <Left city={city} temperature={temperature} time={time} description={description} is_day={day} backgroundChanger={setImg} />
      <Rightnav details={details} changeCity={fetchData}  />
    </div>
  );
}

export default App;
