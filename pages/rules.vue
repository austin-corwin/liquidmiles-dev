<template>
  <div>
    <RowRules />
  </div>
</template>

<script>
import RowRules from '../components/RowRules'

export default {
  components: {
    RowRules,
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
