import { WeatherType } from "../type";
import "../App.css"

interface CurrentWeatherProps{
  currentWeather?:WeatherType
}

function CurrentWeather({currentWeather}:CurrentWeatherProps) {
  if(!currentWeather) return null

  return (
    <div className="flex justify-center items-center">
    <div className='searchedCitySky lg:w-[500px] shadow rounded-lg '>
      <div className="px-6 py-6 relative">
          <div className="flex justify-center">
            <h5 className="mb-0 font-medium text-xl text-white">{currentWeather.location}</h5>
          </div>
        <div className="flex mb-4 justify-between items-center">
          <div className="">
            <img src={`icons/${currentWeather?.weather[0]?.icon}.png`} alt="sky image" />
            <p className="text-white text-semibold">{currentWeather?.weather[0]?.main}, {currentWeather?.weather[0]?.description}</p>
          </div>
          <div className="text-right">
          <h3 className="font-bold text-4xl mb-0 text-white"><span>{currentWeather?.main.temp} &deg;C</span></h3>
          </div>
        </div>
        <div className="block sm:flex justify-between items-center flex-wrap">
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center text-white"><span>Pressure</span><small className="px-2 inline-block">{currentWeather?.main.pressure}&nbsp;&deg; mb</small></div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center text-white"><span>Feels like</span><small className="px-2 inline-block">{currentWeather?.main.feels_like}&nbsp;&deg; C</small></div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center text-white"><span>Temp min</span><small className="px-2 inline-block">{currentWeather?.main.temp_min}&nbsp;&deg; C</small></div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center text-white"><span>Temp max</span><small className="px-2 inline-block">{currentWeather?.main.temp_max}&nbsp;&deg; C</small></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CurrentWeather;