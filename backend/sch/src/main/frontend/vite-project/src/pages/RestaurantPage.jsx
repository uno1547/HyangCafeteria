import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

import Store from "../components/RestaurantPage/store";

import restaurantStyle from "./RestaurantPage.module.css"

const name = {
  h1 : "향설생활관1",
  h2 : "향설생활관2",
  h3 : "향설생활관3",
  "student-hall" : "학생회관"
}

const data = [
  {name : "또바기", url : '또바기사진경로', b : "h2"},
  {name : "엄가네 해장국", url : '엄가네사진경로', b : "h2"},
  {name : "크앙분식", url : '크앙사진경로', b : "h2"},
  {name : "노량진컵밥", url : '노량진사진경로', b : "h2"},
  {name : "라면집", url : '라면사진경로', b : "h3"},
  // {name : "", url : '', b : "h3"},
  // {name : "", url : '', b : "h3"},
  // {name : "", url : '', b : "h3"},
  {name : "홍대쌀국수", url : '홍대쌀국수사진경로', b : "student-hall"},
  {name : "카레가게", url : '카레사진경로', b : "student-hall"},
  {name : "돈까스학생회관점", url : '돈까스집사진경로', b : "student-hall"},
  {name : "육개장집학생회관점", url : '육개장집사진경로', b : "student-hall"},
  {name : "학생회관 식당1", url : '학생회관사진경로', b : "student-hall"},
  {name : "학생회관 식당2", url : '학생회관사진경로', b : "student-hall"},
  {name : "학생회관 식당3", url : '학생회관사진경로', b : "student-hall"},
]

const RestaurantPage = () => {
  console.log('레스토랑 렌더링!');
  const [stores,setStores]=useState([]);
  const {restaurant} = useParams();
  const [error,setError] =useState(null)
 
 
  // console.log(restaurant+"의 식당입니다.");
  console.log(name[restaurant]);
  useEffect(()=>{
  
  const fetchData = async ()=>{
    try{
    const respone= await fetch(`http://localhost:8080/restaurants/${restaurant}/stores`)
     if(!respone.ok) throw new Error("서버 오류 발생");
    
     const result = await respone.json();
     console.log(result);
     setStores(result.stores);
    } catch(err){
     setError(err.message || "에러 발생");
    }
  } 

  //  fetchData()

  ////// 더미데이터로테스트용 나중에 지우고 위에 fetchData()만 주석해제해주면됌
  const storesList = data.filter(store => store.b == restaurant)
  console.log(storesList);
  setStores(storesList)
  // //////
  }, [restaurant])
  
  return (
    <>
      <h2 className={restaurantStyle["cafeteria-name"]}>{name[restaurant]}</h2>
      <div className={restaurantStyle["grid-container"]}>
        {stores?.map((store)=>{
          return <Store key={store.name} store = {store}/>
        })}
      </div>
    </>
  )
}

export default RestaurantPage
