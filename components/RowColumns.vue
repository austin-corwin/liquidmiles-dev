<template>
  <section class="row-columns container">
    <div class="row">
      <div class="col-12 col-md-6 row-columns__content order-2 order-sm-1">
        <p class="h3 row-columns__content-label">Location:</p>
        <h1 class="row-columns__content-header">Fort Collins, CO</h1>
        <p class="row-columns__content-body">
          The race is 10 1-mile laps around Fort Collins, CO. Although we’re on
          the front range and the altitude will be noticeable (if you’re not
          used to it), there won’t be any significant elevation gain on the run
          itself so no need to worry about having to scale mountain sides. We’re
          crazy, but not that crazy….yet.
        </p>
      </div>
      <div class="col-12 col-md-6 row-columns__image order-1 order-sm-2">
        <svg
          id="10015.io"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <clipPath id="blob">
              <path
                fill="#474bff"
                d="M460,280Q447,320,427.5,356.5Q408,393,375,418.5Q342,444,302,459Q262,474,218.5,472Q175,470,139.5,445Q104,420,79,387.5Q54,355,32.5,319Q11,283,10,240Q9,197,31.5,161Q54,125,78.5,91.5Q103,58,139,35.5Q175,13,218,15.5Q261,18,301,27.5Q341,37,374,62.5Q407,88,430.5,122.5Q454,157,463.5,198.5Q473,240,460,280Z"
              />
            </clipPath>
          </defs>
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            clip-path="url(#blob)"
            xlink:href="../assets/images/liquidmiles-2022.png"
            preserveAspectRatio="xMidYMid slice"
          ></image>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RowColumns',
}
</script>
<style scoped>
.row-columns {
  min-height: 600px;
  width: 100%;
}
.row-columns__content {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.row-columns__content-label {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
}
@media only screen and (min-width: 583px) {
  .row-columns {
    padding-top: 10rem;
  }
}

@media only screen and (min-width: 1280px) {
  .row-columns {
    padding-top: 14rem;
  }
}
@media only screen and (min-width: 2000px) {
  .row-columns {
    padding-top: 18rem;
  }
}
@media only screen and (device-width: 768px) {
  .row-columns {
    padding-top: 10rem;
  }
}
</style>
