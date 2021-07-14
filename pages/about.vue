<template>
  <div>
    <RowBand />
  </div>
</template>

<script>
import RowBand from '../components/RowBand'

export default {
  components: {
    RowBand,
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
