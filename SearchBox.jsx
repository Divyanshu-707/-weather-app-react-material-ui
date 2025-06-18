import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({ updateInfo }){
let [city,setCity]=useState("");
let[err,setError]=useState(false);
const API_URL="https://api.openweathermap.org/data/2.5/weather";
const KEY_URL="a53058904cb0bdad6d056ba749ae90e2";

let getWeatherResponse = async ()=>{
    try{
    let  response= await fetch(`${API_URL}?q=${city}&appid=${KEY_URL}&units=metric`);
    let jsonResponse= await response.json();
    // console.log(jsonResponse);   
    let  result ={
        city:city,
        temp: jsonResponse.main.temp,
        temMin:jsonResponse.main.temp_min ,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity ,
        feelsLike:jsonResponse.main.feels_like ,
        weather:jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
} catch(err){
    throw err;
}
};

let hendelInput=(event)=>{
   setCity(event.target.value);
};

let handelSubmit= async (event)=>{
    try{
        event.preventDefault();
        console.log(city);
        setCity("");
         let newInfo =  await getWeatherResponse();
         updateInfo(newInfo);
    }catch(err){
        setError(true);
    }  
};

    return( 
        <div>
             <h3>Search for weather</h3>
             <form onSubmit={handelSubmit}>
             <TextField id="outlined-basic" 
             label="Enter city name" 
             variant="outlined"
             value={city}
             required
             onChange={hendelInput}
             />
             <br />
             <br />
             <Button variant="contained" type="submit" >Search</Button>
             { err && <b><p style={{color:"red"}}>No such place exist !!</p></b>}
             </form>
             </div>
    )
}