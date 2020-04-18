<template>
  <v-lazy>
    <v-card class="mx-auto" max-width="850">
      <v-list>
        <v-list-item three-line>
          <v-list-item-content class="py-0">
            <div class="overline mb-2 accent--text">published by {{ event.user }}</div>
            <h1 class="display-2 mb-1">{{ event.title }}</h1>
            <v-list-item-subtitle>{{ date }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-3" />
        <v-list-item v-if="event.category">
          <v-list-item-content class="py-0">
            <v-list-item-title class="title">Category</v-list-item-title>
            <p class="body-1">{{ event.category }}</p>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="py-0">
            <v-list-item-title class="title">Description</v-list-item-title>
            <p class="body-2">{{ event.description || "No description provided." }}</p>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="py-0">
            <v-list-item-title class="title">Location</v-list-item-title>
            <p class="body-1">{{ event.location }}</p>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="event.organizer">
          <v-list-item-content class="py-0">
            <v-list-item-title class="title">Organizer</v-list-item-title>
            <p class="body-1">{{ event.organizer }}</p>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-lazy>
</template>

<script>
  import {format} from "date-fns";

  export default {
    head() {
      return {
        title: this.event.title
      }
    },
    async asyncData({ $axios, params, error }) {
      try {
        const { data } = await $axios.get(`/events/${params.id}`)
        return {
          event: data.data
        }
      } catch(e) {
        error({
          code: 404,
          message: "Event not found"
        })
      }
    },
    computed: {
      date() {
        const date = new Date(this.event.date)
        return `${format(date, "MMM")} ${format(date, "do")} ${this.event.time}`
      }
    }
  }
</script>

<style scoped>

</style>
