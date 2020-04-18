<template>
  <div>
    <v-row v-if="events && events.length">
      <v-col v-for="event in events" :key="event._id" cols="12" sm="6" xs="12" lg="4">
        <EventCard :event="event"/>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col v-for="i in Array(12)" :key="i" cols="12" sm="6" xs="12" lg="4">
        <v-skeleton-loader type="card" />
      </v-col>
    </v-row>
    <EventsPagination :length="totalPages"/>
  </div>
</template>

<script>
  import EventCard from "../components/EventCard";
  import EventsPagination from "../components/EventsPagination";

  export default {
    components: {EventsPagination, EventCard},
    head() {
      return {
        title: "Events"
      }
    },
    async asyncData({ $axios, error, query }) {
      try {
        let page = 0;
        if (query.page) {
          page = parseInt(query.page) - 1
        }
        const { data } = await $axios.get("/events", {
          params: {
            page,
            step: 9
          }
        })
        return { events: data.data, totalPages: data.totalPages }
      } catch(e) {
        console.log(e)
        error({
          message: e.message
        })
      }
    },
    watchQuery: ["page"],
    key: to => to.fullPath
  }
</script>
