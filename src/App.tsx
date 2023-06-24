import { useState, useEffect } from 'react';
import axios from 'axios';
import { useGeolocated } from 'react-geolocated';

import CurrentWeather from './components/CurrentWeather'
import Search from './components/Search'
import { openWeatherUrl } from './libs/apiData';
import { searchDataProps } from './type';
import useStore from './hooks/useStore';
import MyCityWeather from './components/MyCityWeather';


function App() {
  const [currentWeather, setCurrentWeather] = useState();
  const [myCityWeather,setMyCityWeather]=useState()
  const searchData = useStore((state) => state.searchData);
  const [forecast, setForecast] = useState();
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      // userDecisionTimeout: 5000,
    });
  const currentLat = coords?.latitude.toString();
  const currentLon = coords?.longitude.toString();
  const endPoints =
    [
      `${openWeatherUrl}weather?lat=${currentLat}&lon=${currentLon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
      `${openWeatherUrl}forecast?lat=${currentLat}&lon=${currentLon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
    ]
  useEffect(() => {
    const fetchWeather = async () => {
      await axios.all(endPoints.map(url => axios.get(url)))
        .then(res => {
          const weatherResponse = res[0].data;
          const forecastResponse = res[1].data;
          setMyCityWeather(weatherResponse);
          console.log(weatherResponse)
          console.log(forecastResponse)
        })
        .catch(err => console.log(err))
    }
    fetchWeather()

  }, [currentLat, currentLon])
  console.log(currentLat, currentLon)
  const handleSearchChange = (searchData: searchDataProps) => {

    // console.log(searchData)
    const [latitude, longitude] = searchData.value.split(" ");

    const endPoints =
      [
        `${openWeatherUrl}weather?lat=${latitude ? latitude : currentLat}&lon=${longitude ? latitude : currentLon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
        `${openWeatherUrl}forecast?lat=${latitude ? latitude : currentLat}&lon=${longitude ? longitude : currentLon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
      ]

    axios.all(endPoints.map(url => axios.get(url)))
      .then(res => {
        const weatherResponse = res[0].data;
        const forecastResponse = res[1].data;
        setCurrentWeather({ location: searchData.label, ...weatherResponse });
        console.log(weatherResponse)
        console.log(forecastResponse)
      })
      .catch(err => console.log(err))
  }
  //data fetch

  return (
    <>
      <div className="">
        <div className="px-[10%] py-2 rounded-lg">

          <Search handleSearchChange={handleSearchChange} />
        </div>
        <div className="flex justify-between px-[5%]">

        {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
        <MyCityWeather MyCityWeather={myCityWeather}/>
        </div>
      </div>
    </>
  )
}

export default App
