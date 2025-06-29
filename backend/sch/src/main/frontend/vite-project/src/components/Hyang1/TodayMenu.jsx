import { useState, useEffect } from "react"
import style from "./TodayMenu.module.css"

import { Link } from "react-router-dom"

const time = ["아침", "점심", "저녁"]

const dummyData = {
  아침 : { type : "", items : [ {name : "미역국", category : "국"}, {name : "잡곡밥", category : "밥"},  {name : "김치", category : "반찬"}, {name : "불고기", category : "반찬"} ], price : 6500 },
  점심 : { type : "", items : [ {name : "김치", category : "반찬"}, {name : "현미밥", category : "밥"}, {name : "된장국", category : "국"}, {name : "잡채", category : "반찬"} ], price : 6500 },
  저녁 : { type : "", items : [ {name : "김치볶음밥", category : "밥"}, {name : "계란국", category : "국"}, {name : "김치", category : "반찬"}, {name : "미역줄기", category : "반찬"} ], price : 6500 },
}

const TodayMenu = () => {
  const [datas, setDatas] = useState({})
  const [timeIdx, setTimeIdx] = useState(0)
  console.log(timeIdx);
  const getTodayMenu = async () => {
    try {
      const response = await fetch("http://localhost:8080/restaurants/h1/today-menus")
      if(!response.ok) {
        console.log('오늘의 메뉴 조회 실패!')
        return
      }
      const  menus  = await response.json()
      /*
      { 
        아침 : { type : "", items : [{name : , category : }, {name : , category : }, {name : , category :}], price : 6500 },
        점심 : { type : "", items : [{name : , category : }, {name : , category : }, {name : , category :}], price : 6500 },
        저녁 : { type : "", items : [{name : , category : }, {name : , category : }, {name : , category :}], price : 6500 }
      }
      */
      setDatas(menus)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    console.log('데이터불러오기!!');
    // getTodayMenu()

    //// 테스트용 더미데이터 얘 주석처리하고 위에 getTodayMenu로 
    setDatas(dummyData)
    ////
  }, [])
  return (
    <div className={style.wrapper}>
      {/* 토글 버튼 컴포넌트 */}
      <div className={style.nav}>
        <button onClick={() => {setTimeIdx(prev => prev == 0 ? prev + 2 : prev - 1)}}>&lt;</button>
        <span className={style.timeText}>{time[timeIdx]}</span>
        <button onClick={() => {setTimeIdx(prev => (prev + 1) % 3)}}>&gt;</button>
      </div>
      <div className={style.list}>
        {/* {dummyData[time[timeIdx]].items.filter(menu => menu.category === "밥").map(menu => <div key={menu.name}>{menu.name}</div>)}
        {dummyData[time[timeIdx]].items.filter(menu => menu.category === "국").map(menu => <div key={menu.name}>{menu.name}</div>)}
        {dummyData[time[timeIdx]].items.filter(menu => menu.category === "반찬").map(menu => <div key={menu.name}>{menu.name}</div>)} */}
        {datas[time[timeIdx]]?.items.filter(menu => menu.category === "밥").map(menu => <div key={menu.name} className={style.menuText}>{menu.name}</div>)}
        {datas[time[timeIdx]]?.items.filter(menu => menu.category === "국").map(menu => <div key={menu.name} className={style.menuText}>{menu.name}</div>)}
        {datas[time[timeIdx]]?.items.filter(menu => menu.category === "반찬").map(menu => <div key={menu.name} className={style.menuText}>{menu.name}</div>)}
      </div>
      {datas["아침"] && (timeIdx == 0) && <Link to="current-info" style={{fontWeight : "bold", color : "#e72626", padding : "5px"}}>실시간 수량보러가기</Link>}
      {/* {datas["아침"] && (timeIdx == 0) && <Link to="current-info" style={{fontWeight : "bold", color : "#e72626", padding : "5px"}}>천원의 아침밥</Link>} */}
      <div className={style.monthText}>
        <Link>이번달 식단표 보러가기</Link>
      </div>
    </div>
  )
}

export default TodayMenu