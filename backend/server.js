const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/users', require('./routes/usersRoutes'))
app.use('/api/posts', require('./routes/postsRoutes'))
app.use('/api/events', require('./routes/eventsRoutes'))
app.use('/api/practice', require('./routes/practiceRoutes'))
app.use('/api/drills', require('./routes/drillsRoutes'))
app.use(errorHandler)
app.listen(port, () => {
    console.log (`Server started on port ${port}`)
})
