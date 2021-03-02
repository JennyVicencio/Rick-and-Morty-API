import { shallowMount } from '@vue/test-utils';
import Header from '@/components/header.vue';

describe('Prueba header', () => {
    it('que contenga título, logo (clase y src)', () => {
        const wrapper = shallowMount(Header, {
        propsData: { 
           titulo: "Base de datos de los personajes"
        }
    })
    let logo = wrapper.find('img')
    expect(logo.classes('logo')).toBe(true)
    expect(logo.attributes('src')).toBe("/assets/logo.png")
    expect(wrapper.props('titulo')).toBe("Base de datos de los personajes")
    })
})