const asyncHandler = require('express-async-handler') ;
const Event = require('../models/eventModel')

//  @desc      get event
//  @route     GET /api/events
//  @access    private
const getEvents = asyncHandler(async(req, res) => {
    const events = await Event.find()
    res.status(200).json(events)
})

//  @desc      get event
//  @route     GET /api/events
//  @access    private
const createEvent = asyncHandler(async(req, res) => {
    const {eventName,
            description,
            startDate,
            endDate,
            startTime,
            endTime,
            location,
            eventType,
            isRepeat} = req.body

        const event = await Event.create({
            eventName,
            description,
            startDate,
            endDate,
            startTime,
            endTime,
            location,
            eventType,
            isRepeat
        })

        if (event) {
            res.status(201).json({
                _id: event.id,
                eventName: event.eventName,
                description: event.description,
                startDate: event.startDate,
                endDate: event.endDate,
                startTime: event.startTime,
                endTime: event.endTime,
                location: event.location,
                eventType: event.eventType,
                isRepeat: event.isRepeat,
            })
        } else {
            res.status(400)
            throw new Error('invalid event data')
        }
})

//  @desc      update event
//  @route     PUT /api/events
//  @access    private
const updateEvent = asyncHandler(async(req, res) => {
    const event = await Event.findById(req.params.id)
    if (!event) {
        res.status(400)
        throw new Error("Event update failed - Event not found")
    }

    const updateEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })

    res.status(200).json(updateEvent)
})

//  @desc      delete event
//  @route     Delete /api/events
//  @access    private
const deleteEvent = asyncHandler(async(req, res) => {
    const event = await Event.findById(req.params.id)

    if (!event) {
        res.status(400)
        throw new Error("Event not found")
    }

    await event.remove()

    res.status(200).json({id: req.params.id})
})


module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}