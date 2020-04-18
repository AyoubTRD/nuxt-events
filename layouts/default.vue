<template>
  <v-app>
    <v-app-bar app elevate-on-scroll>
      <nuxt-link to="/" class="home-link">
        <v-toolbar-title>
          <span class="accent--text">Real</span> Events
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-btn to="/" class="mx-2" color="primary" text nuxt>Events</v-btn>
      <v-btn to="/create" color="primary" class="mx-2" text nuxt>Create event</v-btn>

    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    head() {
      return {
        titleTemplate: "%s - Real World Events"
      }
    }
  }
</script>

<style>
  .home-link {
    text-decoration: none;
    color: inherit;
  }
  *, *:active, *:focus {
    outline: none !important;
  }
</style>
