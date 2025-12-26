const ForecastCard = ({ day }) => {
  const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
  const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

  return (
    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white flex flex-col items-center min-w-[100px]">
      <p className="text-slate-500 font-bold uppercase text-xs tracking-wider">{date}</p>
      <img src={iconUrl} alt="weather" className="w-12 h-12" />
      <p className="text-xl font-black text-slate-800">{Math.round(day.main.temp)}°</p>
    </div>
  );
};

export default ForecastCard;
