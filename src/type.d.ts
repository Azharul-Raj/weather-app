export interface cityType{
    name:string;
    latitude:number;
    longitude:number;
    countryCode:string;
}

export interface searchDataProps{
    value:string;
    label:string;
}

export interface WeatherType{
    location:string;
    name:string;
    main:Temperature;
    weather:WeatherData;
    wind:Wind;
}

export interface ForecastType {
    city:{
        name:string;
        country:string;
    }
    list:WeatherType[]
}

type Temperature={
    temp:number;
    pressure:number;
    humidity:number;
    feels_like:number;
    temp_min:number;
    temp_max:number;
}

type Wind={
    deg:number;
    gust:number;
    speed:number;
}
type WeatherData = {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];