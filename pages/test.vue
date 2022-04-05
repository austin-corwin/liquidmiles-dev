<template>
  <div>
    <Test />
  </div>
</template>

<script>
import Test from '../components/Test'

export default {
  components: {
    Test,
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
