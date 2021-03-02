<template>
   <div>
      <table class="table table-borderless table-striped table-dark table-hover">
         <thead class="thead-dark">
            <tr>
               <th scope="col">#</th>
               <th scope="col">Id</th>
               <th scope="col">Personaje</th>
               <th scope="col">Opinión</th>
               <th scope="col">Usuario</th>
               <th scope="col"></th>
               <th scope="col"></th>
            </tr>
         </thead>
         <tbody v-for="(opinion,index) in enviarOpiniones" :key="index">
            <tr>
               <td scope="row">{{index+1}}</td>
               <td scope="row">{{opinion.id}}</td>
               <td scope="row">{{opinion.personaje}}</td>
               <td scope="row">{{opinion.opinion}}</td>
               <td scope="row">@{{opinion.nombre}}</td>
               <td scope="row"><font-awesome-icon icon="trash-alt" size="2x" @click="eliminarOpiniones(index)" /></td>
               <td scope="row"><font-awesome-icon icon="edit" size="2x" @click="editarOpiniones(index)" /></td>
            </tr>
         </tbody>
      </table>
   </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

   export default {
      name: 'ControlTable',
      computed: {
         ...mapGetters(['enviarOpiniones'])
      },
      methods: {
         ...mapActions(['eliminarOpiniones']),
         editarOpiniones(index){
            this.$router.push({name: 'editar', params: {idEdit: index+1}});
         }
      }
   }
</script>

<style scoped>

</style>