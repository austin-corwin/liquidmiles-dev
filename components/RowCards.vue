<template>
  <section class="row-cards">
    <div class="container">
      <div class="row row-cards__header">
        <h2 class="col-12 col-md-6 row-cards__header-text">Pick Your Pint</h2>
      </div>
      <div class="row row-cards__container">
        <div class="col-12 col-md-5 card card-1">
          <img
            class="img img-fluid row-cards__image"
            src="../assets/images/lm-logo.png"
            alt="logo"
          />
          <h3 class="card-title">Half Pint</h3>
          <p class="card-excerpt text-uppercase">5 miles • 5 beers • 5 hours</p>
          <p class="card-body">
            For those of you who aren't quite prepared enough to do the full
            pint, we've come up with a non-competitive alternative so that you
            can still participate and get a t-shirt. You'll be expected to do 5
            1-mile laps and drink 5 crispy boys in under 5 hours. Since this is
            non-competitive, feel free to go at your own pace. Think of it like
            a Sunday stroll, but with beer.
          </p>
        </div>
        <div class="col-12 col-md-5 card card-2">
          <img
            class="img img-fluid row-cards__image"
            src="../assets/images/lm-logo.png"
            alt="logo"
          />
          <h3 class="card-title">Full Pint</h3>
          <p class="card-excerpt text-uppercase">
            10 miles • 10 beers • 10 hours
          </p>
          <p class="card-body">
            The big cheese. Are you ready for it? We are. You'll be running a
            total of 10 1-mile laps around downtown Loveland, CO and consuming
            10 crispy boys in the process. All of this must be completed within
            10 hours or you will not rank on the leaderboards or potentially be
            crowned King or Queen for this years race. Hope you've been
            training.
          </p>
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
  min-height: 85vh;
  padding: 4rem 2rem;
  background: url('../assets/images/downtown-loveland.jpeg') no-repeat center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.75);
  background-blend-mode: multiply;
}
.row-cards__header {
  display: flex;
  justify-content: space-around;
}
.row-cards__image {
  width: 50%;
  margin: 2rem 0;
}
.row-cards__header-text {
  display: flex;
  justify-content: space-around;
  color: #ffc800;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  border: 2px solid #ffc800;
  text-transform: uppercase;
  font-family: 'Poppins-Black', serif;
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
.card-title {
  font-family: 'Poppins-Black', serif;
  text-transform: uppercase;
}
.card-excerpt {
  font-weight: bold;
}
.card-body {
  text-align: center;
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
@media only screen and (max-width: 583px) {
  .card {
    margin-bottom: 2rem;
  }
}
</style>
