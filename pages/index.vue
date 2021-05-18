<template>
  <RowHero />
</template>

<script>
import RowHero from '../components/RowHero'
export default {
  components: {
    RowHero,
  },
  head() {
    return {
      title: 'Liquid Miles',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The race of the century',
        },
      ],
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
