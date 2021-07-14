<template>
  <div>
    <RowContact />
  </div>
</template>

<script>
import RowContact from '../components/RowContact'

export default {
  components: {
    RowContact,
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
