import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ricepan from "../../../img/천밥.png";
import style from "./CurrentInfo.module.css";

import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const CurrentInfoPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [waitCnt, setWaitCnt] = useState(0)

  const navigate = useNavigate()

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

  return (
    <>
      <h1 className={style["HeadText"]}>대기 현황</h1>
      <span className={style.previousBtn} onClick={() => {navigate(-1)}}>&lt; 돌아가기</span>
      {/* <div>
        <img src={ricepan} alt="" className={style["img"]} />
      </div> */}


      {/* <div className={style["cnt-div1"]}>
        <div className={style.stock1}>
          <span className={style.cntH}>잔여 수량</span>
          <span className = {style.cntV}>{`${quantity ? quantity: 50} / 100`}</span>
          <span className={style.cntH}>개</span>
        </div>
        <div className={style.wait1}>
          <span className={style.cntH}>대기 인원 수</span>
          <span className = {style.cntV}>{`${waitCnt ? waitCnt : 5}`}</span>
          <span className={style.cntH}>명</span>
        </div>
        <span className={style.alert}>
          {
            "먹을수 있어요"
          }
        </span>
      </div> */}



      {/* <div className={style["cnt-div2"]}>
        <div className={style.stock2}>
          <span className={style.cntH}>잔여 수량</span>
          <span className = {style.cntV}>{`${quantity ? quantity : 50} / 100 개`}</span>
        </div>
        <div className={style.wait2}>
          <span className={style.cntH}>대기 인원 수</span>
          <span className = {style.cntV}>{`${waitCnt ? waitCnt : 50} 명`}</span>
        </div>
        <span className={style.alert}>
          {
            "먹을수 있어요"
          }
        </span>
      </div> */}



      <div className={style["cnt-div3"]}>
        <div>
          <div className={style.stock3}>
            <span className={style.cntH}>잔여 수량</span>
            <span className = {style.cntV}>{`${quantity ? quantity : 50} / 100 개`}</span>
          </div>
          <div className={style.wait3}>
            <span className={style.cntH}>대기 인원 수</span>
            <span className = {style.cntV}>{`${waitCnt ? waitCnt : 5} 명`}</span>
          </div>
        </div>
        <span className={style.alert}>
          {
            "먹을수 있어요"
          }
        </span>
      </div>
    </>
  );
};

export default CurrentInfoPage;