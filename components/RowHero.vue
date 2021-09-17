<template>
  <section class="row-hero">
    <img class="cover" src="../assets/images/beersdark.png" />
    <div class="container image">
      <div class="row">
        <div class="col">
          <div class="content">
            <h1>Welcome to Liquid Miles</h1>
            <p class="subheader">Sorry, we're booked. Join us next year!</p>
            <!-- <p class="time">9:00AM - 6:00PM MDT</p> -->
            <div class="buttons-container">
              <!-- <a
                class="btn-fill"
                target="_blank"
                href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=M3A0MHR1c2E0MmRlY2plYjYzZWhmOGRzNzQgcTBvZnZzcjdvZmIwMGJza2N2bXZicWMwdjhAZw&amp;tmsrc=q0ofvsr7ofb00bskcvmvbqc0v8%40group.calendar.google.com"
                >Add to My Calendar</a
              > -->
              <!-- <a
                class="btn-fill btn2"
                target="_blank"
                href="https://www.surveymonkey.com/r/VB7MDG9"
                >Take the survey</a
              > -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RowHero',
}
</script>

<style scoped>
.cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}
.row-hero {
  height: 95vh;
  display: flex;
  align-items: center;
  background-color: gray;
  background-blend-mode: multiply;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40vh;
  margin-bottom: 9rem;
}
.buttons-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: -40px;
}
.buttons-container a {
  width: 70%;
  margin-top: 1rem;
  z-index: 10;
}
.time {
  font-size: 0.8rem;
  color: white;
}

@media only screen and (min-width: 583px) {
  .btn2 {
    margin-left: 2rem;
  }
  .buttons-container {
    flex-direction: row;
    margin-top: auto;
  }
  .buttons-container a {
    width: 30%;
  }
}
</style>
