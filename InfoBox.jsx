
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FlareIcon from '@mui/icons-material/Flare';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



 export default function InfoBox({info}){  
    
    let imgUrl="https://plus.unsplash.com/premium_photo-1710248799611-96aa6db855b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9nZyUyMHdlYXRoZXIlMjBwaWN8ZW58MHx8MHx8fDA%3D";

    const COLD_URL="https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const HOT_URL ="https://media.istockphoto.com/id/1322096928/photo/hot-summer-sunlight-rays-pouring-through-human-hand-hand-covering-sun-light-heat-temperature.webp?a=1&b=1&s=612x612&w=0&k=20&c=FJXHh8eOCvGTfyDBbKMgWWtE966qr3w5-rWvz7e0cO4=";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    

  return(

    <div>
        <h3>Weather Information</h3>
        
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 
          ?RAIN_URL 
          : (info.humidity > 15) 
          ? HOT_URL  
          : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           
          
          <div style={{fontSize:"10px",lineHeight:"10px"}}>
          <p><b>{info.city} {
            info.humidity >80 
            ?<ThunderstormIcon/>
            : (info.humidity > 15) 
            ? <FlareIcon/>
            : <AcUnitIcon/>} </b></p>
          <p>Humidity: {info.humidity}</p>
          <p>Temperature: {info.temp} &deg;C</p>
          <p>MinTemperature: {info.temMin} &deg;C</p>
          <p>MaxTemperature: {info.tempMax} &deg;C</p>
          <p>Weather can be described as {info.weather} and feels like {info.feelsLike}</p>
          </div>
        
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          


        </Typography>
      </CardContent>
    </Card>


    </div>
  )
}