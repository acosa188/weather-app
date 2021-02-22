import axios from 'axios';

async function getWeather(city, callback){
    await axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.VUE_APP_WEATHER_KEY}&units=metric`)
        .then((r) => {
            callback(r.data);
        })
        .catch((e) => {
            return e;
        });
}

export default {
    getWeather
}
