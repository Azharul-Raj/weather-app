import { useState } from 'react'
import { WeatherType } from '../../type';
import "../../App.css"

interface AccordionProps{
  id:number;
  weather:WeatherType
}

const WeekDays=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const today=new Date().getDay();
const restWeekDays=WeekDays.slice(today,WeekDays.length).concat(WeekDays.slice(0,today))

function Accordion({weather,id}:AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className="rounded-t-lg border border-neutral-200 accordionBackground my-2">
          <div 
          onClick={()=>setIsOpen(!isOpen)}
          className="flex justify-between items-center cursor-pointer">
            <div className="flex items-center">
            <img className='w-12' src={`icons/${weather.weather[0].icon}.png`} alt="image" />
            <p className='ml-2 font-semibold'>{restWeekDays[id]}</p>
            </div>
            <div className="flex items-center px-2">
              <p className='text-sm mr-2'>{weather.weather[0].description}</p>
              <span className='text-neutral-200 text-sm'>{Math.floor(weather.main.temp_min)} °C / {Math.floor(weather.main.temp_max)} °C</span>
            </div>
          {/* <span
            className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none fill-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span> */}
        </div>
      <div className='transition'>
        {isOpen && <div className="px-5 py-4 transition-all">
         <div className="block sm:flex justify-between items-center flex-wrap">
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center text-white"><span>Pressure</span><small className="px-2 inline-block">{weather?.main.pressure}&nbsp;&deg; mb</small></div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center text-white"><span>Feels like</span><small className="px-2 inline-block">{weather?.main.feels_like}&nbsp;&deg; C</small></div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center text-white"><span>Temp min</span><small className="px-2 inline-block">{weather?.main.temp_min}&nbsp;&deg; C</small></div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex mb-2 justify-between items-center text-white"><span>Temp max</span><small className="px-2 inline-block">{weather?.main.temp_max}&nbsp;&deg; C</small></div>
          </div>
        </div>
        </div>}
      </div>
    </div>
  )
}

export default Accordion;