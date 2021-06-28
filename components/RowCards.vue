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
          <p class="card-excerpt">5 miles</p>
          <p class="card-body">
            Looks like some sort of legally safe knockoff of an '80s horror
            character with miniature swords for fingers instead of knives! Are
            you invisible and you're gonna, like, fart on me? I'm sorry Summer,
            your opinion means very little to me. Close. It's gonna make your
            kidneys shut down.
          </p>
        </div>
        <div class="col-12 col-md-5 card card-2">
          <img
            class="img img-fluid row-cards__image"
            src="../assets/images/lm-logo.png"
            alt="logo"
          />
          <h3 class="card-title">Full Pint</h3>
          <p class="card-excerpt">10 miles</p>
          <p class="card-body">
            Shut the fuck up about moonmen! Looossseeerrrrr. Holy crap, Morty,
            run! Run for your life, Morty, run! I-I've never seen that thing
            before in my life, Morty, I don't even know what the hell it is!
            We-we gotta get out of here, Morty, it's gonna kill us! We're gonna
            die, Morty! We're gonna die! Countries known for their sexually
            aggressive men.
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
