const mongoose = require("mongoose")
const { Schema } = mongoose

const eventSchema = new Schema({
  user: {
    type: String,
    required: [true, "The name of the user is required"]
  },
  category: {
    type: String
  },
  organizer: {
    type: String
  },
  title: {
    type: String,
    required: [true, "The title of the event is required"]
  },
  description: {
    type: String
  },
  location: {
    type: String,
    required: [true, "The location of the event is required"]
  },
  date: {
    type: String,
    required: [true, "The date of the event is required"]
  },
  time: {
    type: String
  }
}, {
  timestamps: true
})

const Event = mongoose.model("event", eventSchema)

module.exports = Event
