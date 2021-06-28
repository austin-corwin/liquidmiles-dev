<template>
  <header class="header">
    <div class="logo">
      <img
        class="header-logo img img-fluid"
        src="../assets/images/lm-logo.png"
        alt="logo"
      />
      <div class="header-container">
        <h1 class="nav-header">Liquid Miles</h1>
      </div>
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
<script>
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.header')
  window.scrollY > 250 ? nav.classList.add('sticky') : console.log('not')
})
</script>

<style scoped>
* {
  font-family: 'Poppins-Black', serif;
  color: black;
}
.header-logo {
  width: 3rem;
  margin: 0;
}
.nav-header {
  width: 50%;
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
.header.sticky {
  position: fixed;
  z-index: 100;
  width: 100%;
}
@media only screen and (max-width: 583px) {
  .header-logo {
    width: 5rem;
  }
  .header-container {
    display: none;
  }
}
</style>
