<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-warning">
      <a class="navbar-brand" href="#"><img src="/assets/Rick-And-Morty-Profile.png" alt="RM-Profile" style="height: 45px"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
         <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
               <router-link to="/" class="nav-link">Inicio<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
               <router-link to="/opiniones" class="nav-link">Opiniones</router-link>
            </li>
            <li class="nav-item">
               <router-link to="/favoritos" class="nav-link">Favoritos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin" class="nav-link">Administración</router-link>
            </li>
         </ul>
         <span class="navbar-text">
            Base de datos de los personajes de Rick & Morty
         </span>
      </div>
   </nav>
</template>

<script>
   export default {
      name: 'Navbar'
   }
</script>

<style>
.navbar-brand img:hover{
   opacity: 0.6;
}
</style>