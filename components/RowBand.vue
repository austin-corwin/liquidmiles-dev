<template>
  <section id="#about" class="row-band">
    <div class="container-fluid no-left-pad">
      <svg
        class="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffc800"
          fill-opacity="1"
          d="M0,192L40,186.7C80,181,160,171,240,176C320,181,400,203,480,213.3C560,224,640,224,720,202.7C800,181,880,139,960,144C1040,149,1120,203,1200,218.7C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div class="row text-container">
        <img
          class="row-band__logo"
          src="../assets/images/lm-logo.png"
          alt="logo"
        />
        <h1 class="row-band__title">What is Liquid Miles?</h1>
        <p>
          On Saturday, August 3rd, 2024 we will all gather in Fort Collins,
          Colorado and compete to be the first to run 10 miles and drink 10
          beers in just 10 hours. Impossible?
        </p>
        <p>No. A test of a true legend? Definitely.</p>
        <p>
          We don’t have room to house everyone who attends, so you will need to
          find a place to stay unless you want to camp in our backyard (there is
          plenty of room). As like last year, there will be a small fee to
          participate. We don’t know the exact cost as of yet but we’re thinking
          roughly $55/person.
        </p>
        If interested in helping facilitate/referee instead of competing on the
        day of this amazing event, be sure you've let us know by now so we can
        prepare accordingly. We’ll be making history folks. Annual glory and a
        trophy we got off of Etsy await you if you manage to beat all of the
        other semi-drunk poor excuses for athletes. Oh and everyone that
        participates gets this years t-shirt. We can’t wait to try out our crazy
        idea with you! Stay tuned for more details.
        <p>
          In the meantime, practice your shotguns, strap on those Nike’s and
          don’t forget to carbo load. So…. Are you in or are you out?
        </p>
        <p>Prost,</p>
        <p>The Liquid Miles Founders</p>
      </div>
      <svg
        class="wave2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffc800"
          fill-opacity="1"
          d="M0,192L40,186.7C80,181,160,171,240,176C320,181,400,203,480,213.3C560,224,640,224,720,202.7C800,181,880,139,960,144C1040,149,1120,203,1200,218.7C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RowBand',
}
</script>

<style scoped>
.row-band {
  background-color: #ffc800;
  position: relative;
}
.row-band__logo {
  width: 65%;
  z-index: 3;
}
.row-band__text {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row-band__title {
  margin: 1rem 0;
}
.text-container {
  /* background-color: #ffc800; */
  background-color: #ffc800;
  color: rgba(0, 0, 0, 1);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1.5rem;
  margin-left: 0;
}
p {
  width: 100%;
}
@media only screen and (min-width: 580px) {
  .text-container {
    padding: 4rem 6rem;
  }
  .row-band__logo {
    width: 15%;
  }
}
@media only screen and (min-width: 900px) {
  .text-container {
    padding: 4rem 10rem;
  }
}
@media only screen and (min-width: 1200px) {
  .text-container {
    padding: 4rem 12rem;
  }
}
</style>
