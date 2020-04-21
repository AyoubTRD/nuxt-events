const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ayoub:ayoub@cluster0-5uvip.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database!"))
  .catch(() => console.log("Unable to connect to mongoDB."))
