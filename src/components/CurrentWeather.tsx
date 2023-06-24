

function CurrentWeather() {
  return (
    <div className="flex justify-center items-center">
    <div className='bg-[#3BB878] w-[40%] shadow rounded-lg '>
      <div className="px-6 py-6 relative">
        <div className="flex mb-4 justify-between items-center">
          <div>
            <h5 className="mb-0 font-medium text-xl">Delhi,IN</h5>
            <h6 className="mb-0">April 04 2021</h6><small>Cloudy</small>
          </div>
          <div className="text-right">
            <h3 className="font-bold text-4xl mb-0"><span>39&deg;</span></h3>
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

export default CurrentWeather;