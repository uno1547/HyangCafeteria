package com.schrestaurant.service;

import com.schrestaurant.dto.StockUpdate;
import com.schrestaurant.entity.BreakfastStock;
import com.schrestaurant.repository.BreakfastRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BreakfastService {
    private final BreakfastRepository breakfastRepository;
    private final SimpMessagingTemplate messagingTemplate; // 웹소켓 메시지 발송

    public int getCurrentStock() {
        return breakfastRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("재고 정보 없음"))
                .getStock();
    }

    @Transactional
    // 수량 차감 및 웹소켓 메시지 전송
    public int decreaseStock() {
        // 재고 조회
        BreakfastStock stock = breakfastRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("재고 정보 없음"));

        // 재고가 없으면 예외 처리
        if (stock.getStock() <= 0) {
            throw new IllegalStateException("재고 부족");
        }

        // 수량 차감
        stock.setStock(stock.getStock() - 1);

        // 수량 차감 후 DB 저장
        breakfastRepository.save(stock);

        // 변경된 수량을 웹소켓으로 전송
        StockUpdate stockUpdate = new StockUpdate(stock.getId(), stock.getStock());
        messagingTemplate.convertAndSend("/topic/stock", stockUpdate);

        // 갱신된 재고 수량 반환
        return stock.getStock();
    }
}
