import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store/index';

describe('Prueba al Store', () => {
   beforeAll(() =>{ //para ejecutar todo el testing de una vez
      Vue.use(Vuex);
      store = new Vuex.Store(store);
      console.log(store);
   })
});


describe('Prueba Store', () => {
  it('Test action/mutation de agregar Opiniones', () => {
     let opinion = {
        id: 1, nombre: 'Jerry Smith', opinion: 'Me da mucha penita este personaje :C'
     }
     store.dispatch('agregaraOpiniones', opinion)
     let opiniones = store.getters.enviarOpiniones;
     expect(opiniones).toStrictEqual([
        {id: 1, nombre: 'Jerry Smith', opinion: 'Me da mucha penita este personaje :C'}
     ])
     expect(opiniones.length).toBe(1)
  })
})

