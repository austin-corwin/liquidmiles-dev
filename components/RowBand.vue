<template>
  <section class="row-band">
    <div class="container-fluid">
      <div class="row text-container">
        <h1>What is Liquid Miles?</h1>
        <h3>More text as a subheader will go right here</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RowBand',
}
</script>

<style scoped>
.row-band__text {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-container {
  background-color: #ffc800;
  color: white;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
