import { useState } from "react";
import { useEffect } from "react";
import ricepan from "../../../img/천밥.png";
import Button from "../components/Button/Button";
import style from "./EnqueuePage.module.css"

import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const EnqueuePage = () => {
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [waitCnt, setWaitCnt] = useState(0)

    useEffect(() => {
      const client = new Client({
        // 백엔드의 STOMP 엔드포인트 (SockJS로 연결됨)
        webSocketFactory: () => new SockJS("http://localhost:8080/websocket"),
        onConnect: () => {
          console.log("STOMP 연결 성공");

          // 백엔드에서 설정한 구독 경로에 맞게 수정해야 함
          client.subscribe("/topic/stock", (message) => {
            const data = JSON.parse(message.body);
            if(data.stock !== undefined && data.stock !== null) setQuantity(data.stock)
            if(data.count !== undefined && data.count !== null) setWaitCnt(data.count)
            // setQuantity(data.stock);
          });
          client.publish({
            destination: "/app/get-stock",
          });
        },
        onStompError: (frame) => {
          console.error("STOMP 오류", frame);
        },
      });

      client.activate();

      // cleanup
      return () => {
        client.deactivate();
      };
    }, []);
      
    const NumberTicketHandler = async () => {
        setLoading(true);
        console.log("번호표 뽑음!");

        /////////////////////  테스트용임 합칠때는 아래 주석처리 해제 
        alert("줄서기 완료!!")
        setWaitCnt(prev => prev+1)
        /////////////////////
        /*
        try {
            const TicketNumber = await fetch("http://localhost:8080/enqueue", {
                method: "POST"
            })
            alert("줄서기 완료!!")
        }
        catch (error) {
            alert("오류발생")
        }finally{
            setLoading(false)
        }
        */
    }
    return (
        <>
            <h1>현재 대기</h1>
            {/* <div className={style.content}>
                <h2>20명</h2>
                <Button text="번호표뽑기" handler={NumberTicketHandler} />
            </div> */}
            <div className={style.wrapper}>
                <div className={style["cnt-div"]}>
                    <div className={style.stock}>
                        <span className={style.cntH}>잔여 수량</span>
                        <div>
                            <span className={style.cntV}>{`${quantity} / 100`}</span>
                            <span className={style.cntH}>개</span>
                        </div>
                        {/* <span className = {style.cntV}>{`${quantity ? quantity: 50} / 100 개`}</span> */}
                        {/* <span className = {style.cntV}>{`${quantity ? quantity: 50} / 100`}</span> */}
                    </div>
                    <div className={style.wait}>
                        <span className={style.cntH}>대기 인원 수</span>
                        <div>
                            <span className={style.cntV}>{waitCnt}</span>
                            <span className={style.cntH}>명</span>
                        </div>
                        {/* <span className = {style.cntV}>{`${waitCnt ? waitCnt : 5} 명`}</span> */}
                        {/* <span className = {style.cntV}>{`${waitCnt ? waitCnt : 5}`}</span> */}
                    </div>
                </div>
                <div className={style["btn-div"]} onClick = {NumberTicketHandler}>줄서기</div>
            </div>
        </>
    )
}

export default EnqueuePage;