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
            <button class="btn-fill">Add to my calendar</button>
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

<style scoped>
.row-hero {
  background-image: url('../assets/images/beersinrow.jpg');
  background-size: cover;
  height: 95vh;
  display: flex;
  align-items: center;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40vh;
  margin-bottom: 9rem;
}
@media only screen and (min-width: 583px) {
  .container {
    margin-bottom: 24rem;
  }
}
</style>
