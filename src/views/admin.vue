<template>
   <div id="AdminControls" class="container">
      <h1 class="my-5">Administrador de contenidos</h1>
      <div v-if="enviarOpiniones.length > 0">
         <ControlTable />
      </div>
      <div v-else>
         <div class="alert alert-info" role="alert">
            Aún no hay contenido para administrar.
         </div>
      </div>
      <button type="button" class="btn btn-info m-4" @click="$router.go(-1)">Volver</button>
   </div>
</template>

<script>
import { mapGetters } from "vuex";
import ControlTable from '@/components/controlTable.vue'

   export default {
      name: 'Admin',
      components: { ControlTable },
      computed: {
      ...mapGetters(['enviarOpiniones'])
      },
   }
</script>

<style scoped>

</style>