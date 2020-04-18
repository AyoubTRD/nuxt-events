<template>
  <div class="text-center">
    <v-pagination v-model="page" :length="length" color="accent"></v-pagination>
  </div>
</template>

<script>
  export default {
    props: ["length"],
    name: "EventsPagination",
    data() {
      let page = 1;
      if (this.$route.query.page) {
        page = Number(this.$route.query.page)
      }
      return {
        page
      }
    },
    updated() {
      this.$router.push(`/?page=${this.page}`)
    }
  }
</script>

<style scoped>

</style>
