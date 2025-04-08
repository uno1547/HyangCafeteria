import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/Homepage"
import Hyang1 from "./pages/Hyang1"
import Restaurant from './pages/Restaurant'

import "./App.css" //임포트만해서 전역스타일 사용?
import style from "./App.module.css" // 모듈css 임포트해서 사용

function App() {  
  console.log('app!');
  return (
    <Router>
      <div className= {style.inner}>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Navigate to = "/restaurants/h1" replace/>}></Route>
          <Route path='/restaurants/h1' element = {<Hyang1/>}></Route>
          <Route path='/restaurants/:restaurant' element = {<Restaurant/>}></Route>
          <Route path='*' element = {<Navigate to = "/" replace/>}></Route>
        </Routes>     
      </div>        
    </Router>
  )
}

export default App
