<template>
  <v-lazy>
    <v-card outlined :elevation="elevation" @mouseenter="elevation = 8" @mouseleave="elevation = 1">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-2 accent--text">published by {{ event.user }}</div>
          <v-list-item-title class="headline mb-1">{{ event.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ date }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-card-subtitle class="pt-3 pb-0" v-if="event.description">{{ description }}</v-card-subtitle>
      <v-card-subtitle class="pt-3 pb-0 text--disabled" v-else>This event has no description</v-card-subtitle>
      <v-card-actions>
        <v-btn text color="primary" nuxt :to="`/events/${event._id}`">Learn more</v-btn>
      </v-card-actions>
    </v-card>
  </v-lazy>
</template>

<script>
  import { format } from "date-fns"
  export default {
    data() {
      return {
        elevation: 1
      }
    },
    props: ["event"],
    name: "EventCard",
    computed: {
      date() {
        const date = new Date(this.event.date)
        return `${format(date, "MMM")} ${format(date, "do")} ${this.event.time}`
      },
      description() {
        if (this.event.description.length >= 95) {
          return this.event.description.substr(0, 90) + "..."
        }
        return this.event.description
      }
    }
  }
</script>

<style scoped>

</style>
