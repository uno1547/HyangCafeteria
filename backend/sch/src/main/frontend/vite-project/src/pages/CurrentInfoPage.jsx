import { useEffect, useState } from "react";
import ricepan from "../../../img/천밥.png";
import style from "./CurrentInfo.module.css";

import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const CurrentInfoPage = () => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const client = new Client({
      // 백엔드의 STOMP 엔드포인트 (SockJS로 연결됨)
      webSocketFactory: () => new SockJS("http://localhost:8080/websocket"),
      onConnect: () => {
        console.log("STOMP 연결 성공");

        // 백엔드에서 설정한 구독 경로에 맞게 수정해야 함
        client.subscribe("/topic/stock", (message) => {
          const data = JSON.parse(message.body);
          setQuantity(data.stock);
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
    <div>

