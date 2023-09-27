<template>
  <header class="header">
    <div class="logo">
      <nuxt-link to="/" class="image-home-link">
        <img
          class="header-logo img img-fluid"
          src="../assets/images/lm-logo.png"
          alt="logo"
        />
      </nuxt-link>
      <div class="header-container">
        <nuxt-link to="/" class="home-link">
          <h1 class="nav-header">Liquid Miles</h1>
        </nuxt-link>
      </div>
    </div>
    <ul>
      <li>
        <nuxt-link to="/about" class="nav-link">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/rules" class="nav-link">Rules</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/faqs" class="nav-link">FAQs</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
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
  width: 3rem;
  margin: 0;
  margin-left: 1rem;
  margin-right: 1rem;
}
.nav-header {
  width: 100%;
  margin-bottom: 0;
  margin-left: 10px;
}
.nav-header:hover {
  color: white;
}
.home-link:hover {
  color: white;
  text-decoration: none;
}

ul {
  list-style-type: none;
  margin-bottom: 0 !important;
  padding-left: 0;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-link {
  font-family: 'Poppins-Black', serif;
  color: black;
  padding: 0.5rem;
}
.nav-link:hover {
  color: #ffff;
}
.logo {
  display: flex;
  align-items: center;
  width: 60%;
}
.header {
  position: fixed;
  z-index: 100;
  width: 100%;
}
@media only screen and (max-width: 583px) {
  .header-logo {
    width: 3rem;
  }
  .header-container {
    display: none;
  }
}
</style>
