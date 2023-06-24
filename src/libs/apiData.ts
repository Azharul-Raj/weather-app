
 export const options = {  
        headers: {
          'X-RapidAPI-Key': `${import.meta.env.VITE_GEO_CITY_KEY}`,
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
      };
      
    
export const url='https://wft-geo-db.p.rapidapi.com/v1/geo/'
export const openWeatherUrl='https://api.openweathermap.org/data/2.5/'