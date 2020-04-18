const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/events", { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(() => console.log("Unable to connect to mongoDB."))
