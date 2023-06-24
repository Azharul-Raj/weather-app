import { useState,useEffect } from 'react';
import axios from 'axios';
import {useGeolocated} from 'react-geolocated';

import CurrentWeather from './components/CurrentWeather'
import Search from './components/Search'
import { openWeatherUrl } from './libs/apiData';
import { searchDataProps } from './type';


function App() {
  const [currentWeather,setCurrentWeather]=useState();
  const [forecast,setForecast]=useState();
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            // userDecisionTimeout: 5000,
        });
        const currentLat=coords?.latitude.toString();
        const currentLon=coords?.longitude.toString();
        console.log(currentLat,currentLon)
        const handleSearchChange=(searchData:searchDataProps)=>{
          
          // console.log(searchData)
          const [latitude,longitude]=searchData.value.split(" ");
       
    const  endPoints=
    [
      `${openWeatherUrl}weather?lat=${latitude?latitude:currentLat}&lon=${longitude?latitude:currentLon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,      
      `${openWeatherUrl}forecast?lat=${latitude?latitude:currentLat}&lon=${longitude?longitude:currentLon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,      
    ]
  
    useEffect(()=>{
      console.log(endPoints)
       const fetchWeather=async()=>{
        console.log('here')
       await axios.all(endPoints.map(url=>axios.get(url)))
        .then(res=>{
          const weatherResponse=res[0].data;
          const forecastResponse=res[1].data;
          setCurrentWeather({location:searchData.label,...weatherResponse});
          console.log(weatherResponse)
          console.log(forecastResponse)
        })
        .catch(err=>console.log(err))
       }
       fetchWeather()
     
    },[currentLat,currentLon,latitude,longitude])
  }
  //data fetch
 
  return (
    <>
    <div className="">
    <div className="px-[10%] py-2 rounded-lg">

      <Search handleSearchChange={handleSearchChange}/>
    </div>
    {currentWeather &&<CurrentWeather currentWeather={currentWeather}/>}
    {/* <CurrentWeather/> */}
    </div>
    </>
  )
}

export default App
