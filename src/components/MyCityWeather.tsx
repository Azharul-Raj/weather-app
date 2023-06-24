import { currentWeatherType } from "../type";

interface CurrentWeatherProps{
  MyCityWeather?:currentWeatherType
}

function MyCityWeather({MyCityWeather}:CurrentWeatherProps) {
  console.log(MyCityWeather?.weather[0].icon)

  return (
    <div className="flex justify-center items-center">
    <div className='bg-[#3BB878] lg:w-[500px] shadow rounded-lg '>
      <div className="px-6 py-6 relative">
          <div className="flex justify-center">
            <h5 className="mb-0 font-medium text-xl text-white">Your City  {MyCityWeather?.name}</h5>
          </div>
        <div className="flex mb-4 justify-between items-center">
          <div className="">
            <img src={`icons/${MyCityWeather?.weather[0]?.icon}.png`} alt="sky image" />

          </div>
          <div className="text-right">
            <h3 className="font-bold text-4xl mb-0"><span>39&deg;</span></h3>
          </div>
          <div className="">

          </div>
        </div>
        <div className="block sm:flex justify-between items-center flex-wrap">
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center"><span>Temp</span><small className="px-2 inline-block">39.11&nbsp;&deg;</small></div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center"><span>Feels like</span><small className="px-2 inline-block">33.33&nbsp;&deg;</small></div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center"><span>Temp min</span><small className="px-2 inline-block">24.9&nbsp;&deg;</small></div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center"><span>Temp max</span><small className="px-2 inline-block">39&nbsp;&deg;</small></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MyCityWeather;