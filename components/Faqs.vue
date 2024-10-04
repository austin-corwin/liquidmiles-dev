<template>
  <section class="row-faqs">
    <div class="container-fluid no-left-pad">
      <div class="row text-container">
        <img
          class="row-contact__logo"
          src="../assets/images/lm-logo.png"
          alt="logo"
        />
        <h1 class="row-contact__title">FAQs</h1>
        <div class="container">
          <c-accordion :allow-toggle="true">
            <c-accordion-item mb="4" rounded="lg">
              <c-accordion-header
                border-color="transparent"
                rounded="lg"
                :_hover="{ opacity: 0.9 }"
              >
                <c-box flex="1" text-align="left">
                  What time does the race start?
                </c-box>
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel
                pb="4"
                bg="white"
                mt="1"
                rounded="lg"
                background="transparent"
                font-weight="normal"
                font-family="sans-serif"
                padding-bottom="0"
              >
                <p>
                  Please arrive at 10:00am for check-in and the race will begin
                  at 10:30am.
                </p>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item mb="4" rounded="lg">
              <c-accordion-header
                border-color="transparent"
                rounded="lg"
                :_hover="{ opacity: 0.9 }"
              >
                <c-box flex="1" text-align="left">
                  Can I drink seltzers?
                </c-box>
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel
                pb="4"
                bg="white"
                mt="1"
                rounded="lg"
                background="transparent"
                font-weight="normal"
                font-family="sans-serif"
                padding-bottom="0"
              >
                <p>
                  Beers are the only beverage allowed for the race. You may
                  drink whatever you choose once finished with the race.
                </p>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item mb="4" rounded="lg">
              <c-accordion-header
                border-color="transparent"
                rounded="lg"
                :_hover="{ opacity: 0.9 }"
              >
                <c-box flex="1" text-align="left"> Where should I park? </c-box>
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel
                pb="4"
                bg="white"
                mt="1"
                rounded="lg"
                background="transparent"
                font-weight="normal"
                font-family="sans-serif"
                padding-bottom="0"
              >
                <p>
                  Parking is limited, so we encourage you to carpool or uber.
                  For those of you driving, parking on our street is fine if
                  there is room. Remember to please be respectful of our
                  neighbors. They're kind enough to not call the police on us
                  each year so leave them some room for their cars. You may park
                  on Uranus St or another nearby road if Lunar Ct. is full.
                </p>

                <p>
                  Please remember to ensure you have a safe ride home from the
                  event. If you are unable to make it home, talk with the race
                  directors and they will help find you somewhere safe to sleep
                  for the night.
                </p>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item mb="4" rounded="lg">
              <c-accordion-header
                border-color="transparent"
                rounded="lg"
                :_hover="{ opacity: 0.9 }"
              >
                <c-box flex="1" text-align="left">
                  What kind of food will you have?
                </c-box>
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel
                pb="4"
                bg="white"
                mt="1"
                rounded="lg"
                background="transparent"
                font-weight="normal"
                font-family="sans-serif"
                padding-bottom="0"
              >
                <p>
                  We will provide bagels with cream cheese, bananas, and some
                  granola bars for breakfast. For lunch and other snacks we will
                  have dollar roll sandwiches, pickles, hot dogs, chips, and
                  more. If you would like to bring something for yourself or to
                  share with others that is not listed previously, feel free to
                  do so.
                </p>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item mb="4" rounded="lg">
              <c-accordion-header
                border-color="transparent"
                rounded="lg"
                :_hover="{ opacity: 0.9 }"
              >
                <c-box flex="1" text-align="left">
                  What does my ticket include?
                </c-box>
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel
                pb="4"
                bg="white"
                mt="1"
                rounded="lg"
                background="transparent"
                font-weight="normal"
                font-family="sans-serif"
                padding-bottom="0"
              >
                <p>Your ticket includes the following:</p>
                <ul>
                  <li>Admission to race in either the half or full pint</li>
                  <li>
                    Food and snacks throughout the race centered around
                    breakfast and lunch
                  </li>
                  <li>
                    This year's Liquid Miles 2024 pint glass. T-shirts will
                    resume next year, we were a little busy this year
                  </li>
                </ul>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item mb="4" rounded="lg">
              <c-accordion-header
                border-color="transparent"
                rounded="lg"
                :_hover="{ opacity: 0.9 }"
              >
                <c-box flex="1" text-align="left">
                  What will my ticket cost and when will I pay for it?
                </c-box>
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel
                pb="4"
                bg="white"
                mt="1"
                rounded="lg"
                background="transparent"
                font-weight="normal"
                font-family="sans-serif"
                padding-bottom="0"
              >
                <p>
                  Final ticket costs will be determined once we've purchased all
                  the supplies for the race. This is becasue we do not profit
                  from this event so we charge once we know the total cost and
                  split it evenly across every attendee. In the past, costs have
                  been around $50 per person.
                </p>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item mb="4" rounded="lg">
              <c-accordion-header
                border-color="transparent"
                rounded="lg"
                :_hover="{ opacity: 0.9 }"
              >
                <c-box flex="1" text-align="left">
                  What kind of beer will be at the event?
                </c-box>
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel
                pb="4"
                bg="white"
                mt="1"
                rounded="lg"
                background="transparent"
                font-weight="normal"
                font-family="sans-serif"
                padding-bottom="0"
              >
                <p>
                  Mostly light beer. Usually a healthy mix of Michelob Ultra,
                  Bud Light, and Coors Light, but we switch it up sometimes.
                </p>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item mb="4" rounded="lg">
              <c-accordion-header
                border-color="transparent"
                rounded="lg"
                :_hover="{ opacity: 0.9 }"
              >
                <c-box flex="1" text-align="left">
                  How do you track the distance ran?
                </c-box>
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel
                pb="4"
                bg="white"
                mt="1"
                rounded="lg"
                background="transparent"
                font-weight="normal"
                font-family="sans-serif"
                padding-bottom="0"
              >
                <p>
                  Every participant is required to download strava prior to the
                  event and this will be used to verify their distance.
                </p>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item mb="4" rounded="lg">
              <c-accordion-header
                border-color="transparent"
                rounded="lg"
                :_hover="{ opacity: 0.9 }"
              >
                <c-box flex="1" text-align="left">
                  Can I start after the designated shotgun start if I arrive
                  late?
                </c-box>
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel
                pb="4"
                bg="white"
                mt="1"
                rounded="lg"
                background="transparent"
                font-weight="normal"
                font-family="sans-serif"
                padding-bottom="0"
              >
                <p>
                  We won't stop you, but your time will not be considered
                  competitive. Therefore, you will not be eligible for placing
                  in the half pint or full pint.
                </p>
              </c-accordion-panel>
            </c-accordion-item>
          </c-accordion>
        </div>
      </div>
    </div>
  </section>
</template>
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionPanel,
CAccordionIcon, } from '@chakra-ui/vue'

<script>
export default {
  name: 'Faqs',
}
</script>
<style scoped>
.row-faqs {
  display: flex;
  height: 100vh;
  justify-content: center;
  background-color: #ffc800;
  font-family: 'Poppins-Black', serif;
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
  color: black;
  max-width: 40rem;
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
  background: #ffc800;
}
p {
  width: 100%;
}
.w-full {
  grid-column: 1/3;
}
.accordion-header {
  font-family: 'Poppins-Black', serif;
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
