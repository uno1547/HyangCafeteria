package com.schrestaurant.service;

import com.schrestaurant.dto.WaitingUpdate;
import com.schrestaurant.entity.WaitingCount;
import com.schrestaurant.repository.WaitingCountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class WaitingService {

    private final WaitingCountRepository waitingCountRepository;
    private final SimpMessagingTemplate messagingTemplate;

    @Transactional
    public int increaseWaiting() {
        WaitingCount waiting = waitingCountRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("WaitingCount not found"));

        waiting.setCount(waiting.getCount() + 1);
        waitingCountRepository.save(waiting);

        // 웹소켓으로 현재 대기 인원 전송
        WaitingUpdate update = new WaitingUpdate(waiting.getId(), waiting.getCount());
        messagingTemplate.convertAndSend("/topic/waiting", update);

        return waiting.getCount();
    }

    public int getCurrentWaiting() {
        return waitingCountRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("WaitingCount not found"))
                .getCount();
    }
}
