
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather'
import Search from './components/Search'
import { openWeatherUrl } from './libs/apiData';
import { useState } from 'react';
import { searchDataProps } from './type';


function App() {
  const [weather,setWeather]=useState();
  const [forecast,setForecast]=useState();
  const handleSearchChange=(searchData:searchDataProps)=>{

    // console.log(searchData)
    const [latitude,longitude]=searchData.value.split(" ");
    console.log(latitude,longitude)
    const endPoints=
    [
      `${openWeatherUrl}weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,      
      `${openWeatherUrl}forecast?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,      
    ]
    axios.all(endPoints.map(url=>axios.get(url)))
    .then(res=>{
      const weatherResponse=res[0];
      const forecastResponse=res[1];
      console.log(weatherResponse)
      console.log(forecastResponse)
    })
    .catch(err=>console.log(err))
  }
  //data fetch
 
  return (
    <>
    <div className="">
    <div className="px-[10%] py-2 rounded-lg">

      <Search handleSearchChange={handleSearchChange}/>
    </div>
    <CurrentWeather/>
    </div>
    </>
  )
}

export default App
