const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database!"))
  .catch(() => console.log("Unable to connect to mongoDB."))
