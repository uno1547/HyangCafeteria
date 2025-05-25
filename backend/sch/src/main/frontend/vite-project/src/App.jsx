import { BrowserRouter as Router, Routes, Route, Outlet, Navigate} from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/Homepage"
import Hyang1 from "./pages/Hyang1Page.jsx"
import RestaurantPage from './pages/RestaurantPage.jsx'
import StorePage from './pages/StorePage.jsx'
import KioskPage from './pages/KioskPage.jsx'
import CurrentInfoPage from './pages/CurrentInfoPage.jsx'

import "./App.css"
import style from "./App.module.css"
function App() {  
  return (
    <Router>
      <Routes>
        <Route element={
          <>
            <Navbar />
            <div className={style.inner}>
              <Outlet/>
            </div>
          </>
        }>
          <Route path='/' element={<HomePage />} />
          <Route path='/restaurants/h1' element={<Hyang1 />} />
          <Route path='/restaurants/:restaurant' element={<RestaurantPage />} />
        </Route>
        <Route path='/kiosk' element = {<KioskPage/>}></Route>
        <Route path='/restaurants/h1/current-info' element = {<CurrentInfoPage/>}></Route>
        <Route path='/restaurants/:restaurant/:store' element = {<StorePage/>}></Route>
        <Route path='*' element = {<Navigate to={"/"}/>}></Route>
      </Routes>           
    </Router>
  )
}

export default App
