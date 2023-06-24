import { ForecastType} from "../type";
import Accordion from "./accrodion/Accordion";

interface MyCityForecastProps{
    data:ForecastType|undefined
}


function SearchedCityForecast({data}:MyCityForecastProps) {
    console.log(data)
    return (
        <div className='w-[500px]'>
            {
                data?.list?.slice(0,7).map((weather,idx)=><Accordion key={idx} id={idx} weather={weather}/>)
            }
        </div>
    )
}

export default SearchedCityForecast;