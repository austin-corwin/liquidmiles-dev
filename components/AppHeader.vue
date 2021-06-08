<template>
  <header class="header">
    <div class="logo">
      <!-- <img class="header-logo" src="../assets/images/liquidmiles-logo.png" /> -->
      <h1>Liquid Miles</h1>
    </div>
    <ul>
      <li>
        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#about" class="nav-link">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#contact" class="nav-link">Contact</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
* {
  font-family: 'Poppins-Black', serif;
  color: black;
}
.header-logo {
  width: 5%;
  margin: 0;
}
ul {
  list-style-type: none;
  margin-bottom: 0 !important;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-link {
  font-family: 'Poppins-Black', serif;
  color: black;
}
.nav-link:hover {
  color: yellow;
}
.logo {
  display: flex;
  align-items: center;
}
</style>
