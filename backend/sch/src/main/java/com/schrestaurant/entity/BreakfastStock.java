package com.schrestaurant.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class BreakfastStock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer stock;

    // 엔티티가 저장되기 전에 호출되는 메서드
    @PrePersist
    public void setDefaultStock() {
        if (this.stock == null) {
            this.stock = 100; // 기본값 100개로 설정
        }
    }
}
