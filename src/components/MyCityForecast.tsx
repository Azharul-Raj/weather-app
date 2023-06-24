import { ForecastType} from "../type";
import Accordion from "./accrodion/Accordion";

interface MyCityForecastProps{
    data:ForecastType|undefined
}

const WeekDays=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

function MyCityForecast({data}:MyCityForecastProps) {
    
    return (
        <div className='w-[500px] my-2'>
            {
                data?.list.slice(0,7).map((weather,idx)=><Accordion key={idx} weather={weather}/>)
            }
        </div>
    )
}

export default MyCityForecast;