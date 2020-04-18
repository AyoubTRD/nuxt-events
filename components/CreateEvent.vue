<template>
    <v-form class="mx-auto" @submit="onSubmit" ref="form" max-width="850">
      <v-stepper v-model="stepper">
        <v-stepper-header>
          <v-stepper-step step="1" :complete="stepper > 1" />
          <v-divider/>
          <v-stepper-step step="2" :complete="stepper > 2" />
          <v-divider/>
          <v-stepper-step step="3" :complete="stepper > 3" />
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-text-field :rules="nameRules" v-model="name" required color="primary" outlined label="Your name" class="mt-1" />
            <v-text-field :rules="titleRules" v-model="title" required color="primary" outlined label="Event title" />
            <v-btn color="primary" filled :disabled="!(name && title)" @click="stepper = 2">Continue</v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-text-field v-model="organizer" color="primary" outlined label="Organizer name (Optional)" class="mt-1"/>
            <v-text-field v-model="category" color="primary" outlined label="Event category (Optional)" />
            <v-text-field :rules="locationRules" v-model="location" required color="primary" outlined label="Event location" />
            <v-textarea :counter="1200" outlined label="Event description" color="primary" v-model="description" />
            <v-btn color="accent" text @click="stepper = 1">
              <v-icon left>arrow_back</v-icon>
              <span>Previous</span>
            </v-btn>
            <v-btn color="primary" filled @click="stepper = 3" :disabled="!location">Continue</v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-row justify="center">
              <v-col cols="12" sm="6" xs="12">
                <h3 class="subtitle">Event Organization date</h3>
                <v-date-picker v-model="date" full-width >
                </v-date-picker>
              </v-col>
              <v-col cols="12" sm="6" xs="12">
                <h3 class="subtitle">Event Organization time</h3>
                <v-time-picker v-model="time" full-width format="24hr"></v-time-picker>
              </v-col>
              <v-lazy>
                <v-alert v-if="error" type="error">{{ error }}</v-alert>
              </v-lazy>

            </v-row>
            <v-btn color="accent" text @click="stepper = 2">
              <v-icon left>arrow_back</v-icon>
              <span>Previous</span>
            </v-btn>
            <v-btn type="submit" color="primary" :loading="loading" filled>Create event</v-btn>
          </v-stepper-content>
        </v-stepper-items>

      </v-stepper>

    </v-form>
</template>

<script>
  export default {
    name: "CreateEvent",
    data() {
      return {
        stepper: 1,
        name: process.browser && localStorage.getItem("name"),
        nameRules: [
          v => !!v || "The name is required",
          v => (v && v.length >= 3) || "The name must be longer than 3 characters"
        ],
        title: "",
        titleRules: [
          v => !!v || "The title of the event is required"
        ],
        organizer: "",
        category: "",
        location: "",
        description: "",
        locationRules: [v => !!v || "The event location is required"],
        date: new Date().toISOString().substr(0, 10),
        time: null,
        error: null,
        loading: false
      }
    },
    methods: {
      async onSubmit(event) {
        this.loading = true
        event.preventDefault()
        localStorage.setItem("name", this.name)
        const isValid = this.$refs.form.validate()
        if (!isValid) {
          this.loading = false
          this.error = "Please provide the correct information"
          return
        }
        const { title, name, organizer, date, time, location, category, description } = this
        try {
          await this.$axios.post("/events", {
            title, user: name, organizer, date, time, location, category, description
          })
          this.error = null
          this.loading = false
          await this.$router.push("/")
        } catch(e) {
          this.loading = false
          this.error = e.response.data.error.message
        }
      }
    }
  }
</script>

<style scoped>

</style>
