<template>
  <section class="row-contact">
    <div class="container-fluid no-left-pad">
      <div class="row text-container">
        <img
          class="row-contact__logo"
          src="../assets/images/lm-logo.png"
          alt="logo"
        />
        <h1 class="row-contact__title">Pay for Liquid Miles 2022</h1>
        <p class="row-contact__body">
          Enter info in this form to pay for your Liquid Miles ticket for 2022.
          Payment includes your admission to the event, a t-shirt with the size
          designated in the interest form you filled out, snacks during the day,
          water, and beer. Any additional proceeds that are not spent on
          event-related supplies will be donated to a local charity. A liability
          waiver MUST be signed on the day of the event before the start. If you
          do not wish to sign this waiver, please DO NOT purchase a ticket.
        </p>
        <!-- Just fucking use formeezy, fuck netlify -->
        <!-- <form
          action="https://formeezy.com/api/v1/forms/62ddbbea70c43b0009ab7663/submissions"
          method="POST"
          enctype="multipart/form-data"
        >
          <input
            name="price_id"
            type="hidden"
            value="price_1LPCcpKVkdJHraFR5ZHyfaGn, price_1LPCcpKVkdJHraFRyxdQI1cE"
          />
          <input type="text" name="fName" placeholder="First Name" required />
          <input type="text" name="lName" placeholder="Last Name" required />
          <input type="email" name="email" placeholder="Enter email" required />
          <input
            type="text"
            name="raceType"
            placeholder="Full or Half Pint?"
            required
          />
          <textarea
            placeholder="Leave us a comment. Any feedback from last year is always appreciated!"
            name="message"
          ></textarea>
          <input name="bot-field" type="text" style="display: none" />
          <button class="btn-fill" type="submit">SUBMIT</button>
        </form> -->
        <div class="flex button-container">
          <a
            class="btn-fill btn-full"
            href="https://buy.stripe.com/test_fZedTh0L51KQbXa9AA"
            >Purchase Full Pint</a
          >
          <a
            class="btn-fill"
            href="https://buy.stripe.com/test_bIY16vgK31KQf9m145"
            >Purchase Half Pint</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RowPayment',
}
</script>

<style scoped>
.row-contact {
  position: relative;
}
.row-contact button,
.row-contact a {
  grid-column: 1/3;
  color: #ffc800;
  border: 2px solid #ffc800;
}
.row-contact button:hover,
.row-contact a:hover {
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
  display: inline-flex;
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
  text-align: center;
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
.row-contact__body {
  margin-bottom: 1rem;
}
.row-contact .button-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
  flex-direction: column;
}
.row-contact .btn-full {
  margin-bottom: 1rem;
}
@media only screen and (min-width: 580px) {
  .text-container {
    padding: 4rem 6rem;
  }
  .row-contact__logo {
    width: 15%;
  }
  .row-contact .btn-full {
    margin-right: 1rem;
    margin-bottom: auto;
  }
  .row-contact .button-container {
    flex-direction: row;
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
