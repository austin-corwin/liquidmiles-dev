<template>
  <div class="d-flex justify-content-center align-items-center error">
    <h1 v-if="error.statusCode === 404">
      Hm, looks like you're lost. Maybe Kona can help you find where you need to
      go.
    </h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error', // you can set a custom layout for the error page
  props: ['error'],
}
</script>
