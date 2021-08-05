<template>
  <div>
    <RowHero />
    <RowBand />
    <RowColumns />
    <RowCards />
  </div>
</template>

<script>
import RowHero from '../components/RowHero'
import RowBand from '../components/RowBand'
import RowColumns from '../components/RowColumns'
import RowCards from '../components/RowCards'

export default {
  components: {
    RowHero,
    RowBand,
    RowColumns,
    RowCards,
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
