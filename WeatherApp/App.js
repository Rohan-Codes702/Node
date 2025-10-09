import readline from 'readline/promises';

const apikey = "a61f1c5b7f1e48e2af62ac63d2e8ffa3";
const Baseurl = "https://api.openweathermap.org/data/2.5/weather";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getWeather = async (city) => {
  const url = `${Baseurl}?q=${city}&appid=${apikey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const weatherData = await response.json();

    console.log('\n🌦️ Weather Information:');
    console.log(`🏙️ City: ${weatherData.name}`);
    console.log(`🌡️ Temperature: ${weatherData.main.temp}°C`);
    console.log(`🌥️ Description: ${weatherData.weather[0].description}`);
    console.log(`💧 Humidity: ${weatherData.main.humidity}%`);
    console.log(`💨 Wind Speed: ${weatherData.wind.speed} m/s`);

  } catch (error) {
    console.error("❌ Error:", error.message);
  }
};

const city = await rl.question("Enter a city name to get the weather: ");
await getWeather(city);
rl.close();
