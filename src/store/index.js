import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fichasPersonajes: [],
    paginasAPI: null,
    favoritos: [],
    opiniones: []
  },
  getters: {
    enviarFicha(state){
      return state.fichasPersonajes;
    },
    enviarFavoritos(state){
      return state.favoritos;
    },
    enviarOpiniones(state){
      return state.opiniones;
    },
    enviarPaginasAPI(state){
      return state.paginasAPI;
    }
  },
  mutations: {
    crearFichas(state, data){
      for (let i = 0; i < data.length; i++) {
        data[i].favorito = false; //agrega propiedad de favorito
      }
      state.fichasPersonajes = data;
    },
    agregarFavorito(state, character){
      state.fichasPersonajes.find(result => {
        if(result.name == character.name){ // si encuentra el mismo personaje...
          let favorited = result; // crea un arreglo de favoritos
          favorited.favorito =! favorited.favorito;  // y cambia valor boleano
          state.favoritos.push(favorited); // guarda en arreglo favoritos
        }
        else{
          console.log("No encontró el personaje.");
          state.fichasPersonajes.favorito =! state.fichasPersonajes.favorito;
        }
      });
      console.log(state.favoritos); // viendo favoritos
    },
    quitarFavorito(state, index){
      state.favoritos.splice(index,1);
      console.log(state.favoritos); // viendo favoritos
    },
    agregarOpinion(state, opinion){
      state.opiniones.push(opinion);
      console.log(state.opiniones); // viendo opiniones
    },
    eliminarOpinion(state, index){
      state.opiniones.splice(index,1); 
      console.log(state.opiniones); // viendo opiniones
    },
    editarOpinion(state, form){
      state.opiniones.forEach((element, index) => { //editando opinion según posición en el arreglo
        if(index == form.posicion){
          console.log("Index encontrado.");
          state.opiniones[index].id = form.id;
          state.opiniones[index].personaje = form.personaje;
          state.opiniones[index].nombre = form.nombre;
          state.opiniones[index].opinion = form.opinion;
        }
        else{
          console.log("Index no encontrado.");
        }
      })
    },
    recibirPaginasAPI(state, pags){
      state.paginasAPI = pags;
    },
  },
  actions: {
    async consumirAPI({commit}, url){
      try {
        let resp = await fetch(url)
        let data = await resp.json();
        commit('crearFichas', data.results);
        commit('recibirPaginasAPI', data.info.pages);
        console.log(data.info.pages)
        console.log(data.results)
      } catch (error) {
        console.error(error);
      }
    },
    agregaraFavoritos({commit}, index){
      commit('agregarFavorito', index)
    },
    quitardeFavoritos({commit}, index){
      commit('quitarFavorito', index);
    },
    agregaraOpiniones({commit}, opinion){
      commit('agregarOpinion', opinion)
    },
    eliminarOpiniones({commit}, index){
      commit('eliminarOpinion', index)
    },
    guardarOpinionEditada({commit}, op){
      commit('editarOpinion', op)
    },
  }
})
