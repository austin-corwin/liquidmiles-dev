<template>
  <div>
    <RowHero />
    <RowBand />
    <RowColumns />
    <RowColumns2 />
    <RowCards />
  </div>
</template>

<script>
import RowHero from '../components/RowHero'
import RowBand from '../components/RowBand'
import RowColumns from '../components/RowColumns'
import RowColumns2 from '../components/RowColumns2'
import RowCards from '../components/RowCards'

export default {
  components: {
    RowHero,
    RowBand,
    RowColumns,
    RowColumns2,
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
