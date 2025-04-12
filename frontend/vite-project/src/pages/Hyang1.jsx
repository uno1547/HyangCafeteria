import { useEffect, useState } from "react";
import style from "./Hyang1.module.css";

const Hyang1 = () => {

  const dummyData = {
    아침: { type: "", items: [{ name: "미역국", category: "국" }, { name: "잡곡밥", category: "밥" }, { name: "김치", category: "반찬" }, { name: "불고기", category: "반찬" }], price: 6500 },
    점심: { type: "", items: [{ name: "김치", category: "반찬" }, { name: "현미밥", category: "밥" }, { name: "된장국", category: "국" }, { name: "잡채", category: "반찬" }], price: 7500 },
    저녁: { type: "", items: [{ name: "김치볶음밥", category: "밥" }, { name: "계란국", category: "국" }, { name: "김치", category: "반찬" }, { name: "미역줄기", category: "반찬" }], price: 8500 },
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const meals = ["아침", "점심", "저녁"]
  const [food, setFood] = useState(null)
  useEffect(() => {
    // const getFood =  async()=>{
    //   try{
    //     const response = await fetch("http://localhost:8080/restaurants/h1/today-menus");
    //     const data= await response.json();
    //     setFood(data.[meals[currentIndex]]);
    //   }
    //   catch(err){
    //     console.log("에러 비상 불러 박자바수",err);
    //   }
    // }


    //getFood()
    const foodlist = dummyData[meals[currentIndex]];
    setFood(foodlist);
    console.log(foodlist);

  }, [currentIndex])


  function nextHandler() {
    setCurrentIndex((prev) => (prev + 1) % meals.length)
    console.log(currentIndex);

  }
  function prevHandler() {
    setCurrentIndex((prev) => (prev - 1 + meals.length) % meals.length)

  }

  return (

    <>
      <div  className={style["header"]}>
          <span onClick={prevHandler}>&lt;</span>
          <div className={style["time"]}>{meals[currentIndex]}</div>
          <span onClick={nextHandler}>&gt;</span>
        </div>
      
        <div className={style["main"]}>
        <img></img>
        {food?.items.filter(menu => menu.category === "국").map(menu => (<div key={menu.name}>
          {menu.name}
        </div>))}
        {food?.items.filter(menu => menu.category === "밥").map(menu => (<div key={menu.name}>
          {menu.name}
        </div>))}
        {food?.items.filter(menu => menu.category === "반찬").map(menu => (<div key={menu.name}>
          {menu.name}
        </div>))}
        <div>가격:{food?.price}</div>
        </div>
      
    </>
  )
}

export default Hyang1