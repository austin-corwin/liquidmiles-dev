<template>
  <section class="row-contact">
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
          class="row-contact__logo"
          src="../assets/images/lm-logo.png"
          alt="logo"
        />
        <h1 class="row-contact__title">Contact Us</h1>
        <p>
          Stay tuned for more information on how to sign up for next year's
          Liquid Miles!
        </p>
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
  name: 'RowContact',
}
</script>

<style scoped>
.row-contact {
  background-color: #ffc800;
  position: relative;
}
.row-contact__logo {
  width: 65%;
  z-index: 3;
}
.row-contact__text {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row-contact__title {
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
  padding: 5rem 1.5rem;
  margin-left: 0;
}
p {
  width: 100%;
}
@media only screen and (min-width: 580px) {
  .text-container {
    padding: 4rem 6rem;
  }
  .row-contact__logo {
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
