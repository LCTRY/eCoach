import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Calendar  from './pages/Calendar'
import EventList  from './pages/EventList'
import EventForm  from './pages/EventForm'
import Practice  from './pages/Practice'
import Header  from './components/Header'



function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            <Route path ='/' element={<Dashboard />} />
            <Route path ='/login' element={<Login />} />
            <Route path ='/register' element={<Register />} />
            <Route path ='/calendar' element={<Calendar />} />
            <Route path ='/eventList' element={<EventList />} />
            <Route path ='/eventForm' element={<EventForm />} />
            <Route path ='/practice' element={<Practice />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>

  );
}

export default App;
