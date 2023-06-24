import {useGeolocated} from 'react-geolocated'

import { WeatherType } from "../type";
import "../App.css"

interface CurrentWeatherProps{
  MyCityWeather?:WeatherType
}

function MyCityWeather({MyCityWeather}:CurrentWeatherProps) {
  const { isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      // userDecisionTimeout: 5000,
    });

    if(!isGeolocationEnabled){
      return (
        <div className="text-4xl font-bold">
          PLEASE ENABLE YOUR LOCATION.
        </div>
      )
    }

  return (
    <div className="flex justify-center items-center">
    <div className='weatherCard lg:w-[500px] shadow rounded-lg border bottom-2 border-gray-400'>
      <div className="px-6 py-6 relative">
          <div className="flex justify-center">
            <h5 className="mb-0 font-medium text-xl text-white">Your City  {MyCityWeather?.name}</h5>
          </div>
        <div className="flex mb-4 justify-between items-center">
          <div className="">
            <img src={`icons/${MyCityWeather?.weather[0]?.icon}.png`} alt="sky image" />
            <p className="text-white text-semibold">{MyCityWeather?.weather[0]?.main}, {MyCityWeather?.weather[0]?.description}</p>
          </div>
          <div className="text-right">
            <h3 className="font-bold text-4xl mb-0 text-white"><span>{MyCityWeather?.main.temp} &deg;C</span></h3>
          </div>
        </div>
        <div className="block sm:flex justify-between items-center flex-wrap">
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center text-white"><span>Pressure</span><small className="px-2 inline-block">{MyCityWeather?.main.pressure}&nbsp;&deg; mb</small></div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center text-white"><span>Feels like</span><small className="px-2 inline-block">{MyCityWeather?.main.feels_like}&nbsp;&deg; C</small></div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center text-white"><span>Temp min</span><small className="px-2 inline-block">{MyCityWeather?.main.temp_min}&nbsp;&deg; C</small></div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center text-white"><span>Temp max</span><small className="px-2 inline-block">{MyCityWeather?.main.temp_max}&nbsp;&deg; C</small></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MyCityWeather;