<template>
  <section class="row-cards">
    <div class="container">
      <div class="row row-cards__container">
        <div class="card">
          <h3>Card 1</h3>
        </div>
        <div class="card">
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
  height: 75vh;
  padding: 4rem 2rem;
  background-color: #2e86ab;
}
.row-cards__container {
  display: flex;
  justify-content: space-around;
  width: 80%;
}
.card {
  height: 450px;
  width: 300px;
}
</style>
