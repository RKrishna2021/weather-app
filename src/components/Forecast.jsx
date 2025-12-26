const Forecast = ({ data }) => {
  const dailyData = data.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="mt-10 w-full animate-fade-in">
      <h3 className="text-xl font-bold text-slate-800 mb-4 px-2">5-Day Outlook</h3>
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {dailyData.map((day, index) => (
          <div 
            key={index} 
            className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white shadow-sm flex flex-col items-center min-w-[110px] flex-1"
          >
            <p className="text-xs font-bold text-slate-400 uppercase">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <img 
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
              alt="weather icon" 
              className="w-12 h-12"
            />
            <p className="text-lg font-black text-slate-800">{Math.round(day.main.temp)}°</p>
            <p className="text-[10px] text-slate-500 capitalize">{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;