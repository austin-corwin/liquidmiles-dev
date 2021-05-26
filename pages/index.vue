<template>
  <div>
    <RowHero />
    <RowBand />
    <RowColumns />
    <RowColumns2 />
  </div>
</template>

<script>
import RowHero from '../components/RowHero'
import RowBand from '../components/RowBand'
import RowColumns from '../components/RowColumns'
import RowColumns2 from '../components/RowColumns2'

export default {
  components: {
    RowHero,
    RowBand,
    RowColumns,
    RowColumns2,
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
