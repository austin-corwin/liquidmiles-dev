<template>
  <section class="row-rules">
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
          class="row-rules__logo"
          src="../assets/images/lm-logo.png"
          alt="logo"
        />
        <h1 class="row-rules__title">Rule Book</h1>
        <div class="row mt-3">
          <div v-for="item in items" :key="item.title" class="col-12 mt-2">
            <h2 class="rule-title">{{ item.title }}</h2>
            <p>{{ item.message }}</p>
          </div>
        </div>
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
  name: 'RowRules',
  data() {
    return {
      items: [
        {
          title: 'Rule 1',
          message:
            'You must finish all 10 beers and run all 10 miles in under 10 hours.',
        },
        {
          title: 'Rule 2',
          message: 'There will be a shotgun start for all participants.',
        },
        {
          title: 'Rule 3',
          message:
            'Any vomit will result in disqualification from your ranking in the race results.',
        },
        {
          title: 'Rule 4',
          message:
            'Should you wish to remove yourself from the full pint and join the half pint, you are allowed to do so at any time.',
        },
        {
          title: 'Rule 5',
          message:
            'All drinking MUST be done at the house before running again. We cannot publicly consume alcohol in the city of Fort Collins, CO.',
        },
        {
          title: 'Rule 6',
          message:
            'Participants of the full pint MUST drink 1 beer per 2 miles run. This means that 6 beers need to be consumed by the time you are finished running.',
        },
        {
          title: 'Rule 7',
          message: 'You must drink the beer provided while competing.',
        },
        {
          title: 'Rule 8',
          message:
            'All participants MUST download the app Strava to record their runs. This is the only way we will be able to verify that each individual ran the specified amount.',
        },
        {
          title: 'Rule 9',
          message: 'Be safe and HAVE FUN!',
        },
        {
          title: 'Rule 10',
          message:
            'Failure to follow any of the rules will result in disqualification.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.row-rules {
  background-color: #ffc800;
  position: relative;
}
.row-rules__logo {
  width: 65%;
  z-index: 3;
}
.row-rules__text {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row-rules__title {
  margin: 1rem 0;
}
.rule-title {
  font-family: 'Poppins-Black', serif;
  font-size: 1rem;
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
  .row-rules__logo {
    width: 15%;
  }
  .rule-title {
    font-size: 2rem;
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
