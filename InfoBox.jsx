import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INIT_URL = 
    "https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c2t5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL  = 
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const COLD_URL = 
    "https://images.unsplash.com/photo-1663595815230-10c174e012c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvZ2clMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const RAIN_URL = 
    "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return(
        <div className="InfoBox">

            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                     sx={{ height: 140 }}
                     image={info.humidity > 80 
                        ? RAIN_URL 
                        : info.temp > 15 
                        ? HOT_URL
                        : COLD_URL}
                     title="green iguana"
                    />
                   <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                          {info.city}&nbsp;&nbsp;{info.humidity > 80 
                         ? <ThunderstormIcon/>
                         : info.temp > 15 
                         ? <WbSunnyIcon/>  
                         : <AcUnitIcon/> }
                       </Typography>
                       <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                           <p>Temperature = {info.temp}&deg;C</p>
                           <p>Humidity = {info.humidity}</p>
                           <p>Min Temp = {info.tempMin}&deg;C</p>
                           <p>Max Temp = {info.tempMax}&deg;C</p>
                           <p>The Weather can be described as <i> {info.weather} </i>and Weather Feels Like = {info.feelsLike}&deg;C</p>
                       </Typography>
                   </CardContent>
               </Card>
           </div>
       </div>
    );
}