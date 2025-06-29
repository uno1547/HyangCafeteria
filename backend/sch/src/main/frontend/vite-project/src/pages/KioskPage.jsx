import { useState } from "react"
import Button from "../components/Button/Button"
import style from "./KioskPage.module.css"

const KioskPage = () => {
  const [loading, setLoading] = useState(false)
  // const [message, setMessage] = useState("")

  const paymentHandler = async () => {
    // setMessage("")
    setLoading(true)
    console.log('결제!!');

    /*
    const response = await new Promise((res, rej) => {
      setTimeout(() => {
        res()
      }, 2000);
    })
    */

    try {
      const paymentRequest = await fetch("http://localhost:8080/payment", {
        method : "POST"
      })

      if(!paymentRequest.ok) { // 잔여 수량 없음 오류
        const error = await paymentRequest.json()
        alert(error.message)
        // setMessage(error.message)
        // throw new Error("잔여 수량 없음")
        return 
      }

      // 정상 응답
      // const response = await paymentRequest.json() 
      alert('결제완료')
      // setMessage('결제완료') // 이렇게 해버리면 다음번 결제하려는 사람한테 결제완료가 보임 이상할듯 alert로 한번 보여주고 없애야함
    } catch(err) { // 네트워크 오류 혹은 알수없는 문제 발생
      // console.error(err)
      alert("알수 없는 오류!!")
      // setMessage("알수없는 오류!")
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <h1 className={style.headText}>결제하기</h1>
      <div className={style.ticket}>
        <div className={style.img}></div>
        <div className={style.info}>
          <span className={style.name}>천원의 아침밥 [식권]</span>
          <span className={style.price}>1000원</span>
          {/* <div className={style.info}>
            <span>가격</span>
            <span className={style.price}>1000원</span>
          </div> */}
          <Button text="결제하기" handler={paymentHandler} disabled = {loading}/>
        </div>
        {/* <div>{message}</div> */}
      </div>
    </>
    
  )
}
export default KioskPage