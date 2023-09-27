<template>
  <div>
    <Faqs />
  </div>
</template>
<script>
import Faqs from '../components/Faqs'
export default {
  components: {
    Faqs,
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
