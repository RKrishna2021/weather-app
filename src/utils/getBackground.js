export const getBackground = (condition) => {
  const themes = {
    Clear: 'from-orange-400 to-blue-500',
    Clouds: 'from-slate-400 to-slate-600',
    Rain: 'from-blue-700 to-slate-800',
    Drizzle: 'from-cyan-500 to-blue-600',
    Thunderstorm: 'from-gray-800 to-indigo-900',
    Snow: 'from-blue-100 to-slate-300',
    Mist: 'from-gray-300 to-gray-500',
    Default: 'from-blue-50 to-indigo-100'
  };
  return themes[condition] || themes.Default;
};
