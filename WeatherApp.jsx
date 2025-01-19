import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import PlaceIcon from '@mui/icons-material/Place';
import "./WeatherApp.css"

export default function WeatherApp() {
    const [weatherinfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 23.82,
        humidity: 50,
        temp: 24.05,
        tempMax: 24.05,
        tempMin: 24.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign:"center"}}>
            <div className="header">
                <div><h2>Weather Finder</h2></div>
                <div className="placeicon"><PlaceIcon/></div>            
            </div>            
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo} />
        </div>
    );
}