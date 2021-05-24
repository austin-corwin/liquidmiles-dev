<template>
  <div>
    <RowHero />
    <RowBand />
    <RowColumns />
  </div>
</template>

<script>
import RowHero from '../components/RowHero'
import RowBand from '../components/RowBand'
import RowColumns from '../components/RowColumns'

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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
