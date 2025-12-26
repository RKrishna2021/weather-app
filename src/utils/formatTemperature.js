export const formatTemperature = (temp, units = 'metric') => {
  if (units === 'imperial') {
    return Math.round(temp * 9/5 + 32) + '°F';
  }
  return Math.round(temp) + '°C';
};

