<template>
  <main>
    <Header titulo="Base de datos de los personajes"/>
    <transition name="slide-fade">
      <FichasPersonajes url="https://rickandmortyapi.com/api/character/" />
    </transition>
  </main>
</template>

<script>
import Header from '@/components/header.vue'
import FichasPersonajes from '@/components/fichasPersonajes.vue';

export default {
  name: 'Principal',
  components: {
    Header, FichasPersonajes
  },
}
</script>

<style scoped>
.hero{
  background: url('/assets/hero-bg.jpg');
  background-size: cover;
  height: 100vh;
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>