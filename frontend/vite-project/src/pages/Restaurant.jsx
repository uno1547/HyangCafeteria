import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const Restaurant = () => {
  const [stores,setStores]=useState([]);
  const {restaurant} = useParams();
  const [error,setError] =useState(null)
 
 
  console.log(restaurant+"의 식당입니다.");
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

   fetchData()
  },[restaurant])
  
  return (
    <>
    <div>이건 향2, 향3, 학생회관 뷰 </div>
    <div>{stores?.map((el)=>{
     
     return (<div>
        <image src={el.url}/>
        {el.name}
      </div>
     )
    })}</div>
    </>
  )
}

export default Restaurant
