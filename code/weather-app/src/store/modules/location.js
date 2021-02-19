
import locApi from '../../api/ipApi.js'

const state = () => ({
    data: null,
    city: ''
})

const getters = {}

const actions = {
    async getLocations({ commit }){
        await locApi.getLocation(loc => {
            commit('setLocation', loc)
            commit('setCity', loc.city)
        })
    }
}

const mutations = {
    setLocation(state, location){
        state.data = location
    },
    setCity(state, city){
        state.city = city
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}