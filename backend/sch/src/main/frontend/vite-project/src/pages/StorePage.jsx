import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import Menu from "../components/StoresPage/Menu"
import storePageStyle from "./StorePage.module.css"

const menusData = [
  { name : "뼈해장국", price : "6500", url : "food.png"},
  { name : "순두부찌개", price : "7000", url : "food.png"},
  { name : "순한라면", price : "3000", url : "food.png"},
  { name : "착한라면", price : "3000", url : "food.png"},
  { name : "매운라면", price : "3000", url : "food.png"},
  { name : "불닭볶음면", price : "2500", url : "food.png"},
  { name : "짜파게티", price : "2000", url : "food.png"},
  { name : "육개장", price : "6000", url : "food.png"},
]

const StorePage = () => {
  const [menus, setMenus] = useState([])
  const {restaurant, store} = useParams()
  const navigate = useNavigate()
  console.log(restaurant, store);
  useEffect(() => {
    const getMenus = async () => {
      try {
        const response = await fetch(`http://localhost:8080/restaurants/${encodeURIComponent(restaurant)}/stores/${encodeURIComponent(store)}/menus`)
        if(!response.ok) throw new Error("메뉴 불러오는데 오류발생")
        const data = await response.json()
        // const { menus } = response.json()
        console.log(data);
        console.log(data.menus);
        // console.log(menus);
        setMenus(data.menus)
        // setMenus(menus)
      } catch (err) {
        console.error(err)
      }
    }
    // getMenus()
    // console.log('effect!');
    ///// 더미데이터로 테스트용 나중에 지우고 위에 getMenus()만 주석해제해주면됌
    setMenus(menusData)
    /////
  }, [])
  return (
    <div className={storePageStyle.inner}>
      <h1>{store}</h1>
      {/* <span onClick={(e) => {
        e.preventDefault()
        navigate(-1)
      }}>&lt</span> */}
      <span className={storePageStyle.previousBtn} onClick={() => {navigate(-1)}}>&lt; 돌아가기</span>
      {/* <button className={storePageStyle.previousBtn} onClick={() => {navigate(-1)}}>돌아가기</button> */}
      <div className={storePageStyle["grid-container"]}>
        {menus.map((menu) => {
          return <Menu key={menu.name} menu = {menu}/>
        })}
      </div>
    </div>
  )
}

export default StorePage