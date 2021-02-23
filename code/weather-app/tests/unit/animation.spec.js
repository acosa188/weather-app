import { shallowMount } from '@vue/test-utils'
import Animation from '@/components/Animation.vue'

describe('Animation.vue', ()=>{
    const wrapper = shallowMount(Animation)

    it('should be daytime', ()=>{
        expect(wrapper.vm.isDaytime(7)).toBe(true)
    })

    it('should be daytime', ()=>{
        expect(wrapper.vm.isDaytime(18)).toBe(true)
    })

    it('should be night time', ()=>{
        expect(wrapper.vm.isDaytime(19)).toBe(false)
    })

    it('should be night time', ()=>{
        expect(wrapper.vm.isDaytime(6)).toBe(false)
    })


})