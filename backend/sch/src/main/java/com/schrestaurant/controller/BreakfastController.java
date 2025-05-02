package com.schrestaurant.controller;

import com.schrestaurant.dto.StockUpdate;
import com.schrestaurant.service.BreakfastService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
public class BreakfastController {

    private final BreakfastService breakfastService;
    private final SimpMessagingTemplate messagingTemplate;

    // 클라이언트가 /app/get-stock 경로로 메시지를 보낼 때
    @MessageMapping("/get-stock")
    public void getStock() {
        // 현재 수량을 조회
        int currentStock = breakfastService.getCurrentStock();

        // 클라이언트에게 수량 정보 전송
        StockUpdate stockUpdate = new StockUpdate(1L, currentStock);
        messagingTemplate.convertAndSend("/topic/stock", stockUpdate);
    }

    @PostMapping
    public ResponseEntity<?> processPayment() {
        // 결제 버튼 클릭 시 수량 차감
        int updatedStock = breakfastService.decreaseStock();

        // 갱신된 수량을 응답 객체로 생성
        StockUpdate stockUpdate = new StockUpdate(1L, updatedStock); // 1L은 '천원의 아침밥' 메뉴 ID

        // 갱신된 수량을 클라이언트에 실시간으로 전송
        messagingTemplate.convertAndSend("/topic/stock", stockUpdate);

        // 갱신된 수량을 클라이언트에 반환
        return ResponseEntity.ok(stockUpdate);
    }
}
