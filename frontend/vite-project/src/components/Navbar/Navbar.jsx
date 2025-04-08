import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import navStyle from "./Navbar.module.css"

const Navbar = () => {
  const location = useLocation()
  console.log(location.pathname);
  return (
    <ul className={navStyle["nav-bar"]}>
      <li className={location.pathname === "/restaurants/h1" ? navStyle.current : ""}>
        <Link to = "/restaurants/h1">향1</Link>
      </li>
      <li className={location.pathname === "/restaurants/h2" ? navStyle.current : ""}>
        <Link to = "/restaurants/h2">향2</Link>
      </li>
      <li className={location.pathname === "/restaurants/h3" ? navStyle.current : ""}>
        <Link to = "/restaurants/h3">향3</Link>
      </li>
      <li className={location.pathname === "/restaurants/student-hall" ? navStyle.current : ""}>
        <Link to = "/restaurants/student-hall">학생회관</Link>
      </li>
    </ul>
  )
}

export default Navbar