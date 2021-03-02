<template>
   <div class="container">
    <h2 class="my-5">Edición opinión de: {{nombrePersonaje}}</h2>
        <form @submit.prevent="guardarEdicion" class="m-3">
            <div class="mb-3 text-left">
                <label for="nombre" class="form-label">Nombre usuario</label>
                <input type="text" class="form-control" v-model="nombreUsuario">
            </div>
            <div class="mb-3 text-left">
                <label for="opinion" class="form-label">Opinión</label>
                <input type="text" class="form-control" v-model="opinionUsuario">
            </div>
            <button type="submit" class="btn btn-success">Guardar</button>
            <button type="button" class="btn btn-info mx-4" @click="$router.go(-1)">Volver a Administración</button>
        </form>
   </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: 'editar',
    data() {
        return {
            idPersonaje: '',
            nombrePersonaje: '',
            nombreUsuario: '',
            opinionUsuario: '',
        }
    },
    props: {
        idEdit: { // envía el index+1 del dato de opinion, posición
            type: Number,
            required: true
        }
    },
    mounted() {
        let op = this.$store.getters.enviarOpiniones;
        op.forEach((element, index) => { // buscando el index que sea igual al de la opinión consultada
            if(index == this.idEdit-1){ // si la posición consultada coincide en el array
                console.log("Coincide array");
                this.idPersonaje = element.id;
                this.nombrePersonaje = element.personaje;
                this.nombreUsuario = element.nombre;
                this.opinionUsuario = element.opinion;
            }
        });
    },
    methods: {
        guardarEdicion(){
            if(this.nombreUsuario && this.opinionUsuario && this.nombreUsuario){
                let formulario = {
                    id: this.idPersonaje,
                    personaje: this.nombrePersonaje,
                    nombre: this.nombreUsuario,
                    opinion: this.opinionUsuario,
                    posicion: this.idEdit-1, //copio en index
                }
                this.$store.dispatch('guardarOpinionEditada', formulario)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Cambios guardados',
                    showConfirmButton: false,
                    timer: 1000
                }).then(()=>{
                    this.$router.push({name: 'Admin'});
                })
            }
        }
    },
   }
</script>