import { shallowMount, createLocalVue } from '@vue/test-utils'
import Background from '@/components/Background.vue'
import location from '../../src/store/modules/location'
import weather from '../../src/store/modules/weather'
import imagesJson from '../../src/data/landscape.json'

import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Background.vue', ()=>{
    let store
    let locState
    let locAction
    let weatherState
    let weatherAction
    let wrapper


    beforeEach(()=>{
        locState = {
            data: {},
            city: ''
        }

        locAction = {
            getLocations: jest.fn()
        }

        weatherState = {
            data: {},
            temperature: '',
            temp_min: '',
            temp_max: '',
            feels_like: '',
            iconUrl:'',
            description: ''
        }

        weatherAction = {
            getCurrentWeather: jest.fn()
        }

        store = new Vuex.Store({
            modules:{
                location: {
                    state: locState,
                    actions: locAction,
                    getters: location.getters,
                    namespaced: true
                },
                weather: {
                    state: weatherState,
                    actions: weatherAction,
                    getters: weather.getters,
                    namespaced: true
                }
            }
        })

        wrapper = shallowMount(Background, {
            store,
            localVue
        })
    })

    it('should return spring', ()=>{
        const expectedResult = 'spring'
        

        expect(wrapper.vm.whatSeason(3)).toMatch(expectedResult)
    })

    it('should return summer', ()=>{
        const expectedResult = 'summer'

        expect(wrapper.vm.whatSeason(7)).toMatch(expectedResult)
    })

    it('should return fall', ()=>{
        const expectedResult = 'fall'

        expect(wrapper.vm.whatSeason(11)).toMatch(expectedResult)
    })

    it('should return winter', ()=>{
        const expectedResult = 'winter'

        expect(wrapper.vm.whatSeason(2)).toMatch(expectedResult)
    })

    it('should return error message', ()=>{
        const expectedResult = 'curMonth should be a number'

        expect(wrapper.vm.whatSeason('a')).toMatch(expectedResult)
    })

    it('should belong to the choices',async () =>{
        await wrapper.setData({ images: imagesJson})
        const testArr = imagesJson.day['winter']
        const testArr1 = imagesJson.night['winter']

        expect(testArr.includes(wrapper.vm.randomBackground('winter')) || testArr1.includes(wrapper.vm.randomBackground('winter'))).toBe(true)
    })

    it('should be portrait', ()=>{
        expect(wrapper.vm.isPortrait(812, 375)).toBe(true)
    })

    it('should be landscape', ()=>{
        expect(wrapper.vm.isPortrait(375, 812)).toBe(false)
    })

    it('should be daytime', ()=>{
        expect(wrapper.vm.isNightTime(6)).toBe(false)
    })

    it('should be daytime', ()=>{
        expect(wrapper.vm.isNightTime(17)).toBe(false)
    })

    it('should be night time', ()=>{
        expect(wrapper.vm.isNightTime(18)).toBe(true)
    })

    it('should be night time', ()=>{
        expect(wrapper.vm.isNightTime(1)).toBe(true)
    })
})