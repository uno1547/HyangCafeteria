import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/Homepage"
import Hyang1 from "./pages/Hyang1"
import RestaurantPage from './pages/RestaurantPage.jsx'
import StorePage from './pages/StorePage.jsx'

import "./App.css"
import style from "./App.module.css"
function App() {  
  return (
    <Router>
      <Navbar/>
        <div className= { style.inner }>
            <Routes>
              <Route path='/' element = {<HomePage/>}></Route>
              <Route path='/restaurants/h1' element = {<Hyang1/>}></Route>
              <Route path='/restaurants/:restaurant' element = {<RestaurantPage/>}></Route>
              <Route path='/restaurants/:restaurant/:store' element = {<StorePage/>}></Route>
              <Route path='*' element = {<HomePage/>}></Route>
            </Routes>     
        </div>        
    </Router>
  )
}

export default App
