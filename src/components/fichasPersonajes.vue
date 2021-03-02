<template>
   <section id="ficha-personajes" class="container mb-4 mx-auto">
      <h1 class="my-5">Ficha de Personajes</h1>
      <p>Mostrando 20 personajes:</p>
      <div class="card-columns mb-5">
        <div class="card h-100 border-warning mx-auto my-2" style="max-width: 18rem;" v-for="(personaje, index) in enviarFicha" :key="index">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" style="max-height: 12rem;">
              <img :src="personaje.image" class="card-img" :alt="personaje.id">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <div class="card-body">
                <h5 class="card-title"> {{ personaje.name }} </h5>
                  <div class="row justify-content-center">   
                     <button type="button" class="btn btn-sm btn-info mx-1" data-toggle="modal" :data-target="['#personaje'+personaje.id]"><font-awesome-icon icon="eye" size="lg" data-toggle="tooltip" data-placement="bottom" title="Ver la información del personaje" /></button>
                     <button type="button" class="btn btn-sm btn-success mx-1" data-toggle="modal" :data-target="['#opinion-p'+personaje.id]"><font-awesome-icon icon="pen" size="lg" data-toggle="tooltip" data-placement="bottom" title="Escribir una opinión" /></button>
                     <span class="fav-star" style="color: gold"><font-awesome-icon :icon="[!personaje.favorito ? 'far' : 'fas','star']" size="2x" @click="[!personaje.favorito ? agregaraFavoritos(personaje) : quitardeFavoritos(personaje)]"/></span>
                  </div>
              </div>
            </div>
          </div>
          <!--------- modal ver info --------->
              <div class="modal fade" :id="['personaje'+personaje.id]" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel"> {{ personaje.name }} </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    <!-- ficha completa -->
                      <div class="card ficha-completa my-3" style="max-width: 800px;">
                        <div class="row">
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <img :src="personaje.image" class="card-img" :alt="personaje.id">
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div class="card-body text-left">         
                              <p class="card-text"><strong>Especie:</strong> {{ personaje.species }}</p>
                              <p class="card-text"><strong>Sexo:</strong>  {{ personaje.gender }}</p>
                              <p class="card-text"><strong>Creado:</strong>  {{ personaje.created }}</p>
                              <p class="card-text"><strong>Origen:</strong>  {{ personaje.origin.name }}</p>
                              <p class="card-text"><strong>Ubicación:</strong>  {{ personaje.location.name }}</p>
                              <p class="card-text"><strong>Estado:</strong>  {{ personaje.status }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>  
              </div>
          <!--------- modal opinión --------->
              <div class="modal fade" :id="['opinion-p'+personaje.id]" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Nueva opinión sobre {{personaje.name}}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body text-left">
                      <form @submit.prevent="formularioOpinion(personaje)">
                        <div class="form-group">
                          <label for="recipient-name" class="col-form-label">Tu nombre:</label>
                          <input type="text" class="form-control" id="recipient-name" v-model="nombre">
                        </div>
                        <div class="form-group">
                          <label for="message-text" class="col-form-label">Tu opinión:</label>
                          <textarea class="form-control" :id="['message-text'+personaje.id]" v-model="opinion"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                      <button type="submit" class="btn btn-success" data-dismiss="modal" @click="formularioOpinion(personaje)">Enviar opinión</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
      <!--------- paginación de personajes x20 --------->
      <p>Selecciona número de página:</p>
      <div aria-label="Page navigation container mx-0 my-5">
         <ul class="pagination pagination-lg justify-content-center row">
            <li class="page-item" v-for="n in enviarPaginasAPI" :key="n" >
               <a class="page-link" @click="llamarPaginas(n)">{{n}}</a>
            </li>
         </ul>
      </div>
    </section>
</template>

<script>
import Swal from 'sweetalert2';
import { mapGetters, mapActions } from "vuex";

export default {
   name: 'FichasPersonajes',
   props: {
      url: String,
   },
   data() {
      return {
         nombre: '',
         opinion: '',
      }
   },
   computed: {
   ...mapGetters(['enviarFicha','enviarPaginasAPI']),
   },
   methods: {
      ...mapActions(['agregaraFavoritos','quitardeFavoritos']),
      formularioOpinion(personajeinfo) {
        if(personajeinfo && this.nombre && this.opinion){
          let nuevaOpinion = {
              id: personajeinfo.id,
              personaje: personajeinfo.name,
              nombre: this.nombre,
              opinion: this.opinion,
              }
          this.$store.dispatch('agregaraOpiniones',nuevaOpinion);
          this.nombre = '';
          this.opinion = '';
         }
         else {
           Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'No has ingresado todos los datos.',
                showConfirmButton: false,
                timer: 1000
            })
         }
      },
      llamarPaginas(n){
        let urlPaginas = this.url+"?page="+n;
        console.log(urlPaginas);
        this.$store.dispatch('consumirAPI', urlPaginas)
      }
   },
   created() {
      this.$store.dispatch('consumirAPI', this.url)
   },
}
</script>

<style scoped>
.card-img{
   object-position: center;
   object-fit: cover;
   height: 100%;
   width: 100%;
}
.card-img:hover{
   opacity: 0.8;
}
.modal-title{
  font-size: 2em;
}
.ficha-completa .card-text{
  font-size: large;
}
</style>