import axios from 'axios'

const API_URL = '/api/events/'

//create Event
// const createEvent = async (eventData, token) => {
// const config = {
//     headers: {
//         Authorization: `Bearer ${token}`,
//     },
// }
//     const response = await axios.post(API_URL, eventData, config)
// }
const createEvent = async (eventData) => {
        const response = await axios.post(API_URL, eventData)
        return response.data
}
const getEvents = async () => {
    const response = await axios.get(API_URL)

    return response.data
}

const deleteEvent = async (eventID) => {
    const response = await axios.delete(API_URL + eventID)
    return response.data
}

const updateEvent = async (eventID) => {
    const response = await axios.put(API_URL + eventID)
    return response.data
}

const eventServices = {
    createEvent,
    getEvents,
    deleteEvent,
    updateEvent
} 

export default eventServices