import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import eventServices from './eventServices'

const initialState = {
    events:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createEvent = createAsyncThunk('event/createEvent', async (eventData, thunkAPI) => {
try {
    const token = thunkAPI.getState().auth.user.token
    return await eventServices.createEvent(eventData, token)
} catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
}
})

export const deleteEvent = createAsyncThunk('event/deleteEvent', async (id, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await eventServices.deleteEvent(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getEvents = createAsyncThunk ('post/getAllEvents', async ( _ , thunkAPI) => {
    try {
        return await eventServices.getEvents()
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateEvent = createAsyncThunk('/event/updateEvent', async (id, thunkAPI) => {
    try {
        const token = await thunkAPI.getState().auth.user.token
        return await eventServices.getEvents(id, token)
    }catch (error) {
        const message  = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }   
})

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase (createEvent.pending, (state)=> {
                state.isLoading = true
            })
            .addCase (createEvent.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.events.push(action.payload)
            })
            .addCase (createEvent.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
                state.events = null
            })
            .addCase(getEvents.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.events = action.payload
            })
            .addCase(getEvents.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteEvent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteEvent.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.events = state.events.filter(
                    (event) => event._id !== action.payload.id
                )
            })
            .addCase(deleteEvent.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = eventSlice.actions
export default eventSlice.reducer