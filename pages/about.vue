<template>
  <div>
    <RowBand2 />
  </div>
</template>

<script>
import RowBand2 from '../components/RowBand2'

export default {
  components: {
    RowBand2,
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
