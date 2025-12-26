import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { fetchWeather } from './services/weatherApi';
import { getBackground } from './utils/getBackground';

function App() {
  const [data, setData] = useState(null);
  const [units, setUnits] = useState('metric');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchWeather({ ...params, units });
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Refetch when units change
  useEffect(() => {
    if (data && data.current?.name) {
      loadData({ city: data.current.name });
    }
  }, [units]);

  // Autoload current location on first render
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => loadData({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        () => setError("Location access denied.")
      );
    }
  }, []);

  const bgClass = data ? getBackground(data.current.weather[0]?.main) : 'from-blue-50 to-indigo-100';

  return (
    <div className={`min-h-screen transition-colors duration-1000 bg-gradient-to-br ${bgClass} p-6 flex flex-col items-center`}>
      <div className="w-full max-w-2xl">
        <header className="flex justify-between items-center mb-10">
          <h1 className={`text-4xl font-black ${data ? 'text-white' : 'text-slate-800'}`}>SkyCast</h1>
          <div className="flex gap-2">
            <button 
              onClick={() => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                    (pos) => loadData({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
                    () => setError("Location access denied.")
                  );
                }
              }}
              className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition"
              title="Current Location"
            >
              📍
            </button>
            <button 
              onClick={() => setUnits(units === 'metric' ? 'imperial' : 'metric')}
              className="px-3 py-1 bg-white/20 text-white rounded-lg font-bold"
            >
              °{units === 'metric' ? 'C' : 'F'}
            </button>
          </div>
        </header>

        <SearchBar onSearch={(city) => loadData({ city })} />

        <main>
          {loading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {data && !loading && (
            <div className="animate-in fade-in zoom-in duration-500">
              <CurrentWeather data={data.current} />
              <Forecast data={data.forecast} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
