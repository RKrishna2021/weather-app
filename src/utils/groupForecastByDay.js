export const groupForecastByDay = (list) => {
  const daily = {};
  list.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString('en-US');
    if (!daily[date]) daily[date] = [];
    daily[date].push(item);
  });
  return Object.values(daily).map(day => day[0]); // pick first item of each day
};

