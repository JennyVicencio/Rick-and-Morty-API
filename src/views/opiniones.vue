<template>
   <div class="container">
      <h1 class="my-5">Opiniones sobre los personajes</h1>
      <div class="accordion mb-4" id="accordionExample" v-if="enviarOpiniones.length > 0">
         <div class="card" v-for="(opinion,index) in enviarOpiniones" :key="index">
            <div class="card-header" id="headingOne">
               <h2 class="mb-0">
               <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="['#opinion'+index]" aria-expanded="true" aria-controls="collapseOne">
                  {{opinion.personaje}} por {{opinion.nombre}}
               </button>
               </h2>
            </div>

            <div :id="['opinion'+index]" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
               <div class="card-body">
                  "{{opinion.opinion}}"
               </div>
            </div>
         </div>
         <button type="button" class="btn btn-info m-4" @click="$router.go(-1)">Volver</button>
      </div>
      <div v-else>
         <div class="alert alert-secondary" role="alert">
            No hay opiniones para mostrar.
         </div>
         <button type="button" class="btn btn-info m-4" @click="$router.go(-1)">Volver</button>
      </div>
   </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
   name: 'Opiniones',
   computed: {
      ...mapGetters(['enviarOpiniones'])
   },
}
</script>

<style scoped>

</style>