<template>
  <section class="row-cards">
    <div class="container">
      <div class="row row-cards__header">
        <h2 class="col-12 col-md-6 row-cards__header-text">Choose Your Race</h2>
      </div>
      <div class="row row-cards__container">
        <div class="col-12 col-md-4 card card-1">
          <img
            class="img img-fluid row-cards__image"
            src="../assets/images/lm-logo.png"
            alt="logo"
          />
          <h3>Card 1</h3>
        </div>
        <div class="col-12 col-md-4 card card-2">
          <img
            class="img img-fluid row-cards__image"
            src="../assets/images/lm-logo.png"
            alt="logo"
          />
          <h3>Card 2</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RowCards',
}
</script>

<style scoped>
.row-cards {
  display: flex;
  align-items: center;
  min-height: 75vh;
  padding: 4rem 2rem;
  background: url('../assets/images/downtown-loveland.jpeg') no-repeat center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
}
.row-cards__header {
  display: flex;
  justify-content: space-around;
}
.row-cards__image {
  width: 50%;
  margin-bottom: 2rem;
}
.row-cards__header-text {
  display: flex;
  justify-content: space-around;
  color: #ffc800;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  border: 2px solid #ffc800;
}
.row-cards__container {
  display: flex;
  justify-content: space-around;
}
.card {
  min-height: 300px;
  color: #ffc800;
  background: transparent;
  border: 2px solid #ffc800;
}
.card:hover {
  background: #ffc800;
  color: white;
}
.card-1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
