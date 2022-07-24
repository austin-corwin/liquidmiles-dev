<template>
  <div>
    <RowPayment />
  </div>
</template>

<script>
import RowPayment from '../components/RowPayment'

export default {
  components: {
    RowPayment,
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
