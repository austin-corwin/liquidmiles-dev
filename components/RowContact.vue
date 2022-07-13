<template>
  <section class="row-contact">
    <div class="container-fluid no-left-pad">
      <div class="row text-container">
        <img
          class="row-contact__logo"
          src="../assets/images/lm-logo.png"
          alt="logo"
        />
        <h1 class="row-contact__title">Interested in Liquid Miles 2022?</h1>
        <p class="row-contact__body">
          Register your interest below if you'd like to participate in this
          year's Liquid Miles. The event will be held on 9/10/2022 in Fort
          Collins, CO. (Note: Please only register if you are serious about
          attending as prices are decided based on the amount of participants.
          If you do not wish to run, but would like to purchase a t-shirt,
          please continue filling out the form below.)
        </p>
        <!-- Just fucking use formeezy, fuck netlify -->
        <form
          action="https://formeezy.com/api/v1/forms/625188c124695d00090bd64c/submissions"
          method="POST"
          enctype="multipart/form-data"
        >
          <input type="text" name="fName" placeholder="First Name" required />
          <input type="text" name="lName" placeholder="Last Name" required />
          <input type="email" name="email" placeholder="Enter email" required />
          <input
            type="text"
            name="activity"
            placeholder="Are you running?"
            required
          />
          <input
            type="text"
            name="shirtSize"
            placeholder="T-Shirt Size (sm, md, lg, xl, xxl)"
            required
          />
          <input
            type="text"
            name="excitement"
            placeholder="How excited are you?"
            required
          />
          <textarea
            placeholder="Leave us a comment. Any feedback from last year is always appreciated!"
            name="message"
          ></textarea>
          <input name="bot-field" type="text" style="display: none" />
          <button class="btn-fill" type="submit">SUBMIT</button>
        </form>
      </div>
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
  position: relative;
}
.row-contact button {
  grid-column: 1/3;
  color: #ffc800;
  border: 2px solid #ffc800;
}
.row-contact button:hover {
  color: white;
}
.row-contact input {
  background: transparent;
  color: black;
  border: 2px solid #ffc800;
  border-radius: 5px;
  min-height: 3rem;
  padding-left: 1rem;
}
.row-contact textarea {
  background: transparent;
  border: 2px solid #ffc800;
  border-radius: 5px;
  grid-column: 1/3;
  padding-left: 1rem;
  color: black;
  min-height: 6rem;
}
.row-contact textarea::placeholder {
  color: black;
}
.row-contact input::placeholder {
  color: black;
  font-weight: 400;
  font-family: sans-serif;
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
  text-align: center;
  color: #ffc800;
}
.row-contact .btn-fill {
  top: auto;
}
.text-container {
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
form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  width: 100%;
  margin-top: 2rem;
}
.w-full {
  grid-column: 1/3;
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
@media only screen and (max-width: 782px) {
  .row-contact input {
    grid-column: 1/3;
  }
}
</style>
