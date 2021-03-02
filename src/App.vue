<template>
  <div id="app">
    <Navbar/>
    <transition name="slide-fade">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';


export default {
  name: 'App',
  components: { Navbar, Footer }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Langar&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color: cornsilk;
}
h1, h2, h3, h4, h5{
  font-family: 'Langar', cursive;
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
