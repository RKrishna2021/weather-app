const CurrentWeather = ({ data }) => {
  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white w-full max-w-md text-center">
      <h2 className="text-3xl font-bold text-slate-800">{name}</h2>
      <img src={iconUrl} alt={weather[0].description} className="w-32 h-32 mx-auto" />
      <div className="mb-4">
        <span className="text-6xl font-extrabold text-slate-900">{Math.round(main.temp)}°C</span>
        <p className="text-xl text-slate-500 capitalize font-medium">{weather[0].description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
        <div className="text-left">
          <p className="text-slate-400 text-sm">Humidity</p>
          <p className="font-bold text-slate-700">{main.humidity}%</p>
        </div>
        <div className="text-right">
          <p className="text-slate-400 text-sm">Wind Speed</p>
          <p className="font-bold text-slate-700">{wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
