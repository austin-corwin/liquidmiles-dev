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
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#ffc800"
        fill-opacity="1"
        d="M0,192L40,186.7C80,181,160,171,240,176C320,181,400,203,480,213.3C560,224,640,224,720,202.7C800,181,880,139,960,144C1040,149,1120,203,1200,218.7C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
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
  height: 80vh;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40vh;
}
</style>
