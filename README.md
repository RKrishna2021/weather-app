# SkyCast - Professional Weather Dashboard

SkyCast is a modern, responsive weather application built with **React**, **Vite**, and **Tailwind CSS v4**. It provides real-time weather data and a 5-day forecast using the OpenWeatherMap API.

## 🚀 Features
- **Real-time Search**: Get current weather for any city worldwide.
- **Geolocation**: One-click local weather detection using Browser API.
- **5-Day Forecast**: Detailed daily outlook with temperature and conditions.
- **Dynamic UI**: Backgrounds change dynamically based on weather conditions (Clear, Clouds, Rain, etc.).
- **Unit Toggle**: Switch between Celsius and Fahrenheit instantly.

## 🛠️ Tech Stack
- **Framework**: React (Functional Components & Hooks).
- **Styling**: Tailwind CSS v4 (Utility-first styling).
- **Build Tool**: Vite.
- **API**: OpenWeatherMap API.

## 📁 Project Structure
The project follows a modular "Separation of Concerns" architecture:
- `/components`: Reusable UI Lego bricks (SearchBar, Forecast, etc.).
- `/services`: Network logic and API configuration.
- `/utils`: Helper functions for data formatting and logic.

## 🔧 Installation & Setup
1. Clone the repo: `git clone https://github.com/YOUR_USERNAME/weather-app.git`
2. Install dependencies: `npm install`
3. Create a `.env` file and add your API Key:
   `VITE_WEATHER_API_KEY=your_key_here`
4. Start the dev server: `npm run dev`

