<template>
    <div class="container">
       <h1 class="my-5">Personajes favoritos</h1>
        <div class="row g-0 my-3" v-if="enviarFavoritos.length > 0">
            <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3" v-for="(fav,index) in enviarFavoritos" :key="index">
                <div class="card">
                    <img :src="fav.image" class="card-img-top" :alt="fav.id">
                    <div class="card-body">
                        <h5 class="card-title">{{fav.name}}</h5>
                        <font-awesome-icon icon="trash-alt" size="2x" @click="quitardeFavoritos(index)"></font-awesome-icon>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-warning" role="alert">
               No hay favoritos para mostrar.
            </div>
        </div>
        <button type="button" class="btn btn-info m-4" @click="$router.go(-1)">Volver</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'Favoritos',
    computed: {
        ...mapGetters(['enviarFavoritos'])
    },
    methods: {
       ...mapActions(['quitardeFavoritos'])
    }
}
</script>

<style scoped>

</style>