<template>
  <section class="row-band">
    <div class="container-fluid">
      <div class="row text-container">
        <img
          class="row-band__logo"
          src="../assets/images/lm-logo.png"
          alt="logo"
        />
        <h1 class="row-band__title">What is Liquid Miles?</h1>
        <p>
          Now if you'll excuse me, I've got a quick solo adventure to go on and
          this one will not be directed by Ron Howard. It's been six hours.
          Dreams move one... one-hundredth the speed of reality, and dog time is
          one-seventh human timee.
        </p>

        <p>
          So y'know, every day here is like a minute. It's like Inception,
          Morty, so if it's confusing and stupid, then so is everyone's favorite
          movie. It’s a new machine. It detects stuff all the way up your butt.
          Puh rum pum pow! I dunno, some people would pay top dollar for that
          kind of breakthrough. Grassss... Taste bad! Principal Vagina here,
          don't let the name fool you; I'm very much in charge.
        </p>
        <p>
          Reminding you that tonight is our annual flu season dance. I don't
          know how many times I have to say this, but if you have the flu, stay
          home. The flu season dance is about awareness, not celebration. You
          don't bring dead babies to Passover.
        </p>

        <p>
          I don't get it and I don't need to. Lick, lickity, lick my balls! You
          know what shy pooping is, Rick? You gave them proof that there was
          something bigger and scarier to unite against, you little idiot! They
          would have gone back into the Dark Ages for a couple of generations,
          but instead, they dedicated themselves into making
          universe-destroying, un-thought-out technology like time travel all so
          they could try to kill a little shitsack on Earth who couldn't let a
          dead snake be dead even after it bit his ankle! Ooh, your little
          flappy doodles are twitching. Does that mean you're aroused, or did
          you just get a signal that one of your buddies found a grape? Wubba
          lubba dub dub! That's Right Morty! This is gonna be a lot like that.
          Except you know. It's gonna make sense. He's not a hot girl. He can't
          just bail on his life and set up shop in someone else's. I ain't
          better than shit, Jack!
        </p>
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
  color: white;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1.5rem;
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
