<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      The link you clicked on may be broken or no longer exist.
    </h1>
    <h1 v-else>
      An error occured
    </h1>
    <NuxtLink to="/">
      Home
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: this.pageNotFound ? "404 Not Found" : "An error occured"
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
