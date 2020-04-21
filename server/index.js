require("./db")

const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

const eventRoutes = require("./routes/events")

app.use(express.json())
app.use("/events", eventRoutes)

app.get("/hello", (req, res) => {
  res.send("Hello world ❤")
})

const port = process.env.PORT || 5000
// app.listen(port, () => console.log(`Up on port ${port}`))
module.exports = {
  handler: app, path: "/api"
}
