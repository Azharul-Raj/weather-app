import { ForecastType} from "../type";
import Accordion from "./accrodion/Accordion";

interface MyCityForecastProps{
    data:ForecastType|undefined
}


function MyCityForecast({data}:MyCityForecastProps) {
    
    return (
        <div className='w-[500px]'>
            {
                data?.list.slice(0,7).map((weather,idx)=><Accordion key={idx} id={idx} weather={weather}/>)
            }
        </div>
    )
}

export default MyCityForecast;