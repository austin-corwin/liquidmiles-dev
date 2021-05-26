<template>
  <section class="row-hero">
    <div class="container image">
      <div class="row">
        <div class="col">
          <div class="content">
            <h1>Welcome to 2021 Liquid Miles</h1>
            <p class="subheader">
              Come on, flip the pickle, Morty. You're not gonna regret it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RowHero',
}
</script>

<style>
.image {
  background-image: url('../assets/images/beersinrow.jpg');
  background-size: cover;
  height: 80vh;
}
</style>
