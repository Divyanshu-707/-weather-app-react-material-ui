import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
import "./WeatherBox.css";


export default  function WeatherBox(){
let [weatherInfo , setWeatherInfo]= useState({
    city:"Delhi",
    feelsLike:30.78,
    humidity:5,
    temMin:33.09,
    temp:33,
    tempMax:33.09,
    weather:"clear sky",
});

let updateInfo =(info)=>{
        setWeatherInfo(info);
    };

    return(
        <>
        <div className="Box">

        <SearchBox updateInfo={updateInfo}/>

         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <InfoBox  info={weatherInfo}/>
        </div>       
        </>
    )
}