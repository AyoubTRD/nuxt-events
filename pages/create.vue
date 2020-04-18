<template>
  <div>
    <h1 class="display-2 mb-0">Create an event</h1>
    <v-divider class="my-5"></v-divider>
    <CreateEvent/>
  </div>
</template>

<script>
  import CreateEvent from "../components/CreateEvent";
  export default {
    name: "create",
    components: {CreateEvent},
    head() {
      return {
        title: "Create an event"
      }
    }
  }
</script>

<style scoped>

</style>
