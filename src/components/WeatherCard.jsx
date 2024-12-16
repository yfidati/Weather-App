function WeatherCard({ weather }) {
    const { name, main, weather: weatherDetails } = weather;
  
    return (
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md text-center w-80">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-lg">{weatherDetails[0].description}</p>
        <p className="text-4xl font-bold my-4">{main.temp}°C</p>
        <div className="flex justify-around">
          <p>
            <span className="font-bold">Humidity:</span> {main.humidity}%
          </p>
          <p>
            <span className="font-bold">Pressure:</span> {main.pressure} hPa
          </p>
        </div>
      </div>
    );
  }
  
  export default WeatherCard;
  