<template>
  <section class="row-columns2 container">
    <div class="row">
      <div class="col-12 col-md-6 order-2 row-columns__content">
        <p class="h3 row-columns__content-label">Location:</p>
        <h1 class="row-columns__content-header">Loveland, CO</h1>
        <p class="row-columns__content-body">
          Return it? Are you insane? Did you hear nothing I said? Buy another
          one, Morty! Consume, Morty! Nobody's out there shopping with this
          fucking virus! Jesus Christ! Did the boomy-booms blow up all your
          wordy-word books? Save it for the Semantics Dome, E.B. White. That
          just sounds like slavery with extra steps.
        </p>
      </div>
      <div class="col-12 col-md-6 order-1 row-columns__image">
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
            xlink:href="../assets/images/downtown-loveland.jpeg"
            preserveAspectRatio="xMidYMid slice"
          ></image>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RowColumns2',
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
</style>
