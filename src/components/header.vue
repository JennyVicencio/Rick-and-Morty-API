<template>
   <header class="hero">
      <img alt="logo" src="/assets/logo.png" style="max-width: 60%" class="logo shadowsss col-10 mt-5" />
      <h2 class="hero-title"> {{titulo}} </h2>
   </header>
</template>

<script>
   export default {
      name: 'Header',
      props: {
         titulo: String      }
   }
</script>

<style scoped>
.hero-title{
   color: antiquewhite;
   font-size: xx-large;
   text-shadow: 1px 1px 2px black, 0 0 1em rgb(245, 51, 116), 0 0 0.2em rgb(194, 28, 138);
}
</style>