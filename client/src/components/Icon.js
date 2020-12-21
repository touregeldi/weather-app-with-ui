import React from 'react'
import { WiRain,WiFog, WiDayCloudy, WiNightCloudy, WiDaySunny, WiNightClear, WiSnow, WiCloudy } from "weather-icons-react";

function Icon(props) {
    const desc = props.description
    const day = props.is_day

    console.log(desc, day);
    if(desc.includes('Rain') || desc.includes('Drizzle')){
        
        return (
            <div>
                <WiRain size={92} color="#fff" />
            </div>
        )
    }else if(desc.includes('Mist') || desc.includes('Fog') || desc.includes('Haze')){
        
        return (
            <div>
                <WiFog size={92} color="#fff" />
            </div>
        )
    }else if(desc.includes('Partly cloudy') && day==='yes'){
        
        return (
            <div>
                <WiDayCloudy size={92} color="#fff" />
            </div>
        )
    }else if(desc.includes('Partly cloudy') && day==='no'){
        
        return (
            <div>
                <WiNightCloudy size={92} color="#fff" />
            </div>
        )
    }else if((desc.includes('Clear') && day==='yes')|| desc.includes('Sunny')){
        
        return (
            <div>
                <WiDaySunny size={92} color="#fff" />
            </div>
        )
    }else if(desc.includes('Clear') && day==='no'){
        
        return (
            <div>
                <WiNightClear size={92} color="#fff" />
            </div>
        )
    }else if(desc.includes('Snow')){
        
        return (
            <div>
                <WiSnow size={92} color="#fff" />
            </div>
        )
    }else if(desc.includes('Overcast')){
        return (
            <div>
                <WiCloudy size={92} color="#fff" />
            </div>
        )
    }else{
        return(
            <div>
                <p>Not Found</p>
            </div>
        )
    }

    
}



export default Icon

