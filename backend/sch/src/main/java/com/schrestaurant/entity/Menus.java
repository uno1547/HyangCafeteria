package com.schrestaurant.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDate;

@Entity
@Getter
public class Menus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Long price;
    private String url;

    private LocalDate date; // 향1 오늘의 메뉴 조회를 위한 날짜 추가

    @Getter
    @Enumerated(EnumType.STRING)
    private Category category; // 향1 밥, 국, 반찬 카테고리 추가

    @Enumerated(EnumType.STRING)
    private MealTime mealTime; // 향1 아침, 점심, 저녁 추가

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;


}
