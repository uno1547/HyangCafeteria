import { Link, useLocation } from "react-router-dom"
import style from "./Navbar.module.css"

const Navbar = () => {
  const location =useLocation();
  console.log(location.pathname);
  
  return (
    // <div>
    //   {/* 여기 네비게이션 바 컴포넌트 만들어줘 Link 찾아봐서 router에서 어캐 쓰는지 */}
    //   네비게이션 바
    // </div>
    <>
    <h1 className={style["Maintext"]}>Today Menu</h1>
      <nav className={style.nav}>
        <ul className={style["nav-bar"]}>
          <li className={location.pathname ==="/restaurants/h1" ? style["current"]:null}>
          <Link to="/restaurants/h1">향1</Link>
          </li>
          <li className={location.pathname ==="/restaurants/h2" ? style["current"]:null}>
            <Link to="/restaurants/h2" >향2</Link>
          </li>
          <li className={location.pathname ==="/restaurants/h3" ? style["current"]:null}>
            <Link to="/restaurants/h3" >향3</Link>
          </li>
          <li className={location.pathname ==="/restaurants/student-hall" ? style["current"]:null}>
            <Link to="/restaurants/student-hall" >학생회관</Link>

          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar