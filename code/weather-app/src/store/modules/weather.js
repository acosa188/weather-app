
import weatherApi from '../../api/weatherApi.js'

const state = () => ({
    data: null,
    temperature: '',
    temp_min: '',
    temp_max: '',
    feels_like: '',
    iconUrl:'',
    description: ''
})

const getters = {}

const actions = {
    async getCurrentWeather({ commit }, city){
        await weatherApi.getWeather(city, weather => {
            commit('setCurrentWeather', weather)
            commit('setTemperature', weather.main.temp)
            commit('setTempMin', weather.main.temp_min)
            commit('setTempMax', weather.main.temp_max)
            commit('setFeelsLike', weather.main.feels_like)
            commit('setDescription', weather.weather[0].description)
            commit('setIconUrl', weather.weather[0].icon)
        })
    }
}

const mutations = {
    setCurrentWeather(state, weather){
        state.data = weather
    },
    setTemperature(state, temperature){
        state.temperature = temperature
    },
    setTempMin(state, minTemp){
        state.temp_min = minTemp
    },
    setTempMax(state, maxTemp){
        state.temp_max = maxTemp
    },
    setFeelsLike(state, feelsLike){
        state.feels_like = feelsLike
    },
    setIconUrl(state, url){
        state.iconUrl = `http://openweathermap.org/img/wn/${url}@4x.png`
    },
    setDescription(state, desc){
        state.description = desc
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}