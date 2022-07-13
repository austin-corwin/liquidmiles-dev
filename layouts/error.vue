<template>
  <div class="d-flex justify-content-center align-items-center error">
    <h1 v-if="error.statusCode === 404">
      Hm, looks like you're lost. Might've drank too much. No worries, we'll
      help you get home.
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
