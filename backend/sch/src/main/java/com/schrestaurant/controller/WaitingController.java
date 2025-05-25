package com.schrestaurant.controller;

import com.schrestaurant.dto.WaitingUpdate;
import com.schrestaurant.service.WaitingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/enqueue")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class WaitingController {

    private final WaitingService waitingService;
    private final SimpMessagingTemplate messagingTemplate;

    @PostMapping
    public ResponseEntity<?> increaseWaiting() {
        int updatedCount = waitingService.increaseWaiting();
        return ResponseEntity.ok(new WaitingUpdate(1L, updatedCount));
    }

    // 클라이언트 연결시 최초 수 가져올 용도
    @MessageMapping("/get-waiting")
    public void sendCurrentWaiting() {
        int current = waitingService.getCurrentWaiting();
        WaitingUpdate update = new WaitingUpdate(1L, current);
        messagingTemplate.convertAndSend("/topic/waiting", update);
    }
}
