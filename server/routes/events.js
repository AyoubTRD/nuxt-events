const Event = require("../models/Event")

const router = require("express").Router()

router.get("/", async (req, res) => {
  try {
    let { step, page } = req.query
    step = (step && parseInt(step)) || 10
    page = (page && parseInt(page)) || 0

    const eventsCount = await Event.countDocuments()

    const events = await Event.find({}).sort({ createdAt: "desc" }).skip(page * step).limit(step).lean()
    res.send({
      data: events,
      totalEvents: eventsCount,
      currentEvents: events.length,
      totalPages: Math.ceil(eventsCount / step)
    })
  }
  catch(e) {
    console.log(e)
    res.status(500).send({
      error: {
        message: e.message
      }
    })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
    if (!event) {
      return res.status(404).send({
        error: {
          message: "Event not found"
        }
      })
    }
    res.send({ data: event })
  }
  catch(e) {
    console.log(e)
    res.status(404).send({
      error: {
        message: e.message
      }
    })
  }
})

router.post("/", async (req, res) => {
  try {
    const event = new Event(req.body)
    await event.save()
    res.status(201).send({ data: event })
  }
  catch(e) {
    console.log(e)
    res.status(400).send({ error: e })
  }
})

module.exports = router
